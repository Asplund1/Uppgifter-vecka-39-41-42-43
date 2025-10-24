# vecka-39 
## Preview Deployment (Uppgift 1)

Varje gång en Pull Request öppnas mot `vecka-41-dev` triggas en automatisk Preview Deployment via Azure Static Web Apps.

Det möjliggör agil kodgranskning i en tillfällig miljö innan ändringarna mergas till dev.
![Preview Deployment Screenshot](Uppgift1.png)

## Continuous Delivery (Uppgift 4)

Frontendens CI/CD-flöde är nu komplett.  
När ny kod mergas från `vecka-41-dev` till `main` triggas automatiskt en deployment till produktionsmiljön.

**Production URL:**  
https://mango-moss-0a89e7603.3.azurestaticapps.net

Detta visar att Continuous Delivery fungerar fullt ut, inga manuella steg behövs för att publicera nya versioner.

## Miljöseparation för Backend (Uppgift 5)

Jag har nu två separata backendmiljöer i Azure App Service:

| Miljö | Azure-resurs | Syfte |
|-------|---------------|--------|
| API-DEV | andreas-webapp | Test och utveckling |
| API-PROD | andreas-webapp-prod | Skarp drift |

**Reflektion (K2):**  
I en verklig applikation bör dessa ligga i olika Resource Groups.  
Det gör det enklare att:
- ge olika åtkomsträttigheter (RBAC),
- separera loggar, budgetar och pipelines,
- och minska risken att testkod påverkar produktionen.

## Backend CI/CD och Spårbarhet (Uppgift 6)

Jag har satt upp två separata pipelines för backend:

1. `dev-ci.yml`
   - Trigger: push till `vecka-41-dev`
   - Steg: bygga Docker-image, köra tester (`npm test`), pusha image till ACR, deploya till `andreas-webapp` (API-DEV)
   - Om testerna failar stoppar pipelinen och ingen deploy sker
   - Detta fungerar som en kvalitetsgrind

2. `prod-ci.yml`
   - Trigger: push till `main`
   - Steg: bygga Docker-image, pusha image till ACR, deploya till `andreas-webapp-prod` (API-PROD)
   - Inga tester körs här, produktion tar bara kod som redan gått igenom dev

**Spårbarhet:**  
Båda pipelines taggar Docker-imagen med commit SHA (`${{ github.sha }}`) i stället för `latest`.  
Det gör att varje release kan spåras exakt till en commit.

**Kvalitetsgrind:**  
Om jag skapar ett medvetet trasigt test i `tests/app.test.js` och pushar till `vecka-41-dev` så stoppar dev-pipelinen i teststeget.  
Prod-miljön (`andreas-webapp-prod`) fortsätter då att köra den senaste godkända imagen.
