import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";
import { Button } from "flowbite-react";
function DictionaryApi() {
    const [word, setWord] = useState("");
    const [wordDetails, setWordDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const searchWord = async () => {
        if (!word?.length)
            return;
        setLoading(true);
        try {
            const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
            const data = await res?.json();
            console.log(data[0]);
            setWordDetails(data[0]);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("div", { className: "flex flex-col gap-10 items-center justify-center", children: [_jsx("h1", { className: "", children: "Hello!" }), _jsxs("div", { className: "", children: [_jsxs("div", { className: "w-full flex justify-center pb-10", children: [_jsx("input", { type: "text", onChange: (e) => setWord(e.target.value), value: word, placeholder: "Search your word", className: "input input-secondary" }), _jsx(Button, { onClick: searchWord, disabled: loading, children: loading ? "Loading" : "Search" })] }), _jsx("div", { className: "", children: wordDetails ? (_jsxs("div", { children: [_jsxs("p", { children: ["Searched-Word: ", wordDetails.word] }), wordDetails.phonetics?.map((phonetic, idx) => (_jsxs("div", { children: [_jsxs("p", { children: ["phonetics ", idx + 1, ": ", phonetic.text] }), _jsx(AudioPlayer, { src: phonetic.audio })] }, idx))), _jsx("div", { children: _jsxs("p", { children: ["synonyms:", " ", wordDetails.meanings?.[0]?.synonyms?.length
                                                ? wordDetails.meanings[0].synonyms.join(", ")
                                                : "N/A"] }) }), _jsx("div", { children: _jsxs("p", { children: ["antonyms:", " ", wordDetails.meanings?.[0]?.antonyms?.length
                                                ? wordDetails.meanings[0].antonyms.join(", ")
                                                : "N/A"] }) }), wordDetails.meanings?.[0]?.definitions?.map((def, idx) => (_jsxs("div", { children: [_jsxs("p", { children: ["definition ", idx + 1, ": ", def.definition] }), def.example && _jsxs("p", { children: ["Example: ", def.example] })] }, idx)))] })) : (_jsx("p", { className: "text-center", children: "Your search result will be shown here!" })) })] })] }));
}
export default DictionaryApi;
