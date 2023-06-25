import './App.css';
import Nav from './nav';
import Banner from './page';
import Footer from './Footer';
import ScrollCard from './Scroll';
import Widgets from './Widgets';
function App() {
  return (
    <div className="App">
<Nav />
<Banner />
<div className="wrapper">
<ScrollCard />
<Widgets />
</div>
<Footer />
    </div>
  );
}

export default App;
