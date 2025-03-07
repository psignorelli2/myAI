import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Good afternoon, I'm ${AI_NAME}, ask me anything about being a D1 athlete`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `I need a second to process this`;
export const HISTORY_CONTEXT_LENGTH: number = 3; // Number of messages to use for context when generating a response
