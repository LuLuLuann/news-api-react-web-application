import NavBarModule from "./NavBar.module.css"

function NavBar() {
    return (
        <nav style={styles}>
            <a href="https://www.tradingview.com/symbols/DJ-DJI/">Dow Jones Industrial Average Index</a>
            <a href="https://www.cnn.com/markets/stocks/NDAQ">Nasdaq</a>
            <a href="https://www.tradingview.com/symbols/SPX/">S&P 500</a>
        </nav>
    );
}

const styles = {
    display: "flex",
    justifyContent: "space-around", 
    fontSize: "25px",
    fontWeight: "bold",
    backgroundColor: "turquoise",
}

export default NavBar;