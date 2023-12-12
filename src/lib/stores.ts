import { writable } from "svelte/store";

export const currentDayStore = writable(0)

export const testData = [
	{ "name": "Emma", "tally": 32 },
	{ "name": "Ethan", "tally": 14 },
	{ "name": "Isabella", "tally": 70 },
	{ "name": "Jayden", "tally": -16 },
	{ "name": "Isabella", "tally": -59 },
	{ "name": "Noah", "tally": 19 },
	{ "name": "Mia", "tally": -37 },
	{ "name": "Will", "tally": -20 },
	{ "name": "Sam", "tally": -91 },
	{ "name": "Brittney", "tally": -98 }
]