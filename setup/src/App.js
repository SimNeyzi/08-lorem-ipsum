import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let generateNum = parseInt(count);
    setText(data.slice(0, count));
  };

  if (count > 8) {
    setCount(8);
  } else if (count < 0) {
    setCount(0);
  }

  return (
    <section className="section-center">
      <h4>Bored of boring Lorem Ipsum?</h4>
      <form className="label-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
