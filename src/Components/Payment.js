import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import Paymessage from './PayMessage';
const Payment = (pay) => {

    const dte = new Date();
    const timeStamp = dte.getFullYear().toString() + dte.getMonth().toString() + dte.getDate().toString() + dte.getHours().toString() + dte.getMinutes().toString() + dte.getSeconds().toString();
    // console.log("ts "+timeStamp); 
    console.log(pay.price);
    console.log(pay.quant);
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    const loaderFunc = () => {
        return (
            <div className="loading-bar-container">
                <div className="loading-bar">

                </div>
            </div>
        )
    }
    const dataFunc = () => {
        return (
                <>
                    <Paymessage amt={pay.price} items={pay.quant} ordNum={timeStamp} load={showLoader} />
                </>
            )

    }


    // console.log(timeStamp);

    return (
        <>
            {showLoader ? loaderFunc() : dataFunc()}
        </>
    )
}
export default Payment;