import { hoteles } from "./data.js";

let supabaseUrl = "https://gkzdxpdrphndxvzxnwbz.supabase.co";   // La URL del projecte
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdremR4cGRycGhuZHh2enhud2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDA5ODcsImV4cCI6MjA5MTkxNjk4N30.mv_304f8c0_LCfcRKPC3ww9TRrTS4stsbKHZg7ARoCM";  // La clau "anon public"

// Creem el client: és l'objecte que ens permet llegir i escriure a la base de dades
let client = supabase.createClient(supabaseUrl, supabaseAnonKey);

async function carregarNoticies() {
  // await = espera a tenir les dades abans de continuar; select("*") = agafa totes les columnes
  let resultat = await client.from("noticies").select("*");
  // resultat.data és l'array de notícies; si hi ha error, posem array buit
  let noticies = resultat.data || [];
  // Passem l'array a la funció que genera l'HTML i el posa al div #llistaNoticies
  renderitzarNoticies(noticies);
}

const hotel = document.querySelector("#hoteles");
for (let i = 0; i < hoteles.length; i++) {
  hotel.innerHTML += `
    <div class="australia">
        <img src="${hoteles[i].imagen}" alt="Imagen1" >
        <h3>${hoteles[i].nombre}</h3>
        <p>${hoteles[i].propiedades} propiedades</p>
    </div>`;
}

import { ofertes } from "./data.js";
const hotel2 = document.querySelector("#ofertes");
for (let i = 0; i < ofertes.length; i++) {
  hotel2.innerHTML += `
    <div class="sydney">
      <div class="galeria2">
        <img src="${ofertes[i].imagen}" alt="Imagen1" >
        </div>
         <div class="texto_imagenes2">
          <h3>${ofertes[i].titol}</h3>
          <p>${ofertes[i].descripcio}</p>
         </div>
    </div>`;
}

import { hotelsPopulars } from "./data.js";

const hotel3 = document.querySelector("#hotelsPopulars");
for (let i = 0; i < hotelsPopulars.length; i++) {
  hotel3.innerHTML += `
    <div class="australia">
        <img src="${hotelsPopulars[i].imagen}" alt="Imagen1" >
        <h3>${hotelsPopulars[i].nombre}</h3>
        <p>${hotelsPopulars[i].propiedades} propiedades</p>
    </div>`;
}








