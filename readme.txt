1. Start MongoDB server: mongod -dbpath ./data --rest 
2. Start Express server: npm start
    Api's will now be running. Example: http://localhost:4000/api/studies/getStudies/?page=1
3. Now start the client: webpack-dev-server
    React site is up and running: http://localhost:8080/
4. To debug express server code, use the "Launch Program" option

PS: "/server/dist" folder is the destinaton folder of transpiled javascript(babel). Put break points in the code in this folder
