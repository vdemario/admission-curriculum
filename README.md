# Admission Curriculum

This repository holds the content required for the admission process.

## Install

Install dependencies: `yarn` or `npm install`

## Config

### Typeform

You'll need to add your typeform ids inside the `.typeformrc` file, there are
three configurations for dev, stating and production, so you can add others if you
want. the structure is the following:

```json
{
  "dev": {
    ....
  },
  "{your-env}": {
    "TYPEFORM_ID_BASE_LINE_QUESTIONNAIRE_ES": "your-typeformid",
    "TYPEFORM_ID_TESTS_READING_ES": "your-typeformid",
    "TYPEFORM_ID_TESTS_LOGIC_ES": "your-typeformid",
    "TYPEFORM_ID_TESTS_PERSONALITY_ES": "your-typeformid",
    "TYPEFORM_ID_TESTS_EMOTIONAL_INTELLIGENCE_ES": "your-typeformid",
    "TYPEFORM_ID_TESTS_MATH_ES": "your-typeformid"
  },
  ...
}
```


## Usage

We have different environment (dev, staging, production) for different purposes
, so make sure you are building the right content for your environment.

### 1. Build the content

- For development env `yarn build:dev`
- For staging env `yarn build:staging`
- For production env `yarn build:production`

> The content will be saved into `build/spanish.json` file

### 2. Edit the content

You must edit the following data inside `build/spanish.json`:

2.1. Add the following key `order: 0` to the parent object in this way:

```json
{
  "order": 0,
  "slug": "spanish",
  "repo": "Laboratoria/admission-curriculum",
  "path": "build/spanish",
  "version": "1.0.0",
  "parserVersion": "2.0.0-alpha.2",
  "track": "js",
  "locale": "es-ES",
  ....
}
```

2.2. Remove the `exercises` key from `10-guided-exercises` object, you can find it
`syllabus --> 03-prework --> 10-guided-exercises --> exercises`

2.3. Change the value of `order` key for `01-baseline`, `02-tests` and `03-prework` in this way:

```json
{
  ...
  "syllabus": {
    "01-baseline": {
      "order": 1
      ...
    },
    "02-tests":{
      "order": 2
      ...
    },
    "03-prework": {
      "order": 3
      ...
    }
  }
  ...
}
```

## Testing

To run tests, mdlint and curriculum-validate `yarn test`


## FAQ

### Why are the folder names `spanish` and `portuguese` ?

Because the `curriculum-parser` requires a path with a minimum allowed length 3
otherwise we'll get the following error

```
Topic validation failed: slug: Path `slug` (`es`) is shorter than the minimum allowed length (3).

slug: Path `slug` (`es`) is shorter than the minimum allowed length (3).
```

That's the reason why they aren't `es` and `pt`

