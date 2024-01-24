// let imgFolder ="../../Images/";
// let salads ="salads/dish1.jpg";
// let meals ="meal/";
// let desserts ="deserts/";
// let saladsPath = imgFolder+salads;
// let mealsPath = imgFolder+meals;
// let dessertsPath = imgFolder+desserts;

export const orderList = [
    {
        id: "S1",
        title: "Basil Mushroom Salad",
        description: "Gently Sauted Mushrooms in Basil infused Cuscus",
        getImageSrc: () => require("../../Images/salads/dish1.jpg")
    },
    {
        id: "S2",
        title: "Beetroot Avocado Salad",
        description: "",
        getImageSrc: () => require("../../Images/salads/dish2.jpg")
    },
    {
        id: "S3",
        title: "Chestnut Potato Salad",
        description: "",
        getImageSrc: () => require("../../Images/salads/dish3.jpg")
    },
    {
        id: "S4",
        title: "Paneer Butter Masala",
        description: "",
        getImageSrc: () => require("../../Images/meal/paneer.jpg")
    },
    {
        id: "S5",
        title: "Peach House Thaali",
        description: "",
        getImageSrc: () => require("../../Images/meal/thali.jpg")
    },
    {
        id: "S6",
        title: "Impossible Pasta",
        description: "",
        getImageSrc: () => require("../../Images/meal/pasta.jpg")
    },
    {
        id: "S7",
        title: "Macha Berry Mousse",
        description: "",
        getImageSrc: () => require("../../Images/deserts/dessert1.jpg")
    },
    {
        id: "S8",
        title: "Basil Seed Pudding",
        description: "",
        getImageSrc: () => require("../../Images/deserts/dessert2.jpg")
    },
    {
        id: "S9",
        title: "Oats Crumble Cup",
        description: "",
        getImageSrc: () => require("../../Images/deserts/dessert3.jpg")
    }
];
export default orderList;