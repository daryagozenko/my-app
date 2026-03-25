import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <header className="App-header">
      <h1>Hello World!</h1>
      <p>Мое первое React приложение на GitHub Pages</p>
      <Link to="/about">О нас</Link>
    </header>
  );
}

function About() {
  return (
    <header className="App-header">
      <h1>О нас</h1>
      <p>Это страница информации о нашем приложении</p>
      <Link to="/">На главную</Link>
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;