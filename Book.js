// src/data/books.js
export const books = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Book Title ${i + 1}`,
    author: `Author ${i + 1}`,
    description: `This is a description for Book ${i + 1}. It contains interesting details about the book.`,
    cover: `https://placehold.co/300x400?text=Book+${i + 1}`,
  }));
  