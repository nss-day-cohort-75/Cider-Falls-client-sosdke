import { getNorthwest, getGuests } from "./database.js";

const northwest = getNorthwest();

export const generateNorthwestHTML = () => {
  let northwestHTML = '<section id="northwest"> ';

  northwest.map((northwest) => {
    northwestHTML += `<p data-type="northwest" data-id="${northwest.attractionID}" data-name="${northwest.attractionName}" >${northwest.attractionName} </p>`;
  });

  northwestHTML += "</section>";

  return northwestHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "northwest") {
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
