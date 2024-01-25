import menuList from './Data/MenuList';
function Menupage() {
    return (
        <section className="pageSection" id="menu">
            <h1>Menu</h1><br />
            {menuList.map((menu) => (
                <div className="menuSection" key={menu.id}>
                    <div className='menuHeading' >
                        {menu.heading}
                    </div><br />
                    {menu.body.map((menuItems) => (
                        <div className='menuItems' key={menuItems.id}>
                            <div className='menuTitle'>{menuItems.title}<p id="menuDescription">{menuItems.description}</p></div>
                            <div className='menuLine'> -------------</div>
                            <div className='menuPrice'> {menuItems.price}</div><br />
                        </div>
                    ))}
                    <br /><hr /><br />
                </div>
            ))}
        </section>
    );
}
export default Menupage;