import * as React from "react";
import {useState} from "react";
type DataType = {
    name: string,
    number: string,
    id:number
}
const FormContact = () => {
    const [name, setName] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [data, setData] = useState<DataType[]>([
        {
            name: "",
            number: "",
            id:0
        }
    ]);

   const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault()
       if(name === "" || number === "" || number === "") return;
       setData(
          [...data, {name:name, number:number, id:Math.random()}]
       )

   }


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
                {data.map((item) => (
                    <div key={Math.random()} style={{display: item.name===''&& item.number==='' && item.id===0 ? 'none': 'inline'}}>
                        <li>{item.name} - {item.number}</li>
                    </div>

                ))}
            </section>

        </div>
    )
}
export default FormContact
