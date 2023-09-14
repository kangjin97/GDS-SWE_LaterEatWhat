 # Later Eat What (By Kang Jin)

## Features

LaterEatWhat provides the following features:

<ul>
  <li>Allows users to see nearby restaurants from the office for inspiration</li>
  <li>Allows users to add / update / delete their choices whenever necessary</li>
  <li>Allows users to randomly generate an eating place with the click of a button</li>
</ul>

## Tech Stack

Later Eat What was built using the following technologies:

### Front-end

- React: A JavaScript library for building user interfaces.
- Vite: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- HTML and CSS: Markup and styling for the app.
- React Router: A library for handling routing within a React application.

### Back-end

- Node.js: A JavaScript runtime environment for server-side development.
- Express.js: A minimal web application framework for Node.js.
- MongoDB: A NoSQL database used for storing suggestions and user information.
- Mongoose: A MongoDB object modeling tool for Node.js.

## Installation and Setup

To run LaterEatWhat, follow these steps:

1. Clone the repository:
````bash
https://github.com/kangjin97/GDS-SWE_LaterEatWhat.git
````

2. Download and install Node.js from: https://nodejs.org/en
````bash
node -v
npm -v
````
The following will be returned if the installation is completed successfully:
v18.17.1
10.1.0

3. Open a new terminal and run Backend Server:
````bash
cd Backend
npm install
npm start
````

4. Open a new terminal and run Frontend Server:
````bash
cd frontend
npm install
npm start
````
- Frontend server landing page: http://localhost:5173

## APIs

Backend APIs:
1. GET (/suggest)
- Pulls all suggestions from various colleagues so that everyone can see one another's choices

2. POST (/suggest)
- Smart add a users suggestions into the system, will automatically update if the user has already input a choice once but has changed his mind
- Each user is assumed to have a unique Name (Case Sensitive)

3. DELETE (/suggest/:id)
- Allows users to delete their option if they decide that they are no longer joining for the meal. (Wouldn't want to go somewhere no one is interested in eating at)

External APIs:
1. Google Places API
- Retrive meal suggestions from around the office area (Jackson Square - Set to 1 km radius)
- Can be modified but currently no fields for user to make this change (yet)

2. Google Maps API
- Display a Map for users to easily scan the area and check the distance and directions to each eating location
- KIV: It is possible to make a route function to give users the exact directions to walk 

