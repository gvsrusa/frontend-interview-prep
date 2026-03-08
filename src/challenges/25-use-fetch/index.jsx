import { useState } from "react";
function useFetch(url) {
  return { data: null, loading: false, error: null };
}
export default function FetchDemo() {
  const [userId, setUserId] = useState(1);
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return <div>
      <h2>useFetch Demo</h2>
      <button onClick={() => setUserId((id) => id + 1)}>Next User</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>User: {data.name}</p>}
    </div>;
}
export { useFetch };
