import { getSections } from "./database.js"

const sections = getSections()

export const generateSectionsHTML = () => {
        let sectionsHTML = '<section id="sections">'

        sections.map(section => {
            sectionsHTML += `<p id="${section.id}" name="${section.name}" attractionsID="${section.attractionsID}">${section.name}</p>`
        })

        sectionsHTML += '</section>'

        return sectionsHTML
}