import csv
import json

with open ("assets/raw_ps.csv", "r") as f:
  reader = csv.reader(f)
  next(reader)
  data = []
  for row in reader:
    data.append(
      {"date": row[0],
       "name": row[1],
       "characters": row[2],
       "species": row[3],
       "expressions": row[4],
       "medium": row[5],
       "source": row[6]
      })

with open ("assets/bruh.json", "w") as f:
  json.dump(data, f, indent=2)
  print("Dookied out a json file")