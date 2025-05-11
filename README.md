# Skmiotek-Lab-4-Project

**Introduction:**
Welcome to my repository for my Software Development 2 final project. This project is a website developed fully with front and back-end code. The website's name is Skull Kap Studios, a site that revolves around music production. My goal for this website is for it to eventually become a place where music producers can learn and also connect with one another and express their creativity. Within the site are pages such as the “Instruments” page, where users can read and learn a little bit about different kinds of instruments used in music production, such as MIDI keyboards and samplers, and the “Software” page, where users can find links to two very well known music production softwares, Ableton Live and FL Studio. This project showcases skills I have developed over the course of my last two years of learning how to become a programmer. Within the course of my degree at Marist University, I have learned skills like routing, user authentication, and database connectivity, as well as dynamic content loading using JavaScript, Node.js, and PostgreSQL, and front-end design using HTTP and CSS. Throughout this README file, I will describe the requirements needed to properly run this site, and the functions that the user will come into contact with when interacting with it. 

**Dependencies:**
There are a few dependencies that are required to be installed before getting started, so make sure you have the following software downloaded and have an understanding of how to run command lines in your device's terminal. The software you are going to need are:
  -Node.js (v18 or later)
  -Homebrew 
  -PostgreSQL 
  -Postman (to test your API's functionality)

**Clone Repo:**
  -Run - git clonehttps://github.com/MaristGormanly/Skmiotek-Lab-4-Project in terminal
  -Enter projects directory - cd Skmiotek-Lab-4-Project 


**Setting up the database and running the server:**
Within the projects home directory you will need to run the following command lines
  -“npm i” downloads any server related dependencies you need
  -“psql -U postgres -f server/db/createDatabase.sql” will create your database 
  -“brew services start postgresql” will begin running your database 
  -“npm start” will start running your express server through node.js on your desired port.

You then want to make a copy of the “.env.example” file in my repository and replace the filler text with your database information in order to connect to your database server.

**Functionality and features:** 
Upon entering the site, users will be greeted with a welcome page that explains the purpose of the site and the site's target audience. The linked pages at the top of the site provide easy navigation throughout the site's 5 main pages. This includes the “Instruments”, “Software”, “Studios”, "Connect" and “About” pages. Eventually, I will add functionality to the  “Connect” page, which will fulfill my goal of connecting music producers with one another through my site. Throughout each page there are links that take users to the websites of each instrument and software that I have up so far, which allows users to travel to the websites of each product to learn more and potentially purchase the products. If a user goes through the whole site and wishes to return to the welcome page, they can press the websites title in the top left to be brought back to the main page. This project features a database to store user info, such as signup and login info. This information will become more useful later on once the “Connect” page becomes fully functional, but for now if users wish to create an account they can do so. 

**Create account:**
To create an account, navigate to the upper right-hand corner and click on the "Signup/Login" button. Here, you can click on the "Don’t have an account? Sign up" link and fill in the required fields. Upon pressing signup, your information will be logged in the database, and you will be logged in. Alternatively, you can create a user through Postman. On postman, put in the following url - http://localhost:1337/api/signup, and switch the drop down menu on the left to "POST". Then click on "Headers" and add "Content-type" in the "Key" side of the table that appears, and add "application/json" as the value. Then click "Body", select "raw", and in the drop down menu on the right select "JSON". After doing all this, type the following into the text box below to create a user:
  { "username": "your_username",
    "email": "your_email",
    "password": "your_password"
    }
Replace the filler text I have here with your credentials, and then hit send. If the POST is successful, you should see the following message with a green "201 created" on the right side of the screen: 
{
    "message": "User created"
}

Congratulations! You have successfully created a new user.

**Login and create post:**
NOTE - In order to create a post you must be logged into an account!!!

Aside from logging in on the site itself, you can also use Postman to login a user and create posts. To login using Postman, edit the URL to the following: http://localhost:1337/api/login, and replace the text in the body with the following:
{ "username": "your_username",
  "password": "your_password"
  }
A similar 201 message will appear, signifying that you have successfully logged in a user. 

To create a post using Postman, change the URl to: http://localhost:1337/api/posts, and replace the text in the body with the following:
{
  "username": "your_username",
  "content": "This is a post"
}
A similar 201 message will appear, signifying that you have successfully created a post. ALternatively, you can also create posts in the website itself, and the database will automatically update to reflect that a post was created.

**Thank you!:**
That’s all for now. I am looking forward to expanding this project once I can put more time into it, but for now I am happy with what I have so far, and I hope you enjoy it.
