import './Home.css';

function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div style={{
                    width: "80vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <div style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <h1 >Home</h1>
                        <img src='https://i.imgur.com/VpwApCU.png' alt="Imagem da página home" width="400px"></img>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home;