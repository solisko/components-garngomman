Garngömman är en app för dig som älskar att virka!
Här kan du skapa ett användarkonto och spara dina virk-prylar digitalt på ett och samma ställe.
Genom detta kan du få tips på olika projekt du kan göra med just dina prylar samt få inspiration från andra.

Komponenterna till vårat skolprojekt "Garngömman". Detta repo innehåller komponenter till våran app.

## Installation

Använd git bash eller liknande verktyg

```
1. git clone https://github.com/solisko/components-garngomman
2. cd components-garngomman
3. npm i
```

##Starta Storybook

För att kunna se alla komponenter och hur dom ser ut använder vi oss av något som heter sotrybook.
Där lägger vi in våra komponenter och får en preview på hur dom ser ut.
För att starta storybook:
```
npm run storybook
```

[storybook](https://storybook.js.org/)

## Publisera ny Version (contributors only)

==OBS!==
Vi contributors pushar våran kod till github som vanligt och samlar ihop alla nya komponenter
och uppdateringar till en ny större publish. Så genomför vi den tillsamanns när vi alla är redo.

```
1. git add .
2. git commit -m "your commit message"
3. git pull
4. git push
```

###Publish

För att publisera en ny version av komponent biblioteket till NPM behöver vi först ändra verison 
i package.json filen. Vi ändrar versionsnummer till nästkommande siffra. **easypeasy!** 
vart vi ändrar:
![package version](https://ibb.co/wdjVGMM "Change version")

Sedan kör vi i git bash:

```
1. npm build
2. npm publish
```

**Grattis!** Paketet är nu uppdaterat!

**2024 &copy; SENFLR**
