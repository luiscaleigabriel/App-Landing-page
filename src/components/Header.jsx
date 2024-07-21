import NavBar from "./NavBar"

export default function Header() {
  return (
    <div id="main">
      <NavBar />
      <div className="name">
        <h1>
          <span>Lanuch Your App</span> With Confidence And Creativity
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ratione repellendus explicabo cupiditate.
        </p>
        <a href="#" className="cv-btn">Download</a>
      </div>
    </div>
  )
}