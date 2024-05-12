import './styles.css'

export const Modal = () => {
    return (
        <div className="overlay">
            <div className="modal">
                <p className="text">вы выиграли</p>
                <p className="text text_colored">джекпот</p>
                <button>получить</button>
            </div>
        </div>
    )
}