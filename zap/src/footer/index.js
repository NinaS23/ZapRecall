import { useState } from "react"
import "./style.css"
const Erro = "assets/imgs/error.png"
const Duvida = "assets/imgs/duvida.png"
const Acerto = "assets/imgs/acerto.png"
export default function Footer({restante , icone}){
const  [icons , setIcons] = useState([])

   if(icone === "Erro"){
       icons.push(<img src={Erro} alt="error" />)
   }
   if(icone === "Acerto"){
    icons.push(<img src={Acerto} alt="error" />)
   }
   if(icone === "Duvida"){
    icons.push(<img src={Duvida} alt="error" />)
   }
    
    
if(icons.length === 0){
    return(
        <div className="footer">
            <h1>{restante}/7</h1>
           
        </div>
     )
}
if(icons.length !== 0){
    return(
     
            <div className="footer">
                <h1>{restante}/7</h1>
               <div className="icons">
                   {icons}
               </div>
            </div>
         
    )
}
if(restante === 7){
    return(
    <>
    <footer className="finalPage">
        <div>
            <img src="./assets/imgs/party.png" alt="emoji festeiro" />
            <h2>PARABÉNSSSS</h2>
        </div>
        <h3>Você não esqueceu de nenhum flashcard!</h3>
        <div>{icons}</div>

    </footer>

</>
    )
}

 
}