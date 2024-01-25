import { useState } from 'react';
import { MenuList } from './Data/MenuList';
// import Update from './UpdateCart.js';
function Orderpage() {
    const [isDisabled,setIsDisabled] = useState(false);
    const testFunc = () => {
        alert("testing add to cart button");
        setIsDisabled(true);
    }
    return (
        <section className="pageSection">
            <div className="orderSection">
                <div className="orderList">
                    {MenuList.map((order) => (
                        <div className="orderItem" key={order.id}>
                            <h1>{order.heading}</h1><br/><hr/><br/>
                            {order.body.map((menu)=>(
                                <div className='items_container' key={menu.id}>
                                <div className="items">
                                <h3>{menu.title}</h3><br />
                                <img src={menu.getImageSrc()} alt={menu.title} />
                                <h4>{menu.price}</h4><br/>
                            </div><br />
                            
                            </div>
                            ))}
                            {/* <Update id={order.id}/> */}
                            <button className='addToCartBtn'  onClick={testFunc} disabled = {isDisabled}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Orderpage;