import React, { useState, useTransition } from "react";

function Concurrent() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value); // Urgent update (typing)

    startTransition(() => {
      // Non-urgent update (filtering list)
      setList(new Array(20000).fill(e.target.value));
    });
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      {isPending ? <p>Loading...</p> : <ul>{list.map((item, i) => <li key={i}>{item}</li>)}</ul>}
    </div>
  );
}

export default Concurrent;