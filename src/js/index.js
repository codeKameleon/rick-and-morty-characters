/*========= LocalStorage ========= */
let characters = JSON.parse(localStorage.getItem('characters')) || []

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
    localStorage.setItem('characters', JSON.stringify(filtered_results))
    renderCharacterCard(filtered_results)
}

const renderCharacterCard  = characters => {
    const characters_container = document.querySelector('.characters')

    characters_container.innerHTML = ''

    for(const character of characters) {
        const character_card =  document.createElement('div')
        character_card.className =  'character-card'
        
        const character_name =  document.createElement('span')
        character_name.className = 'character-name'
        character_name.textContent = character.name

        const character_species =  document.createElement('span')
        character_species.className = 'character-species'
        character_species.textContent = character.species

        character_card.appendChild(character_name)
        character_card.appendChild(character_species)
        characters_container.appendChild(character_card)
    }
}

/*========= Event Listeners ========= */
const searchbar = document.querySelector('.searchbar')
searchbar.addEventListener('input', () => {
    filterCharacters()
})

const load_more_btn = document.querySelector('.load-more-btn')
load_more_btn.addEventListener('click', () => {
    isLoadingMoreResults = true
    getCharacters()
})

/*========= Functions Calls ========= */
searchbar.value = ''
getCharacters()
renderCharacterCard(characters)