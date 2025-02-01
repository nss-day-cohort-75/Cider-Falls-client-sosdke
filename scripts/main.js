import{ generateGuestsHTML } from './guests.js'
import { generateAttractionsHTML } from './attractions.js'
import { generateSectionsHTML } from './sections.js'
import { generateServicesHTML } from './services.js'

const guest = generateGuestsHTML()
const attraction = generateAttractionsHTML()
const section = generateSectionsHTML()
const service = generateServicesHTML()

const Container = document.getElementById("container")
const render = () => {
    const html = `
    ${guest}
    ${attraction}
    ${section}
    ${service}
    `
    
    Container.innerHTML = html
}

render()