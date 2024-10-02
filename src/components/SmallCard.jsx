import { useState, useEffect } from "react";

export default function SmallCard() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      let fetchedNews = await (await fetch("news.json")).json();
      setNews(fetchedNews);
    }
    fetchNews();
  }, []);

  return (
    <>
      {news.length > 0 ? (
        news.map((article, i) => (
          <div key={i}>
            <p className="news-number">{article.index}</p>
            <h2>{article.title}</h2>
            <p>{article.text}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
