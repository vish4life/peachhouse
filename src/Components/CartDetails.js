import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { resetLoaderDataState, addDishCount, minusDishCount, showCartOrNotFunc } from './Data/Store';
import { addDishCount, minusDishCount, showCartOrNotFunc } from './Data/Store';
import Payment from './Payment';

const CartDetails = () => {
    const cartData = useSelector(state => state.cart.cartItems);
    const cartItemCount = useSelector(state => state.cart.totalCartItems);
    const cartItemPrice = useSelector(state => state.cart.totalCartPrice);
    const showLoaderOrNot = useSelector(state => state.cart.showOrderMsg);
    const showCart1 = useSelector(state =>state.cart.showCart);
    const shwBtn = useSelector(state =>state.cart.showPayBtn);
    console.log(showCart1 + " " + shwBtn);
    // console.log(cartData);
    // console.log(cartItemCount);
    // console.log(cartItemPrice);
    const dispatch = useDispatch();
    const [callLoader,setCallLoader] = useState(false);
    // const [disableOrNot,setDisableOrNot] = useState(false);
    const callPaymentFunc = () =>{
        // alert("inside payment Function and showLoader is: "+showLoaderOrNot);
        if(showLoaderOrNot === 'Y'){
        // dispatch(resetLoaderDataState());
        // dispatch(payBtnReset());
        return(
            <Payment price = {cartItemPrice} quant={cartItemCount} loaderFlag = {showLoaderOrNot}/>
        );
    }
    // dispatch(payBtnReset());
}
    const payBtnShow = () => {
        if(shwBtn === "Y"){
        return(
            <div className="checkOut">
                    <button className="checkOutBtn" onClick={()=>(setCallLoader(true))} >Pay</button>
                    {callLoader? callPaymentFunc() : null}
                </div>
        )}
    }
    return (
        <>
            <div className="cartContainer">
                <div className="closeBtnCart">
                    <button className="cartCloseBtn" onClick={() => dispatch(showCartOrNotFunc(false))}></button>
                </div>
                <div className="cartOrderHeading">
                    <h1>Your Order</h1>
                </div>
                <div className="orderContainer">
                    {/* <div className="orderHeading">
                        <div className="orderHeads">Dish</div>
                        <div className="orderHeads">Price</div>
                        <div className="orderHeads">Quantity</div>
                    </div> */}

                    <div className="cartList">
                        {cartData.map((items) => (
                            <div className="addedItem" key={items.id}>
                                <div className="addedItemsList">
                                    <div className="addedItemsInfo">{items.dishName}</div>
                                    <div className="addedItemsInfo">${items.dishPrice}</div>
                                    <div className="addedItemsInfo">
                                        <div className="quantUpdate">
                                            <button className="quantBtn"
                                                onClick={() => {
                                                    dispatch(minusDishCount({ cartDishIdM: items.id, cartDishPriceM: items.dishPrice }))
                                                }}
                                                disabled={callLoader}
                                            >
                                                -
                                            </button>
                                        </div>
                                        <div className="quantView">
                                            <input id="quantView" type="text" value={items.dishCount} />
                                        </div>
                                        <div className="quantUpdate">
                                            <button className="quantBtn"
                                                onClick={() => {
                                                    dispatch(addDishCount({ cartDishId: items.id, cartDishPrice: items.dishPrice }))
                                                }}
                                                disabled={callLoader}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="orderFooter">
                    <div className="footerInfo">
                        <div className="footerHead">Total Items </div>
                        <div className="footerValue">{cartItemCount}</div>
                    </div>
                    <div className="footerInfo">
                        <div className="footerHead">Total Price </div>
                        <div className="footerValue">${cartItemPrice}</div>
                    </div>
                </div>
                {showCart1? payBtnShow():null}
            </div>
            

        </>
    )
}


export default CartDetails;