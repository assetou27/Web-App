export function displayQuote(quote) {
    const quoteContainer = document.getElementById('quote-container');
    if (quoteContainer) {
      quoteContainer.textContent = quote;
    }
  }
  
  export function displayFeedbackResponse(response) {
    const feedbackDiv = document.getElementById('feedback-response');
    if (feedbackDiv) {
      feedbackDiv.textContent = "Thank you for sharing! Your message ID: " + response.id;
    }
  }
  
  export function displayError(error) {
    // For simplicity, we use an alert. You might want to improve error handling.
    alert("Error: " + error.message);
  }
  
  