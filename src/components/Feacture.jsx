import FeactureBox from "./FeactureBox";

export default function Feacture() {
  return (
    <div className="features">
      <div className="a-container">
        <FeactureBox title='Curso de Desenvolvimento' image='/images/feature_1.png' />
        <FeactureBox title='Serviços' image='/images/feature_2.png' />
        <FeactureBox title='Usabilidade da Interface' image='/images/feature_3.png' />
      </div>
    </div>
  )
}