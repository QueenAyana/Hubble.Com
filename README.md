<h1 align="center"><strong>Hubble.com</strong></h1>

<h2 align="center"><strong>Where we can help you expand your bubble to fit a new hobby</strong></h2>

## About Us.

Hubble.com is a React.js based application designed to help people find hobbies based on their "personality". We created a series of questions for the user to answer. After the survey is taken we assign the user a personality and a list of hobbies that are most likely to be of interest to them. We also have implemented the use of Meetup.com's API to help the user find groups or events related to the hobbies they matched with. If there are no groups related to their hobbies, then a set of recomended groups will be shown. You as the user can if you wish retake the survey and reset your results.

## Developers:
- [Amber Brune](https://github.com/QueenAyana)
- [Michael Bieniewicz-Valada](https://github.com/MDBValada)
- [Patrick Matthews](https://github.com/patjmatthews)
- [John Plattenburg](https://github.com/jplatty)
- [Zack Isaac](https://github.com/zachisaac)

## Demo:
*Hubble.com* is deployed on Heroku. Demo the application [here](https://floating-sands-37043.herokuapp.com/).
- (Note: There will be a momentary delay when first accessing the Heroku servers.)

## Installation

To install the application locally:
1. Clone this repository to your local machine:
- `https://github.com/QueenAyana/Hubble.Com`

2. You will need to create a ".env" file with the following inside
  - `API_Key = "your API Key from Meetup.com"`
      *all it takes to get one is have an accout on Meetup.com. (link in credits)*
  
3. In your bash terminal:
- Start the MongoDB server: `mongod`

4. Then, in a new bash terminal `cd` into the repository and execute the following: 
- `yarn install`
- `yarn start`

5. The application will now be available to view in the browser at  `http://localhost:3000/`            


## Tech used:
- React ~ JavaScript library for building user interfaces
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- ES6 ~ EcmaScript 6 standardized scripting language
- Bootstrap CDN ~ Front-end framework
- CSS ~ Custom stylesheet
- Axios NPM Package ~ https://www.npmjs.com/package/axios
- Express NPM Package ~ https://www.npmjs.com/package/express
- Heroku-CLI NPM Package ~ https://www.npmjs.com/package/heroku-cli
- Mongoose NPM Package ~ https://www.npmjs.com/package/mongoose
- Node.js ~ https://nodejs.org/en/
- React NPM Package ~ https://www.npmjs.com/package/react
- React-Dom NPM Package ~ https://www.npmjs.com/search?q=react-dom
- React-Router NPM Package ~ https://www.npmjs.com/package/react-router

## Credits

Full-Stack Flex Coding Bootcamp @ UCLA Extension
[Meetup.com API Docs](https://secure.meetup.com/meetup_api)
[Meetup.com](https://www.meetup.com/)

## Screenshots
![Hubble1](/client/public/main.jpg)
![Hubble2](/client/public/signup.jpg)
![Hubble3](/client/public/login.jpg)
![Hubble4](/client/public/loginevent.jpg)
![Hubble5](/client/public/survey.jpg)
![Hubble6](/client/public/profile.jpg)
![Hubble7](/client/public/hobbies.jpg)
