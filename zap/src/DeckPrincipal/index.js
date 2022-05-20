import data from "../data"
import DeckQuestion from "../deck-question"

const logoMenor = "assets/imgs/logo-pequeno.png"
export default function DeckPrincipal({setPage , icone , setIcone}) {
    return (
        <>
            <div className="logoMenor">
                <img className="pequena" src={logoMenor} alt="" />
                <h2 className="text">ZapRecall</h2>
            </div>
            {data.map((perg, index) => {
                return (
                    <DeckQuestion
                        index={index}
                        question={perg.question}
                       key ={index}
                        react={perg.react}
                        resp={perg.resp}
                       icone={icone}
                       setIcone={setIcone}
                        
                        
                    />
                )
            })} 
            
        </>
        

    )
}