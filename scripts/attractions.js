import { getAttractions, getGuests } from "./database.js";

const attractions = getAttractions();

export const generateAttractionsHTML = () => {
  let attractionsHTML = '<section id="attraction"> ';

  attractions.map((attraction) => {
    attractionsHTML += `<p data-type="attraction" data-id="${attraction.id}" data-name="${attraction.name}" >${attraction.name} </p>`;
  });

  attractionsHTML += "</section>";

  return attractionsHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "attraction") {
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
