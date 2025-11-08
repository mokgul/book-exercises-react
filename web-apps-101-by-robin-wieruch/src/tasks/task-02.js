import * as React from "react";

export default function Task02() {
    const [books, setBooks] = React.useState([
        'The Road to Javascript',
        'The Road to React'
    ]);

    const [text, setText] = React.useState('');

    const handleAdd = () => {
        setBooks(books.concat(text));
        setText('');
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button
                type="button"
                onClick={handleAdd}
                >
                Add
            </button>

            <List list={books} />
        </div>
    );
}

const List = ({ list }) => (
  <ul>
      {list.map((item, index) => (
          <li key={index}>{item}</li>
      ))}
  </ul>
);