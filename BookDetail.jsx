// src/components/BookCard.jsx
import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
        <img src={book.cover} alt={book.title} className="w-full h-60 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold">{book.title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">{book.author}</p>
        </div>
      </div>
    </Link>
  );
}
