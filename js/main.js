import { fetchInspirationalQuote } from './api.js';
import { displayQuote, displayError } from './ui.js';
import { attachEventListeners } from './events.js';

async function init() {
  try {
    // Fetch and display a quote when the page loads.
    const quote = await fetchInspirationalQuote();
    displayQuote(quote);
  } catch (error) {
    displayError(error);
  }
  attachEventListeners();
}

init();
