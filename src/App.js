import React from 'react';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Grid from './Grid';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to My App</h1>
        <p className="text-lg text-gray-600">
          This is a clean, responsive layout designed to impress.
        </p>
        <Grid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
