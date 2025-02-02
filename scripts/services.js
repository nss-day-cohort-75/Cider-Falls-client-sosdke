import { getServices, getAttractions } from "./database.js";

const services = getServices();

export const generateServicesHTML = () => {
  let servicesHTML = '<section id="services"> ';

  services.map((service) => {
    servicesHTML += `<p data-type="services" data-id="${service.id}" class="services">${service.name}</p>`;
  });

  servicesHTML += "</section>";

  return servicesHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "services") {
    const servicesID = parseInt(itemClicked.dataset.id);
    const attractions = getAttractions();
    for (const attraction of attractions) {
      if (Array.isArray(attraction.servicesID)) {
        for (const id of attraction.servicesID) {
          if (id === servicesID) {
            window.alert(
              `${
                itemClicked.dataset.name
              } is available in  ${attractions.name.join(" , ")}`
            );
          }
        }
      } else if (attraction.servicesID === servicesID) {
        window.alert(
          `${itemClicked.dataset.name} is available in  ${attractions.name}`
        );
      }
    }
  }
});
