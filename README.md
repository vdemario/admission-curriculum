# Admission Curriculum

This repository holds the topics required for the **OLD** admission process in spanish and portuguese.

## Install

Install dependencies: `npm install`

## Usage

### 1. Build

`npm run build --locale={es-ES|pt-BR}`

**`locale`**: `es-ES`, `pt-BR`

by default `locale` takes the value `es-ES`


The final content will be saved in `build/admission-{es|pt}.json` file

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

- To validate the course content `npm run validate`
- To run markdown linter `npm run mdlint`
- To run tests and pretest `npm run test`
