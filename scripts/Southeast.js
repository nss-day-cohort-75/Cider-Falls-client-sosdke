import { getSoutheast, getGuests } from "./database.js";

const southeast = getSoutheast();

export const generateSoutheastHTML = () => {
  let southeastHTML = '<section id="southeast"> ';

  southeast.map((southeast) => {
    southeastHTML += `<p data-type="southeast" data-id="${southeast.attractionID}" data-name="${southeast.attractionName}" >${southeast.attractionName} </p>`;
  });

  southeastHTML += "</section>";

  return southeastHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "southeast") {
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
