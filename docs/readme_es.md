<p align="center">
  <img src="https://github.com/skepfusky/pandapaco-art-statistics/blob/main/project-banner-new.png?raw=true" alt="Repo banner">
</p>
<h1 align="center">Sitio de Panda Paco Analytics</h1>
<p align="center">
  <img src="https://img.shields.io/github/commit-activity/m/skepfusky/pandapaco-art-statistics?color=darkgreen&label=commits%2Fmonth&style=flat-square" align="center">
  <img src="https://img.shields.io/github/last-commit/skepfusky/pandapaco-art-statistics?style=flat-square" align="center">
</p>

> Todos los datos sin procesar se almacenan en esta hoja de cálculo [de Google Sheet][sheet].

> Para obtener una explicación más detallada sobre cómo recopilo, renderizo y administro
datos, consulte el archivo [`paco-drawing-data.ipynb`][notebook].

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
[Juypter Notebook][notebook].

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

[notebook]: https://github.com/skepfusky/pandapaco-art-statistics/blob/main/data/paco-drawing-data.ipynb
[sheet]: https://docs.google.com/spreadsheets/d/1fpNL-qbfZ53H-6WdqEB2X9rwn9QmM1porJqKgBC7rPk/edit?usp=sharing