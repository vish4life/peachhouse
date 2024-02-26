# Peach House
Peach house is a personal project for improving react skills.

## Tech Stack
* HTML5
* CSS3
* ReactJs v18.2.0

## Project Requirement
Building the web application for a renowned restaurant* "`Peach House`"
### The Web application should contain the following
* Head Section:
    > * The Peach logo, Name of the restuarant, Page Menu & Shopping Cart should be part of head 
    > * ![Head Image](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/head.jpg)
* Main Section:
    > * Home page to show the details of the `Signature Dishes`
    > * Menu page to show restaurant Menu
    > * Order page to allow customers to order food Online
    > * Reserve page to make online reservations for our `Fine Evenings`
    > * Peach page to show the restaurant history
    > * ![Main Image](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/main.jpg)
* Footer Section:
    > * Social Media showing Twitter, Instagram, Facebook & Youtube pages
    > * Locations to show Restaurant locations 
    > * Help to show available support options
    > * ![Footer Image](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/footer.jpg)

## UX / UI Design
* Colors
    * Background
        > * White
        > * Gray
        > * Pink
        > * Salmon
    * Buttons
        > * Display Buttons:
        > > * Pink Background
        > > * Purple Text
        > * Processing Buttons:
        > > * White Background
        >  > * Salmon text with purple shadow
    * Links
        > * Gray color
        > * Black icons
    * Text
        > * White or Black
        > * purple shadow or salmon shadow
> `Note: Mobile version of UI should be adaptable to mobile devices`
## Functional Design
* Home page
    > * Home page should display all the signature dishes images which rotate after every 5 seconds
* Menu page should display the list of items available in the current season for ordering (this is a static page)
* Order page should display the dishes available along with add to cart option
    > * Once the add to cart is selected, the button should no longer be available to re-click again
* Reserve page should display options to select location, time, date, number of guests, name, phone, email options along with Reserve & Reset buttons
    > * All the fields are mandatory and error should get displayed if any of the field is missing
    > * Date should always be greater than today's date
    > * Phone number to be 10 digits and not special characters or spaces
    > * Email Id should be in 'xx@xx.xx' format
    > * Name should be minimum of 3 and maximum of 30 characters in length
    > * Confirmation message to appear after Reserve button is clicked
    > > * The confirmation message should also contain okay button which navigates back to Reserve page and resets all the fields to initial state
    > * Reset button should reset all the fields to initial state
* Peach page should display a background image with content at the top of the image
* Shopping Cart:
    > * Shopping cart should alert as empty when clicked without any orders
    > * After the items are added, shopping cart should display options to increment or decrement the quantity and limit the maximum order to 5
    > * Pay button should get displayed when the quantity is minimum of 1 item
    > * After clicking on the pay a confirmation message with Okay button should appear, at the sametime pay shouldn't work post click
    > * The okay button should trigger click event clearing the cart and reset the state of add cart buttons and navigating back to home page
> * `Note: Page Menus, Shopping Cart, Footer Links should be accessible in all the pages`
# Technical Design
### Libraries & Styling
> ReactJs & JSX
> > React Libraries
> > * react v18.2.0
> > * react-router-dom v18.2.0
> > * react-redux v9.1.0
> > * reduxjs/toolkit v2.1.0
> > * react-parallax v3.5.1

> CSS Styles
> > * font imports from google fonts
> > * grid & flex layouts
> > * Selectors
> > > * pseudo
> > > * class & id
> > > * html element
> > > * sibiling
> > * Media (screen size display styling)
### Flow:
## Available Scripts
In the project directory (src), you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
