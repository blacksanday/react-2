import { useState, useRef } from "react";


function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

export default function App() {
  const [name, setName] = useState("");
  const [showStory, setShowStory] = useState(false);
  const [xItem, setXItem] = useState("");
  const [yItem, setYItem] = useState("");
  const [zItem, setZItem] = useState("");
  const [ukus, setUkus] = useState("us");
  const nameInputRef = useRef();
  const ukusRef = useRef();


  function generateRandomStory(event) {
    event.preventDefault();
    const xItemArray = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const yItemArray = ["the soup kictchen", "Disneyland", "the White House"];
    const zItemArray = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

    setXItem(randomValueFromArray(xItemArray));
    setYItem(randomValueFromArray(yItemArray));
    setZItem(randomValueFromArray(zItemArray));

    const inputName = nameInputRef.current.value;
    setName(inputName || "Bob");

    setShowStory(true);
    ukusRef.current=ukus;
  
  }




  function checkedUkus(event) {
    setUkus(event.target.value);
  }

  function convertCelsius(temprature) {
    return (temprature - 32) * 0.555;
  }

  function convertStone(weighs) {
    return weighs * 0.071429;
  }


  return (
    <>
      <form onSubmit={generateRandomStory}>
        <div>
          <label htmlFor="customname">Enter custom name:</label>
          <input type="text" placeholder="" ref={nameInputRef} />
        </div>
        <div>
          <label htmlFor="us" >US</label>
          <input type="radio" value="us" checked={ukus === "us"} onClick={checkedUkus}  />
          <label htmlFor="uk" >UK</label>
          <input type="radio" value="uk" checked={ukus === "uk"} onClick={checkedUkus} />
        </div>
        <div>

          <button type="submit">Generate random story</button>
        </div>
        {showStory && (
          <p>
            It was {ukusRef.current == "us" ? 94 : Math.round(convertCelsius(94))}{ukusRef.current  === "us" ? " fahrenheit" : "centigrade"} outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}.
            {name} saw the whole thing, but was not surprised — {xItem} weighs {ukusRef.current === "us" ? 300 : Math.round(convertStone(300))}
            {ukusRef.current === "us" ? "pounds" : "stone"}, and it was a hot day.
          </p>
        )}
      </form>
    </>
  );
}