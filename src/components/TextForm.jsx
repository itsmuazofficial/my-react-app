import { element } from "prop-types";
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLOClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!", "success");
  };
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="floatingTextarea"
            rows="6"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
          <label htmlFor="floatingTextarea"></label>
          <button disabled={text.length===0} className="btn btn-primary mx-2 mt-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0}  className="btn btn-primary mx-2 mt-1" onClick={handleLOClick}>
            Convert to Lowercase
          </button>
          <button
          disabled={text.length===0}
            className="btn btn-primary mx-2 mt-1"
            onClick={() => {
              navigator.clipboard.writeText(text);
              props.showAlert("Copied to Clipboard!", "success");
            }}
          >
            Text Copy
          </button>
          <button
          disabled={text.length===0}
            className="btn btn-primary mx-2 mt-1"
            onClick={handleExtraSpace}
          >
            Remove Extra Space
          </button>
          <button
          disabled={text.length===0}
            className="btn btn-primary mx-2 mt-1"
            onClick={() => {
              const newText = "";
              setText(newText);
              props.showAlert("Text cleared!", "success");
            }}
          >
            Clear
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2 style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
          your text summery
        </h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          Minutes read
        </p>
        <h2 style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
          preview
        </h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
