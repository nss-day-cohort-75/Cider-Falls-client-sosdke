import{ generateGuestsHTML } from './guests.js'
import { generateAttractionsHTML } from './attractions.js'

const guest = generateGuestsHTML()
const attraction = generateAttractionsHTML()

const Container = document.getElementById("container")
const render = () => {
    const html = `
    ${guest}
    ${attraction}
    `
    
    Container.innerHTML = html
}

render()