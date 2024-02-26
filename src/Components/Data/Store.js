import { configureStore, createSlice } from "@reduxjs/toolkit";
//PF0JA64V
//Carousel Images
const carouselList = [
    {src:"Images/carousel/img0.jpg",desc:"Fusion Rice: The High fiber long grained rice infused with beets and packed with antioxidants organic fruits"},
    {src:"Images/carousel/img1.jpg",desc:"Seldom Spaghetti: The Gluten free version of Spaghetti handmade using vegetable starch from sources like Potato, Tapioca, Sago and infused with basil power"},
    {src:"Images/carousel/img2.jpg",desc:"Rolls Ultimatum: The Supreme power of Vitamin rolls made from Sweet Potato and tossed with inhouse signature Cajun Sauce"},
];
//Menu List with Button Status in global state
const MenuListState = [
    {
        id: "M01",
        heading: "Salads",
        body: [
            {
                id: "S01",
                title: "Basil Mushroom Salad",
                description: "Gently Sauted Mushrooms in Basil infused Cuscus",
                // getImageSrc: () => require("../../Images/salads/dish1.jpg"),
                imageSrc: "Images/salads/dish1.jpg",
                price: "$10.99",
                value: 10.99,
                addBtnState: false
            },
            {
                id: "S02",
                title: "Beetroot Avocado Salad",
                description: "Blanched Avocado slices topped with pickled Beets",
                // getImageSrc: () => require("../../Images/salads/dish2.jpg"),
                imageSrc: "Images/salads/dish2.jpg",
                price: "$12.99",
                value: 12.99,
                addBtnState: false
            },
            {
                id: "S03",
                title: "Chestnut Potato Salad",
                description: "Baked Potatoes and Lettuce with fried Chestnuts",
                // getImageSrc: () => require("../../Images/salads/dish3.jpg"),
                imageSrc: "Images/salads/dish3.jpg",
                price: "$13.99",
                value: 13.99,
                addBtnState: false
            },
        ]
    },
    {
        id: "M02",
        heading: "Peach House Specialities",
        body: [
            {
                id: "MC01",
                title: "Paneer Butter Masala",
                description: "Cottage Cheese cubes served in Indian spiced Buttery sauce with Exotic Long grain Jasmine rice",
                // getImageSrc: () => require("../../Images/meal/paneer.jpg"),
                imageSrc: "Images/meal/paneer.jpg",
                price: "$14.99",
                value: 14.99,
                addBtnState: false
            },
            {
                id: "MC02",
                title: "Peach House Thaali",
                description: "Peach House special delicay platter with food from all parts of India",
                // getImageSrc: () => require("../../Images/meal/thali.jpg"),
                imageSrc: "Images/meal/thali.jpg",
                price: "$16.99",
                value: 16.99,
                addBtnState: false
            },
            {
                id: "MC03",
                title: "Impossible Pasta",
                description: "Gluten free Pasta, Impossibly made from rice and Vegan alfredo sauce",
                // getImageSrc: () => require("../../Images/meal/pasta.jpg"),
                imageSrc: "Images/meal/pasta.jpg",
                price: "$17.99",
                value: 17.99,
                addBtnState: false
            },
        ]
    },
    {
        id: "M03",
        heading: "Signature Desserts",
        body: [
            {
                id: "DS01",
                title: "Macha Berry Mousse",
                description: "Blue Berry Macha Mousse is the Signature deser of Peach house",
                // getImageSrc: () => require("../../Images/deserts/dessert1.jpg"),
                imageSrc: "Images/deserts/dessert1.jpg",
                price: "$3.99",
                value: 3.99,
                addBtnState: false
            },
            {
                id: "DS02",
                title: "Basil Seed Pudding",
                description: "Milk soaked Basil seeds blended in mocha chocalate syrup and topped with Coconut Cream and Raspberries ",
                // getImageSrc: () => require("../../Images/deserts/dessert2.jpg"),
                imageSrc: "Images/deserts/dessert2.jpg",
                price: "$5.99",
                value: 5.99,
                addBtnState: false
            },
            {
                id: "DS03",
                title: "Oats Crumble Cup",
                description: "Crumbled Oats blended with Honey and Fig compote, served with Vanilla flavored Vegan Cream",
                //getImageSrc: () => require("../../Images/deserts/dessert3.jpg"),
                imageSrc: "Images/deserts/dessert3.jpg",
                price: "$2.99",
                value: 2.99,
                addBtnState: false
            },
        ]
    }
];

//Maintaining CartStatus and details globally

const cartState = {
    isEmpty: 'Y',
    totalCartItems: 0,
    totalCartPrice: 0,
    cartItems: [],
    showCart: false,
    showOrderMsg:'Y',
    showPayBtn:'Y',
};

