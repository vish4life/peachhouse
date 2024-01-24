import { orderList } from './Data/OrderList';

function Orderpage() {
    return (
        <section className="pageSection" id="order">
            <div className="orderSection">
                <div className="orderList">
                    {orderList.map((order) => (
                        <div className="orderItem" key={order.id}>
                            <div className="items">
                                <h1>{order.title}</h1><br />
                                <img src={order.getImageSrc()} alt={order.title} />
                            </div><br />
                            <div id="addCart">
                                <div className='addRemItems'>
                                    <button className="addCartBtn">&#8861;</button>&nbsp;
                                </div>
                                <div className='addRemItems'>
                                    <input id="displayItems" type="text" placeholder='0' />&nbsp;
                                </div>
                                <div className='addRemItems'>
                                    <button className="addCartBtn">&oplus;</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Orderpage;