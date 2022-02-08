import matplotlib.pyplot as plotDatGoodness
import pandas as pandapaco

# Get 2021 compiled drawing data and filters digital and
# traditional drawings
paco2021 = pandapaco.read_csv("data/csv/paco-2021-updated.csv")
digital = paco2021.loc[paco2021['Type'] == 'Digital'].count()[0]
traditional = paco2021.loc[paco2021['Type'] == 'Traditional'].count()[0]

labels = ['Digital', 'Traditional']

plotDatGoodness.pie([digital, traditional], labels=labels, autopct='%.2f%%')
plotDatGoodness.title("Types")
plotDatGoodness.show()
