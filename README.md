<p align="center">
  <img src="https://github.com/skepfusky/pandapaco-art-statistics/blob/main/project-banner-new.png?raw=true" alt="Repo banner">
</p>
<h1 align="center">Panda Paco Analytics Site</h1>
<p align="center">
  <img src="https://img.shields.io/github/commit-activity/m/skepfusky/pandapaco-art-statistics?color=darkgreen&label=commits%2Fmonth&style=flat-square" align="center">
  <img src="https://img.shields.io/github/last-commit/skepfusky/pandapaco-art-statistics?style=flat-square" align="center">
  <img src="https://img.shields.io/github/license/skepfusky/pandapaco-art-statistics?style=flat-square" align="center">
</p>

> Spanish translation of this README is available [here](https://github.com/skepfusky/pandapaco-art-statistics#sitio-de-panda-paco-analytics), translated by [Pan Con Cochayuyo](https://www.youtube.com/channel/UCTI9uf8OMcIo7QQMFS0Sfzw) and partially translated via Google Translate lol

> All raw data is stored in [this Google Sheet spreadsheet](https://docs.google.com/spreadsheets/d/1fpNL-qbfZ53H-6WdqEB2X9rwn9QmM1porJqKgBC7rPk/edit?usp=sharing).

> For more in-depth and thorough explanation on how I gather, render, and manage
data, refer to the [`paco-drawing-data.ipynb`](https://github.com/skepfusky/pandapaco-art-statistics/blob/main/paco-drawing-data.ipynb) file.

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

This whole process is explained further on the [Juypter Notebook](https://github.com/skepfusky/pandapaco-art-statistics/blob/main/paco-drawing-data.ipynb) file.

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

# Sitio de Panda Paco Analytics

> Todos los datos sin procesar se almacenan en esta hoja de cálculo [de Google Sheet](https://docs.google.com/spreadsheets/d/1fpNL-qbfZ53H-6WdqEB2X9rwn9QmM1porJqKgBC7rPk/edit?usp=sharing).

> Para obtener una explicación más detallada sobre cómo recopilo, renderizo y administro
datos, consulte el archivo [`paco-drawing-data.ipynb`](https://github.com/skepfusky/pandapaco-art-statistics/blob/main/paco-drawing-data.ipynb).

Este sitio web recopila todos los 1.9K dibujos de un artista furry e ilustrador pandapaco
y muestra diferentes tipos de datos (es decir, especies dibujadas, expresiones, número
de personajes dibujados, etc., que, por ahora, probablemente, están codificados de forma
rígida y deben  actualizarse manualmente)

Utilizo Google Sheets para administrar datos y Vue.js para el sitio web en su conjunto.

## Acerca de este proyecto

Este proyecto comenzó el 31 de octubre de 2021, y la posible inspiración de este proyecto
es a través del sitio de la máquina de helado rota de McDonald's y sería interesante ver
en todos sus dibujos para ver dichos datos y sus diversos conjuntos de datos.

Este proyecto recopila datos de dibujo sobre el título y la fecha de la pieza, las
especies y nombres de los personajes, las expresiones faciales y la fuente de donde
obtuve los datos.  Esta tarea parece desalentadora ya que tengo que buscarla
manualmente a través de FurAffinity y DeviantArt para sus dibujos de borrador (incluidos
sus cómics de *Art & Biro*).  Desafortunadamente, los dibujos de Twitter no se contarán
para aliviar la carga de mi parte y también el conjunto de datos, ya que todos los datos
recopilados estarán codificados en el sitio.

Todo este proceso se explica más detalladamente en el archivo
[Juypter Notebook](https://github.com/skepfusky/pandapaco-art-statistics/blob/main/paco-drawing-data.ipynb).

## ¿Por qué creaste este proyecto?

Realmente no es mi intención impresionarlo en general, solo soy un gran admirador de su
obra de arte y su estilo artístico único y adorable que me gustaría ver cuántos
personajes ha dibujado desde mediados de la década de 2000, pero seguro que lo haría.
Lo encuentro interesante ya que es más un proyecto divertido para un nuevo pasatiempo mío,
aprender no solo JavaScript, Vue.js, sino también aprender un poco de administración de
datos básicos y de back-end usando Firebase en el proceso de otros proyectos que hago.

Anteriormente, quería mostrar datos en tiempo real de Google Sheets y renderizar datos
a través de una biblioteca de gráficos desde un sitio web y pensé que tomaría a uno de
mis artistas favoritos y lo ejecutaría a través de este proceso, pero me falta un poco
de conocimiento de backend.
