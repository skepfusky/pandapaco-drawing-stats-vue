<p align="center">
  <img src="https://github.com/skepfusky/pandapaco-art-statistics/blob/main/project-banner-new.png?raw=true" alt="Repo banner">
</p>
<h1 align="center">Panda Paco Analytics Site</h1>
<p align="center">
  <img src="https://img.shields.io/github/commit-activity/m/skepfusky/pandapaco-art-statistics?color=darkgreen&label=commits%2Fmonth&style=flat-square" align="center">
  <img src="https://img.shields.io/github/last-commit/skepfusky/pandapaco-art-statistics?style=flat-square" align="center">
  <img src="https://img.shields.io/github/license/skepfusky/pandapaco-art-statistics?style=flat-square" align="center">
</p>

> Spanish translation of this README is available [here][es],
> translated by [Pan Con Cochayuyo][pancon] and partially translated via Google
> Translate.
>
> La traducción española de este README está disponible [aquí][es], traducida por
> [Pan Con Cochayuyo][pancon] y parcialmente traducida por Google Translate.

> All raw data is stored in [this Google Sheet spreadsheet][notebook].

> For more in-depth and thorough explanation on how I gather, render, and manage
data, refer to the [`paco-drawing-data.ipynb`][notebook] file.

This website collects all 1.9K drawings from a furry artist and illustrator
*pandapaco*, and displays different types of data (i.e species drawn, expressions,
number of characters drawn, etc, which are, for now, probably, hard-coded
unfortunately and have to be updated manually)

I use Google Sheets to manage data and Vue.js for the website as a whole.

## About this project

This project began in October 31, 2021, and the possible inspiration from this
project is through the McDonald's broken ice cream machine site and it'd be
interesting to see in all of his drawings to see said data and it's various
datasets.

This project collects drawing data on the title and date of the piece, character's
species and names, facial expressions, and the source where I got the data from.
This task seem daunting since I have to manually source it through FurAffinity and
DeviantArt for his draft drawings (including his *Art & Biro* comics). Unfortunately,
drawings from Twitter won't be counted in order to ease the load on my end and
the dataset as well since all the data gathered will be hardcoded to the site.

This whole process is explained further on the [Juypter Notebook][notebook] file.

## Why did you create this project?

It's really not my intention to impress him in general, I'm just a big fan of his
artwork and his unique and adorable art style that I'd want to see how many characters
he's drawn since mid-2000s but he'd for sure find it interesting as it's more of a fun
project to a new hobby of mine, learning not only JavaScript, Vue.js, but also learning
a bit of back-end and basic data management using Firebase in the process of other
projects I do.

Previously, I wanted to show realtime data from Google Sheets and render data via a chart
library from a website and I'd thought I'll take one of my favorite artists and run it
through this process, but I'm kinda lacking backend knowledge.

[es]: https://github.com/skepfusky/pandapaco-art-statistics/docs/readme_es.md
[pancon]: https://www.youtube.com/channel/UCTI9uf8OMcIo7QQMFS0Sfzw
[notebook]: https://github.com/skepfusky/pandapaco-art-statistics/blob/main/paco-drawing-data.ipynb
[sheet]: https://docs.google.com/spreadsheets/d/1fpNL-qbfZ53H-6WdqEB2X9rwn9QmM1porJqKgBC7rPk/edit?usp=sharing