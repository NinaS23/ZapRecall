import { useState } from "react"
import "./style.css"
const Erro = "assets/imgs/error.png"
const Duvida = "assets/imgs/duvida.png"
const Acerto = "assets/imgs/acerto.png"
const seta = "assets/imgs/seta.png"
const setinha = "assets/imgs/setinha.png"
export default function DeckQuestion({ setRestante, setIcone, icone, restante, react, resp,index , bolean}) {
    const [card, setCard] = useState({
        etapa: 0,
        resultado: "",
       

    })
    
   
    const { etapa, resultado } = card;
  
    if (etapa === 0) {
        return (

            <>

             

                    <div className="centralizar">


                        <div className="fundo-branco">
                            <h2 className="pergunta">pergunta {index}</h2>
                            <img onClick={() => setCard({ ...card, etapa: 1 })} className="seta" src={seta} alt="" />
                        </div>



                    </div>
              
            </>
        )



    }
    if (etapa === 1) {
        return (
            <>

                

                    <div className="centralizar">


                        <div className="fundo-deck">
                            <h2 className="perguntaObj">{react}</h2>
                            <img onClick={() => setCard({ ...card, etapa: 2 ,resultado: true })} className="setinha" src={setinha} alt="" />
                        </div>



                    </div>
               
            </>
        )
    }
  
    if (etapa === 2) {
       

        return (
            <>

                

                    <div className="centralizar">


                        <div className="fundo-deck">
                            <h2 className="resposta">{resp}</h2>
                            <div  onClick={() => setRestante(restante + 1)}className="butons">
                                <div onClick={() => setCard({ ...card, etapa: 3 , resultado:"Erro" , })} className="red"><h2 className="info">Não lembrei</h2></div>
                                <div onClick={() => setCard({ ...card, etapa: 3 , resultado:"Duvida" , })}className="orange"><h2 className="info">Quase não lembrei</h2></div>
                                <div onClick={() => setCard({ ...card, etapa: 3 , resultado:"Acerto" , })} className="green"><h2 className="info">Zap!</h2></div>
                            </div>
                        </div>



                    </div>
              
            </>
        )
    }
    if(etapa === 3) {
        setIcone(resultado)
    }

    if (etapa === 3 && resultado === "Erro" ) {
      
        return (
            <>

                <main>
                    <div className="centralizar">
                        <div className="fundo-branco">
                            <h2 className={` pergunta${resultado}`}>pergunta {index}</h2>
                             <img className="imgResposta" src={Erro}alt="" />
                        </div>



                    </div>
                </main>
            </>
        )
       
    }
    if(etapa === 3 && resultado === "Duvida"){
        setIcone("Duvida")
        return(
            <>

                <main>
                    <div className="centralizar">
                        <div className="fundo-branco">
                            <h2 className={` pergunta${resultado}`}>pergunta {index}</h2>
                             <img className="imgResposta" src={Duvida}alt="" />
                        </div>



                    </div>
                </main>
            </>
        )
    }
    if(resultado === "Acerto" && etapa === 3){
        setIcone("Acerto")
        return(
            <>

                <main>
                    <div className="centralizar">
                        <div className="fundo-branco">
                            <h2 className={` pergunta${resultado}`}>pergunta {index}</h2>
                             <img className="imgResposta" src={Acerto}alt="" />
                        </div>



                    </div>
                </main>
            </>
        )
    }
   
  
  
}