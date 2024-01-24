const socialList = [
    {
        id:"S1",
        title:"Twitter",
        type:"socials",
        imgSrc:()=>require("../../Images/logos/x.png"),
        url:"https://www.x.com"
    },
    {
        id:"S2",
        title:"Instagram",
        type:"socials",
        imgSrc:()=>require("../../Images/logos/ig.png"),
        url:"https://www.instagram.com"
    },
    {
        id:"S3",
        title:"Facebook",
        type:"socials",
        imgSrc:()=>require("../../Images/logos/fb.png"),
        url:"https://www.fb.com"
    },
    {
        id:"S4",
        title:"Youtube",
        type:"socials",
        imgSrc:()=>require("../../Images/logos/yt.png"),
        url:"https://www.youtube.com"
    }
];
const locationList = [
    {
        id:"L1",
        code:"NA",
        type:"location",
        title:"North America",
    },
    {
        id:"L2",
        code:"AS",
        type:"location",
        title:"Asia",
    },
    {
        id:"L3",
        code:"EU",
        type:"location",
        title:"Europe",
    }
];
const helpList = [
    {
        id:"H1",
        title:"FAQ",
        type:"help",
        imgSrc:()=>require("../../Images/logos/faq.png"),
        code:"faq"
    },
    {
        id:"H2",
        title:"E-Mail",
        type:"help",
        imgSrc:()=>require("../../Images/logos/email.png"),
        code:"email"
    },
    {
        id:"H3",
        title:"Chat Support",
        type:"help",
        imgSrc:()=>require("../../Images/logos/chat.png"),
        code:"chat"
    },
    {
        id:"H4",
        title:"Phone Support",
        type:"help",
        imgSrc:()=>require("../../Images/logos/phone.png"),
        code:"phone"
    }
];
export default socialList;
export {locationList,helpList};