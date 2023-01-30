// import CTO from "./Components/CTO"
// import Specials from "./Components/Specials"
// import CustomersSay from "./Components/CustomersSay"
// import Chicago from "./Components/Chicago"
import BookingPage from "./Components/BookingPage"
import {Routes, Route} from "react-router-dom"
import HomePage from "./Components/HomePage"


export default function Main(){
    return (
        <>
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="booking" element={<BookingPage />} />
            </Routes>
        </main>

        </>
    )
}