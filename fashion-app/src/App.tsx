import './App.css';
import Home from './app/pages/home/Home';
import '../src/app/stylesheet/styles.css'
import Header from './app/shared/components/layout/Header';
import Footer from './app/shared/components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
