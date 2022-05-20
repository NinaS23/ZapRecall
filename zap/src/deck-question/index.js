import data from "../data"
import "./style.css"
const logoMenor = "assets/imgs/logo-pequeno.png"
const setinha = "assets/imgs/setinha.png"
export default function DeckQuestion() {
    return (
        <>
        <div className="logoMenor">
            <img className="pequena" src={logoMenor} alt="" />
            <h2 className="text">ZapRecall</h2>
        </div>
         <main>

         <div className="centralizar fixar">
             {data.map((perg, index) => {
                 return (
                     <div className="fundo-deck">
                         <h2 className="perguntaObj">{perg.react}</h2>
                         <img className="setinha"src={setinha} alt="" />
                     </div>
                 )
             })}

         </div>
     </main>
 </>
    )
}