import './Header.css'
function Header(){
    let texto = "tere"
    function mudaTexto(){
        texto = "tereaa"

    }
    return(
        <>
        <header>
            <div>
                logo
            </div>
            <nav>
                <ul>
                    <input className='barrapesquisa' type="text" />
                    <li>
                        <a href="#">Página inicial</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Notícias</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
        <div>
           
            <p className='texto_digitado'> pesquisa: {texto}</p>
        </div>
        </>
    )
}
export default Header