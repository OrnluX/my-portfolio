import './App.scss';

import {About, Footer, Header, Skills, Work} from './container';
import {Navbar} from './components';

function App() {
  return (
    <div className='app'>
      <header>
        <Navbar/>
      </header>
      <main>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;