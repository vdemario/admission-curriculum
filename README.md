# Admission Curriculum

This repository holds the topics required for the admission process in spanish and portuguese.

## Install

Install dependencies: `yarn` or `npm install`

## Set Typeform IDs

1. Copy `.typeformrc.example` file to `admission-es/.typeformrc` or `admission-pt/.typeformrc`
2. Add all typeform ids inside `.typeformrc` file according to environment.

The Typeform ids _required_ are:

```json
  "TYPEFORM_ID_BASE_LINE_QUESTIONNAIRE": "your-typeformid",
  "TYPEFORM_ID_TESTS_READING": "your-typeformid",
  "TYPEFORM_ID_TESTS_LOGIC": "your-typeformid",
  "TYPEFORM_ID_TESTS_PERSONALITY": "your-typeformid",
  "TYPEFORM_ID_TESTS_EMOTIONAL_INTELLIGENCE": "your-typeformid",
  "TYPEFORM_ID_TESTS_MATH": "your-typeformid"
```

> **Remember:** There are three environments available
> (development, staging and production) for different purposes, but you can add
> others environments if you want.

## Usage

> **Important:** Make sure you are building the right content for your environment and language

### 1. Build

You need to pass 2 environment variables: `env`, `locale`

**`env`** : `development`, `staging`, `production`
**`locale`**: `es-ES`, `pt-BR`

By default `locale` takes the value `es-ES`

**For instance:**

`yarn build --env=production --locale=pt-BR`

The final content will be saved in `build/admission-pt.json` file

### 2. Edit the content

You must edit the following data inside `build/admission-{es|pt}.json`:

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

## Testing

- To validate the course content `yarn validate`
- To run markdown linter `yarn mdlint`
- To run tests and pretest `yarn test`
