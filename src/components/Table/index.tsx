import { FC } from "react";


export interface ITbody {
    project:string
    employee?:string
    date?:string |any
    hours?:number
}

interface TableProps {
    thead:string[]
    tbody:ITbody[]
    filters:string[]
}

export const Table:FC<TableProps> = ({thead,tbody,filters}) => {
    return  <table className="table">
    <thead>
      <tr>
          {thead.map((th,index) =>  <th className="text-capitalize" key={index}  scope="col">{th}</th>)}
        
      </tr>
    </thead>
    <tbody>
      {tbody &&
        tbody.map((row,index) => (
          <tr key={index}>
        {filters.includes('employee') ?<>
             {row.employee &&   <th className="text-capitalize">{row.employee}</th>}
              {row.project && <th className="text-capitalize">{row.project}</th>}
              {row.date &&   <th className="text-capitalize">{row.date}</th>}
              {row.hours &&   <th className="text-capitalize">{row.hours}</th>}</>
              :
        <>
          {row.project && <th className="text-capitalize">{row.project}</th>}
          {row.employee &&   <th className="text-capitalize">{row.employee}</th>}
          {row.date &&   <th className="text-capitalize">{row.date}</th>}
          {row.hours &&   <th className="text-capitalize">{row.hours}</th>}</>}
          </tr>
        ))}
    </tbody>
  </table>
}