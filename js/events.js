import { fetchInspirationalQuote, submitUserMessage } from './api.js';
import { displayQuote, displayFeedbackResponse, displayError } from './ui.js';

export function attachEventListeners() {
  const newQuoteBtn = document.getElementById('new-quote-btn');
  let isFetching = false;
  if (newQuoteBtn) {
    newQuoteBtn.addEventListener('click', async () => {
      if (isFetching) return;
      isFetching = true;
      try {
        const quote = await fetchInspirationalQuote();
        displayQuote(quote);
      } catch (error) {
        displayError(error);
      } finally {
        // Prevent multiple requests by disabling the button for 3 seconds
        setTimeout(() => {
          isFetching = false;
        }, 3000);
      }
    });
  }

  const feedbackForm = document.getElementById('feedback-form');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const userMessageEl = document.getElementById('user-message');
      if (userMessageEl) {
        const message = userMessageEl.value;
        try {
          const response = await submitUserMessage(message);
          displayFeedbackResponse(response);
          // Clear the textarea after submission.
          userMessageEl.value = '';
        } catch (error) {
          displayError(error);
        }
      }
    });
  }
}
