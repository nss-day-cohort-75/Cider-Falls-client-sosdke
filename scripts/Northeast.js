import { getNortheast, getGuests } from "./database.js";

const northeast = getNortheast();

export const generateNortheastHTML = () => {
  let northeastHTML = '<section id="northeast"> ';

  northeast.map((northeast) => {
    northeastHTML += `<p data-type="northeast" data-id="${northeast.attractionID}" data-name="${northeast.attractionName}" >${northeast.attractionName} </p>`;
  });

  northeastHTML += "</section>";

  return northeastHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "northeast") {
    const attractionsID = parseInt(itemClicked.dataset.id);
    let guestCount = 0;
    const guests = getGuests();
    for (const guest of guests) {
      if (guest.attractionID === attractionsID) {
        guestCount++;
      }
    }
    window.alert(
      `There are ${guestCount} guests at ${itemClicked.dataset.name}`
    );
  }
});
