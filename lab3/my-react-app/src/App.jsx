import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;