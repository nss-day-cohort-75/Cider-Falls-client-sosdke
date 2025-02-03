import { getGuests, getAttractions } from './database.js'

const guests = getGuests()
const attractions = getAttractions()
let chosenGuest = {}
let chosenAttraction = {}

const guestsDropDown = () => {

    document.addEventListener('change', (clickEvent) => {
        const clickedItem = clickEvent.target
        if (clickedItem.dataset.type === 'guest-drop-down') {
            chosenGuest = clickedItem.dataset.id
            console.log(chosenGuest)
        }
    })

    let dropDownHTML = `<select id="selected-guest"data-type="guest-drop-down"> <option data-id="0" >Select a guest name</option>`

    guests.filter(guest => {
        dropDownHTML += `<option data-id="${guest.id}">${guest.firstname} ${guest.lastname}</option>`
    })
    dropDownHTML += '</select>'
    return dropDownHTML
}

const attractionsDropDown = () => {

    let dropDownHTML = `<select data-id="attraction-drop-down"><option id="0" >Select a location</option>`

    attractions.filter(attraction => {
        dropDownHTML += `<option data-id="${attraction.id}">${attraction.name}</option>`
    })
    dropDownHTML += '</select>'
    return dropDownHTML
}

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
    guestHTML += `</article> <section id="drop-downs">${guestsDropDown()} ${attractionsDropDown()} <button id="locations-button">Change Locations</button></section>`
    return guestHTML
}

document.addEventListener(
    'click', (clickEvent) => {
        const clickedItem = clickEvent.target

        if (clickedItem.id === 'locations-button'){
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