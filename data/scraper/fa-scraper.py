import requests
import json
# import pandas as pandapaco
import re
# import time
from bs4 import BeautifulSoup

stop = 1

HEADERS = {'user-agent': ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)' 
                          'AppleWebKit/537.36 (KHTML, like Gecko)'
                          'Chrome/45.0.2454.101 Safari/537.36'),
                          'referer': 'https://furaffinity.net/'}

paco_db = {}

# Get 48 artworks through a for loop in each pages
for page in range(1, stop + 1):
  
  find_art = requests.get(f"https://furaffinity.net/gallery/pacopanda/{page}/?", headers=HEADERS)
  parse_art = BeautifulSoup(find_art.text, 'html.parser')
  parse_art = parse_art.find_all('figure', {'id': re.compile("sid-*")})

  for sid in parse_art:
    if 'id' in sid.attrs:
      sid_concat = re.sub('sid-', '', sid['id'])
      find_art_id = requests.get(f"https://furaffinity.net/view/{sid_concat}/", headers=HEADERS)
      parse_art_id = BeautifulSoup(find_art_id.text, 'html.parser')

      # Find title
      find_title = parse_art_id.find('div', {'class': 'submission-title'})
      art_title = find_title.find('p').get_text()

      # Get image
      detect_img = parse_art_id.find('div', {'class': 'aligncenter submission-area'})

      # If no image is detected (i.e. video or flash content); then return null
      if detect_img.find('img'):
        art_image = parse_art_id.find('img', {'id': 'submissionImg'})['src']
        art_image = f'https:{art_image}'
      else:
        # art_image = parse_art_id.find('div', {'class': 'aligncenter submission-area'})
        art_image = 'null'

      # Find date and
      art_date = parse_art_id.find('span', {'class': 'popup_date'})['title']

      # TODO: filter only date using regex
      # art_date = parse_art_id.find('span', {'title': re.compile(r" ([0-9]?[0-9]:[0-9]?[0-9]) ([AP]?M)")})

      # Find tags
      # TODO: Turn this into an array
      art_tags = parse_art_id.find('section', {'class': 'tags-row'})

      # Find description
      art_desc = parse_art_id.find('div', {'class': 'submission-description user-submitted-links'}).get_text()

      paco_db.append({
        "title": art_title,
        "date": art_date,
        "id": sid_concat,
        "link": art_image
      })
      
      print(f"Currently on page {page} of {stop} | {art_title} | {sid_concat} | {art_date}")

  # Save to JSON
  with open("paco-fa-database.json", 'w') as append_paco_data:
    json.dump(paco_db, append_paco_data, ensure_ascii=False)

  print("Your mom")