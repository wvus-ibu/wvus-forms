# VALIDESSA - Defender of Data (WVUS Form Validation Library)
Custom Donate Widget for placement on WVUS sites. This custom Wordpress Plugin allows a user to configure a custom donation widget, and place it on a page.

[[/validessa.png|alt=Validessa]]

## How to use in React Project

### Installation via NPM
Validessa can also installed via NPM. If you want to include it as a dependency for your JS project, follow these steps:
1. Add `wvus-forms` to your package.json file:
```
  "dependencies": {
    "wvus-forms": "github:wvus-ibu/wvus-forms#[VERSION/BRANCH]"
  }
```
* Example "github:wvus-ibu/wvus-forms#v2.0.0"
2. Run: `npm install --save wvus-forms`
3. Import into your project: `import Validessa from 'wvus-forms';`
4. Now you are ready to use it in your project. See Examples section.

Note: For more information on using Github repos in NPM, see: [Github Urls](https://docs.npmjs.com/files/package.json#github-urls)

### Examples: How to use


## How to Develop VALIDESSA (JS app)

### Install dev dependencies and run script to watch JS files: 
Install dependencies and start storybook dev server:
```
cd app
npm install
npm run storybook
```

### Development
1. Edit files in `src` folder. Upon saving, Storybook will automatically compile and reload the pages.
2. When adding new features, be sure to add corresponding stories to provide examples of use and for testing purposes.
Note: When you are finished developing you will run `npm run prepare` to compile the ES5 version for NPM modules use.

### Versioning
- When working on Validessa, create a new feature branch with your changes. 
  - Follow [Semantic Versioning](http://semver.org/) and name branch name with pattern `vX.X.X`
- To test, use the stories in Storybook by executing `npm run storybook`
- You can also test with your app by updating the dependency with the branch name:
```
  "dependencies": {
    "wvus-forms": "github:wvus-ibu/wvus-forms#[BRANCH]"
  }
```
- After your feature branch has passed QA, merge to master and tag with next version number (i.e. `vX.X.X`)
- See 'How to update' section below to update a property to your new version.


## How to update as dependency in a React App
We use [NPM](https://docs.npmjs.com) with [Github Urls](https://docs.npmjs.com/files/package.json#github-urls) to import this library into our different apps. Below is an example of how to update a react app with a new version of Validessa
IMPORTANT: Read Versioning section above.

### Update Steps
1. Browse to your app folder containing the package.json file
2. If you need to update the version, change the following element in your `package.json` file. Tag is in form of vX.X.X (see Versioning above)
```
  "dependencies": {
    "wvus-forms": "github:wvus-ibu/wvus-forms#[TAG_VERSION_NUM]"
  }
```
3. Run: `npm update wvus-forms`

## Release Build Steps
1. `npm run prepare`
2. `npm run build-storybook`
3. Commit and merge to master
4. Add tag with version number (e.g. v2.8.1)
