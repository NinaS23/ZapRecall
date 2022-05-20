import data from "../data"
import "./style.css"
const logoMenor = "assets/imgs/logo-pequeno.png"

export default function CloseDeck() {
    return (
        <>
            <div className="logoMenor">
                <img  className="pequena" src={logoMenor} alt="" />
                <h2 className="text">ZapRecall</h2>
            </div>

            <div className="centralizar">
            {data.map((perg , index) =>{
                     return(
                        <div className="fundo-branco"><h2 className="pergunta">pergunta {index}</h2></div>
                     )
                 })}
                
            </div>

        </>
    )
}