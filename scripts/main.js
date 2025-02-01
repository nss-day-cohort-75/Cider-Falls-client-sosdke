import{ generateGuestsHTML } from './guests.js'
import { generateAttractionsHTML } from './attractions.js'
import { generateSectionsHTML } from './sections.js'

const guest = generateGuestsHTML()
const attraction = generateAttractionsHTML()
const section = generateSectionsHTML()

const Container = document.getElementById("container")
const render = () => {
    const html = `
    ${guest}
    ${attraction}
    ${section}
    `
    
    Container.innerHTML = html
}

render()