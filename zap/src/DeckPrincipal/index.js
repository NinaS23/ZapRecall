import { useState } from "react"
import data from "../data"
import DeckQuestion from "../deck-question"
import Footer from "../footer"

const logoMenor = "assets/imgs/logo-pequeno.png"
export default function DeckPrincipal({setPage , icone , setIcone}) {
    const [question , setQuestion] = useState(data)
    const [ restante , setRestante] = useState(0)

    question.sort(comparador);

    function comparador() { 
        return Math.random() - 0.5; 
    }
    
    return (
        <>
        <main>
            <div className="logoMenor">
                <img className="pequena" src={logoMenor} alt="" />
                <h2 className="text">ZapRecall</h2>
            </div>
            {question.map((perg, index) => {
                return (
                    <DeckQuestion
                        index={index}
                        question={perg.question}
                       key ={index}
                        react={perg.react}
                        resp={perg.resp}
                       icone={icone}
                       setIcone={setIcone}
                        bolean={perg.bolean}
                        setQuestion={setQuestion}
                         setRestante={setRestante}
                         restante={restante}
                        
                        
                    />
                )
            })} 
            <Footer restante={restante} icone={icone} />
            </main>
        </>
        

    )
}