import { getSouth, getGuests } from "./database.js";

const south = getSouth();

export const generateSouthHTML = () => {
  let southHTML = '<section id="south"> ';

  south.map((south) => {
    southHTML += `<p data-type="south" data-id="${south.attractionID}" data-name="${south.attractionName}" >${south.attractionName} </p>`;
  });

  southHTML += "</section>";

  return southHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "south") {
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
