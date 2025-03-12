import {useState} from "react";
import { FiSun } from "react-icons/fi";
import {BsMoonFill} from "react-icons/bs";

const Switcher = () => {
    const [switcher, setSwitcher] = useState<boolean>(false)
    const toggleSwitcher =():void=>{
        setSwitcher((prevSwitcher: boolean) => !prevSwitcher)
    }

    return (

        <div style={{backgroundColor: switcher? 'white' : 'black' , height: "100vh"}}>
            <h1 style={{color: switcher? "black" : "white"}}>Switcher</h1>
            <button onClick={toggleSwitcher}>{switcher? <FiSun/> : <BsMoonFill />}</button>
        </div>
    )
}
export default Switcher
