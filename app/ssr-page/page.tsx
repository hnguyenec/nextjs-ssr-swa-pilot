import React from 'react';

// This is a Server Component (by default in 'app' directory)
async function ServerSSRPage() {
  const serverTimestamp = new Date().toISOString();

  return (
    <div>
      <h1>Next.js 14+ SSR with App Router (Server Component)!</h1>
      <p>This page is Server-Side Rendered using a Server Component in the App Router.</p>
      <p>Server Timestamp: {serverTimestamp}</p>
    </div>
  );
}

export default ServerSSRPage;