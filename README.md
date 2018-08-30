
# notificationsManager

Simple implementation of socket.io based server notification for specific clients. This is Work in Progress.

Disclaimers :  
This implementation is only to demonstrate how a nodejs express server can manage notifications to different types of clients (Browser, API, Android and IOS). Specifically it demonstrates how socketio can be used to publish notifications to specific browser clients.
This is by no means complete and does not deal with Android or IOS push notifications nor webhooks.
## Getting Started

This contains 2 projects 
 - A nodejs express server
 - A Reactjs client
 They will have to be built and started individually.

## Setting up the environment
Both the server and the webclient include  **.env** files. You will need to set the appropriate variables to run the app.
 - For the server specify the port on which your server will run<br/>``PORT=8080``
 - For the webclient specify the url for the server<br/>``REACT_APP_SERVER=http://localhost:8080``

## Running the app
Navigate to the server folder and run the server by calling <br/> ``npm start``
Navigate to the webclient folder and run the webclient by calling <br/> ``npm start``
Open http://localhost:3000/ in a browser of your choice.
