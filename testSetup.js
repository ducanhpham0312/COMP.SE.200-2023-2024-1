require("jest-chain");
require("jest-extended");

// ./testSetup.js

// add all jest-extended matchers
import * as matchers from 'jest-extended';
expect.extend(matchers);
