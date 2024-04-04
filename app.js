// Importa l'array dei contatti dal file script.js
import { contacts } from "./script.js";

const { createApp } = Vue;

// Inizializza l'applicazione Vue
createApp({
    // Dati dell'applicazione
    data() {
        return {
            contacts: contacts, // Array dei contatti
            activeContactId: 1 // ID del contatto attivo
        }
    },
    // Metodi dell'applicazione
    methods: {

    },
    // Proprietà calcolate
    computed: {
        // Restituisce il contatto attivo
        activeContact() {
            return this.contacts.find((el) => el.id === this.activeContactId);
        }
    },
    // Funzione eseguita dopo il montaggio dell'applicazione
    mounted() {
        console.log(this.contacts); // Stampa gli array dei contatti nella console
    }
}).mount('#app'); // Monta l'applicazione nell'elemento con id 'app'
