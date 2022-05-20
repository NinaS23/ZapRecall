import { useState } from "react"
import data from "../data"
import "./style.css"
const logoMenor = "assets/imgs/logo-pequeno.png"
const setinha = "assets/imgs/setinha.png"
export default function DeckQuestion({ setPage }) {
    const [card, setCard] = useState(1)
    if (card === 1) {
        return (
            <>
                <div className="logoMenor">
                    <img className="pequena" src={logoMenor} alt="" />
                    <h2 className="text">ZapRecall</h2>
                </div>
                <main>

                    <div className="centralizar">
                        {data.map((perg, index) => {
                            return (
                                <div className="fundo-deck">
                                    <h2 className="perguntaObj">{perg.react}</h2>
                                    <img onClick={() => setCard(2)} className="setinha" src={setinha} alt="" />
                                </div>
                            )
                        })}

                    </div>
                </main>
            </>
        )
    }
    if (card === 2) {
        return (
            <>
                <div className="logoMenor">
                    <img className="pequena" src={logoMenor} alt="" />
                    <h2 className="text">ZapRecall</h2>
                </div>
                <main>

                    <div className="centralizar">
                        {data.map((perg, index) => {
                            return (
                                <div className="fundo-deck">
                                    <h2 className="resposta">{perg.resp}</h2>
                                    <div className="butons">
                                         <div className="red"><h2 className="info">Não lembrei</h2></div>
                                         <div className="orange"><h2 className="info">Quase não lembrei</h2></div>
                                         <div className="green"><h2 className="info">Zap!</h2></div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </main>
            </>
        )
    }

}