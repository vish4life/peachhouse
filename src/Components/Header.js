import Nav from './Nav';
import brand from '../Images/purpleBrand.png';
function Header(){
    return (
        <header >
            <img src={brand} alt="Logo of Peach House"/>
            <Nav />
        </header>
    );
}
export default Header;