from sys import displayhook
import matplotlib.pyplot as plotDatShit
import pandas as pandapaco

ea = pandapaco.read_csv("merged/expressions_merged.csv")

ott = [
    ea.loc[ea['Expression(s)'] == 'Engaged'].count()[0],
    ea.loc[ea['Expression(s)'] == 'Neutral'].count()[0],
    ea.loc[ea['Expression(s)'] == 'Calm'].count()[0],
    ea.loc[ea['Expression(s)'] == 'Happy'].count()[0],
    ea.loc[ea['Expression(s)'] == 'Playful'].count()[0],
    ea.loc[ea['Expression(s)'] == 'Warm'].count()[0],
    ea.loc[ea['Expression(s)'] == 'Ecstatic'].count()[0],
    ea.loc[ea['Expression(s)'] == 'TO'].count()[0],
    ea.loc[ea['Expression(s)'] == 'Curious'].count()[0],
    ea.loc[ea['Expression(s)'] == 'Shy'].count()[0],
]

ott_label = [
    'Engaged',
    'Neutral',
    'Calm',
    'Happy',
    'Playful',
    'Warm',
    'Ecstatic',
    'TO',
    'Curious',
    'Shy',
]

plotDatShit.pie(ott, labels=ott_label, autopct='%.2f%%')
plotDatShit.title("Total of Expression(s) drawn")
plotDatShit.show()

another_chunk_of_abomination = [
  ['Aggressive', ea.loc[ea['Expression(s)'] == 'Aggressive'].count()[0]],
  ['Blushing', ea.loc[ea['Expression(s)'] == 'Blushing'].count()[0]],
  ['Calm', ea.loc[ea['Expression(s)'] == 'Calm'].count()[0]],
  ['Concerned', ea.loc[ea['Expression(s)'] == 'Concerned'].count()[0]],
  ['Curious', ea.loc[ea['Expression(s)'] == 'Curious'].count()[0]],
  ['Dancing', ea.loc[ea['Expression(s)'] == 'Dancing'].count()[0]],
  ['Ecstatic', ea.loc[ea['Expression(s)'] == 'Ecstatic'].count()[0]],
  ['Engaged', ea.loc[ea['Expression(s)'] == 'Engaged'].count()[0]],
  ['Eyes Closed', ea.loc[ea['Expression(s)'] == 'EyesClosed'].count()[0]],
  ['Focused', ea.loc[ea['Expression(s)'] == 'Focused'].count()[0]],
  ['Grin', ea.loc[ea['Expression(s)'] == 'Grin'].count()[0]],
  ['Happy', ea.loc[ea['Expression(s)'] == 'Happy'].count()[0]],
  ['Heroic', ea.loc[ea['Expression(s)'] == 'Heroic'].count()[0]],
  ['Hip', ea.loc[ea['Expression(s)'] == 'Hip'].count()[0]],
  ['Hungry', ea.loc[ea['Expression(s)'] == 'Hungry'].count()[0]],
  ['Innocent', ea.loc[ea['Expression(s)'] == 'Innocent'].count()[0]],
  ['Laughter', ea.loc[ea['Expression(s)'] == 'Laughter'].count()[0] + ea.loc[ea['Expression(s)'] == 'Laughing'].count()[0]],
  ['Lied Down', ea.loc[ea['Expression(s)'] == 'LiedDown'].count()[0]],
  ['Nervous', ea.loc[ea['Expression(s)'] == 'Nervous'].count()[0]],
  ['Neutral', ea.loc[ea['Expression(s)'] == 'Neutral'].count()[0]],
  ['Playful', ea.loc[ea['Expression(s)'] == 'Playful'].count()[0]],
  ['Plotting', ea.loc[ea['Expression(s)'] == 'Plotting'].count()[0]],
  ['Relaxed', ea.loc[ea['Expression(s)'] == 'Relaxed'].count()[0]],
  ['Satisfied', ea.loc[ea['Expression(s)'] == 'Satisfied'].count()[0]],
  ['Shocked', ea.loc[ea['Expression(s)'] == 'Shocked'].count()[0]],
  ['Shy', ea.loc[ea['Expression(s)'] == 'Shy'].count()[0]],
  ['Surprised', ea.loc[ea['Expression(s)'] == 'Surprised'].count()[0]],
  ['TO', ea.loc[ea['Expression(s)'] == 'TO'].count()[0]],
  ['Uncomfortable', ea.loc[ea['Expression(s)'] == 'Uncomfortable'].count()[0]],
  ['Warm', ea.loc[ea['Expression(s)'] == 'Warm'].count()[0]],
]

total = pandapaco.DataFrame(another_chunk_of_abomination, columns = ["Expressions", "Count"])
total.set_index('Expressions')
total_fr = total.sort_values(total.columns[1], ascending=False)
displayhook(total_fr.head(10))