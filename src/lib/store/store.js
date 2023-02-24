import {writable} from "svelte/store";

export const username = writable("")
export const password = writable("")

// states:
// 0 - you got phished
// 1 - what is phishing
// 2 - delivery method
// 3 - example of famous case
// 4 - economic impact
// 5 - how long has it been around
// 6 - how was it created
export const state = writable(0)