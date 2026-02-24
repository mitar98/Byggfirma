# Byggfirma Backend (Examensarbete)

## Krav
- Java 17
- Maven
- MySQL

## Databas
Skapa databasen i MySQL:
```sql
CREATE DATABASE byggfirma_db;
```

## Konfiguration
Ändra `src/main/resources/application.yml`:
- MySQL username/password
- `app.admin.username` / `app.admin.password`

## Köra
```bash
mvn spring-boot:run
```

## Swagger
- http://localhost:8080/swagger-ui/index.html

## API
### Skicka offert (public)
POST http://localhost:8080/api/quotes

Body:
```json
{
  "name": "Alek",
  "email": "alek@example.com",
  "phone": "0701234567",
  "message": "Hej! Jag vill ha offert."
}
```

### Hämta offertlista (admin)
GET http://localhost:8080/api/admin/quotes

Basic Auth:
- username: admin
- password: admin123
