import { getGuests, getAttractions } from './database.js'
import { render } from './main.js'

const guests = getGuests()
const attractions = getAttractions()
let selectedGuest = NaN
let selectedAttraction = NaN

const guestsDropDown = () => {
    let HTML = '<select id="guestDropDown"> <option id="0">Select guest</option>'

    guests.filter(guest => {
        HTML += `<option value="${guest.id}">${guest.firstname} ${guest.lastname}</option>`
    })
    return HTML += '</select>'
}

document.addEventListener('change', (clickedEvent) => {

    const clickedElement = clickedEvent.target

    if (clickedElement.id === 'guestDropDown') {
        selectedGuest = parseInt(clickedElement.value)
    }
})

const attractionsDropDown = () => {
    let HTML = '<select id="attractionDropDown"> <option id="0">Select attraction</option>'

    attractions.filter(attraction => {
        HTML += `<option value="${attraction.id}">${attraction.name}</option>`
    })
    return HTML += '</select>'
}

document.addEventListener('change', (clickedEvent) => {

    const clickedElement = clickedEvent.target

    if (clickedElement.id === 'attractionDropDown') {
        selectedAttraction = parseInt(clickedElement.value)
    }
})

const returnAttractionMatch = (guest) => {
    let location = ''
    attractions.map(attraction => {
        if (guest.attractionID === attraction.id) {
            location = attraction
        }
    })
    return location
}

export const generateGuestsHTML = () => {
    let guestHTML = '<article class="guest-list">'

    guests.map(guest => {
        const location = returnAttractionMatch(guest)
        guestHTML += `<section >
        <p class="guest-words">${guest.firstname} ${guest.lastname} (${location.name})</p>
        </section>`
    })
    guestHTML += `</article> <section id="drop-downs"> ${guestsDropDown()} ${attractionsDropDown()} <button id="change-button">Change Locations</button></section>`
    return guestHTML
}

document.addEventListener(
    'click', 
    (clickedEvent) => {

        const clickedElement = clickedEvent.target

        if (clickedElement.id === 'change-button') {
            guests.filter(guest => {
                if (selectedGuest === guest.id) {
                    guest.attractionID = selectedAttraction
                    render(generateGuestsHTML())
                }
            })
        }
    }
)

/*

#2
Scenario: Move a guest to a different park area
Given a park visitor needs to move from one park area to another

When a park ranger can select a visitor name from a Visitor_ dropdown element at the bottom of the guest list

And selects a park area from a Park Area dropdown

And clicks the "Move" button below both of the dropdowns

Then the selected visitor should be removed from their current area and added to the selected park area.

Scenario: Guest list updates after a guest is moved
Given a guest has been moved to a different park area

When the guest list is displayed

Then the guest's name should be displayed with the new park area

And the number of guests displayed for each area should accurately reflect the change.

*/