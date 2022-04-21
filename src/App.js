import { Route, Routes } from "react-router-dom";
import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import ArticleById from "./components/ArticleById";
import Topics from "./components/Topics";

function App() {
  return (
    <div className="App">
      <Header />
      <Topics />
      <Routes>
        <Route path="/" element={<Articles />}></Route>
        <Route path="/articles/:article_id" element={<ArticleById />}></Route>
        <Route path="/topics/:topic" element={<Articles />}></Route>
      </Routes>
    </div>
  );
}

export default App;
