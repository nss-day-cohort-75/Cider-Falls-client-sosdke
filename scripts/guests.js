import { getGuests } from './database.js'

const guests = getGuests()

export const generateGuestsHTML = () => {
    let guestHTML = '<article class="guest-list">'

    guests.map(guest => {
        guestHTML += `<section >
        <p class="guest-words">${guest.firstname} ${guest.lastname}</p>
        </section>`
    })
    guestHTML += '</article>'
    return guestHTML
}

