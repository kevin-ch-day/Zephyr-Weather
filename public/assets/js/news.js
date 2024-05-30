const newsApiKey = 'YOUR_NEWS_API_KEY';

export function fetchWeatherNews() {
    fetch(`https://newsapi.org/v2/everything?q=weather&apiKey=${newsApiKey}`)
        .then(response => response.json())
        .then(data => {
            const newsData = document.getElementById('news-data');
            newsData.innerHTML = data.articles.map(article => `
                <div>
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            `).join('');
        })
        .catch(error => console.error('Error fetching weather news:', error));
}
