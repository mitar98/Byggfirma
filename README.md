# Byggfirma – Fullstack Examensarbete

Ett fullstack-webbprojekt byggt som examensarbete vid Grit Academy.
Systemet låter kunder skicka in offertförfrågningar och administratörer hantera dem via ett skyddat admingränssnitt.

---

## Tech Stack

**Backend:** Java 17, Spring Boot 3, Spring Data JPA, Spring Security, MySQL, Swagger

**Frontend:** React, Vite

---

## Kom igång

### Backend

Kräver Java 17, Maven och MySQL.

Skapa databasen:
```sql
CREATE DATABASE byggfirma_db;
```

Uppdatera `backend/src/main/resources/application.yml` med ditt MySQL-användarnamn och lösenord.
```bash
cd backend
mvn spring-boot:run
```

Backend körs på `http://localhost:8080`  
API-dokumentation (Swagger): `http://localhost:8080/swagger-ui/index.html`

### Frontend

Kräver Node.js 18+.
```bash
cd frontend
npm install
npm run dev
```

Frontend körs på `http://localhost:5173`. Backend måste vara igång.

---

## Admin-inloggning (dev)

- Användarnamn: `admin`
- Lösenord: `admin123`

---

## Författare

Mitar Mitrovic – Javautvecklare 2024, Grit Academy