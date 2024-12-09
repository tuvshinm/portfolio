import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [selected, setSelected] = useState(false);
  const [eng, setEng] = useState(false);
  const [intro, setIntro] = useState("");
  const [introFinished, setIntroFinished] = useState(false);
  function selectLang(engOrNot: boolean) {
    setSelected(true);
    setEng(engOrNot);
    animateText();
  }
  var charIndex = 0;
  const animateText = () => {
    var currentWord =
      eng === true ? "Миний сайтад тавтай морил." : "Welcome to my site.";
    if (charIndex === currentWord.length + 1) {
      document.getElementById("enterButton")?.classList.toggle("opacity-0");
      return;
    }
    const currentText = currentWord.slice(0, charIndex);
    if (currentText !== intro) {
      setIntro(currentText);
    }
    charIndex++;
    setTimeout(animateText, Math.floor(Math.random() * 160) + 80);
  };
  return (
    <>
      {/* {eng ? "english" : "mongolian"} */}
      {selected ? (
        <main className="h-screen flex justify-center items-center bg-black text-white exo-normal flex-col">
          {introFinished ? (
            <div>Hello, I am Tuvshin.</div>
          ) : (
            <div className="flex flex-col items-center">
              <h1 className="text-5xl">{intro}</h1>
              <Button
                id="enterButton"
                className="w-16 bg-blue-800 rounded relative top-3 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-100 opacity-0"
                onClick={() => {
                  setIntroFinished(true);
                }}
              >
                {eng ? "enter?" : "орох"}
              </Button>
            </div>
          )}
        </main>
      ) : (
        <main className="h-screen flex flex-row justify-center items-center gap-6 bg-black exo-normal">
          <Button
            className="bg-blue-800 rounded hover:bg-blue-600 text-white hover:scale-105 transition-all duration-100"
            onClick={() => selectLang(true)}
          >
            English
          </Button>
          <Button
            className="bg-blue-800 rounded hover:bg-blue-700 text-white hover:scale-105 transition-all duration-100"
            onClick={() => selectLang(false)}
          >
            Монгол
          </Button>
        </main>
      )}
    </>
  );
}

export default App;
