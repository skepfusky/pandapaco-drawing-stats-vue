#!/usr/bin/env sh

# This script builds and serves Vue appplication locally.

# Aborts any errors
set -e

# Builds for production
npm run build

# Serves application locally
serve -s dist