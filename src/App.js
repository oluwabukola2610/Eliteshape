import './App.css';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Join from './component/Join';
import Plan from './component/Plan';
import Programs from './component/Programs';
import Reasons from './component/Reasons';
import Testimonia from './component/Testimonia';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plan />
      <Testimonia />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
