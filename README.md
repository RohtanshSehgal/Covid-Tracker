# Covid Tracker APP - Rohtansh Sehgal

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Deployed on firebase at
[https://rohtanshcovidtracker.web.app/](Here!)

# Process of making this project from scratch!

## Choosing A Teck Stack!

Choosing a tech stack is always fun, you get to choose anything you like and can develop fast in. I choose React Js to show my skills in short time developments. This React js code is extensible and can be reused in many projects. UI logic is Seperated for Business logic i.e API Calling and filtering data. The file structure of this app is also very detailed and is curated!

## Choosing APIS!

I hunt for many apis so that i have good amount of data to play with. But at the end i have to go with the sources that are verified and are daily updated. So api used in this project can be found in Services directory.

1. https://www.mohfw.gov.in/data/datanew.json
2. https://api.covid19api.com/country/india?from=&to=

## Bulding Reusable Components!

=> React is all about reusability, so there are majority of view components thet are reused, for example "Card" is used as child in many parent components.

=> Writing Styled components was also necessary, so that i dont have to rewrite basic CSS for containers.

## Seperating UI from Logic!

React js was build to seperate the views from the data models. Many developers in react team have been constatnly trying to maintain this USP of themseleves.

So i used Custom hooks to seperate data filtering, calling and handling small tasks.
Custom hooks can be found in hooks directory. They always help us to less the major rewrite and also are easy for debugging.

## Deploying on Firebase

I choose to deploy this application on firebase so that anyone can test it without unziping the file and installing all those dependencies.

To make it more rechable for non tech people, firebase is always the best choice to deploy hobby projects.
