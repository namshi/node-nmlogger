# nmLogger

Handy and _strongly_ opinionated logging helper. It conveniently writes your logs in your shell and graylog facility as well as reporting errors to newrelic.

## Options Params:
Options parameters:

- **level**: max winston reporting level

- **graylog**: config for graylog server, please [check here](https://github.com/namshi/winston-graylog2#options) for more infos
- **env**: the current environment. It will be used by the newrelic transport as explained [here](https://github.com/namshi/newrelic-winston#options)

## Installation

Install this library via [NPM](https://www.npmjs.org/package/node-logger):

``` bash
npm install node-nmlogger
```

## Usage
```javascript
var logger = require('node-nmlogger')();

// or

var logger = require('node-nmlogger')({ /* options */ });

```

## Works best with
We suggest to use [nmconfig](https://github.com/namshi/node-nmconfig) for your config needs with this module.

If you need it on the client side we highly recommend
[browserify](http://browserify.org/).

## Tests
This library is a little convenience wrapper on top of extensively tested projects,
so for once we can be a little bit lazy and skip them ;)<br/>
We do like tests tho, so if you feel giving us a hand we'll be more than happy
to see some PR love on this side :D
