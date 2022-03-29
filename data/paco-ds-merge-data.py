import pandas as pandapaco

df = pandapaco.read_csv('csv/paco-2021-updated.csv')

# This code is SO BAD I can't be bothered to optimize it lol
def speciesToTxt():
  species_array = df.drop(columns=['Date', 'Name', 'Character(s)', 'Expression(s)', 'Type', 'Source'])
  species_array.to_numpy()

  pp = 'merged/species_merged.csv'
  
  with open(pp, 'r+') as f:
    bruh = species_array.to_string(index=False)
    f.write(bruh)
    kiddieland = f.read().replace(' ', '')
    f.write(kiddieland)
    kiddieland = f.read().replace('\n', ',')
    f.write(kiddieland)
    kiddieland = f.read().replace(',', '\n')
    f.write(kiddieland)
    
  # print('Dookied out ' + pp + 'file')
  
speciesToTxt()
