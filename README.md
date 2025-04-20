# AI Fiddle

A simple project for experimenting with Google's Gemini AI API using the Genkit library.

## Setup

1. Install dependencies:
```bash
npm install genkit @genkit-ai/googleai
```

2. Configure your environment (requires Google AI API credentials)

## Usage

The project currently demonstrates a basic interaction with Gemini 2.0:

```javascript
const { text } = await ai.generate('Hello, Gemini!');
console.log(text);
```

## Features

- Integration with Google's Gemini 2.0 Flash model
- Simple async/await API interface
- Extensible plugin system through Genkit

## Requirements

- Node.js
- Google AI API credentials
- Genkit and Google AI plugin packages

## Running

Execute the sample script:

```bash
node index.js
```