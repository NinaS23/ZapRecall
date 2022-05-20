import CloseDeck from "../CloseDeck"
import "./style.css"


const logo = "assets/imgs/logo.png"


export default function Start({setPage , page}){
    if(page === false){
    return (
        <>
            <div className="centro">
                <img className="logo" src={logo} alt="" />
                <div className="space">
                    <h1 className="title">ZapRecall</h1>
                    <button onClick={() => setPage(true)} className="botao"><h3 className="iniciar">Iniciar Recall!!</h3></button>
                </div>
         
            </div>
        </>
    
    )
    }
    if(page === true){
        return (
            <CloseDeck />
        )
    }
}