// import the Genkit and Google AI plugin libraries
import { gemini20Flash, googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit';

// configure a Genkit instance
const ai = genkit({
	plugins: [googleAI()],
	model: gemini20Flash, // set default model
});

async function main() {
	// make a generation request
	const { text } = await ai.generate('Hello, Gemini! Tell me what day it is, please.');
	console.log(text);
}

main();