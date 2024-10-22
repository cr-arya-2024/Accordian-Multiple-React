import { useEffect, useState } from "react"

export default function TicTAcToe() {
    function handleClick(getCurrentId) {
        const cpySqr = [...square]
        console.log(getCurrentId);
        if ( cpySqr[getCurrentId]) return
        cpySqr[getCurrentId] = turn ? 'X' : 'O'
        setTurn(!turn)
        setSquare(cpySqr)
        console.log(square);
    }

    function Square({ onClick, value }) {
        return <div onClick={onClick} style={{
            height: "100px",
            width: "100px",
            backgroundColor: "regreyd",
            margin: "10px",
            border: "2px solid grey",
            alignItems: "center", fontSize: "1000", fontWeight: "bolder",
            display: "flex", justifyContent: "center"
        }} className="column">{value}</div>
    }
    function Result() {
        if (square[0] != null && square[0] === square[1] && square[0] === square[2] ||
            square[3] != null && square[3] === square[4] && square[4] === square[5] ||
            square[8] != null && square[8] === square[7] && square[7] === square[6] ||
            square[0] != null && square[0] === square[3] && square[3] === square[6] ||
            square[0] != null && square[0] === square[4] && square[4] === square[8] ||
            square[1] != null && square[1] === square[7] && square[7] === square[4] ||
            square[2] != null && square[2] === square[5] && square[8] === square[5] ||
            square[2] != null && square[2] === square[4] && square[4] === square[6]

        ) {
            return <div><h1>WINNER</h1></div>}
       

    }


    const [square, setSquare] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(true)
    const [status, setStatus] = useState('')
    console.log(square)
    console.log(turn);
    useEffect(() => {
        Result()
    }, [turn])
    return (
        <div className="container" style={{ display: "flex",flexDirection:"column" }}>
            <div className="row-section" style={{ display: "flex", flexDirection: "row" }}>
                <div className="row">
                    <Square value={square[0]} onClick={() => handleClick(0)} />
                    <Square value={square[1]} onClick={() => handleClick(1)} />
                    <Square value={square[2]} onClick={() => handleClick(2)} />
                </div>
                <div className="row">
                    <Square value={square[3]} onClick={() => handleClick(3)} />
                    <Square value={square[4]} onClick={() => handleClick(4)} />
                    <Square value={square[5]} onClick={() => handleClick(5)} />
                </div>
                <div className="row">
                    <Square value={square[6]} onClick={() => handleClick(6)} />
                    <Square value={square[7]} onClick={() => handleClick(7)} />
                    <Square value={square[8]} onClick={() => handleClick(8)} />
                </div>
            </div>
            <div>
                <Result />
            </div>

        </div>
    )
}