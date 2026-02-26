# Byggfirma -- Fullstack Examensarbete

Ett fullstack-system för hantering av offertförfrågningar för ett
byggföretag.\
Systemet består av ett Spring Boot REST API (backend) och en
React-klient (frontend).

Kunder kan skicka in offertförfrågningar och administratörer kan hantera
dem via ett skyddat admin-gränssnitt.

------------------------------------------------------------------------

# 🏗 Arkitektur

    Frontend (React)
            ↓
    Spring Boot REST API
            ↓
    MySQL (produktion)
    H2 (tester)

------------------------------------------------------------------------

# 🛠 Tech Stack

## Backend

-   Java 17
-   Spring Boot 3
-   Spring Data JPA
-   Spring Security (Basic Auth)
-   MySQL
-   H2 (in-memory för tester)
-   Swagger / OpenAPI

## Frontend

-   React
-   Vite
-   Fetch API
-   Basic Authentication mot backend

------------------------------------------------------------------------

# 📁 Projektstruktur

    backend/   → Spring Boot API
    frontend/  → React klient

------------------------------------------------------------------------

# ⚙️ Backend Setup

## Krav

-   Java 17
-   Maven
-   MySQL

## Skapa databas

``` sql
CREATE DATABASE byggfirma_db;
```

## Konfiguration

Uppdatera:

`backend/src/main/resources/application.yml`

Ändra: - MySQL username / password - app.admin.username -
app.admin.password

## Starta backend

``` bash
cd backend
mvn spring-boot:run
```

Backend körs på:

http://localhost:8080

## Swagger (API-dokumentation)

http://localhost:8080/swagger-ui/index.html

## Köra tester

``` bash
mvn test
```

Tester körs mot H2 in-memory databas.

------------------------------------------------------------------------

# 🌐 Frontend Setup

## Krav

-   Node.js 18+

## Installera och starta

``` bash
cd frontend
npm install
npm run dev
```

Frontend körs på:

http://localhost:5173

OBS: Backend måste vara igång på port 8080.

------------------------------------------------------------------------

# 📡 API Endpoints

## 📌 Skicka offert (Publik)

POST `/api/quotes`

Exempel body:

``` json
{
  "name": "Alex",
  "email": "alex@example.com",
  "phone": "0701234567",
  "message": "Hej! Jag vill ha offert."
}
```

------------------------------------------------------------------------

## 🔐 Admin Endpoints (Basic Auth)

### Hämta alla offerter

GET `/api/admin/quotes`

### Markera som hanterad

PATCH `/api/admin/quotes/{id}/handled`

### Ta bort offert

DELETE `/api/admin/quotes/{id}`

### Standard admin-inloggning (dev)

-   username: admin
-   password: admin123

------------------------------------------------------------------------

# 🔒 Säkerhet

Admin-endpoints är skyddade med HTTP Basic Authentication via Spring
Security.

------------------------------------------------------------------------

# 🎓 Examensarbete

Projektet demonstrerar:

-   REST API-design
-   Säkerhet med Spring Security
-   Databasinteraktion via JPA
-   Enhetstester och integrationstester
-   Fullstack-arkitektur
-   Dokumentation med Swagger

------------------------------------------------------------------------

# 🚀 Möjliga förbättringar

-   JWT-baserad autentisering
-   Rollbaserad behörighet
-   Dockerisering
-   Deployment till molnplattform
-   CI/CD pipeline

------------------------------------------------------------------------

# 👨‍💻 Författare

Examensarbete -- Fullstack Java / React
