# eslint-plugin-jsx-img-no-referrer

Forbid img with external source without Referrer-Policy: no-referrer

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-jsx-img-no-referrer`:

```
$ npm install eslint-plugin-jsx-img-no-referrer --save-dev
```


## Usage

Add `jsx-img-no-referrer` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "jsx-img-no-referrer"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "jsx-img-no-referrer/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





