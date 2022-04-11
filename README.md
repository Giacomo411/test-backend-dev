# Test Backend Dev

Istruzioni per l'installazione e avvio del progetto
- Installare le dipendenze con ```npm ci```
- Creare un file .env seguendo lo stesso schema del file .env.example con le informazioni di accesso al database
- Avviare con ```npm start```

Le tabelle verranno create automaticamente al primo avvio

Gli endpoint delle api sono:
- GET http://localhost:3000/api/recipe
- POST http://localhost:3000/api/recipe
- PUT http://localhost:3000/api/recipe/:id

In POST e PUT sono supportati i paramentri ```name``` e ```ingredients```