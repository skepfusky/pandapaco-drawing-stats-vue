import requests
# import json
import pandas as pandapaco
import re
import time
from bs4 import BeautifulSoup

paco_raw_db = {}

# Get all art stuffs (35 max)
# for page in range(1, 5 + 1):
  # time.sleep(1)
find_art = requests.get(f"https://www.furaffinity.net/gallery/pacopanda/1/?")
parse_art = BeautifulSoup(find_art.text, 'html.parser')
filter_art = parse_art.find_all('figure', {'class': "r-general t-image"})
filter_id = parse_art.find_all('figure', {'id': re.compile("sid-*")})

for sid in filter_id:
  if 'id' in sid.attrs:
    print(re.sub('sid-', '', sid['id']))
    
# print(filter_id)
# print(', '.split(str, filter_art))
# print(type(filter_art))