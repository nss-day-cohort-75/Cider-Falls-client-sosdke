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
      
  <section class="Services-container">
        <h2>Services</h2>
        ${Services}
    </section>
    <div class="headers">
    <header class="area-header">
      <h2>Areas</h2>
    </header>
    <header class="guest-header">
    <h2>Guest List</h2>
    </header>
    </div>
    <article class="details">
    
   <div class="section-container">
    <section class="section-items" id="Northeast">
        <h2>Northeast</h2>
    ${Northeast}
    </section>    
      <section class="section-items" id="Southeast">
        <h2>Southeast</h2>
    ${Southeast}
    </section>
    <section class="section-items" id="North">
        <h2>North</h2>
    ${North}
    </section>

    <section class="section-items" id="South">
        <h2>South</h2>
    ${South}
    </section>
   
    <section class="section-items" id="Northwest">
        <h2>Northwest</h2>
    ${Northwest}
    </section>


    <section class="section-items" id="Southwest">
        <h2>Southwest</h2>
    ${Southwest}
    </section>
    </div>
    <section class="Guests">
        
    ${Guests}
    </section>
    </article>
    `;

  Container.innerHTML = html;
};

render();
