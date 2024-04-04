// Importiamo l'array dei contatti dal file script.js
import { contacts } from "./script.js";

const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: contacts,
            activeContactId: 1
        }
    },
    methods:{

    },

    computed:{
        activeContact(){
            return this.contacts.find((el)=> el.id === this.activeContactId);
        }

},
    mounted(){
    console.log(this.contacts);
}
 }).mount('#app');


