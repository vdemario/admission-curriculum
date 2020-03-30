# Admission Curriculum

This repository holds the topics required for the admission process in spanish and portuguese.

## Install

`npm install`

## Set Typeform IDs

1. Copy `.typeformrc.example` file to `.typeformrc`
2. Add all typeform ids inside `.typeformrc` file according the language and environment.

The Typeform ids _required_ are:

```json
  "TYPEFORM_ID_BASE_LINE_QUESTIONNAIRE": "your-typeformid",
  "TYPEFORM_ID_TESTS_READING": "your-typeformid",
  "TYPEFORM_ID_TESTS_LOGIC": "your-typeformid",
  "TYPEFORM_ID_TESTS_PERSONALITY": "your-typeformid",
```

> **Remember:** There are three environments available
> (development, staging and production) for different purposes, but you can add
> others environments if you want.

## Build

> **Important:** Make sure you are building the right content for your environment and language

You can pass 2 environment variables: `env`, `locale`

**`env`** : `development`, `staging`, `production`
**`locale`**: `es-ES`, `pt-BR`

By default `locale` takes the value `es-ES`

**For instance:**

`npm run build -- --env=production --locale=pt-BR`

The final content will be saved in `build/admission-pt.json` file

## Testing

- To validate the course content `npm run validate`
- To run markdown linter `npm run mdlint`
- To run tests and pretest `npm run test`
