## Preview Deployment (Uppgift 1)

Varje gång en Pull Request öppnas mot `vecka-41-dev` triggas en automatisk Preview Deployment via Azure Static Web Apps.

Det möjliggör agil kodgranskning i en tillfällig miljö innan ändringarna mergas till dev.
![Preview Deployment Screenshot](Uppgift1.png)

## Staging Deployment (Uppgift 2)

Den permanenta Staging-miljön är kopplad till `vecka-41-dev`-branchen.  
Varje gång kod mergas till `vecka-41-dev` uppdateras denna miljö automatiskt.

**Staging-URL:**  
https://purple-sky-0fa0ae403.azurestaticapps.net

Till skillnad från Preview-URL:en (som tas bort när en PR stängs) är detta en stabil länk.  
Den delas med externa intressenter, som produktägare, för att granska och testa godkända ändringar.

## Produktionsmiljö (Uppgift 3)

Den skarpa produktionsmiljön ligger nu på Azure Static Web Apps och är kopplad till `main`-branchen.  
Varje gång kod mergas till `main` sker en automatisk deployment till denna länk:

**Production URL:**  
https://mango-moss-0a89e7603.3.azurestaticapps.net

Denna miljö är isolerad från staging och används som den slutliga versionen för slutanvändare.
