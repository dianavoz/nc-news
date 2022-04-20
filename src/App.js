import { Route, Routes } from "react-router-dom";
import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import ArticleById from "./components/ArticleById";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/articles/:article_id" element={<ArticleById />}></Route>
      </Routes>
    </div>
  );
}

export default App;
