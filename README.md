# eslint-plugin-jsx-img-no-referrer

![Node.js CI](https://github.com/darwintantuco/eslint-plugin-jsx-img-no-referrer/workflows/Node.js%20CI/badge.svg)

Using img tag with external source must have referrerPolicy="no-referrer"

## Installation

You'll first need to install [ESLint](http://eslint.org):

Next, install `eslint-plugin-jsx-img-no-referrer`:

### npm

```
$ npm install eslint-plugin-jsx-img-no-referrer --save-dev
```

### yarn

```
$ yarn add eslint-plugin-jsx-img-no-referrer --dev
```

## Usage

Add `jsx-img-no-referrer` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["jsx-img-no-referrer"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "jsx-img-no-referrer/jsx-img-no-referrer": "error"
  }
}
```

If you have custom image components, you can define them under settings section.

```json
{
  "settings": {
    "imageComponents": [
      "Avatar",
      { "name": "Profile", "imageAttribute": "imageSrc" }
    ]
  }
}
```

## License

MIT
