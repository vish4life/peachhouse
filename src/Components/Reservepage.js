import { useState } from "react";

function Reservepage() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [place, setPlace] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [errors, setErrors] = useState({});
    const [callSubmit, setCallSubmit] = useState(false);
    const dte = new Date();
    const timeStamp = dte.getFullYear().toString() + dte.getMonth().toString() + dte.getDate().toString() + dte.getHours().toString() + dte.getMinutes().toString() + dte.getSeconds().toString()
    const validateForm = () => {
        let error = {};
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(date);
        console.log(name.length);
        if (!name || !date || !time || !place || !phone || !email) {
            error.msg = "All the fields are mandatory";
        }
        if (name.length < 3 || name.length > 30) {
            error.msgN = "Name should be min of 3 and max of 30 characters";
        }
        if (phone.length !== 10) {
            error.msgP = "Phone number should be 10 digits";
        }
        // if (!phone.match(/^\+\d{1,3}\s\(\d{3}\)\s\d{3}\s\d{4}$/)) {
        // if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            error.msgE = "Email should be of xx@xxx.xxx";
        }
        console.log(selectedDate + " " + today + " " + today.setHours(0, 0, 0, 0));
        if (selectedDate < today) {
            error.msg = "The date should not be prior to today";
        }
        setErrors(error);
        return Object.keys(error).length === 0;
    }
    const reserveFunc = () => {
        console.log("CallSubmit: " + callSubmit);
        if (callSubmit) {
            if (!validateForm()) {
                return;
            }
        }
        setCallSubmit(true);

        // console.log("Inside Reserve Function: " + name);
        // console.log("Place: " + place);
        // console.log("Date: " + date);
        // console.log("Time: " + time);
        // console.log("Phone: " + phone);
        // console.log("Email: " + email);
        // resetFunc();
    }
    const resetFunc = () => {
        setCallSubmit(false);
        setName("");
        setPhone("");
        setEmail("");
        setTime("");
        setDate("");
        setPlace("");
        setErrors({});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        reserveFunc();
    }

    return (
        <div className="reservePageContainer">

            <div className="reservationSection">
                {callSubmit ? (
                    <>
                        <div className="reservationHead">
                            <h1>Reservation Confirmed</h1><br/>
                            <p>Confirmation# {timeStamp}</p>
                        </div>
                        <div className="confirmMessage">
                            <p className="reserveConfirm" id="reserveConfirm">Thank you for choosing "Peach House", {name}.</p>
                            <p className="reserveConfirm" id="reserveConfirm2">Your reservation at {place} on {date}, {time} HRS is confirmed.</p>
                            <p className="reserveConfirm" id="reserveConfirm3">A confirmation email is sent to {email} and text is sent to {phone}.</p>
                            <div className="reserveButton1">
                                <button type="button" className="reserveButton" onClick={() => (resetFunc())}>Okay</button>
                                </div>
                        </div>
                    </>) : (
                    <>
                        <div className="reservationHead">
                            <h1>Welcome to the Reservation page</h1>
                        </div>
                        <form className="reserveForm" onSubmit={handleSubmit}>
                            <label className="reserveLabels" htmlFor="place">Location</label>
                            <select id="place" value={place} onChange={(e) => setPlace(e.target.value)}>
                                <option value="" >Select Location</option>
                                <option value="City Center">City Center</option>
                                <option value="Mavis Road">Mavis Road</option>
                                <option value="Dundas Street">Dundas Street</option>
                            </select>
                            <label className="reserveLabels" htmlFor="date">Date</label>
                            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                            <label className="reserveLabels" htmlFor="time">Time</label>
                            <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="">Select Time</option>
                                <option value="1700">1700 HRS</option>
                                <option value="1730">1730 HRS</option>
                                <option value="1800">1800 HRS</option>
                                <option value="1830">1830 HRS</option>
                                <option value="1900">1900 HRS</option>
                                <option value="1930">1930 HRS</option>
                                <option value="2000">2000 HRS</option>
                                <option value="2030">2030 HRS</option>
                                <option value="2100">2100 HRS</option>
                                <option value="2130">2130 HRS</option>
                                <option value="2200">2200 HRS</option>
                                <option value="2230">2230 HRS</option>
                            </select>
                            {/* <input type="text" id="time" value={time} onChange={(e) => setTime(e.target.value)} /> */}
                            <label className="reserveLabels" htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                            {errors.msgN && <div className="errorMsg">{errors.msgN}</div>}
                            <label className="reserveLabels" htmlFor="phone">Phone</label>
                            <input type="text" id="phone" placeholder="Enter 10 digit phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            {errors.msgP && <div className="errorMsg">{errors.msgP}</div>}
                            <label className="reserveLabels" htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder="xxx@xxx.xxx" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {errors.msgE && <div className="errorMsg">{errors.msgE}</div>}
                            <button type="submit" className="reserveButton">Reserve</button>
                            <button type="submit" className="reserveButton" onClick={() => { resetFunc() }}>Reset</button>
                        </form>
                    </>)}

                {errors.msg && <div className="errorMsg">{errors.msg}</div>}

            </div>
        </div>
    );
}

export default Reservepage;
