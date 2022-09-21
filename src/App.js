import Navbar from './components/Navbar';
import './App.css';
import Main from './components/Main';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
