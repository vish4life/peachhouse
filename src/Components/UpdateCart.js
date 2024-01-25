import { useState} from "react";

    const UpdateFunc = (e) => {
        const [itemAdd,setItemAdd] = useState(0);        
        if(e === 'add'){setItemAdd(Number(itemAdd)+1)};
        if((e === 'minus')&&(itemAdd > 0)){setItemAdd(Number(itemAdd)-1)};
    };
const UpdateCart = (id) => {
    
    return (
        <>
            <div className="addCart" id ={id}>
                <div className='addRemItems'>
                    <button className="addCartBtn" onClick={UpdateFunc('add')}>&#8861;</button>&nbsp;
                </div>
                <div className='addRemItems'>
                    <input className="displayItems" type="text" />&nbsp;
                </div>
                <div className='addRemItems'>
                    <button className="addCartBtn">&oplus;</button>
                </div>
            </div>
        </>
    )
};
export default UpdateCart;