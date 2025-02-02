import { getAttractions } from "./database.js"

const attractions = getAttractions()

export const generateAttractionsHTML = () => {
        let attractionsHTML = '<section id="attractions">'

        attractions.map(attraction => {
            attractionsHTML += `<p id="${attraction.id}" name="${attraction.name}" >${attraction.name}</p>`
        })

        attractionsHTML += '</section>'

        return attractionsHTML
}