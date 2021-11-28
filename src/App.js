import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Text from "./components/Text";
import giphy from "./loading.gif";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [flag, setFlag] = useState(false);
  // console.log(count);

  //Fuction to change values of counter on clicking buttons
  function Increment() {
    setCount(Number(count) + 1);
    setFlag(true);
  }
  function Decrement() {
    setCount(Number(count) - 1);
    setFlag(true);
  }

  //CALLING API:
  useEffect(() => {
    async function callApi() {
      let data = await fetch(
        "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/HimanshuYadav.json"
      )
        .then((res) => res.json())
        .then((data) => data);
      console.log(data);
      if (data != null) {
        setCount(Number(data));
        setFlag(true);
      }
    }
    callApi();
  }, []);
  useEffect(() => {
    //PUT METHOD:
    (async function putData() {
      let requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ HimanshuYadav: Number(count) }),
      };
      await fetch(
        "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
        requestOptions
      )
        .then((res) => res.json())
        .then((obj) => console.log(obj));
      setFlag(false);
    })();
  }, [count]);

  return (
    <>
      {flag ? (
        <div className="loader">
          <img src={giphy} alt="Loading" width="15px" height="15px" />
          <span> Saving counter value</span>
        </div>
      ) : (
        <div className="loader">Count saved</div>
      )}
      <div className="container">
        <Button type={"Decrease"} change={Decrement} />
        <Counter value={count} setcount={setCount} setflag={setFlag} />
        <Button type={"Increase"} change={Increment} />
      </div>
      <Text value={count} />
    </>
  );
}

export default App;
