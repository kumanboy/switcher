import {DataType} from '../data.ts'
import {JSX, useState} from "react";
import * as React from "react";


const FindData = ({dataUser}:{dataUser:DataType[]}): JSX.Element => {
    const [name, setName] = useState<string>("");
    const filteredData: DataType[] =dataUser.filter((item: DataType) => item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
    return (
        <div>
            <input
                type={"text"}
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder={"Enter ur name"}
            />

            {
                (name === "")
                    ?
                    (<p></p>)
                    :
                    filteredData.map((item: DataType) => (
                        <h1 key={item.id}>
                            {item.name} - {item.number}
                        </h1>
                    ))
            }
        </div>
    )
}
export default FindData
