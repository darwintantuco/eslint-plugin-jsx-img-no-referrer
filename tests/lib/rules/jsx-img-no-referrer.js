"use strict";

const RuleTester = require("eslint").RuleTester;
const rule = require("../../../lib/rules/jsx-img-no-referrer");

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: "module",
  ecmaFeatures: {
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });
const defaultErrors = [
  {
    message:
      'Using img tag with external source must have referrerPolicy="no-referrer"',
  },
];
const externalSrc =
  "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Russian-Blue_01.jpg";

ruleTester.run("jsx-img-no-referrer", rule, {
  valid: [
    { code: '<img src="local_file.jpg"/>' },
    { code: `<img src='${externalSrc}' referrerPolicy="no-referrer"/>` },
  ],
  invalid: [
    {
      code: `<img src='${externalSrc}'/>`,
      errors: defaultErrors,
    },
    {
      code: `
        <img
          src='${externalSrc}'
          alt="Awesome image"
          height="620px"
          width="480px"
        />
      `,
      errors: defaultErrors,
    },
  ],
});
