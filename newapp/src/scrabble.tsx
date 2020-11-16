import * as React from "react";
import { _getSampleUserInfo } from "../../shared-lib/helpers/api-helper";
import { Container, Row, Col } from "reactstrap";

export function Scrabble() {
  const [count, setCount] = React.useState(0);
  const [word, setWord] = React.useState("");
  const [letters, setLetters] = React.useState([]);
  function getNames() {
    _getSampleUserInfo()
      .then(function (result) {
        let s = result.words[0];
        setCount(s.length);
        setWord(s);
        let letters = [];
        s.split("").map((l) => {
          letters.push(l);
        });
        console.log(s);
        setLetters([...letters]);
      })
      .catch((e) => {
        alert("there was an error, check console.");
        console.log(e);
      });
  }
  return (
    <div style={{ padding: 10 }}>
      <button onClick={getNames} type="button" className="btn btn-primary">
        Start
      </button>
      <div style={{margin:10}}>
        <p>Guess the word!!!</p>
        <em>You have {count} tries left.</em>
      </div>
      {word.length >= 0 ? (
        <Container style={{  }}>
              {letters.map((s, i) => {
                return (
                    <input className="input" key={i}></input>
                );
              })}
        </Container>
      ) : (
        ""
      )}
    </div>
  );
}
