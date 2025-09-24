import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";

interface Phonetic {
  text?: string;
  audio?: string;
}

interface Definition {
  definition: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

interface WordDetails {
  word: string;
  phonetics?: Phonetic[];
  meanings?: Meaning[];
}

function DictionaryApi() {
  const [word, setWord] = useState("");
  const [wordDetails, setWordDetails] = useState<WordDetails | null>(null);
  const [loading, setLoading] = useState(false);

  const searchWord = async () => {
    if (!word?.length) return;
    setLoading(true);
    try {
      const res = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
      );
      const data = await res?.json();

      console.log(data[0]);
      setWordDetails(data[0]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-1/2 mx-auto flex flex-col items-center justify-center">
      <h1 className="">Hello!</h1>
      <div className="">
        <input
          onChange={(e) => setWord(e.target.value)}
          value={word}
          placeholder="Search your word"
        />
        <button onClick={searchWord} disabled={loading}>
          {loading ? "Loading" : "Search"}
        </button>
        <div className="">
          {wordDetails ? (
            <div>
              <p>Searched-Word: {wordDetails.word}</p>

              {wordDetails.phonetics?.map((phonetic, idx) => (
                <div key={idx}>
                  <p>
                    phonetics {idx + 1}: {phonetic.text}
                  </p>
                  <AudioPlayer src={phonetic.audio} />
                </div>
              ))}

              {/* Synonyms */}
              <div>
                <p>
                  synonyms:{" "}
                  {wordDetails.meanings?.[0]?.synonyms?.length
                    ? wordDetails.meanings[0].synonyms.join(", ")
                    : "N/A"}
                </p>
              </div>

              {/* Antonyms */}
              <div>
                <p>
                  antonyms:{" "}
                  {wordDetails.meanings?.[0]?.antonyms?.length
                    ? wordDetails.meanings[0].antonyms.join(", ")
                    : "N/A"}
                </p>
              </div>

              {/* Definitions */}
              {wordDetails.meanings?.[0]?.definitions?.map((def, idx) => (
                <div key={idx}>
                  <p>
                    definition {idx + 1}: {def.definition}
                  </p>
                  {def.example && <p>Example: {def.example}</p>}
                </div>
              ))}
            </div>
          ) : (
            <p>Your search result shown here!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DictionaryApi;
