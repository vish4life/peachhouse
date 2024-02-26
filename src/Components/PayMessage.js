import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetMenuState, resetCartState,showCartOrNotFunc } from './Data/Store';

const PayMessage = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const resetFunc = () => {

        dispatch(resetCartState());
        dispatch(resetMenuState());
        dispatch(showCartOrNotFunc(false));
        navigate('/');
    
}
    return (
        <>
        <div className="payment">
            <h5>Your Order {props.ordNum} is confirmed</h5>
            <h6>Total ${props.amt} for {props.items} items is charged from the card </h6>
        </div>
        <div className="confirmOkBtn">
            <button className="resetOkay" onClick={()=> resetFunc()}> Okay </button>
        </div>
        {/* {!props.load?resetFunc():null} */}
        </>
    )
}
export default PayMessage;