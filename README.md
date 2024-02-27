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

> > Testing Libraries
> > * testing-library/jest-dom v5.17.0
> > * testing-library/react v13.4.0

> User Hooks
> > * React: useState, useEffect
> > * Reduxjs toolkit: useSelector, useDispatch, Provider, configureStore, createSlice `*reducer is part of configureStore`
> > * React Router: Routes, Route, Link, Browser Router, useNavigate
> > * Parallax: Parallax

> CSS Styles
> > * font imports from google fonts
> > * grid & flex layouts
> > * Selectors
> > > * pseudo
> > > * class & id
> > > * html element
> > > * sibiling
> > * Media (screen size display styling)
### Code Flow:
The website consists of three main components
> * Head Section
> > * Logo
> > * Brand Name
> > * Navigation Links
> > * Shopping Cart
> * Main Section
> * Foot Section

Detailed Code Processing Logic of every component
> Head Section:
> > * The Head component loads with Header, which contains brand text on the right and logo image on the left
> > * Navigation links are built using `react-router-dom` 
> > * Shopping cart is a button with a cart icon
> >   * It fetches the cart empty or not flag set in `Store.js` using `reduxJs toolkit` and conditionally launches the `CartDetails.js` component

> > `Note: useSelector is used to fetch the flag and useDispatch is used to set the flag`

> Main Section:
> > * The Main component renders all the navigational links in the section
> >  * Home Page:
> >    * This page contains a text element with information about restaurant and a image section where every image rotates after 5 seconds using `useEffect` hook
> >    * `useEffect` hook uses the index of current image from the array of images (which are loaded from `Store.js`) and then increments it. It uses `modulus operator` to rotate back to `0th index` of the array after the last image
> >    * `useState` hook is used to set the current index
> >    * Image array consists of image source and description
> > * Menu Page:
> >    * This page contains static text loaded from a list which holds information about category of dish, dish name, price and brief description with ingridients
> >    * The list is stored in Data path and fetched using `map method` in react
> > * Order Page:
> >    * This page contains all the available dishes with their image, name, price and add to cart button which are loaded from `Store.js`
> >    * `useSelector` hook allows to access the lists configured in `Store.js` and then renders the details of name, price and image using `map method`
> >    * Add to cart button is rendered for every map iteration with disable option mapped to `List` value from the store
> >    * `useDispatch` hook is used to update the shopping cart empty or not flag, button status, total items, total price etc  based on the click event from Add cart button using `reducers` defined in the `Store.js`
> > * Reserve Page:
> >    * This page contains a div element which displays following fields
> >      * Location
> >      * Date
> >      * Time
> >      * Guests
> >      * Name
> >      * Phone
> >      * Email
> >    * The confirmation message is conditionally rendered after reserve button onclick event is successfully completed 
> >    * The reserve button onclick event validates fields and displays error
> >    * `useState` hook is used to set the above elements along with error messages
> > * Peach Page:
> >    * This page uses `react-parallax` library to render the content over a background image with parallax effect

> Footer Section:
> > * Footer section uses `CSS Grid layout` to display
> >   * Social media 
> >   * Locations
> >   * Support
> > * Social media opens a new tab 
> > * Locations & Support follow same work flow of calling a custom userhook `overlay` to display the content
> >   * The `overlay` userhook is like a pop-up window which covers the entire viewport

> Shopping Cart Section:
> > * Shopping cart is also a display which occupies the view port with following details
> >   * Total Cart Items 
> >   * Total Cart Price
> >   * Items in Cart
> >   * Increment & Decrement buttons
> >   * Quantity field
> > * Pay button is conditionally rendered if minimum quantity of the cart is 1 (`ternary operator`)
> >   * Onclick event of Pay will display a loading bar built using `useEffect` and `CSS animation (Key Frames)`
> >   * After the `useEffect` is executed for 2 seconds the page is re-rendered which does the following
> >     * Increment & Decrement along buttons get disabled
> >     * Pay button becomes inactive
> >     * Confirmation button with Okay button appears
> >     * Okay button onclick event resets the state of the cart using `useDispatch`
> >   * X button on the top of the screen closes the cart view
> > * Locations & Support follow same work flow of calling a custom userhook `overlay` to display the content
> >   * The `overlay` userhook is like a pop-up window which covers the entire viewport
### Run project
* In the project directory (src), you can run: `npm start`
* Runs the app in the development mode.
* Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Run Test
* `npm test` or `npm run test` : Launches the test runner in the interactive watch mode

## Sample Snippets
### Application
Desktop Web Version
* ![Home Page](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/webhome.jpg)
* ![Menu Page](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/webmenu.jpg)
* ![Order Page](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/weborder.jpg)
* ![Reserve Page](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/webreserve.jpg)
* ![Peach Page](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/webpeach.jpg)
* ![Cart Page](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/webcart.jpg)
* ![Pay Load](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/webopay.jpg)
* ![Pay Confirm](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/webpaycon.jpg)
* ![Reserve Page Errors](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/webrerror.jpg)
* ![Reserve Page Date Error](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/webrdterror.jpg)
* ![Reserve Page confirm](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/webrcon.jpg)
* ![Empty Cart](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/webcarterror.jpg)

Mobile Web Version
* ![Home Page](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/mobhome.jpeg)
* ![Menu Page](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/mobmenu.jpeg)
* ![Order Page](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/moborder.jpeg)
* ![Reserve Page](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/mobreserve.jpeg)
* ![Peach Page](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/mobpeach.jpeg)
* ![Footer Screen](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/mobfooter.jpeg)
* ![Cart Page](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/mobcart.jpeg)
* ![Pay Load](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/mobpayload.jpeg)
* ![Pay Confirm](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/mobpayproc.jpeg)

### Test
Test run results
* ![Unit Test Results](https://github.com/vish4life/peachhouse/blob/main/src/Images/readme/unitTestResults.jpg)