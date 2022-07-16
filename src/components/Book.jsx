import noImage from "../images/noBookImage.png";

export default function Book({ children: book = null }) {
  if (!book) {
    return <div>Impossible to render the book</div>;
  }

  const { nome = "Book's name", valor = "Book value", estoque = 0 } = book;

  return (
    <div className="flex flex-col p-2 cursor-pointer">
      <div>
        <img src={noImage} alt={nome} />
      </div>
      <div className="p-2 flex flex-col">
        <span>{nome}</span>
        <span>R$ {valor}</span>
        <span>
          {estoque > 0
            ? estoque === 1
              ? `${estoque} unity`
              : `${estoque} unities`
            : `Product unavailable`}
        </span>
      </div>
    </div>
  );
}
