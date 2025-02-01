import { getServices } from './database.js'

const services = getServices()

export const generateServicesHTML = () => {
    let servicesHTML = '<section class="service-list">Park services'

    services.map(service => {
        servicesHTML += `<p class="guests">${service.name}</p>`
    })

    servicesHTML += '</section>'

    return servicesHTML
}