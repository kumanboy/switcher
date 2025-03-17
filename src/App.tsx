import FormContact from "./components/FormContact.tsx";
import FindData from "./components/FindData.tsx";
import {DataType} from "./data.ts";
import {useState} from "react";
// import {data as initialState} from './data.ts'

const App = () => {
    const [dataUser, setDataUser] = useState<DataType[]>(
        ()=> {
            return JSON.parse(localStorage.getItem("dataUser"))||[];
        }
    );
    return (
        <div>
            <FormContact dataUser={dataUser} setDataUser={setDataUser} />
            <FindData dataUser={dataUser}/>

        </div>
    )
}
export default App
