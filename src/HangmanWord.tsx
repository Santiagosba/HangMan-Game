type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

// Normalizar para comparación
function normalize(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
        flexWrap: "wrap",
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        const isGuessed = guessedLetters.some(
          (guessed) => normalize(guessed) === normalize(letter)
        );

        return (
          <span style={{ borderBottom: ".1em solid white" }} key={index}>
            <span
              style={{
                visibility: isGuessed || reveal ? "visible" : "hidden",
                color: !isGuessed && reveal ? "red" : "white",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
