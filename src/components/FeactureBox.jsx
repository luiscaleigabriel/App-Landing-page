
export default function FeactureBox({ title, image }) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={image} alt="image" />
      </div>
      <div className="s-b-text">
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}