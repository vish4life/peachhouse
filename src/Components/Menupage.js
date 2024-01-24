import menuList from './Data/MenuList';
function Menupage() {
    return (
        <section className="pageSection" id="menu">
            <h1>Menu</h1><br />
            {menuList.map((menu) => (
                <div className="menuSection">
                    <div className='menuHeading' key={menu.id}>
                        {menu.heading}
                    </div><br />
                    {menu.body.map((menuItems) => (
                        <div className='menuItems' key={menuItems.id}>
                            <div className='menuTitle'>{menuItems.title}</div>
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