import { generateGuestsHTML } from "./guests.js";
import { generateAttractionsHTML } from "./attractions.js";
import { generateSectionsHTML } from "./sections.js";
import { generateServicesHTML } from "./services.js";

const Guests = generateGuestsHTML();
const Attractions = generateAttractionsHTML();
const Sections = generateSectionsHTML();
const Services = generateServicesHTML();

const Container = document.getElementById("container");
const render = () => {
  const html = `
    <h1>Widdle Warrick Cider Falls</h1>
    <img src = "https://preview.redd.it/mnmakkhl5xy81.jpg?width=640&crop=smart&auto=webp&s=129c1c78778eaaaca43866a76a8e4de7727785c3" alt = "ewok in park" class = "image">
    <article class = "details">
        <section class = "Guests">
        <h2>Guest List</h2>
    ${Guests}
    </section>
        <section class = "attractions">
        <h2>Attraction List</h2>
    ${Attractions}
    </section>
    </section>
        <section class = "Sections">
        <h2>Sections</h2>
    ${Sections}
    </section>
    </section>
        <section class = "Services">
        <h2>Services</h2>
    ${Services}
    </section>
    </article>
    <footer>Phone: (615) 123-4567 || Email: widdlewarrickciderfalls@parks.gov || Address: 1 Bad Ewok Way, Nashville TN</footer>
    `;

  Container.innerHTML = html;
};

render();
