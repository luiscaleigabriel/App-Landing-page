
export default function About({ title, image, button }) {
  return (
    <div className="about">
      <div className="about-image">
        <img src={image} alt="" />
      </div>
      <div className="about-text">
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto esse consequuntur a, ducimus aut rem iste sequi nam dolorum praesentium ullam, illum eum asperiores velit distinctio debitis natus voluptatem quisquam?
        </p>
        <button>{button}</button>
      </div>
    </div>
  )
}