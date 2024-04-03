// Importiamo l'array dei contatti dal file script.js
import { contacts } from "./script.js";

// Creiamo un'applicazione Vue
const app = Vue.createApp({
    // Definiamo la funzione data() per gestire i dati dell'applicazione
    data() {
        return {
            // Inseriamo l'array dei contatti all'interno dei dati dell'applicazione
            contacts: contacts
        };
    }
});
app.mount('#app');
