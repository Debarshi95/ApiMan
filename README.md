[![Actions Status](https://github.com/Debarshi95/ApiMan/workflows/Build%20and%20Netlify%20Deploy/badge.svg)](https://github.com/Debarshi95/ApiMan/actions)

# ApiMan

A ReactJS based app to test APIs.

## Demo

[screen-capture.webm](https://user-images.githubusercontent.com/42608795/180593405-0be0baf3-39f3-4656-bda2-8f002acae893.webm)

### Frontend

[Deployed on Netlify using github actions](https://debarshib-apiman.netlify.app)

## Built using:

- [ReactJS](https://reactjs.org/) - Frontend framework
- [TailwindCSS](https://tailwindcss.com/) - UI styling library

## Run Locally

- Clone the project
  `git clone https://github.com/Debarshi95/ApiMan.git`
- Go to the project directory
- cd apiman
- Install dependencies
  `yarn`

- Start the server
  `yarn start`

## Info

- Used ReactJS's contextAPI to store and acess data across components
- Since, its using context api, components are getting re-rendered on keyup, can be optimized using debouncing the onchange handler
- Instead of context api, Redux can also be used to store a centralized state
- If I was allocated more time, I would have worked on optimizing the code, re-rendering issues, manage the state more efficiently
