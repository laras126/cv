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

While working on this, I had some ideas about how to use Larva for more generic purposes such as a single page deployment with data separated from the markup. Those ideas are written haphazardly in notes.txt.

## Future improvements:

* Exit deploy script if server is not running, or start it in the background, [example here](https://github.com/laras126/larva/blob/master/scripts/build-vercel.sh#L10).