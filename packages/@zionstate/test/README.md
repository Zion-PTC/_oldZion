# TEST

## What is this

This is a simple helper package which lets import a test environment with one line of code.

## Example

```js
import { testEnvironment } from "@zionstate/test";

const { expect, log } = testEnvironment();
```

The log function logs a debug log which has this parameters:

```js
util.debuglog("log");
```
