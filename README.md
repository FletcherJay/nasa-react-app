##Nasa-React App

This project take recent data from a few of Nasa's API's and displays them on one page and shows you whats going on in space and around Earth, and ongoing projects

##Motivation

I created this app, because I was curious on how "active" our sun is, and as it comes out, itis plenty active. Then that got me thinking about what else is going on in space and projects involved.

##Code Style

using ES7+ React/Redux/React-Native snippets  by: dsznajder
for the jsx im using the rafce shortcut to create the react component

##Tech/Frameworks used

Built with:
*HTML
*CSS
*JS
*React
*React Bootstrap
*Font Awesome

##Installation

You clone a repository with git clone <url>.
$ git clone https://github.com/FletcherJay/nasa-react-app.git

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

##API Reference

*Projects API: https://api.nasa.gov/techport/api/projects?updatedSince=${endDate}&api_key=${API_KEY} 
*this one is used twice, first time to grab the latest project ID's, then the second time to iterate through the the specific ID's that were produced and grab all the data for those projects*

*Picture Of the Day API: https://api.nasa.gov/planetary/apod?api_key=${API_KEY} 

*Asteroids API: https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${API_KEY} 

*DONKI Events API (solar events): https://api.nasa.gov/DONKI/notifications?startDate=${startDate}&endDate=${endDate}&type=all&api_key=${API_KEY}

*Patents API: https://api.nasa.gov/techtransfer/patent/?api_key=${API_KEY}

** App Developers**: Fletcher Johnson

Credit

###All credit for the API's goes to the developers @ https://github.com/nasa/api-docs/blob/gh-pages/README.md