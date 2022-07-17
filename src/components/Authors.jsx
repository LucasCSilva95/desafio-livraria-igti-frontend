import Author from "./AuthorForm";
import Button from "./Button";

export default function Authors({ children: authors = [] }) {
  return (
    <div>
      <div className="border p-2 flex flex-col">
        <Button labelDescription="New Author" />
        {authors.map(({ autorId, nome, email, telefone }) => {
          return (
            <Author
              id={autorId}
              key={autorId}
              inputName={nome}
              inputEmail={email}
              inputPhone={telefone}
            />
          );
        })}
      </div>
    </div>
  );
}
