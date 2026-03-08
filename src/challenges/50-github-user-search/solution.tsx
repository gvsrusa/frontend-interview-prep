import { useState } from 'react';

const MOCK_USERS = [
  {
    id: 1, username: 'danabramov', name: 'Dan Abramov', bio: 'Working on React',
    followers: 75000, avatar: '👤',
    repos: [
      { name: 'redux', description: 'Predictable state container', stars: 59000, language: 'TypeScript' },
      { name: 'create-react-app', description: 'Set up a modern web app', stars: 99000, language: 'JavaScript' },
    ],
  },
  {
    id: 2, username: 'gaearon', name: 'Dan Abramov (alt)', bio: 'React core team',
    followers: 5000, avatar: '👤',
    repos: [
      { name: 'overreacted.io', description: 'Personal blog', stars: 6500, language: 'JavaScript' },
    ],
  },
  {
    id: 3, username: 'kentcdodds', name: 'Kent C. Dodds', bio: 'Teaching everything',
    followers: 30000, avatar: '👤',
    repos: [
      { name: 'testing-library', description: 'Testing utilities', stars: 17000, language: 'TypeScript' },
      { name: 'mdx-bundler', description: 'Compile MDX', stars: 1500, language: 'TypeScript' },
    ],
  },
  {
    id: 4, username: 'sindresorhus', name: 'Sindre Sorhus', bio: 'Open sourcerer',
    followers: 50000, avatar: '👤',
    repos: [
      { name: 'awesome', description: 'Curated list of awesome lists', stars: 250000, language: 'Markdown' },
      { name: 'got', description: 'HTTP request library', stars: 13000, language: 'TypeScript' },
    ],
  },
];

function searchUsers(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = MOCK_USERS.filter(
        (u) =>
          u.name.toLowerCase().includes(query.toLowerCase()) ||
          u.username.toLowerCase().includes(query.toLowerCase())
      );
      resolve(results);
    }, 300);
  });
}

export default function GitHubUserSearch() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedUser, setExpandedUser] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    try {
      const results = await searchUsers(query);
      setUsers(results);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <form onSubmit={handleSearch}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users..."
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      <div style={{ marginTop: 16 }}>
        {users.map((user) => (
          <div key={user.id} style={{ padding: 12, border: '1px solid #eee', marginBottom: 8 }}>
            <div
              onClick={() => setExpandedUser(expandedUser === user.id ? null : user.id)}
              style={{ cursor: 'pointer' }}
            >
              <span style={{ fontSize: 24 }}>{user.avatar}</span>
              <strong style={{ marginLeft: 8 }}>{user.name}</strong>
              <span style={{ marginLeft: 8, color: '#666' }}>@{user.username}</span>
              <p style={{ margin: '4px 0' }}>{user.bio}</p>
              <small>{user.followers.toLocaleString()} followers</small>
            </div>
            {expandedUser === user.id && (
              <div style={{ marginTop: 8, paddingLeft: 16 }}>
                <h4>Repositories</h4>
                {user.repos.map((repo) => (
                  <div key={repo.name} style={{ padding: '4px 0', borderTop: '1px solid #f0f0f0' }}>
                    <strong>{repo.name}</strong> — {repo.description}
                    <br />
                    <small>⭐ {repo.stars.toLocaleString()} · {repo.language}</small>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        {!loading && query && users.length === 0 && <p>No users found.</p>}
      </div>
    </div>
  );
}
