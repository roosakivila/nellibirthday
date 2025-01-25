export function fetchQuotes() {
    const quoteUrl = "https://raw.githubusercontent.com/roosakivila/nellibirthday/refs/heads/main/motivationalquotes.json";

    return fetch(quoteUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched data:', data.data);
            return data.data;
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
}