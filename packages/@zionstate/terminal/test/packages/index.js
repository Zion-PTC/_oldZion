"use strict";
import importJsx from "import-jsx";

try {
  importJsx("./counter.js");
} catch (error) {
  console.log(error.message);
}
