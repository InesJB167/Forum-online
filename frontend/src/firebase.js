import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Importante para o Chat

const firebaseConfig = {
  apiKey: "AIzaSyDADBhsA8Q_dlAXW0fV7wBTtXen5Oe6aOY",
  authDomain: "forum-online-8a73d.firebaseapp.com",
  databaseURL: "https://forum-online-8a73d-default-rtdb.firebaseio.com", // Adicionei o link do seu banco
  projectId: "forum-online-8a73d",
  storageBucket: "forum-online-8a73d.firebasestorage.app",
  messagingSenderId: "122591714693",
  appId: "1:122591714693:web:0b62e2280dcd2a91a738ec",
  measurementId: "G-86BQPFH6F9"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o Banco de Dados (db) para usarmos nas páginas
export const db = getDatabase(app);