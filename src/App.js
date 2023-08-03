import "./App.css";
import Home from "./Layouts/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const NotFound = () => {
  return <h1>404 - Page Not Found</h1>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
