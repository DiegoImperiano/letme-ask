import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'; // necessario para utilizar o serviço de autencitcação do firebase
import 'firebase/compat/database'; //necessario para utilizar o serviço de banco de dados do firebase

const firebaseConfig = { // variaveis ambiente spresentes no arquivo .env.local, que é um arquivo que so vai estar disponevel na minha maquina.
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const dabase =  firebase.database();