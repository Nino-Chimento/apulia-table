import { FC } from "react";
import { IData } from "../../data";

export interface ITbody {
    project:string
    employee?:string
    date?:string |any
    hours?:number
}

interface TableProps {
    thead:string[]
    tbody:ITbody[]
}

export const Table:FC<TableProps> = ({thead,tbody}) => {
    return  <table className="table">
    <thead>
      <tr>
          {thead.map(th =>  <th scope="col">{th}</th>)}
        
      </tr>
    </thead>
    <tbody>
      {tbody &&
        tbody.map((row,index) => (
          <tr key={index}>
            <th>{row.project}</th>
            <th>{row.employee}</th>
            <th>{row.date}</th>
            <th>{row.hours}</th>
          </tr>
        ))}
    </tbody>
  </table>
}