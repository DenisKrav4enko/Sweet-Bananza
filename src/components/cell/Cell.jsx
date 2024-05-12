import { useEffect, useState } from 'react';
import { generateRandomFruits } from "../../core/gameLogick";
import './styles.css'

export const  Cell = animate => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        setFruits(generateRandomFruits());
    }, []);

    return (
        <div className="cell">
            <div className={animate.animate ? 'animate cell__cell' : 'cell__cell'}>
                {fruits.map((index, value) =>
                    <div key={value} className="img-wrapper">
                        <img src={index} alt="cell" />
                    </div>
                )}
            </div>
        </div>
    );
}
