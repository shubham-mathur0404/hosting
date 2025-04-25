// src/components/BookList.jsx
import { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { books as allBooks } from '../data/books';

export default function BookList() {
  const [displayCount, setDisplayCount] = useState(12);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
      setDisplayCount((prev) => Math.min(prev + 12, allBooks.length));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredBooks = allBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  const booksToShow = filteredBooks.slice(0, displayCount);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">📘 Book Hosting</h1>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-1 rounded border dark:bg-gray-700 dark:border-gray-600"
            />
            <button onClick={() => setDarkMode(!darkMode)} className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">
              {darkMode ? 'Light' : 'Dark'}
            </button>
          </div>
        </header>

        <main className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {booksToShow.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </main>

        {booksToShow.length < filteredBooks.length && (
          <p className="text-center text-gray-500 py-4">Loading more books...</p>
        )}
      </div>
    </div>
  );
}
