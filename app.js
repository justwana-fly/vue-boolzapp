// Importa l'array dei contatti dal file script.js
import { contacts } from "./script.js";



const { createApp } = Vue;

// Inizializza l'applicazione Vue
createApp({
    // Dati dell'applicazione
    data() {
        return {
            contacts: contacts, // Array dei contatti
            activeContactId: 1, // ID del contatto attivo
            messageText: '', 
            searchText: ''
           
        }
    },
    // Metodi dell'applicazione
    methods: {
        setActiveContact(id){
            this.activeContactId = id;
        },
        //messaggi nel input 
        sendMessage(){
            const newMessage = {
                date: new Date().toLocaleString(),
                message: this.messageText,
                status: 'sent'
            }
            
            this.activeContact.messages.push(newMessage);
            this.messageText = '';
            // funzione per la risposta ok del pc dopo 1 sec e la data
            setTimeout(()=>{
                const newMessage = {
                    date: new Date().toLocaleString(),
                    message: 'ok',
                    status: 'received'
                }
                this.activeContact.messages.push(newMessage);
            },1000);
         

        },
        
    },
    // Proprietà calcolate
    computed: {
        // Restituisce il contatto attivo
        activeContact() {
            return this.contacts.find((el) => el.id === 
            this.activeContactId);
        },
        //filtro per trovare i nomi dei contatti
        filteredContacts(){
            return this.contacts.filter((el)=>
             el.name.toLowerCase().includes(this.searchText.toLowerCase()));
        }
    },
    // Funzione eseguita dopo il montaggio dell'applicazione
    mounted() {
        console.log(this.contacts); // Stampa gli array dei contatti nella console
    }
}).mount('#app'); // Monta l'applicazione nell'elemento con id 'app'
