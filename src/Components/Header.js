import brand from '../Images/yellowBrand.jpg';
import Nav from './Nav';

function Header(){
    return (
        <header id="header">
            <div id="headBlock">
                <a href="/home"><img id="headerImage" src={brand} alt="Logo of Peach House"/></a>
                <Nav />
            </div>
        </header>
    );
}
export default Header;