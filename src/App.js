import { useEffect, useState } from 'react'
import { Board, Controls, Modal, Footer, Header } from './components/index'
import './App.css'

function App() {
    const [animate, setAnimate] = useState(false);
    const [isWin, setIsWin] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        if (animate) {
            const timer = setTimeout(() => {
                setIsWin(true);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [animate]);

    useEffect(() => {
        if (isWin) {
            const timer = setTimeout(() => {
                setIsOpenModal(true)
            }, 700)

            return () => clearTimeout(timer);
        }
    }, [isWin]);

    return (
        <div className="App">
            <Header />
            <Board isWin={isWin} animate={animate} />
            <Controls setAnimate={setAnimate} />
            <Footer />
            {isOpenModal && <Modal />}
        </div>
    );
}

export default App;
