import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Narration from "./hscItems/Narration";
import Tense from "./allItems/Tense";
import Paragraph from "./composition/Paragraph";
import Application from "./composition/Application";
import Essays from "./composition/Essays";
import TagQuestion from "./sscItems/TagQuestion";
import Article from "./hscItems/Article";
import Verbs from "./hscItems/Verbs";
import Suffix from "./DegreeItems/Suffix";
import Completing from "./hscItems/Completing";
import DCompleting from "./DegreeItems/DCompleting";
import Phrase from "./hscItems/Phrase";
import Preposition from "./hscItems/Preposition";
import Transformation from "./hscItems/Transformation";
import Pronoun from "./hscItems/Pronoun";
import Connectors from "./hscItems/Connectors";
import Modifier from "./hscItems/Modifier";
import Punctuation from "./hscItems/Punctuation";
import Suggestion from "./DegreeItems/Suggestion";
import HSuggestion from "./hscItems/HSuggestion";
import SSuggestion from "./sscItems/SSuggestion";
import Wh from "./DegreeItems/Wh";
import SynAnt from "./hscItems/SynAnt";
import PartsOfSpeech from "./allItems/PartsOfSpeech";
import Dialog from "./DegreeItems/Dialog";
import Advertisement from "./DegreeItems/Advertisement";
import Poster from "./DegreeItems/Poster";
import Notice from "./DegreeItems/Notice";
// Define mockData with components
const mockData = [
    {
        id: 1,
        title: "Punctuation Punctuations",
        content: _jsx(Punctuation, {}),
    },
    {
        id: 2,
        title: "Modifier Modifiers",
        content: _jsx(Modifier, {}),
    },
    {
        id: 3,
        title: "connectors linkingWords linkingWord linking connector",
        content: _jsx(Connectors, {}),
    },
    {
        id: 4,
        title: "pronoun clearTheUnclearPronoun",
        content: _jsx(Pronoun, {}),
    },
    {
        id: 5,
        title: "transformation, Changing sentence ChangingSentence",
        content: _jsx(Transformation, {}),
    },
    {
        id: 6,
        title: "fillingGaps idiom phrase gapFilling",
        content: _jsx(Phrase, {}),
    },
    {
        id: 7,
        title: "fillingGaps idiom phrase gapFilling",
        content: _jsx(Phrase, {}),
    },
    {
        id: 8,
        title: "prep preposition",
        content: _jsx(Preposition, {}),
    },
    {
        id: 9,
        title: "Dcompleting, degreeCompleting",
        content: _jsx(DCompleting, {}),
    },
    {
        id: 10,
        title: "completing,hscCompleting",
        content: _jsx(Completing, {}),
    },
    {
        id: 11,
        title: "Tag, Tags,tag Question",
        content: _jsx(TagQuestion, {}),
    },
    {
        id: 12,
        title: "suffix, prefix",
        content: _jsx(Suffix, {}),
    },
    {
        id: 13,
        title: "Article",
        content: _jsx(Article, {}),
    },
    {
        id: 14,
        title: "Verbs, right form of verbs",
        content: _jsx(Verbs, {}),
    },
    {
        id: 15,
        title: "Narration practice",
        content: _jsx(Narration, {}),
    },
    {
        id: 16,
        title: "present indefinite tense Tense",
        content: _jsx(Tense, {}),
    },
    {
        id: 17,
        title: "Paragraph",
        content: _jsx(Paragraph, {}),
    },
    {
        id: 18,
        title: "Application",
        content: _jsx(Application, {}),
    },
    {
        id: 19,
        title: "Composition",
        content: _jsx(Essays, {}),
    },
    {
        id: 20,
        title: "Suggestion sscSuggestion DegreeSuggestion",
        content: _jsx(Suggestion, {}),
    },
    {
        id: 21,
        title: "Suggestion sscSuggestion DegreeSuggestion",
        content: _jsx(HSuggestion, {}),
    },
    {
        id: 22,
        title: "Suggestion sscSuggestion DegreeSuggestion",
        content: _jsx(SSuggestion, {}),
    },
    {
        id: 23,
        title: "wh whQuestion",
        content: _jsx(Wh, {}),
    },
    {
        id: 24,
        title: "Synonym antonym SynonymsAntonyms",
        content: _jsx(SynAnt, {}),
    },
    {
        id: 25,
        title: "PartsOfSpeech adjective noun conjunction",
        content: _jsx(PartsOfSpeech, {}),
    },
    {
        id: 26,
        title: "Dialogue",
        content: _jsx(Dialog, {}),
    },
    {
        id: 27,
        title: "Advertisements",
        content: _jsx(Advertisement, {}),
    },
    {
        id: 28,
        title: "poster",
        content: _jsx(Poster, {}),
    },
    {
        id: 29,
        title: "notice",
        content: _jsx(Notice, {}),
    },
    // Add more items with different components
];
const SearchResults = () => {
    const location = useLocation();
    const { searchTerm } = queryString.parse(location.search);
    const [results, setResults] = useState([]);
    useEffect(() => {
        if (typeof searchTerm === "string") {
            const filteredResults = mockData.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setResults(filteredResults);
        }
        else {
            setResults([]);
        }
    }, [searchTerm]);
    return (_jsxs("div", { className: "", children: [_jsxs("h1", { children: ["Results for: ", searchTerm] }), _jsx("div", { children: results.length > 0 ? (results.map((item) => (_jsx("div", { children: _jsx("div", { children: item.content }) }, item.id)))) : (_jsx("p", { children: "No results found." })) })] }));
};
export default SearchResults;
