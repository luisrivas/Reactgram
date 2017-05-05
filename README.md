# Reactgram   [![ReactJS](https://raw.githubusercontent.com/facebook/react/master/docs/img/logo_small.png)](https://facebook.github.io/react) [![Firebase](https://raw.githubusercontent.com/firebase/firebase-chrome-extension/master/icons/icon48.png)](https://www.firebase.com)

Reactgram es una mini-aplicación hecha en React para subir fotos a **Firebase** creada con **create-react-app**  que provee **autenticación con Google**

## Configuración
Antes de iniciar la aplicación es necesario crear un archivo con el nombre "firebase-config.json" donde estarán los datos de autenticación de su aplicación de firebase con una estructura similar a la siguiente:
```json
{
    "apiKey": "<tu-api-key>",
    "authDomain": "<tu-auth-domain>",
    "databaseURL": "<tu-database-url>",
    "projectId": "<tu-project-id>",
    "storageBucket": "<tu-storage-bucket>",
    "messagingSenderId": "<tu-messaging-sender-id>"
}
```
## Instalación e Inicio
```sh
yarn && yarn start
```