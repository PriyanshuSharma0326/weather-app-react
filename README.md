# Weather Gateway

![Weather Gateway Screenshot](/public/assets/desktop-siteshot.png)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Project Structure](#project-structure)
- [Run locally](#run-locally)
- [Contact](#contact)
- [Social](#social)

## About

A simple and responsive weather application built on React and designed with SASS. Search for weather information for any city in the world, the default being Delhi.

## Features

- **City Weather Details**: Find weather details for any city by simply searching the name of the city. The details include
  - **Temperature**: The current temperature as well as minimum and maxiumum temperature.
  - **Other details**: Find other details such as humidity, wind speed and direction.
  - **Icon**: Weather icon for visual depiction of the current weather condition.

- **Forecast**: There is another section where you can find weather forecast of the destination for the next 5 days.


## Project Structure

The project is structured as follows:

- `/public`: Contains static assets, including images.
- `/src`: Contains the React application source code.
  - `/app`: Store for easy state management.
  - `/components`: React components for various parts of the app.
  - `/context`: For state management within the app.
  - `/lib`: Utility functions.
  - `/features`: Files containing reducers for the application.


## Run Locally

### Clone the project

```bash
  git clone https://github.com/PriyanshuSharma0326/weather-app-react.git
```

### Go to the project directory

```bash
  cd weather-app-react/
```

### Install dependencies

```bash
  npm i
  npm i -D sass
  npm i --save @fortawesome/free-solid-svg-icons
  npm i --save @fortawesome/react-fontawesome@latest
  npm i @reduxjs/toolkit
  npm i axios
  npm i react-redux
  npm i react-spinners
  npm i react-toggle
```

### Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

`REACT_APP_OPENWEATHER_FORECAST_URL=YOUR_OPENWEATHER_FORECAST_URL`

`REACT_APP_OPENWEATHER_CURRENT_WEATHER_URL=YOUR_OPENWEATHER_CURRENT_WEATHER_URL`

`REACT_APP_OPENWEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY`

### Start the server

```bash
  npm start
```

### Usage

Once the development server is up and running, open your web browser and go to `http://localhost:3000` to see the project in action.

 
## Contact

Feel free to reach out to me with any inquiries, opportunities, or collaborations. You can contact me at:

- Email: [priyanshusharma0326@gmail.com](mailto:priyanshusharma0326@gmail.com)
- LinkedIn: [Priyanshu Sharma](https://www.linkedin.com/in/priyanshusharma0326)
- Portfolio: [portfolio-priyanshu08.vercel.app](https://portfolio-priyanshu08.vercel.app/)

## Social

Connect with me on social media:

- Twitter: [@xtechilad](https://twitter.com/xtechilad)
- Instagram: [@xtechilad](https://www.instagram.com/xtechilad)
- GitHub: [@priyanshusharma0326](https://github.com/priyanshusharma0326)

Let's engage, share ideas, and stay connected!

# Thanks for visiting my project!
