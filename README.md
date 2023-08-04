## Video Game Stats
A web application that displays the most popular video games in the last 20 years, information about them, and my personal statistics on some of my favorites. Built with React (also React Router and React Query), Zustand, Typescript, Chakra UI, and the RawG API.

## Project Status
I'm still adding my personal statistics for some of my favorite games. I have to manually do this because access to the Xbox API requires membership in their developer program. In the future I might consider setting up a NodeJS backend and using a 3rd party API to access my Xbox stats.

## Project Screen Shot(s)

![Screenshot (70)](https://github.com/VarKal23/personal-game-hub/assets/92049401/aeec71a2-1d6f-40ad-9fea-91e3038eb16b)
![Screenshot (71)](https://github.com/VarKal23/personal-game-hub/assets/92049401/5a6cdd4b-5e23-4c1e-87aa-35e7900e467c)

## Installation and Setup Instructions
Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:
`npm install` to install all the necessary dependencies  

To Start Server:
`npm run dev`  

To Visit App:
Click on the link to the dev server that appears after running `npm run dev`

## Reflection
This was a side project I wanted to develop because of my love for video games. I set out to become more acquainted with some of the popular React libraries like Query and Router as well as build my first Typescript project. I've also never used Zustand before so I wanted to transition to that over Redux.

This project was challenging because of the large data set I had to work with which led me to use React Query to handle this. This was a good learning experience because I was forced to think about things like caching and pagination in order to handle large amounts of data. I set up custom query hooks as well to separate some of the data sets I was using.

The technologies I used were React, React Router, React Query, Typescript, Zustand, Chakra UI and RawG API. I decided to use React because of its growing popularity in creating responsive applications. React has been a framework I have long used and become comfortable with because of its ease of use and wide-ranging support. I used Typescript instead of Javascript for its type-checking properties which I feel is more valued than just plain Javascript now because it can lead to easier debugging and catch errors earlier on. I utilized Zustand for state management over something like Redux because Zustand has also grown in popularity for its ease of use. I feel Redux was over-complicated and convoluted whereas Zustand accomplishes what Redux does in a much more intuitive fashion. 
