export const MenuList = [
    {
        id: "M01",
        heading: "Salads",
        body: [
            {
                id: "S01",
                title: "Basil Mushroom Salad",
                description: "Gently Sauted Mushrooms in Basil infused Cuscus",
                getImageSrc: () => require("../../Images/salads/dish1.jpg"),
                price: "$10.99"
            },
            {
                id: "S02",
                title: "Beetroot Avocado Salad",
                description: "Blanched Avocado slices topped with pickled Beets",
                getImageSrc: () => require("../../Images/salads/dish2.jpg"),
                price: "$12.99"
            },
            {
                id: "S03",
                title: "Chestnut Potato Salad",
                description: "Baked Potatoes and Lettuce with fried Chestnuts",
                getImageSrc: () => require("../../Images/salads/dish3.jpg"),
                price: "$13.99"
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
                getImageSrc: () => require("../../Images/meal/paneer.jpg"),
                price: "$14.99"
            },
            {
                id: "MC02",
                title: "Peach House Thaali",
                description: "Peach House special delicay platter with food from all parts of India",
                getImageSrc: () => require("../../Images/meal/thali.jpg"),
                price: "$16.99"
            },
            {
                id: "MC03",
                title: "Impossible Pasta",
                description: "Gluten free Pasta, Impossibly made from rice and Vegan alfredo sauce",
                getImageSrc: () => require("../../Images/meal/pasta.jpg"),
                price: "$17.99"
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
                getImageSrc: () => require("../../Images/deserts/dessert1.jpg"),
                price: "$3.99"
            },
            {
                id: "DS02",
                title: "Basil Seed Pudding",
                description: "Milk soaked Basil seeds blended in mocha chocalate syrup and topped with Coconut Cream and Raspberries ",
                getImageSrc: () => require("../../Images/deserts/dessert2.jpg"),
                price: "$5.99"
            },
            {
                id: "DS03",
                title: "Oats Crumble Cup",
                description: "Crumbled Oats blended with Honey and Fig compote, served with Vanilla flavored Vegan Cream",
                getImageSrc: () => require("../../Images/deserts/dessert3.jpg"),
                price: "$2.99"
            },
        ]
    }
];
export default MenuList;