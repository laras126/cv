#!/bin/bash

npm run build-html
rm -r docs
mkdir docs
cp -r build/html/assets docs/assets 
cp build/html/project/templates/cv/index.html docs/index.html
sed -i .bak 's/assets/cv\/assets/g' docs/index.html
rm docs/index.html.bak