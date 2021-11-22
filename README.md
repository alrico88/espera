# espera

Simple async wrapper to wait for a certain amount of time.

## Installation

Using npm:

`npm i espera`

Using yarn:

`yarn add espera`

## Usage

Using CommonJS

```javascript
const { sleep } = require('espera');
```

Using imports

```javascript
import { sleep } from 'espera';
```

Then, in an async function:

```javascript
// Some code ...
await sleep(4, Unit.seconds); // Will wait 4 seconds before continuing
// Some other code
```

## Documentation

See [DOCS](./docs/modules.md)
