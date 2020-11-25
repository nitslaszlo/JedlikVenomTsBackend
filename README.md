JedlikVenomTsBackend és JedlikVenomTsFrontend
=============================================

Projektekben használt technológiák / megoldások:
=================================================
1. Adatbázis kiszolgáló: MongoDB (https://www.mongodb.com/what-is-mongodb)
2. Backend:
    - Express.js (https://expressjs.com/)
    - mongoose (https://mongoosejs.com/)
    - Node.js (https://nodejs.org/en/about/)
3. Backend development:
    - TypeScript (http://www.typescriptlang.org/)
    - ESLint (https://eslint.org/)
    - Prettier (https://prettier.io/)
    - nodemon (https://nodemon.io/)
4. Frontend:
    - Vue.js (https://vuejs.org/)
    - Node.js (https://nodejs.org/en/about/)
    - Bootstrap (https://getbootstrap.com/)
    - BootstrapVue (https://bootstrap-vue.js.org/)
    - Vuex (https://vuex.vuejs.org/)
    - Vue-router (https://router.vuejs.org/)
    - Axios (https://github.com/axios/axios)
5. Frontend development:
    - TypeScript (http://www.typescriptlang.org/)
    - ESLint (https://eslint.org/)
    - Prettier (https://prettier.io/)
    - VUE CLI 3 (https://cli.vuejs.org/)

Rövidítések:
============
VENoM - Vue.js, Express, Node.js, MongoDB
Ts - Typescript

Fejlesztői eszközök, MongoDB szerver:
======================================
1. Google Chrome telepítése
2. Vue.js devtool Chrome kiterjesztés telepítése: https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
    (nyomkövetésnél (F5) indított Chrome-ba is telepíteni kell)
3. Node.js LTS telepítése (https://nodejs.org/en/download/)
4. Git for Windows telepítése (https://nodejs.org/en/download/)
5. npm frissítése parancssorból (cmd.exe): "npm i -g npm"
6. VUE CLI 3 telepítése parancssorból (cmd.exe): "npm install -g @vue/cli"
7. MongoDB Community Server telepítése (https://www.mongodb.com/try/download/community)
   - Custom telepítés
   - Ne "service"-ként (felesleges)!
   - MongoDB Compass nélkül
   - Alapértelmezett mappába: c:\Program Files\MongoDB\Server\4.4\...
8. MongoDB Compass telepítése (https://www.mongodb.com/try/download/compass)
9. MongoDB Database Tools telepítése (https://www.mongodb.com/try/download/database-tools)
10. Postman telepítése (https://www.getpostman.com/downloads/)
11. Mappák létrehozása (ide kerül majd a mongo adatbázis): C:\data\db

Backend:
========
1. Backend projekt klónozása parancssorból (cmd.exe): git clone https://github.com/nitslaszlo/JedlikVenomTsBackend
2. MongoDB szerver indítása:
    - "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="c:\data\db"
    - vagy: m.bat a projekt rootból
    - konzol ablakot ne zárjuk be a fejlesztés/tesztelés alatt!
3. JedlikVenomTsBackend mappa megnyitása VS Code-al
4. Node.js csomagok telepítése: Ctrl-ö (VS Code konzol ablak megnyitása), majd "npm i"
5. Backend (API) projekt fordítása + futtatása: "npm run build" a konzol ablakból, vagy Ctrl-Shift-B (hiba esetén beragadt nodemon task(ok) kilövése: "npm run kill")
6. Chrome Self Certificate engedélyezése HTTPS-hez (csak Network Error kell megcsinálni):
    - Chrome indítása, https://localhost:3000 megnyitása
    - nem biztonságos oldal megnyitása
    - Ha sikerült: {"message":"GET request success!"} üzenet jelenik meg
    - Edge, IE nem támogatják a Self Certificate-el aláírt oldalakat!
7. Backend API tesztelése Postman/Compass programokkal
8. Nyomkövetéshez F5-el lehet indítani a projektet

Frontend:
=========
1. Frontend projekt klónozása parancssorból (cmd.exe): git clone https://github.com/nitslaszlo/JedlikVenomTsFrontend
2. JedlikVenomTsFrontend mappa megnyitása VS Code-al
3. Node.js csomagok telepítése: Ctrl-ö (VS Code konzol ablak megnyitása), majd "npm i"
4. Frontend projekt fordítása, indítása: "npm run serve" a konzol ablakból, vagy Ctrl-Shift-B
5. Chrome indítása, http://localhost:8080 megnyitása, vagy Nyomkövetéshez F5-el lehet indítani a projektet
