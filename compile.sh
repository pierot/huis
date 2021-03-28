#! /bin/bash

node_modules/.bin/node-sass \
  -o css \
  --output-style compressed \
  --source-map true \
  scss/style.scss
