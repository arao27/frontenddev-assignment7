import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const MovieContext = createContext();

// Provider
export const MovieProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  const addToWatchlist = (movie) => {
    setWatchlist((prev) => {
      if (!prev.find((m) => m.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist((prev) => prev.filter((m) => m.id !== movieId));
  };

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <MovieContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </MovieContext.Provider>
  );
};