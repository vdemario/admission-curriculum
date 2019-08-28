# Admission Curriculum

This repository holds the content required for the admission process.

## Install

Install dependencies: `yarn` or `npm install`

## Set Typeform IDs

1. Copy `.typeformrc.example` file to `.typeformrc`
2. Add all typeform ids inside `.typeformrc` file according to environment.

The Typeform ids _required_ are:

```json
  "TYPEFORM_ID_BASE_LINE_QUESTIONNAIRE_ES": "your-typeformid",
  "TYPEFORM_ID_TESTS_READING_ES": "your-typeformid",
  "TYPEFORM_ID_TESTS_LOGIC_ES": "your-typeformid",
  "TYPEFORM_ID_TESTS_PERSONALITY_ES": "your-typeformid",
  "TYPEFORM_ID_TESTS_EMOTIONAL_INTELLIGENCE_ES": "your-typeformid",
  "TYPEFORM_ID_TESTS_MATH_ES": "your-typeformid"
```

> __Remember:__ There are three environments available
> (development, staging and production) for different purposes, but you can add
> others environments if you want.


## Usage

> __Important:__ Make sure you are building the right content for your environment.

### 1. Build

- For development environment, run `yarn build:development`
- For staging environment, run `yarn build:staging`
- For production environment, run `yarn build:production`

> The final content will be saved in `build/spanish.json` file

### 2. Edit the content

You must edit the following data inside `build/spanish.json`:

2.1. Add the following key `order: 1` to the parent object in this way:

```json
{
  "order": 1,
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

__Additional scripts that you can use:__

- To generate the content into `build` folder

  ```bash
  yarn prebuild --env={your-environment}
  ```
- To parse and compile the content into `spanish.json` file inside the `build` folder

  ```bash
  yarn compile
  ```

## Testing

- To run markdown linter `yarn mdlint`
- To validate the course content `yarn validate`
- To run mdlint and validate `yarn pretest`
- To run tests and pretest `yarn test`

## TODO

- Add support for portuguese content
- Create unit tests
