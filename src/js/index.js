/*========= LocalStorage ========= */
let characters = JSON.parse(localStorage.getItem('characters')) || []

/*========= DOM elements ========= */
const searchbar = document.querySelector('.searchbar')
const autocomplete_container = document.querySelector('.autocomplete-results')
const characters_container = document.querySelector('.characters')
const load_more_btn = document.querySelector('.load-more-btn')
const no_results =  document.querySelector('.no-results')

/*========= Variables ========= */
let oldArray;
let filtered_results;
let pageNumber  = 0;
let isLoadingMoreResults = false;

/*========= Functions ========= */
const getCharacters =  async () => {
    pageNumber++

    const url  = `https://rickandmortyapi.com/api/character?page=${pageNumber}`
    const response = await fetch(url)
    const data = await response.json()
    const all_characters = data.results

    if(characters.length == 0 || isLoadingMoreResults) {
        for(let i = 0; i < all_characters.length; i++) {
            characters.push(all_characters[i])
        }
    
        localStorage.setItem('characters', JSON.stringify(characters))
        renderCharacterCard(characters)
    }
}

const filterCharacters = () => {
    filtered_results = characters.filter(character => character.name.toLowerCase().includes(searchbar.value.toLowerCase()))
    renderCharacterCard(filtered_results)
}

const renderCharacterCard  = characters => {
    characters_container.innerHTML = ''

    for(const character of characters) {
        const character_card =  document.createElement('div')
        character_card.className =  'character-card'

        // Image
        const character_image  = document.createElement('img')
        character_image.className  = 'character-image'
        character_image.src = character.image

        const character_details = document.createElement('div')
        character_details.className =  'character-details'
        
        // Name
        const character_name =  document.createElement('span')
        character_name.className = 'character-name'
        character_name.textContent = character.name

        // Species
        const character_species =  document.createElement('span')
        character_species.className = 'character-species'
        character_species.textContent = character.species

        // Last known location
        const character_location_wrapper = document.createElement('div')
        character_location_wrapper.className = 'character-location-wrapper'

        const character_location_label = document.createElement('span')
        character_location_label.className =  'character-location-label'
        character_location_label.textContent = 'Last known location : '

        const character_location =  document.createElement('span')
        character_location.textContent = character.location.name

        // Episode in which the character was first seen
        const character_episode_wrapper = document.createElement('div')
        character_episode_wrapper.className = 'character-episode-wrapper'

        const character_episode_label = document.createElement('span')
        character_episode_label.className =  'character-episode-label'
        character_episode_label.textContent = 'First seen in : '

        const character_episode =  document.createElement('span')

        const getEpisode = async () => {
            const url = character.episode[0]
            const response = await fetch(url)
            const data = await response.json()
            const episode = [data.name, data.episode]
            character_episode.textContent = `${episode[0]}  (${episode [1]})`

            return episode
        }

        getEpisode()

        character_episode_wrapper.appendChild(character_episode_label)
        character_episode_wrapper.appendChild(character_episode)

        character_location_wrapper.appendChild(character_location_label)
        character_location_wrapper.appendChild(character_location)

        character_details.appendChild(character_name)
        character_details.appendChild(character_species)
        character_details.appendChild(character_location_wrapper)
        character_details.appendChild(character_episode_wrapper)

        character_card.appendChild(character_image)
        character_card.appendChild(character_details)
        characters_container.appendChild(character_card)
    }
}

const searchAutoComplete = () => {
    const search_value = searchbar.value
    const suggestions = characters.filter(character => character.name.toLowerCase().includes(search_value.toLowerCase()))

    autocomplete_container.innerHTML = ""

    for(const suggestion of suggestions) {

        const autocomplete_result = document.createElement('li')

        autocomplete_result.textContent = suggestion.name
        autocomplete_result.className = 'autocomplete-result'
        autocomplete_result.addEventListener('click', e => {
            searchbar.value = e.target.textContent
            filterCharacters()
            autocomplete_container.classList.remove('show-autocomplete')

        })

        autocomplete_container.appendChild(autocomplete_result)
    }

    autocomplete_container.classList.add('show-autocomplete')
}

/*========= Event Listeners ========= */

searchbar.addEventListener('input', () => {
    filterCharacters()
    searchAutoComplete()
    if(filtered_results.length === 0) {
        load_more_btn.style.display = 'none'
        no_results.style.display =  'block'
    } else {
        load_more_btn.style.display = 'block'
        no_results.style.display = 'none'
    }
})

load_more_btn.addEventListener('click', () => {
    isLoadingMoreResults = true
    getCharacters()
})

// Click outside input search closing the aucomplete results
document.addEventListener('click', e => {
    let isClickInsideSearchbar = searchbar.contains(e.target)

    if(!isClickInsideSearchbar) {
        autocomplete_container.classList.remove('show-autocomplete')
    }
})

/*========= Functions Calls ========= */
searchbar.value = ''
getCharacters()
renderCharacterCard(characters)