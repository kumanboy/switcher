import * as React from "react";
import {useState} from "react";
import {DataType} from "../data.ts";

const FormContact = ({dataUser,setDataUser}:{dataUser:DataType[],setDataUser:(dataUser:DataType[])=>void}) => {
    const [name, setName] = useState<string>("");
    const [number, setNumber] = useState<string>("");

     // JSON.parse(localStorage.getItem("userData"))
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>):void=>{
        e.preventDefault()
        if(name === "" || number === "") return;
        setDataUser(
            [...dataUser, {name:name, number:number, id:Date.now() + Math.random().toString(36).substring(2) }]
        );
        setName("");
        setNumber("");
    };
    localStorage.setItem("dataUser",JSON.stringify(dataUser));
    console.log(dataUser);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder={"Enter ur name"}
                    type={"text"}
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
                <input
                    placeholder={"Enter ur "}
                    type={"number"}
                    value={number}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <section >
                {dataUser.map((item:DataType) => (
                    <div key={Math.random()} style={{display: item.name===''&& item.number==='' && item.id==='' ? 'none': 'inline'}}>
                        <li>{item.name} - {item.number}</li>
                    </div>
                ))}
            </section>
        </div>
    )
}
export default FormContact