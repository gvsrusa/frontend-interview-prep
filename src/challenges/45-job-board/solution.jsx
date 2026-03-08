import { useState, useEffect } from "react";
const PAGE_SIZE = 6;
const ALL_JOBS = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: ["Frontend Engineer", "Backend Developer", "Full Stack Dev", "DevOps Engineer", "UI Designer", "Data Scientist"][i % 6],
  company: ["Google", "Meta", "Amazon", "Netflix", "Apple", "Microsoft"][i % 6],
  location: ["Remote", "San Francisco", "New York", "Seattle", "Austin", "London"][i % 6],
  type: i % 2 === 0 ? "Full-time" : "Contract"
}));
function fetchJobs(page) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * PAGE_SIZE;
      resolve({
        jobs: ALL_JOBS.slice(start, start + PAGE_SIZE),
        total: ALL_JOBS.length,
        page,
        pageSize: PAGE_SIZE
      });
    }, 400);
  });
}
export default function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const totalPages = Math.ceil(total / PAGE_SIZE);
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchJobs(page).then((res) => {
      if (!cancelled) {
        setJobs(res.jobs);
        setTotal(res.total);
      }
    }).catch((err) => {
      if (!cancelled) setError(err.message);
    }).finally(() => {
      if (!cancelled) setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [page]);
  return <div>
      <h2>Job Board</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}
      <div>
        {jobs.map((job) => <div key={job.id} style={{ padding: 12, borderBottom: "1px solid #eee" }}>
            <h3>{job.title}</h3>
            <p>{job.company} — {job.location} — {job.type}</p>
          </div>)}
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 16, alignItems: "center" }}>
        <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>
          Next
        </button>
      </div>
    </div>;
}
