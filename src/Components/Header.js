// Importing Images
import brand from '../Images/logos/logo3.png';

function Header() {
    return (
        <div id="headSection">
            <a href="/"><img id="headerImage" src={brand} alt="Logo of the Peach House" /></a>
            <h1>PEACH HOUSE</h1>
        </div>
    );
}
export default Header;