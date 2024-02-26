import { useDispatch, useSelector } from 'react-redux';
import { updateMenuBtnStatus, updateCartCount, updateCartEmptyFlg, updateCartPrice, updateCartItems } from './Data/Store';
const Orderpage = () => {
    const dispatch = useDispatch();
    const menuList = useSelector(state => state.menuBtn );
    return (
        <section className="pageSection">
            <div className="orderSection">
                <div className="orderList">
                    {menuList.map((order) => (
                        <div className="orderItem" key={order.id}>
                            <h1>{order.heading}</h1><br /><hr /><br />
                            {order.body.map((menu) => (
                                <div className='items_container' key={menu.id}>
                                    <div className="items">
                                        <h3>{menu.title}</h3><br />
                                        <img src={menu.imageSrc} alt={menu.title} />
                                        <h4>{menu.price}</h4><br />
                                        <button className='addCartBtn' type="button" disabled={menu.addBtnState}
                                            onClick={() => {
                                                const orderInfo = {typeId: order.id,id:menu.id,dishName:menu.title,dishPrice:menu.value,dishCount:1};
                                                dispatch(updateCartEmptyFlg('N'));
                                                dispatch(updateCartCount(1));
                                                dispatch(updateCartPrice(menu.value));
                                                dispatch(updateMenuBtnStatus({ menuId: order.id, dishId: menu.id, value:true }));
                                                dispatch(updateCartItems(orderInfo));
                                            }
                                            }
                                        >
                                          Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Orderpage;