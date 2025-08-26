import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordList.json";

// 🔧 Función para quitar tildes y pasar a minúsculas
function normalize(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// 🔄 Obtener una palabra aleatoria del JSON
function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [originalWord, setOriginalWord] = useState(getWord);
  const [wordToGuess, setWordToGuess] = useState(normalize(originalWord));
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const normalizedGuessedLetters = guessedLetters.map(normalize);
  const normalizedWord = normalize(originalWord);

  const incorrectLetters = normalizedGuessedLetters.filter(
    (letter) => !normalizedWord.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = normalizedWord
    .split("")
    .every((letter) => normalizedGuessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      const normalizedLetter = normalize(letter);
      if (
        normalizedGuessedLetters.includes(normalizedLetter) ||
        isWinner ||
        isLoser
      )
        return;

      setGuessedLetters((current) => [...current, letter]);
    },
    [normalizedGuessedLetters, isWinner, isLoser]
  );

  // Teclado: letras
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  }, [addGuessedLetter]);

  // Teclado: reiniciar con Enter
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;

      e.preventDefault();
      const newWord = getWord();
      setOriginalWord(newWord);
      setWordToGuess(normalize(newWord));
      setGuessedLetters([]);
    };

    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "auto",
        marginTop: "100px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "4rem",
          fontFamily:"inherit",
          fontWeight: "bold",
        }}
      >
        HANGMAN
      </div>
      <div
        style={{
          fontSize: "2rem",
          fontFamily:"inherit",
          textAlign: "center",
          color: "white",
        }}
      >
        {isWinner && "You have won! Press Enter to try again."}
        {isLoser && "Nice try... Press Enter to try again."}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={originalWord} // mostrar tildes reales
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            normalizedWord.includes(normalize(letter))
          )}
          inactiveLetters={guessedLetters.filter(
            (letter) => !normalizedWord.includes(normalize(letter))
          )}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
