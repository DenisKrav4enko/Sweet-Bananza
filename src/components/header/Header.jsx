import { isMobile } from "react-device-detect";
import logo from "../../assets/img/logo.png";
import './styles.css'

export const Header = () => {
    return (
        <>
            <img className="logo" src={logo} alt="logo"/>

            <h2 className={isMobile ? 'title title_mob' : 'title title_web'}>получи бонус на депозит</h2>
        </>
    )
}