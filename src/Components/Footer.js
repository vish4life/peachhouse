import socialList, { locationList, helpList } from './Data/FooterLinkList';
import { Overlay } from './CustomHooks/Overlay';

import { useState } from 'react';

function Footer() {
    const [isOverlayOpen, setisOverlayOpen] = useState({ clicked: false, code: "", value: "" });
    return (
        <section className="footer">
            <div id="footerSections">
                <div className="footerSocial">
                    <div className='footerHeads'>
                        <h5>Social Media</h5><br />
                    </div>
                    {socialList.map((social) => (
                        <ul key={social.id}>
                            <li className="footerList">
                                <a className="footerLinks" rel="noopener noreferrer" href={social.url} target="_blank">
                                    <div id="socialImage"><img width="16vw" height="16vw" src={social.imgSrc()} alt={social.title} /></div>
                                    <div id="linkName">{social.title}</div>
                                </a>
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="footerLocation">
                    <div className='footerHeads'>
                        <h5>Locations</h5><br />
                    </div>
                    {locationList.map((location) => (
                        <ul key={location.id}>
                            <li className='footerList'>
                                <button key={location.id} className='footerLinksBtn' id="locationLinkBtn" type="button" onClick={() => setisOverlayOpen({ clicked: true, code: location.code, value: location.type })}>{location.title}</button>
                            </li>
                        </ul>
                    ))}
                    <Overlay isOpen={isOverlayOpen.clicked} onClose={() => setisOverlayOpen({ clicked: false, code: "", value: "" })} type={isOverlayOpen.value} props={isOverlayOpen.code}></Overlay>
                </div>
                <div className="footerHelp">
                    <div className='footerHeads'>
                        <h5>Help</h5><br />
                    </div>
                    {helpList.map((help) => (
                        <ul key={help.id}>
                            <li className='footerList'>
                                <div className="footerLinks"><img id="helpImage" width="16vw" height="16vw" src={help.imgSrc()} alt={help.title} />
                                    <button type="button" id="linkName" className='footerLinksBtn' onClick={() => setisOverlayOpen({ clicked: true, code: help.code, value: help.type })}>{help.title}</button>
                                </div>
                            </li>
                        </ul>
                    ))}
                    <Overlay isOpen={isOverlayOpen.clicked} onClose={() => setisOverlayOpen({ clicked: false, code: "", value: "" })} type={isOverlayOpen.value} props={isOverlayOpen.code} />
                </div>
            </div>
            <div><p id="hours">Working Hours<br />Mon-Fri:1000hrs - 2359hrs<br />Sat-Sun:1000hrs - 0200hrs</p></div>
            <p>2024 • &copy;Lakshmi Shashank Ch</p>
        </section>
    );
}
export default Footer;