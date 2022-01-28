# Provide dat good stuff
import matplotlib.pyplot as plt
import pandas as paco

# Get 2021 compiled drawing data and filters digital and
# traditional drawings
paco2021 = paco.read_csv("data/paco-drawings-2021.csv")
digital = paco2021.loc[paco2021['Medium'] == 'Digital'].count()[0]
traditional = paco2021.loc[paco2021['Medium'] == 'Traditional'].count()[0]

labels = ['Digital', 'Traditional']

plt.pie([digital, traditional], labels=labels, autopct='%.2f%%')
plt.title("Mediums")
plt.show()
