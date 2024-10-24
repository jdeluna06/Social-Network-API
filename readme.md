# Social Network API

## Introduction

This project is an API for a social network web application where users can share thoughts, react to friends' thoughts, and manage a friend list. The API is built using Express.js for routing and MongoDB as the database with Mongoose for object data modeling (ODM).


## Table of Contents

- [Social Network API](#social-network-api)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [User Story](#user-story)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
      - [Users](#users)
      - [Thoughts](#thoughts)
  - [Credits](#credits)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
- [](#)

## Features

- **User Management:** 
- Create, update, and delete users.
- View all users or retrieve details for a specific user by ID.
- Manage user friend lists by adding or removing friends.
  
- **Thought Sharing:**
- Users can post their thoughts to the platform.
- Retrieve all thoughts or individual thoughts by ID.
- Edit or delete thoughts.

- **Reactions to Thoughts:**
- Add reactions to any thought.
- Remove reactions from thoughts.
  
- **Timestamps:**
- Thoughts and reactions include automatically generated timestamps.
- Timestamps can be formatted using either the native JavaScript Date object or a JavaScript date library like Day.js or Moment.js.
  
## User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Installation

1. **Clone the Repository:**
   https://github.com/jdeluna06/Social-Network-API

2. **Navigate to the project directory:**
cd Social-Network-API

3. **Install Dependencies:**
npm install

4. **Start the development server:**
npm start

5. **Walkthrough Video:**
   For a detailed walkthrough of how the application works, please refer to the video linked below:
   https://drive.google.com/file/d/1kebt1IOoIRbwmQ7fC-Eu-6VPRWvfBj9l/view?usp=sharing


## Usage
Once the server is running, you can use a tool like Insomnia or Postman to interact with the API. The base URL for the API is:

## API Endpoints
#### Users
GET /api/users
Get all users.

GET /api/users/:userId
Get a single user by ID.

POST /api/users
Create a new user.

PUT /api/users/:userId
Update a user by ID.

DELETE /api/users/:userId
Delete a user by ID.

#### Thoughts
GET /api/thoughts
Get all thoughts.

GET /api/thoughts/:thoughtId
Get a single thought by ID.

POST /api/thoughts
Create a new thought.

PUT /api/thoughts/:thoughtId
Update a thought by ID.

DELETE /api/thoughts/:thoughtId
Delete a thought by ID.

## Credits
- **Joel De Luna** - Developer

## Technologies Used
Node.js
Express.js
MongoDB
Mongoose

## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License.
# 
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
