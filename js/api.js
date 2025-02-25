export async function fetchInspirationalQuote() {
  try {
    const response = await fetch('http://api.quotable.io/quotes/random');
    // const response = await fetch(targetUrl);
    console.log(response)
    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }
    const data = await response.json();
    console.log(data)
    // Return a formatted quote string: "quote content — author"
    return `${data[0].content} — ${data[0].author}`;
  } catch (error) {
    throw error;
  }
}

export async function submitUserMessage(message) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ message: message })
    });
    if (!response.ok) {
      throw new Error('Failed to submit message');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
