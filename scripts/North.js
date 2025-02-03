import { getNorth, getGuests } from "./database.js";

const north = getNorth();

export const generateNorthHTML = () => {
  let northHTML = '<section id="north"> ';

  north.map((north) => {
    northHTML += `<p data-type="north" data-id="${north.attractionID}" data-name="${north.attractionName}" >${north.attractionName} </p>`;
  });

  northHTML += "</section>";

  return northHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "north") {
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
