import "./style.css";

const Stopwatch = () => {
    return (
    <>
        <h1 className="heading">Stopwatch with React</h1>
        <p className="showTime">hours:minutes:seconds</p>
        <div className="buttons">
            <button className="btn">Start</button>
            <button className="btn">Reset</button>
        </div>
    </>
)
}

export default Stopwatch;