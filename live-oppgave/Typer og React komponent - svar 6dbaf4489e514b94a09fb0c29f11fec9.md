# Typer og React komponent - svar

## **Oppgave 1: Type Deklarasjoner**

a. Opprett en TypeScript type `SurveyQuestion` som har følgende egenskaper: 

- `id` (string),
- `question` (string)
- `isRequired` (boolean)

b. Utvid `SurveyQuestion`-typen ved å legge til en egenskap `options` som er en array med strings (`string[]`) som representerer svaralternativer.

```tsx
type SurveyQuestion = {
  id: string;
  question: string;
  isRequired: boolean;
  options?: string[];
};

```

## **Oppgave 2: Typer og Union**

a. Lag en TypeScript type `SurveyAnswer` som kan være enten en streng (`string`) eller et tall (`number`)

b. Legg til en egenskap `isMultipleChoice` (boolean) til `SurveyAnswer`-typen, som indikerer om svaret har flere svar (true) eller en et enkelt svar (false).

```tsx
type SurveyAnswer = {
  value: string | number;
  isMultipleChoice: boolean;
};

```

## **Oppgave 3: Intersection og Optional**

a. Opprett en TypeScript type `SurveyParticipant` som inkluderer følgende egenskaper: 

- `id` (string)
- `name` (string)
- `email` (optional string)

a. Update the `SurveyParticipant` type by adding the `name` property of type `string` and the `email` property of type `string` (optional).

```tsx
type SurveyParticipant = {
  id: string;
  name: string;
  email?: string;
};

```

b. Opprett en annen TypeScript type `SurveyResponse` som inkluderer følgende egenskaper:

- `participant` (SurveyParticipant)
- `questionId` (string)
- `answer` (SurveyAnswer)
- 

```tsx
type SurveyResponse = {
  participant: SurveyParticipant;
  questionId: string;
  answer: SurveyAnswer;
};

```

## **Oppgave 4: Record Type**

Opprett en TypeScript type `SurveyResponses` som bruker `Record` for å representere et objekt der nøklene (keys) er spørsmålene (f.eks., spørsmålenes `id`), og verdiene (values) er svarene (`SurveyAnswer`) på hvert spørsmål.

type SurveyParticipant = {
id: string;
name: string;
email?: string; // Optional email property
};

## **Oppgave 4: Record Type**

Opprett en TypeScript type `SurveyResponses` som bruker `Record` for å representere et objekt der nøklene (keys) er spørsmålene (f.eks., spørsmålenes `id`), og verdiene (values) er svarene (`SurveyAnswer`) på hvert spørsmål.

```tsx
type SurveyAnswer = string| number|bolean
type SurveyResponses = Record<string, SurveyAnswer>;
const survey: SurveyResponses = {
ques-1:" string svar"
ques-2: 42,
ques-3: true

```

## **Oppgave 5: React komponent**

Lag en komponent viser en liste over `SurveyQuestion`-objekter med spørsmål og svaralternativer.

```tsx
const SurveyQuestionList = ({ questions }) => {
  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{questio.text}</h3>
          {question.isRequired && <p style={{ fontWeight: 'bold' }}>Required</p>}
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionindex}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

```

- Må først gå igjennom alle spørsmål og bruke informasjonen fra denne til å skrive ut spørsmålet. Bruk <h3> for å skrive ut tittelen. Hvis spørsmålet er `isRequired` gi den en bestemt stil for å markere dette. Bruk gjerne Tailwind.

```tsx
const questions = [];

{text: "spørsmål -1",
options: ["svar alternative 1", "svar alternative 2","svar alternative 3"},
{text: "spørsmål -2",
options: ["svar alternative a", "svar alternative b","svar alternative c"}

]

```

- Må deretter gå igjennom alle alternativer knyttet til spørsmålet
    - Bruk <ul> og <li> for å skrive ut alternativene

## Oppgave 6: Navigasjon

Skal kunne navigere til en siden kalt `Questions` hvor vi skal bruke komponenten over.

- Lag en Navigation komponent med to linker
    - Hjem
    - Spørsmål
- Ved klikk på “Spørsmål” skal vi navigeres til en side `/questions`. På den siden skal komponenten over brukes.

import React from 'react';
import { Link } from 'react-router-dom';

```jsx

const Navigation =() ⇒{
return(
<nav>
      <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
        <li>
          <Link to="/questions">Spørsmål</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

Opprett en sidekomponent for spørsmål (**`QuestionsPage`**) der du bruker den tidligere opprettede **`SurveyQuestionList`**komponenten:
const questions = [];

{text: "spørsmål -1",
options: ["svar alternative 1", "svar alternative 2","svar alternative 3"},
{text: "spørsmål -2",
options: ["svar alternative a", "svar alternative b","svar alternative c"}

];
const QuestionsPage = () => {
				return(
						<div>
						<h1> Sprøsmål<h1>
						<SurveyQuestionList questions = {questions} />
				</div>
);

}
export default QuestionsPage;

```

1. Opprett en **`App`**komponent som inkluderer både **`Navigation`** og bruker **`BrowserRouter`** fra React Router for å håndtere ruting:

```jsx
jsxCopy code
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import QuestionsPage from './QuestionsPage';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/questions" component={QuestionsPage} />
          <Route path="/" exact>
            <h1>Hjem</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

```

Dette eksempelet oppretter en enkel navigasjonskomponent og en side for spørsmål ved hjelp av React Router. Når du klikker på "Spørsmål"-lenken, vil du bli tatt til **`/questions`**-siden som bruker **`SurveyQuestionList`**-komponenten til å vise spørsmålene. Husk å legge til dine egne **`SurveyQuestion`**-objekter i **`QuestionsPage`**-komponenten.

## Oppgave 7: REST API

Lag en API-route med navn `/questions`i mappen src/app/api. I denne filen håndter `GET` forespørsel. Vi skal returnere en liste med spørsmål som matcher React komponenten i oppgave 5. 

```jsx
const express = require("express");
const router = express.Router();

const questions = [
{
    id: 1,
    text: 'Hva er React?',
  },
  {
    id: 2,
    text: 'Hvordan fungerer React Router?',
  },
];
router.get ("/", (req, res) => {
const matchingQuestions = questions.filter((question) =>
question.text.toLowerCase().includdes("react"));
res.json(matchingQuestions);
});

module.exports=router;

const express = require('express');
const app = express();

const questionsRouter = require('./api/questions');
app.use('/questions', questionsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

```

## Oppgave 8: Fetch

Hent ut listen med spørsmål fra REST-API slik at vi kan bruke de på `/questions` siden. Kan gjøres med React Server Components (anbefalt) eller useEffect.