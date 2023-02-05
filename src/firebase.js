//Traigo una funcion que me conecta con la app de React (codigo del Front End ) con la plataforma de firebase
import { initializeApp } from "firebase/app";
//Traigo una funcion que me conecta con el servicio de base de datos de firebase
import { getFirestore } from "firebase/firestore";

//estas son mis llaves de acceso
const firebaseConfig =
{   
    apiKey: "AIzaSyDFHyO4Ke5litqCjLq8Uw3TXrw3UOUGCHU",
    authDomain: "eccommercereact.firebaseapp.com",
    projectId: "eccommercereact",
    storageBucket: "eccommercereact.appspot.com",
    messagingSenderId: "706809020102",
    appId: "1:706809020102:web:0f2da3beee281320f5a1c7"
}

//esta es una  variable que representa "la plataforma" en si
const app = initializeApp(firebaseConfig) 

export const db = getFirestore(app)

    
