import Loc from '../PopComponents/OverlayPop';
import '../../App.css';
// const popFunc = (code, value) => {
//     if (code === 'location') { return (<div className='overlay_info'><Loc value={value} /></div>) }
// };
const overlayFunc = (onClose, code, value) => {
    // console.log("inside overlayFunc | type: " + code + " | id: " + value);
    return (
        <>
            <div className="overlay">
                <div className="overlay_bg" onClick={onClose} />
                <div className="overlay_container">
                    <div className="overlay_controls">
                        <button className="overlay_xbtn" type="button" onClick={onClose} />
                    </div>
                    {/* {popFunc(code, value)} */}
                    <div className='overlay_info'><Loc value={value} /></div>
                </div>
            </div>
        </>
    );
};
export const Overlay = ({ isOpen, onClose, type, props }) => {
    // console.log(type + " inside main overlay " + isOpen + " checking type " + type.type);
    return (
        <>
            {isOpen ? (overlayFunc(onClose, type, props)) : null}
        </>
    )
}
export default Overlay;