#!/bin/bash

npm run build-html
rm -r docs
mkdir docs
cp -r build/html/assets docs/assets 

# If more variants are created, refactor this to be an iterative process

cp build/html/project/templates/cv/index.html docs/index.html
sed -i .bak 's/assets/cv\/assets/g' docs/index.html
rm docs/index.html.bak
echo "Built index.html"

mkdir -p docs/job
cp build/html/project/templates/cv/job/index.html docs/job/index.html
sed -i .bak 's/assets/cv\/assets/g' docs/job/index.html
rm docs/job/index.html.bak
echo "Built job/index.html"

git commit -am '(auto) chore: build cv'
git push origin main