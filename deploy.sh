#!/usr/bin/bash sh
set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deployed via script'
git push -f git@github.com:skepfusky/pandapaco-art-statistics.git main:gh-pages
cd -
