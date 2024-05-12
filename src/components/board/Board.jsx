import { isMobileOnly } from "react-device-detect";
import { Cell } from '../index';
import './styles.css'

export const Board = props => {
    const {
        animate,
        isWin
    } = props

    return (
        <div className="board-wrapper">
            <div className="board">
                {isMobileOnly
                    ? <>
                        <Cell animate={animate}/>
                        <Cell animate={animate}/>
                        <Cell animate={animate}/>
                        {isWin && <div className="winner"></div>}
                    </>
                    : <>
                        <Cell animate={animate}/>
                        <Cell animate={animate}/>
                        <Cell animate={animate}/>
                        <Cell animate={animate}/>
                        <Cell animate={animate}/>
                        <Cell animate={animate}/>
                        <Cell animate={animate}/>
                        {isWin && <div className="winner"></div>}
                    </>
                }
            </div>
        </div>
    );
}
