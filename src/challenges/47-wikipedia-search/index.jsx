import { useState } from "react";
const MOCK_ARTICLES = [
  { id: 1, title: "JavaScript", snippet: "A high-level, interpreted programming language..." },
  { id: 2, title: "Java (programming language)", snippet: "A general-purpose programming language..." },
  { id: 3, title: "TypeScript", snippet: "A strict syntactical superset of JavaScript..." },
  { id: 4, title: "Python (programming language)", snippet: "An interpreted high-level language..." },
  { id: 5, title: "React (JavaScript library)", snippet: "A free and open-source front-end library..." },
  { id: 6, title: "Rust (programming language)", snippet: "A multi-paradigm systems programming language..." },
  { id: 7, title: "Go (programming language)", snippet: "A statically typed, compiled language designed at Google..." },
  { id: 8, title: "HTML", snippet: "The standard markup language for documents on the web..." },
  { id: 9, title: "CSS", snippet: "A style sheet language used for describing presentation..." },
  { id: 10, title: "Node.js", snippet: "An open-source, cross-platform runtime environment..." }
];
function searchArticles(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = MOCK_ARTICLES.filter(
        (a) => a.title.toLowerCase().includes(query.toLowerCase()) || a.snippet.toLowerCase().includes(query.toLowerCase())
      );
      resolve(results);
    }, 300);
  });
}
export default function WikipediaSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  return <div>
      <h2>Wikipedia Search</h2>
      <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search articles..."
    style={{ width: "100%", maxWidth: 400, padding: 8 }}
  />
      {loading && <p>Searching...</p>}
      <ul>
        {results.map((article) => <li key={article.id} style={{ marginBottom: 8 }}>
            <strong>{article.title}</strong>
            <p style={{ margin: 0, color: "#666" }}>{article.snippet}</p>
          </li>)}
      </ul>
      {!loading && query && results.length === 0 && <p>No results found.</p>}
    </div>;
}
