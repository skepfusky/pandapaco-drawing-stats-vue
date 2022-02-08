import pandas as pandapaco

df = pandapaco.read_csv('data/csv/paco-2021-updated.csv')

# This code is SO BAD I can't be bothered to optimize it lol
def speciesToTxt():
  species_array = df.drop(columns=['Date', 'Name', 'Character(s)', 'Expression(s)', 'Type', 'Source'])
  species_array.to_numpy()

  pp = 'data/merged/species_merged.csv'
  
  with open(pp, 'w') as f:
    bruh = species_array.to_string(index=False)
    f.write(bruh)

  with open(pp, 'r') as f:
    kiddieland = f.read().replace(' ', '') # Removes whitespace

  with open(pp, 'w') as f:
    f.write(kiddieland)

  with open(pp, 'r') as f:
    kiddieland = f.read().replace('\n', ',') # Replaces line break with a comma

  with open(pp, 'w') as f:
    f.write(kiddieland)

  with open(pp, 'r') as f:
    kiddieland = f.read().replace(',', '\n') # and vice versa

  with open(pp, 'w') as f:
    f.write(kiddieland)
  
  with open(pp, 'w') as f:
    f.write(kiddieland)
    
  # print('Dookied out ' + pp + 'file')

def expressionsToTxt():
  expressions_array = df.drop(columns=['Date', 'Name', 'Character(s)', 'Species', 'Type', 'Source'])
  expressions_array.to_numpy()

  pp = 'data/merged/expressions_merged.csv'

  with open(pp, 'w') as f:
    bruh = expressions_array.to_string(index=False)
    f.write(bruh)

  with open(pp, 'r') as f:
    kiddieland = f.read().replace(' ', '')

  with open(pp, 'w') as f:
    f.write(kiddieland)

  with open(pp, 'r') as f:
    kiddieland = f.read().replace('\n', ',')

  with open(pp, 'w') as f:
    f.write(kiddieland)

  with open(pp, 'r') as f:
    kiddieland = f.read().replace(',', '\n')

  with open(pp, 'w') as f:
    f.write(kiddieland)

  # print('Dookied out ' + pp + 'file lol')
  
speciesToTxt()
expressionsToTxt()