import brand from '../Images/yellowBrand.jpg';
import Nav from './Nav';

function Header(){
    return (
        <header id="header">
            <div id="headBlock">
                <img id="headerImage" src={brand} alt="Logo of Peach House"/>
                <Nav />
            </div>
        </header>
    );
}
export default Header;