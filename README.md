# Lara's CV

This is my CV, built using <a href="https://github.com/penske-media-corp/pmc-larva">Larva</a> and some workarounds.

To run it:
```
npm install
npm run larva
```

And to build and deploy it (make sure the larva server is running in another shell with `npm run larva`):
```
npm run deploy
```

Things to note:
* Custom CSS and design tokens are added in base.html. 
* Data for the CV is in data.json in src/patterns/templates/cv.
* base.html and pattern.html are overridden to remove the pattern library UI.

## Variations

To add a new variation, in src/patterns/templates/cv, create a new variant file e.g. cv.{variant_name}.js and extend the base CV data by requiring `cv.prototype.js` and overwriting data properties on that object for that variant.

Next, copy lines 15-20 in deploy.sh and replace `job` with the name of the new variant.
## Future improvements

While working on this, I had some ideas about how to use Larva for more generic purposes such as a single page deployment with data separated from the markup. Those ideas are written haphazardly in notes.txt. Here are some other improvements for this repo:

* Exit deploy script if server is not running, or start it in the background, [example here](https://github.com/laras126/larva/blob/master/scripts/build-vercel.sh#L10).
* Iterate through an array of variants in deploy.sh