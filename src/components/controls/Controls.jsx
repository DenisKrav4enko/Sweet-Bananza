import './styles.css'

export const Controls = props => {
    const {setAnimate} = props

    return (
        <div className="controls">
            <button onClick={() => setAnimate(true)}>New Game</button>
        </div>
    );
}
