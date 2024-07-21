import About from "./components/About"
import Contact from "./components/Contact"
import Feacture from "./components/Feacture"
import Header from "./components/Header"
import Presentaion from "./components/Presentaion"

function App() {
  return (
    <div className="App">
      <Header />
      <Feacture />
      <About title='Comes With All You Need For Daily Life' button='Gey the App' image='/images/Frame 19.png' />
      <Presentaion />
      <About title='Download And Get Te App Now' button='Download' image='/images/download.png' />
      <Contact />
    </div>
  )
}

export default App
