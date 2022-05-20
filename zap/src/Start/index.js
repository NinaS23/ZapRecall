import "./style.css"


const logo = "assets/imgs/logo.png"


export default function Start(){
    return (
        <>
            <div className="centro">
                <img className="logo" src={logo} alt="" />
                <div className="space">
                    <h1 className="title">ZapRecall</h1>
                    <button className="botao"><h3 className="iniciar">Iniciar Recall!!</h3></button>
                </div>
         
            </div>
        </>
    )
}