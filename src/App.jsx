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
      <About title='Vem com tudo que você precisa para a vida diária' button='Obter App' image='/images/Frame 19.png' />
      <Presentaion />
      <About title='Baixe E obtenha o aplicativo agora' button='Download' image='/images/download.png' />
      <Contact />
    </div>
  )
}

export default App
