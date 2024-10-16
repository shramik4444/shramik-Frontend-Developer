import './index.css'
const Header = () => {

    return (
        <nav className="header-cont">
            <div>
                <h1>EthAI</h1>
            </div>
            <div className="options-cont">
                <h1>Features</h1>
                <h1>Why Us</h1>
                <h1>Tokenomics</h1>
                <h1>Roadmap</h1>   
            </div>

            <div>
                <button>Login</button>
                <button>Whitepaper</button>
            </div>


        </nav>
    )
}
export default Header