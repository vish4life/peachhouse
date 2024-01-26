// import { useState } from 'react';
import AddCart from './AddCart';
import { MenuList } from './Data/MenuList';
// import Update from './UpdateCart.js';
function Orderpage() {
    // const [isItemAdded,setIsItemAdded] = useState({selected:false,code:"",value:""});
    // const testFunc = (e,code,value) => {
    //     alert("selected: "+value.value+" "+code.code);
    //     setIsItemAdded(isItemAdded.selected({e}));
    // }
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
                            </div>
                            {/* <button className='addToCartBtn'  onClick={testFunc(true,menu.id,menu.title)} disabled = {isItemAdded.selected}>Add to Cart</button> */}
                            <AddCart id={menu.id} dish={menu.title} charge={menu.price}></AddCart>
                            </div>
                            ))}
                            {/* <Update id={order.id}/> */}
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Orderpage;