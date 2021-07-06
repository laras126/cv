#!/bin/bash

npm run build-html
rm -r docs
mkdir docs
cp -r ./build/html/assets ./docs/assets 
cp ./build/html/project/templates/cv/index.html ./docs/index.html
echo 'Now find and replace assets with cv/assets in docs/index.html and the doc title'
