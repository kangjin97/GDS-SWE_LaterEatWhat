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

4. DELETE (/suggest)
- Delete All allows user to quickly delete all records after a meal

External APIs:
1. Google Places API
- Retrive meal suggestions from around the office area (Jackson Square - Set to 1 km radius)
- Can be modified but currently no fields for user to make this change (yet)

2. Google Maps API
- Display a Map for users to easily scan the area and check the distance and directions to each eating location
- KIV: It is possible to make a route function to give users the exact directions to walk

## Screenshots

1. Landing Page (View All Suggestions)
![image](https://github.com/kangjin97/GDS-SWE_LaterEatWhat/assets/45915809/f637f51e-1134-4f02-9887-cf1684c50cf3)

2. Add Suggestion
![image](https://github.com/kangjin97/GDS-SWE_LaterEatWhat/assets/45915809/19973301-11a4-4ccb-b540-ef1a019e44ac)

3. Delete Record
![image](https://github.com/kangjin97/GDS-SWE_LaterEatWhat/assets/45915809/4330ad1b-e5eb-4b7a-8b80-99e73c0e0d9e)

4. Pick a Random Suggestion
![image](https://github.com/kangjin97/GDS-SWE_LaterEatWhat/assets/45915809/f4c4df1d-c30d-4103-a130-eedd25c5ea8d)

## Unit Test Batch File

The Unit Test Batch File has been included inside the git repo "unitTestBatchJob.bat"

Inside contains 3 test cases involving CRUD operations:

1. Add 5 Records
2. Update 5 Records
3. Remove All Records

Open the landing page to see the updates in real time.
