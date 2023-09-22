import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodolistPage from "./pages/TodolistPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodolistPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
