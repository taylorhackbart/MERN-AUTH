# MERN CRUD TEMPLATE

## Description
I have created a MERN AUTH template that allows users to register and login to a website. This authentication template pushes users info directly into a DB collection created by the site owner rather than using a third party authentication DB portal (Auth0, Firebase, etc.). This allows easy access to all data for the site owner.
Feel free to try out my app <a href="https://auth-template.herokuapp.com/" > here </a>

## Usage
It is important to create a .env file with the JWT_SECRET key in the root of the project to allow the user to login once their registration is complete.

Below is the basic usage for this app:

Here you will see the welcome page with a textbox to submit text. Notice how the two buttons in the upper right hand corner read "LOGIN" and "REGISTER" as these will change once a user has logged in:

<img src="https://github.com/taylorhackbart/MERN-AUTH/blob/master/readmeimages/Screen%20Shot%202021-03-03%20at%201.20.06%20PM.png" />
 
Adding text:

<img src="https://github.com/taylorhackbart/MERN-AUTH/blob/master/readmeimages/Screen%20Shot%202021-03-03%20at%201.20.14%20PM.png" />
          
Displaying text:

<img src="https://github.com/taylorhackbart/MERN-AUTH/blob/master/readmeimages/Screen%20Shot%202021-03-03%20at%201.20.19%20PM.png" />

Registration Form:

<img src="https://github.com/taylorhackbart/MERN-AUTH/blob/master/readmeimages/Screen%20Shot%202021-03-03%20at%201.20.35%20PM.png" />

Once registered, it will prompt the user to login using their credentials:

<img src="https://github.com/taylorhackbart/MERN-AUTH/blob/master/readmeimages/Screen%20Shot%202021-03-03%20at%201.20.49%20PM.png" />

Once logged in, the "LOGIN" and "REGISTER" button change to allow the user to access their portal (only displays their Display Name) and logout of the site:

<img src="https://github.com/taylorhackbart/MERN-AUTH/blob/master/readmeimages/Screen%20Shot%202021-03-03%20at%201.21.02%20PM.png" />

## Installation
To use this authenication template, one must install React, Mongoose, JSONWebToken, bcryptjs, dotenv, cors, express and multer. By running npm install in the command line, all dependencies should be installed in the correct package.son files to run this app.

## Questions
For questions or inquiries, feel free to email me at taylor.hackbart@gmail.com or checkout my LinkedIn <a href="https://www.linkedin.com/in/taylorhackbart/" rel="noreferrer" target="_blank"> here </a>
