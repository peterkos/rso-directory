

# RSO Directory (Rebuild)

This repo is a rebuild of the [RSO Directory website](https://uws-community.symplicity.com/index.php?au=&ck=) at the University of Washington.


## Stack

Backend: [Firebase](https://firebase.google.com/)
Frontend: [Vue.js](https://vuejs.org/), [Bulma](https://vuejs.org/), [Parcel](https://parceljs.org)


## Install

First, install `npm` with `homebrew`:

```
brew install node
```

Then, install local dependencies for the project:

```
npm install
```

That's it!

<hr>

To run the local server (Sass/Vue compiling, etc.), do the following:

```
npm run dev
```

(which really does `parcel index.html` in the background, because parcel is **awesome**.)


#### Building

When building, use `npm run build` for a generic build, and `npm run shortbuild` for a non-min, no-map version. (Although, the maps may still appear for some unknown reason.)




~~All~~ Some progress is livestreamed / available to watch on the [Dubstech YouTube channel](https://www.youtube.com/channel/UCVFMxq9t71gnwysR_i5H7tQ)
