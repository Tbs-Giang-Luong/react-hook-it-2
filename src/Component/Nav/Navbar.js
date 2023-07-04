import './Navbar.scss'
import { Link } from 'react-router-dom';

function Navbar
    () {
    return (
        <div class="header">
            <a href="#default" class="logo">CompanyLogo</a>
            <div class="header-right">
                <a class="active" href="#home">Todo</a>
                <a href="#contact">Todo Table</a>
                <a href="#about">Detail</a>
            </div>
        </div>
    );

}

export default Navbar
    ;