import { useState, useEffect, useRef } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  // Header data
  const resetAttempts = (e) => {
    if (attempts) return;
    setAttempts(7);
  };

  // Form data
  // useRef for scrolling upon submission
  const myRef = useRef(null);

  const [isPending, setIsPending] = useState(false);
  const [textAreaText, setTextAreaText] = useState("");
  const [attempts, setAttempts] = useState(7);
  const presetButton = (preset) => setTextAreaText(preset);
  const handleChange = (e) => setTextAreaText(e.target.value);

  // Data to reference for the POST call to openAI
  let data = {
    prompt: textAreaText,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET_KEY}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setCards([
          ...cards,
          {
            id: responseJson.id,
            prompt: textAreaText,
            promptResponse: responseJson.choices[0].text,
          },
        ]);
        setTextAreaText("");
        setAttempts(attempts - 1);
        setIsPending(false);
        myRef.current.scrollIntoView();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Card data
  const [cards, setCards] = useState([]);

  // Save response upon leaving page via localStorage
  useEffect(() => {
    if (
      window.localStorage.getItem("cards") === null &&
      window.localStorage.getItem("attempts") === null
    )
      return;
    setCards(JSON.parse(window.localStorage.getItem("cards")));
    setAttempts(JSON.parse(window.localStorage.getItem("attempts")));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("cards", JSON.stringify(cards));
    window.localStorage.setItem("attempts", JSON.stringify(attempts));
  }, [attempts, cards]);

  return (
    <div className="App flex flex-col min-h-screen bg-emerald-900 lg:mx-10">
      <Header resetAttempts={resetAttempts} />
      <Hero />
      <div
        ref={myRef}
        className="flex-1 flex flex-col items-center gap-10 p-10 text-gray-800 bg-white"
      >
        <h1 className="max-w-5xl font-extrabold text-4xl">
          Describe your brand in one word. Enter it into the shop name
          generator.
        </h1>
        <Form
          isPending={isPending}
          textAreaText={textAreaText}
          handleChange={handleChange}
          presetButton={presetButton}
          handleSubmit={handleSubmit}
          attempts={attempts}
        />
        <h1 className="font-extrabold text-4xl">Responses</h1>
        <div className="max-w-3xl w-full flex flex-col-reverse gap-4">
          {cards?.map(({ id, prompt, promptResponse }) => (
            <Card key={id} prompt={prompt} promptResponse={promptResponse} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
