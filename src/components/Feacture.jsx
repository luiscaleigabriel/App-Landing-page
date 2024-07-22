import FeactureBox from "./FeactureBox";
import image1 from '../../public/images/feature_1.png'
import image2 from '../../public/images/feature_2.png'
import image3 from '../../public/images/feature_3.png'

export default function Feacture() {
  return (
    <div className="features">
      <div className="a-container">
        <FeactureBox title='Curso de Desenvolvimento' image={image1} />
        <FeactureBox title='Serviços' image={image2} />
        <FeactureBox title='Usabilidade da Interface' image={image3} />
      </div>
    </div>
  )
}