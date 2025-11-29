# devops-beadando
DevOps targy beadando feladat by Soma Balom - T3JIXF


Node.js alapú "Hello world" alkalmazás, amely HTTP-n (port 8080) elérhető, és egy szöveget ad vissza.

Előfeltételek:

- Node.js
- npm
- Git
- Docker
- VS Code + Dev Containers extension

A projekt célja, hogy bemutassa az alap DevOps lépéseket:

- forráskód készítése
- verziókezelés Git-tel (trunk-based: `main` + feature branch)
- buildelés (npm)
- konténerizálás (Docker)
- image pusholása registry-be (Docker Hub)
- fejlesztői környezet Dev Containerrel

Projekt: https://github.com/titetoyz/devops-beadando.git


Buildelés lépései:
1, npm run build
2, npm start

Dockerizáláshoz a projekt gyökeérben:
docker build -t hello-devops:v1 

Konténer futtatáshoz pedig ez a parancs kell: docker run -p 8080:8080 hello-devops:v1

powered by Balom Soma 
neptun kód: T3JIXF

