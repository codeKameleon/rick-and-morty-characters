console.log('test')

/*========= LocalStorage ========= */
let characters = JSON.parse(localStorage.getItem('characters')) || []

/*========= DOM elements ========= */
const searchbar = document.querySelector('.searchbar')
const autocomplete_container = document.querySelector('.autocomplete-results')
const characters_container = document.querySelector('.characters')
const load_more_btn = document.querySelector('.load-more-btn')

/*========= Variables ========= */
let oldArray;
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
    const filtered_results = characters.filter(character => character.name.toLowerCase().includes(searchbar.value.toLowerCase()))
    renderCharacterCard(filtered_results)
}

const renderCharacterCard  = characters => {
    characters_container.innerHTML = ''

    for(const character of characters) {
        console.log('character image url', character.image)
        const character_card =  document.createElement('div')
        character_card.className =  'character-card'

        const character_image  = document.createElement('img')
        character_image.className  = 'character-image'
        character_image.src = character.image

        const character_details = document.createElement('div')
        character_details.className =  'character-details'
        
        const character_name =  document.createElement('span')
        character_name.className = 'character-name'
        character_name.textContent = character.name

        const character_species =  document.createElement('span')
        character_species.className = 'character-species'
        character_species.textContent = character.species

        character_details.appendChild(character_name)
        character_details.appendChild(character_species)

        character_card.appendChild(character_image)
        character_card.appendChild(character_details)
        characters_container.appendChild(character_card)
    }
}

const searchAutoComplete = () => {
    const search_value = searchbar.value
    const suggestions = characters.filter(character => character.name.toLowerCase().includes(search_value.toLowerCase()))

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