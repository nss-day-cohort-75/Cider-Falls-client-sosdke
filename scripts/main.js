import{ generateGuestsHTML } from './guests.js'

const guest = generateGuestsHTML()

const Container = document.getElementById("container")

Container.innerHTML = guest
