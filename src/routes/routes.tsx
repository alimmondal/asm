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
import PartsOfSpeech from "../pages/DegreeItems/PartsOfSpeech";
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
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch("http://localhost:5000/shoes"),
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
      {
        path: "/ssc",
        element: <Ssc />,
      },
      {
        path: "/hsc",
        element: <Hsc />,
      },
      {
        path: "/degree",
        element: <Degree />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/preposition",
        element: <Preposition />,
      },
      {
        path: "/phrase",
        element: <Phrase />,
      },
      {
        path: "/completing",
        element: <Completing />,
      },
      {
        path: "/tag",
        element: <TagQuestion />,
      },
      {
        path: "/S-Suggestion",
        element: <SSuggestion />,
      },
      {
        path: "/verbs",
        element: <Verbs />,
      },
      {
        path: "/narration",
        element: <Narration />,
      },
      {
        path: "/transformation",
        element: <Transformation />,
      },
      {
        path: "/pronoun",
        element: <Pronoun />,
      },
      {
        path: "/connectors",
        element: <Connectors />,
      },
      {
        path: "/modifier",
        element: <Modifier />,
      },

      {
        path: "/punctuation",
        element: <Punctuation />,
      },

      {
        path: "/syn-ant",
        element: <SynAnt />,
      },
      {
        path: "/HSuggestion",
        element: <HSuggestion />,
      },

      // Degree
      {
        path: "/advertisement",
        element: <Advertisement />,
      },
      {
        path: "/word-rearrange",
        element: <Rearrange />,
      },
      {
        path: "/suffix",
        element: <Suffix />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/dCompleting",
        element: <DCompleting />,
      },
      {
        path: "/dialog",
        element: <Dialog />,
      },
      {
        path: "/partsOfSpeech",
        element: <PartsOfSpeech />,
      },
      {
        path: "/poster",
        element: <Poster />,
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/wh",
        element: <Wh />,
      },
      {
        path: "/suggestion",
        element: <Suggestion />,
      },
      // all items
      {
        path: "/tense",
        element: <Tense />,
      },
      {
        path: "/strongVerb",
        element: <StrongVerb />,
      },
      {
        path: "/voice",
        element: <Voice />,
      },
      //composition
      {
        path: "/paragraph",
        element: <Paragraph />,
      },
      {
        path: "/application",
        element: <Application />,
      },
      {
        path: "/essay",
        element: <Essays />,
      },
      {
        path: "/letter",
        element: <Letter />,
      },
      {
        path: "/email",
        element: <Email />,
      },
      // main menu
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "dashboard/home",
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit/:id",
        element: <EditProfile />,
        // loader: ({ params }) =>
        // fetch(`http://localhost:5000/user/get/${params.id}`),
      },
    ],
  },
]);
