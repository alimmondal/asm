import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoute from "./private/PrivateRoute";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import Ssc from "../pages/Ssc";
import Hsc from "../pages/Hsc";
import Degree from "../pages/Degree";
import Article from "../pages/hscItems/Article";
import Phrase from "../pages/hscItems/Phrase";
import Completing from "../pages/hscItems/Completing";
import Verbs from "../pages/hscItems/Verbs";
import Preposition from "../pages/hscItems/Preposition";
import Connectors from "../pages/hscItems/Connectors";
import Modifier from "../pages/hscItems/Modifier";
import Transformation from "../pages/hscItems/Transformation";
import Punctuation from "../pages/hscItems/Punctuation";
import Suggestion from "../pages/DegreeItems/Suggestion";
import Advertisement from "../pages/DegreeItems/Advertisement";
import DCompleting from "../pages/DegreeItems/DCompleting";
import Dialog from "../pages/DegreeItems/Dialog";
import PartsOfSpeech from "../pages/allItems/PartsOfSpeech";
import Poster from "../pages/DegreeItems/Poster";
import Report from "../pages/DegreeItems/Report";
import HSuggestion from "../pages/hscItems/HSuggestion";
import Wh from "../pages/DegreeItems/Wh";
import Tense from "../pages/allItems/Tense";
import Narration from "../pages/hscItems/Narration";
import StrongVerb from "../pages/allItems/StrongVerb";
import Voice from "../pages/allItems/Voice";
import SynAnt from "../pages/hscItems/SynAnt";
import Paragraph from "../pages/composition/Paragraph";
import Application from "../pages/composition/Application";
import Essays from "../pages/composition/Essays";
import Letter from "../pages/composition/Letter";
import Email from "../pages/composition/Email";
import Pronoun from "../pages/hscItems/Pronoun";
import TagQuestion from "../pages/sscItems/TagQuestion";
import SSuggestion from "../pages/sscItems/SSuggestion";
import Notice from "../pages/DegreeItems/Notice";
import Suffix from "../pages/DegreeItems/Suffix";
import Rearrange from "../pages/DegreeItems/Rearrange";
import SearchResults from "../pages/SearchResults";
import BoardQuestion from "../pages/hscItems/BoardQuestion";
import DPartsOfSpeech from "../pages/DegreeItems/DPartsOfSpeech";
import Sentence from "../pages/allItems/Sentence";
import SscQuestion from "../pages/sscItems/SscQuestion";
import ModelTest from "../pages/hscItems/ModelTest";
import CompetingStory from "../pages/hscItems/CompetingStory";
import Graph from "../pages/hscItems/Graph";
import FirstPaperModel from "../pages/hscItems/FirstPaperModel";
import Correction from "../pages/DegreeItems/Correction";
import Test from "../pages/allItems/Test";
import OxfordWords from "../pages/allItems/OxfordWords";
import Pronunciation from "../pages/allItems/Pronunciation";
import StoryVocabulary from "../pages/allItems/StoryVocabulary";
import Dictionary from "../pages/allItems/Dictionary";
import Grammar from "../pages/allItems/Grammar";
export const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(MainLayout, {}),
        errorElement: _jsx(ErrorPage, {}),
        children: [
            {
                path: "/",
                element: _jsx(Home, {}),
                // loader: () => fetch("http://localhost:5000/shoes"),
            },
            {
                path: "/search",
                element: _jsx(SearchResults, {}),
            },
            {
                path: "/ssc",
                element: _jsx(Ssc, {}),
            },
            {
                path: "/modelTestFirstPaper",
                element: _jsx(FirstPaperModel, {}),
            },
            {
                path: "/hsc",
                element: _jsx(Hsc, {}),
            },
            {
                path: "/degree",
                element: _jsx(Degree, {}),
            },
            {
                path: "/HQuestion",
                element: _jsx(BoardQuestion, {}),
            },
            {
                path: "/modelTest",
                element: _jsx(ModelTest, {}),
            },
            {
                path: "/article",
                element: _jsx(Article, {}),
            },
            {
                path: "/story",
                element: _jsx(CompetingStory, {}),
            },
            {
                path: "/graph",
                element: _jsx(Graph, {}),
            },
            {
                path: "/preposition",
                element: _jsx(Preposition, {}),
            },
            {
                path: "/phrase",
                element: _jsx(Phrase, {}),
            },
            {
                path: "/completing",
                element: _jsx(Completing, {}),
            },
            {
                path: "/sscQuestion",
                element: _jsx(SscQuestion, {}),
            },
            {
                path: "/tag",
                element: _jsx(TagQuestion, {}),
            },
            {
                path: "/S-Suggestion",
                element: _jsx(SSuggestion, {}),
            },
            {
                path: "/verbs",
                element: _jsx(Verbs, {}),
            },
            {
                path: "/narration",
                element: _jsx(Narration, {}),
            },
            {
                path: "/transformation",
                element: _jsx(Transformation, {}),
            },
            {
                path: "/pronoun",
                element: _jsx(Pronoun, {}),
            },
            {
                path: "/connectors",
                element: _jsx(Connectors, {}),
            },
            {
                path: "/modifier",
                element: _jsx(Modifier, {}),
            },
            {
                path: "/punctuation",
                element: _jsx(Punctuation, {}),
            },
            {
                path: "/syn-ant",
                element: _jsx(SynAnt, {}),
            },
            {
                path: "/HSuggestion",
                element: _jsx(HSuggestion, {}),
            },
            // Degree
            {
                path: "/advertisement",
                element: _jsx(Advertisement, {}),
            },
            {
                path: "/correction",
                element: _jsx(Correction, {}),
            },
            {
                path: "/DPartsOfSpeech",
                element: _jsx(DPartsOfSpeech, {}),
            },
            {
                path: "/word-rearrange",
                element: _jsx(Rearrange, {}),
            },
            {
                path: "/suffix",
                element: _jsx(Suffix, {}),
            },
            {
                path: "/notice",
                element: _jsx(Notice, {}),
            },
            {
                path: "/dCompleting",
                element: _jsx(DCompleting, {}),
            },
            {
                path: "/dialog",
                element: _jsx(Dialog, {}),
            },
            {
                path: "/partsOfSpeech",
                element: _jsx(PartsOfSpeech, {}),
            },
            {
                path: "/poster",
                element: _jsx(Poster, {}),
            },
            {
                path: "/report",
                element: _jsx(Report, {}),
            },
            {
                path: "/wh",
                element: _jsx(Wh, {}),
            },
            {
                path: "/suggestion",
                element: _jsx(Suggestion, {}),
            },
            // all items
            { path: "/pronunciation", element: _jsx(Pronunciation, {}) },
            { path: "/storyVocabulary", element: _jsx(StoryVocabulary, {}) },
            {
                path: "/test",
                element: _jsx(Test, {}),
            },
            {
                path: "/grammar",
                element: _jsx(Grammar, {}),
            },
            {
                path: "/words",
                element: _jsx(OxfordWords, {}),
            },
            {
                path: "/dictionary",
                element: _jsx(Dictionary, {}),
            },
            {
                path: "/sentence",
                element: _jsx(Sentence, {}),
            },
            {
                path: "/tense",
                element: _jsx(Tense, {}),
            },
            {
                path: "/strongVerb",
                element: _jsx(StrongVerb, {}),
            },
            {
                path: "/voice",
                element: _jsx(Voice, {}),
            },
            //composition
            {
                path: "/paragraph",
                element: _jsx(Paragraph, {}),
            },
            {
                path: "/application",
                element: _jsx(Application, {}),
            },
            {
                path: "/essay",
                element: _jsx(Essays, {}),
            },
            {
                path: "/letter",
                element: _jsx(Letter, {}),
            },
            {
                path: "/email",
                element: _jsx(Email, {}),
            },
            // main menu
            {
                path: "/about",
                element: _jsx(About, {}),
            },
            {
                path: "/login",
                element: _jsx(Login, {}),
            },
            {
                path: "/register",
                element: _jsx(Registration, {}),
            },
            {
                path: "/dashboard",
                element: _jsx(Dashboard, {}),
            },
        ],
    },
    {
        path: "dashboard",
        element: (_jsx(PrivateRoute, { children: _jsx(DashboardLayout, {}) })),
        errorElement: _jsx(ErrorPage, {}),
        children: [
            {
                // path: "dashboard/home",
                index: true,
                element: (_jsx(PrivateRoute, { children: _jsx(Dashboard, {}) })),
            },
            {
                path: "profile",
                element: _jsx(Profile, {}),
            },
            {
                path: "profile/edit/:id",
                element: _jsx(EditProfile, {}),
                // loader: ({ params }) =>
                // fetch(`http://localhost:5000/user/get/${params.id}`),
            },
        ],
    },
]);
