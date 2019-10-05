Fejlesztői eszközök, MongoDB szerver:
======================================
1. Google Chrome telepítése
2. Vue.js devtool Chrome kiterjesztés telepítése: https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
3. Node.js LTS telepítése (https://nodejs.org/en/download/)
4. Git for Windows telepítése (https://nodejs.org/en/download/)
5. npm frissítése parancssorból (cmd.exe): "npm i -g npm"
6. VUE CLI 3 telepítése parancssorból (cmd.exe): "npm install -g @vue/cli"
7. MongoDB Community Server telepítése (https://www.mongodb.com/download-center/community?jmp=docs)
   - Ne "service"-ként (felesleges)!
   - MongoDB Compass nélkül
   - Alapértelmezett mappába: C:\Program Files\MongoDB\...
8. MongoDB Compass Community Edition Stable telepítése (https://www.mongodb.com/download-center/compass)
9. Postman telepítése (https://www.getpostman.com/downloads/)
10. Mappák létrehozása (ide kerül a mongo adatbázis): C:\data\db

Backend:
========
1. MongoDB szerver indítása:
    - "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="c:\data\db"
    - vagy: m.bat
    - konzol ablakot ne zárjuk be!
2. Backend klónozása parancssorból (cmd.exe): git clone https://github.com/nitslaszlo/JedlikVenomTsBackend
3. rest-api-node-typescript-1.0.0 mappa megnyitása VS Code-al
4. Node.js csomagok telepítése: Ctrl-ö (VS Code konzol ablak megnyitása), majd "npm i"
5. Backend (API) fordítása: "npm run build" konzol ablakból, vagy Ctrl-B
6. Backend (API) indítása: "npm run start" konzol ablakból, vagy Ctrl-T (hiba esetén nodemon taskok kilövése: "npm run kill")
7. Self Certificate engedélyezése HTTPS-hez (csak egyszer kell megcsinálni):
    - Chrome indítása, https://localhost:3000 megnyitása
    - nem biztonságos oldal megnyitása
    - Ha sikerült: {"message":"GET request success!"} üzenet jelenik meg
    - Edge, IE nem támogatja a Self Certificate oldalakat!

Frontend:
=========
1. Backend klónozása parancssorból (cmd.exe): git clone https://github.com/nitslaszlo/JedlikVuejsBootstrapvueVuexAxiosStarter
2. JedlikVuejsBootstrapvueVuexAxiosStarter mappa megnyitása VS Code-al
3. Node.js csomagok telepítése: Ctrl-ö (VS Code konzol ablak megnyitása), majd "npm i"
4. Frontend fordítása, indítása: "npm run serve" konzol ablakból, vagy Ctrl-B
5. Chrome indítása, http://localhost:8080 megnyitása
