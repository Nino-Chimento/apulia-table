import { ITbody } from "../components/Table";
import { IData } from "../data";

export const getThead = (data:IData[]):string[] => {
    const thead = Object.keys(data[0])
    return thead
}

export const getTbody = (data:IData[]):ITbody[] => {
    const tbody = data.map(row => {
        return {
       project: row.project.name,
       employee: row.employee.name,
       date:formatDate(row.date) ,
       hours: row.hours}
    })
    return tbody
}

export const formatDate = (date:any) => {
const today = new Date(date)
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
return `${dd}-${mm}-${yyyy}` ;
}