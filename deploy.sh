#!/usr/bin/env sh

# Aborts any errors
set -e

# Builds for production
npm run build

# Navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy to gh-pages'

git push -f git@github.com:skepfusky/pandapaco-art-statistics.git main:gh-pages

echo "Deployment finished!"

cd -

clear