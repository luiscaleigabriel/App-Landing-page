import About from "./components/About"
import Feacture from "./components/Feacture"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Feacture />
      <About title='Comes With All You Need For Daily Life' button='Gey the App' image='/images/Frame 19.png' />
      <About title='Download And Get Te App Now' button='Download' image='/images/download.png' />
    </div>
  )
}

export default App
