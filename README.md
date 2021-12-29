# plop.js

## TODO

- [ ] Make this a repo + NPM package in order to pull it with plop.js

-----

## USAGE

|yarn cmd|package.json script|
|---|---|
|`yarn generate`<br />`yarn gen`|`yarn plop --plopfile ./generators/plopfile.js`|


**OR** (when plop.js is installed globally)

|yarn cmd|Desc|
|---|---|
|`plop --plopfile generators/plopfile.js`|When plopfile.js/ts is NOT in the root folder and plop is installed globally|
|`plop`|When plopfile.js/ts is in the root folder and plop is installed globally.|


## Current Dependencies

- `plop` - which uses inquirer under the hood.
- `inquirer-fuzzy-path` - Fuzzy file/directory search and select prompt for Inquirer.js
