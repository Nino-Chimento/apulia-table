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

export 
const groupBy = (array:[], key:string[]) => {
   if(key.length === 0) return {
       result:array,
       thead: getThead(array)
   }
   if(key[0] === 'project') {
    const result = {};
    const response:ITbody[] = []
    array.forEach((item:IData) => {
        const keyGetter = (item:IData) => item.project.name
         const key = keyGetter(item);
        ;
         if (!(key in result)) {
             //@ts-ignore
             result[key] =  item.hours;
             const obj:ITbody = {
               
                 project:key,
                 hours: item.hours
             }
             response.push(obj)
         } else {
             //@ts-ignore
            result[key] = result[key] + item.hours;
            const obj = {
               
                project:key,
                 //@ts-ignore
                hours: result[key] + item.hours
            }

            response.push(obj)
         }
    });
    
    
    
    return {thead :['project','hours'],result:response } ;
   }
  return {thead :[],result:[] }
};