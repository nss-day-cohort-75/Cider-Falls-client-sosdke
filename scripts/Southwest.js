import { getSouthwest, getGuests } from "./database.js";

const southwest = getSouthwest();

export const generateSouthwestHTML = () => {
  let southwestHTML = '<section id="southwest"> ';

  southwest.map((southwest) => {
    southwestHTML += `<p data-type="southwest" data-id="${southwest.attractionID}" data-name="${southwest.attractionName}" >${southwest.attractionName} </p>`;
  });

  southwestHTML += "</section>";

  return southwestHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "southwest") {
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
