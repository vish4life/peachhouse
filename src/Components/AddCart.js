// import {useState} from 'react';
const AddCart = ({id,title,price}) => {
    // const updateFunc = (title,price) =>{
    //     alert(title + " " + price);
    //     setIsDisabled(true);
    // }
    // const [isDisabled,setIsDisabled] = useState(false);
    // console.log(id+" "+title+ " "+price+" inside AddCart Function");
    return(
        <>
            <div className="addCart" id={id}>
                <button 
                    type="button" 
                    className="addCartBtn"
                    // onClick={updateFunc({title},{price})}
                    // disabled={isDisabled}
                >
                    Add to Cart
                </button>
                
            </div>
        </>
    )
}
export default AddCart;