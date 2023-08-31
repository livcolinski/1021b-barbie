import Filme from "../filme/Filme"
import './Main.css'


export default function Main(){
    return(
        <main className="content-main">
         <Filme titulo="Barbie" sinopse="Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade." imagem="/barbie cartaz.png"></Filme>
         <Filme titulo="Oppenheimer" sinopse="O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica." imagem="/oppen.png"></Filme>
        </main>
    )
}