const cartSlice = createSlice(
    {
        name: "cartDetails",
        initialState: cartState,
        reducers: {
            updateCartEmptyFlg: (state, action) => {
                // alert("came in cart flag setting function "+ action.payload);
                state.isEmpty = action.payload;
                // alert("after setting the value is: "+ state.isEmpty);
            },
            updateCartCount: (state, action) => {
                state.totalCartItems += action.payload;
            },
            updateCartPrice: (state, action) => {
                state.totalCartPrice += action.payload;
            },
            updateCartItems: (state, action) => {
                console.log("inside cart items update section");
                state.cartItems.push(action.payload);
            },
            addDishCount: (state, action) => {
                const { cartDishId, cartDishPrice } = action.payload;
                console.log("inside add dish function");
                const dishCountToAdd = state.cartItems.find(item => item.id === cartDishId)
                if (dishCountToAdd) {
                    if (dishCountToAdd.dishCount > 4) {
                        alert("Due to demand, Order limits to 5");
                    }
                    else {
                        dishCountToAdd.dishCount += 1;
                        state.totalCartItems += 1;
                        console.log("cartPrice: " + state.totalCartPrice);
                        let addedPrice = (state.totalCartPrice + cartDishPrice)
                        console.log("inside update of dishcount");
                        state.totalCartPrice = (parseFloat(addedPrice.toFixed(2)));
                        state.showPayBtn = "Y";
                    }
                    if(state.totalCartItems > 0){state.showPayBtn ='Y'}
                }
            },
            minusDishCount: (state, action) => {
                const { cartDishIdM, cartDishPriceM } = action.payload;
                const dishCountToMinus = state.cartItems.find(item => item.id === cartDishIdM)
                if (dishCountToMinus) {
                    console.log("dishCount check: " + dishCountToMinus.dishCount);
                    if (dishCountToMinus.dishCount > 0) {
                        dishCountToMinus.dishCount -= 1;
                        state.totalCartItems -= 1;
                        let updatedPrice = (state.totalCartPrice - cartDishPriceM);
                        if (state.totalCartItems < 0) {
                            state.totalCartItems = 0;
                            state.totalCartPrice = 0;
                            alert("The quantity of selected dish is 0");
                        }
                        else {
                            console.log("Current Value: " + updatedPrice);
                            console.log(parseFloat(updatedPrice).toFixed(2));
                            state.totalCartPrice = (parseFloat(updatedPrice.toFixed(2)));
                        }
                        if (dishCountToMinus.dishCount < 1) {
                            dishCountToMinus.dishCount = 0;
                        }
                    }
                    else {
                        alert("The quantity of selected dish is 0");
                    }
                    if(state.totalCartItems <1){state.showPayBtn ='N'}

                }
            },
            showCartOrNotFunc: (state, action) => {
                state.showCart = action.payload;
            },
            resetCartState:(state,action) => {
                state.cartItems = [];
                state.totalCartItems = 0;
                state.totalCartPrice = 0;
            },
            resetLoaderDataState:(state,action) => {
                state.showOrderMsg ='N';
            },
            payBtnReset:(state,action)=>{
                state.showPayBtn = "N";
            },
        }
    }
);
//slice for menulistbutton
const menuBtnSlice = createSlice(
    {
        name: 'menuBtn',
        initialState: MenuListState,
        reducers: {
            updateMenuBtnStatus: (state, action) => {
                const { menuId, dishId, value } = action.payload;
                //alert("inside Button status update section");
                console.log(action.payload);
                // const id ="DS03";
                // const value = true;
                // alert(id);
                const menuData = state.find(btn => btn.id === menuId);
                if (menuData) {
                    console.log("inside menu data");
                    const buttonToUpdate = menuData.body.find(updt => updt.id === dishId);
                    if (buttonToUpdate) {
                        console.log("inside buttonToUpdate");
                        buttonToUpdate.addBtnState = value;
                    }

                }
                // state.push.body.addBtnState=action.payload;
                // state.body.addBtnState = action.payload;
            },
            resetMenuState:(state,action) => {
                return MenuListState;
            },
        }
    }
)
//store for menuliststate, cartitems
const store = configureStore(
    {
        reducer: {
            cart: cartSlice.reducer,
            menuBtn: menuBtnSlice.reducer,
        }
    }
);
//exports
//redux actions
export const { payBtnReset,resetLoaderDataState,resetCartState, updateCartCount, updateCartEmptyFlg, updateCartPrice, updateCartItems, addDishCount, minusDishCount, showCartOrNotFunc } = cartSlice.actions;
export const { updateMenuBtnStatus, resetMenuState } = menuBtnSlice.actions;
export default store;
export { MenuListState, cartState, carouselList };