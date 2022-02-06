#!/usr/bin/bash sh

# No errors during script execution
set -e

# Build Vue app
# Which minifies JavaScript and compiled CSS for faster page loads
npm run build

# Move directory to dist
cd dist

# Init a repo and commit to the gh-pages branch
git init
git add -A
git commit -m 'deployed via script'

# Then force pushes to the branch
git push -f git@github.com:skepfusky/pandapaco-art-statistics.git main:gh-pages

# Prints the current dir and exits the bash script
cd -
