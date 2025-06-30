import './App.css';
import Hero from './section/Hero';
import Menu from './section/Menu';
import Clients from './section/Clients';
import EmployeeReview from './section/EmployeeReview';
import DirectorMessage from './section/DirectorMessage';
import Presentation from './section/Presentation';
import Contact from './section/Contact';
import Marquee from './section/Marquee';
import Game from './section/Game';

function App() {
  return (
    <>
      <Hero />
      <Menu />
      <Marquee />
      <Clients />
      <Presentation />
      <EmployeeReview />
      <DirectorMessage />
      <Contact />
      {/* <Game/> */}
      
    </>
  );
}

export default App;
