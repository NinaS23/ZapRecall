import { useState } from "react"

import "./style.css"
const seta = "assets/imgs/seta.png"
const setinha = "assets/imgs/setinha.png"
export default function DeckQuestion({ setPage, setIcone, icone, key, react, resp,index }) {
    const [card, setCard] = useState({
        etapa: 0,
        resultado: "",

    })
    const { etapa, resultado } = card;
    if (etapa === 0) {
        return (

            <>

                <main>

                    <div className="centralizar">


                        <div className="fundo-branco">
                            <h2 className="pergunta">pergunta {index}</h2>
                            <img onClick={() => setCard({ ...card, etapa: 1 })} className="seta" src={seta} alt="" />
                        </div>



                    </div>
                </main>
            </>
        )



    }
    if (etapa === 1) {
        return (
            <>

                <main>

                    <div className="centralizar">


                        <div className="fundo-deck">
                            <h2 className="perguntaObj">{react}</h2>
                            <img onClick={() => setCard({ ...card, etapa: 2 })} className="setinha" src={setinha} alt="" />
                        </div>



                    </div>
                </main>
            </>
        )
    }
    if (etapa === 2) {
        return (
            <>

                <main>

                    <div className="centralizar">


                        <div className="fundo-deck">
                            <h2 className="resposta">{resp}</h2>
                            <div onClick={() => setCard({ ...card, etapa: 3 })} className="butons">
                                <div onClick={() => setIcone("Erro")} className="red"><h2 className="info">Não lembrei</h2></div>
                                <div onClick={() => setIcone("Duvida")} className="orange"><h2 className="info">Quase não lembrei</h2></div>
                                <div onClick={() => setIcone("Acerto")} className="green"><h2 className="info">Zap!</h2></div>
                            </div>
                        </div>



                    </div>
                </main>
            </>
        )
    }


    if (etapa === 3) {
        return (
            <>

                <main>

                    <div className="centralizar">


                        <div className="fundo-branco">
                            <h2 className={` pergunta${icone}`}>pergunta {index}</h2>

                        </div>



                    </div>
                </main>
            </>
        )
    }
}