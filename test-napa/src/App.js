import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageDetail from "./components/detail";
import FormComment from "./components/FormComment";
import Notfound from "./components/Notfound";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/page" element={<PageDetail/>}/>
                <Route path="/comment" element={<FormComment/>}/>
                <Route path="/search" element={<Notfound />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
