# IT 431 REST Assignment Restaurant
In this assignment you will use expres.js to expose several REST calls to manage restaurant data.  

# getting started
- clone this repo
- cd into cloned folder
- run `npm install`
- run `npm start`
- use postman and confirm that the '/ap/test' endpoint returns "It Works!"

# endpoints
|Endpoint| Action | Purpose | Returns |
|----|----|----|----|
|/api/restaurant | GET | Returns all restaurant data | JSON for all restaurants |
|/api/restaurant/:id  | GET   |Returns one of the restaurants by its id   | JSON for a single restaurant    |
|/api/restaurant/:id/review | POST | Adds a new review for the restaurant | 200 success if successful| 
|/api/restaurant/:id/vote | POST | increments the votes for the restaurant |200 success if successful | 

# optional
|Endpoint| Action | Purpose | Notes |
|----|----|----|----|
|/api/restaurant | POST | adds a new restaurant | 200 success if successful|


# Tasks
1.  Replace all TODO comments with neccessary commands to correctly implement the REST endpoints.
2.  Use postman to test the endpoints
3.  Provide screenshots postman performing the following actions using the REST service 
    - retrieving (GET) all restaurants
    - retrieving (GET) single restaurant
    - adding (POST) review for one of the restaurants
    - adding a new vote (POST) for one of the restaurants

# Upload
1. Single word document with all screenshots







