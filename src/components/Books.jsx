import Book from "./Book";

export default function Books({ children: books = [] }) {
  return (
    <div>
      <h3 className="text-center font-semibold">{books.length} books</h3>

      <div className="border p-2 flex flex-row items-center justify-center flex-wrap">
        {books.map((book) => {
          return <Book key={book.livroId}>{book}</Book>;
        })}
      </div>
    </div>
  );
}
