import { useState, useEffect, useRef } from 'react';

// Mock API returning random metrics
function fetchMetrics() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
        requests: Math.floor(Math.random() * 1000),
        uptime: `${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`,
      });
    }, 200);
  });
}

export default function PollingDashboard() {
  const [data, setData] = useState(null);
  const [isPolling, setIsPolling] = useState(false);
  const [interval, setIntervalMs] = useState(3000);
  const [fetchCount, setFetchCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(null);

  // TODO: Implement polling logic
  // 1. When isPolling is true, set up setInterval to call fetchMetrics
  // 2. Update data, fetchCount, and lastUpdated on each fetch
  // 3. Clear interval when isPolling becomes false or on unmount
  // 4. Restart interval when interval value changes

  return (
    <div>
      <h2>Polling Dashboard</h2>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button onClick={() => setIsPolling(true)} disabled={isPolling}>Start</button>
        <button onClick={() => setIsPolling(false)} disabled={!isPolling}>Stop</button>
        <select value={interval} onChange={(e) => setIntervalMs(Number(e.target.value))}>
          <option value={1000}>1s</option>
          <option value={3000}>3s</option>
          <option value={5000}>5s</option>
          <option value={10000}>10s</option>
        </select>
      </div>
      <p>Fetch count: {fetchCount}</p>
      {lastUpdated && <p>Last updated: {lastUpdated}</p>}
      {data && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div style={{ padding: 12, border: '1px solid #ccc' }}>
            <strong>CPU</strong>
            <p>{data.cpu}%</p>
          </div>
          <div style={{ padding: 12, border: '1px solid #ccc' }}>
            <strong>Memory</strong>
            <p>{data.memory}%</p>
          </div>
          <div style={{ padding: 12, border: '1px solid #ccc' }}>
            <strong>Requests</strong>
            <p>{data.requests}/s</p>
          </div>
          <div style={{ padding: 12, border: '1px solid #ccc' }}>
            <strong>Uptime</strong>
            <p>{data.uptime}</p>
          </div>
        </div>
      )}
    </div>
  );
}
