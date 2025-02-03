import { generateGuestsHTML } from "./guests.js";
import { generateServicesHTML } from "./services.js";
import { generateNortheastHTML } from "./Northeast.js";
import { generateNorthHTML } from "./North.js";
import { generateNorthwestHTML } from "./Northwest.js";
import { generateSoutheastHTML } from "./Southeast.js";
import { generateSouthHTML } from "./South.js";
import { generateSouthwestHTML } from "./Southwest.js";

const Guests = generateGuestsHTML();
const Services = generateServicesHTML();
const Northeast = generateNortheastHTML();
const North = generateNorthHTML();
const Northwest = generateNorthwestHTML();
const Southeast = generateSoutheastHTML();
const South = generateSouthHTML();
const Southwest = generateSouthwestHTML();

const Container = document.getElementById("container");
const render = () => {
  const html = `
    <h1>Widdle Warrick Cider Falls</h1>
    <img src = "https://preview.redd.it/mnmakkhl5xy81.jpg?width=640&crop=smart&auto=webp&s=129c1c78778eaaaca43866a76a8e4de7727785c3" alt = "ewok in park" class = "image">
    <article class = "details">
   
    <section class = "Northeast">
        <h2>Northeast</h2>
    ${Northeast}
    </section>    
   
    <section class = "North">
        <h2>North</h2>
    ${North}
    </section>
   
    <section class = "Northwest">
        <h2>Northwest</h2>
    ${Northwest}
    </section>

     <section class = "Southwest">
        <h2>Southwest</h2>
    ${Southwest}
    </section>

     <section class = "Southeast">
        <h2>South</h2>
    ${South}
    </section>

    <section class = "Southeast">
        <h2>Southeast</h2>
    ${Southeast}
    </section>

    <section class = "Guests">
        <h2>Guest List</h2>
    ${Guests}
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
