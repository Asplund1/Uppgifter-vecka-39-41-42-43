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
