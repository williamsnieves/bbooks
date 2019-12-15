# bbooks

Steps to run the app 

We have to folders one for client and one for server. The server has been written in node js using express framework. the server works as a middleware to comunicate with the external service API to get books from google books 

1) First we need to go to server folder and run the next command to install all dependencies

yarn

2) After install all dependencies we need to run then next command  (to start up the server is running into port 5000)

yarn dev

3) We need to go to client folder and install dependencies running the next command

yarn

4) To start the clien app we need to run (the app is running on port 3000)

yarn start

5) To run the unit tests (client side). I have added some scenarios to cover some basic use cases

yarn test

#Flow of the app

Due to the short time in the client i have a login component connected with reach router, the login is a fake login because i  have considered that the most important thing is to implement the flow of the app in a general way, so to make login we can use the next data:

username: test
password: testPASS

if we use another data we show a message (is not the best way to handle this but this is just to show something in the fake login), another weak thing in this part is the router i have implemented just the the routes for login  and for dashboard but is not completely validated to avoid access to the dashboard by url.

Once in the dashboard we have a version responsive o the list of books, you have a input field to search books, in this part the main part is covered, the things that i considered pending are add button in the cards to add the books to a card or summary  and the component for purchase cart.

In regard to the components, i have started applying tdd to build de components and i haved took the advantage to the hooks to build the components

#Important notes about the development process

Is important to know that due to short time is a little difficult to cover all details of the app, and more in the case when you want to reach out the best result as possible, because of that many things are pending or is possible to apply a better way to develop (For example in the server side is pending to add tests to cover the results of the api)





