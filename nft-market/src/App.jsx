import './App.css'
import Navbar from './components/Navbar'
import Header from './containers/Header'
import Trinding from './containers/Trinding'
import Top from './containers/Top'
import Categories from './containers/Categories'
import Discover from './containers/Discover'
import Highlight from './containers/Highlight'
import How from './containers/How'
import Joinus from './containers/Joinus'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Trinding />
      <Top />
      <Categories />
      <Discover />
      <Highlight />
      <How />
      <Joinus />
    </div>
  )
}

export default App
