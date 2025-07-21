import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Rental Property Tax</h1>
      <p>Welcome! This is a minimal frontend scaffold.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
