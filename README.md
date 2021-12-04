# About this project

This project collects all 1.7K drawings from a furry artist and illustrator *pandapaco*, and fetches different types of data (i.e species drawn, expressions, number of characters drawn, etc)

This project collects title and date of the piece, character's species and names, facial expressions, and the source where I got the data from. This task seem daunting since I have to source it through FurAffinity and DeviantArt for his draft drawings. Drawings from Twitter will unfortunately not be counted to ease the load on my end and the dataset as well since I do write all of this by hand. I *could* try and fetch the data faster through a Python script but I'm still learning Python and it's there just to simply convert CSV to JSON file lol

This project began in October 31, 2021, and the possible inspiration from this project is through the McDonald's broken ice cream machine site and it'd be interesting to see in all 1.7K drawings to see said data.

## Fetching data

All the data is retrieved from this sheet of Google Sheets; a Python script will then get the CSV off of it, then it will be converted from CSV to JSON file, which will then be parsed through chart.js to display the data.

## Why?

It's not meant to impress him in general, but he'd for sure find it interesting as it's more of a fun project to a new hobby of mine, learning JavaScript and Python in the process of other projects I do.

I wanted to show realtime data from Google Sheets and render data via charts from a website and I'd thought I'll take one of my artists and run it through this process.