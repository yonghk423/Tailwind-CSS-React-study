import Navbar from './components/Navbar';
import './App.css';
import Main from './components/Main';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <HeadlineCards />
      <Food />
    </div>
  );
}

export default App;
