import Birth from './About/Birth';
import Craft from './About/Craft';
import Ambience from './About/Ambience';
import Join from './About/Join';
import { Parallax } from 'react-parallax';
import img1 from './../Images/parallax/pimg0.jpg';
// import img2 from './../Images/parallax/pimg1.jpg';


function Contact() {
    return (

        <section className="pageSection">
            <div className="peachContent">
                <Parallax blur={10} className='parallaxClass' bgImage={img1} strength={800} >
                    <Birth />
                    <Craft />
                    <Ambience />
                    <Join />
                </Parallax>
            </div>
        </section>

    );
}
export default Contact;