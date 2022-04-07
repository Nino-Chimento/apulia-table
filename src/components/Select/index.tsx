import { FC } from "react";

interface SelectProps {
    onChange : (e:React.ChangeEvent<HTMLSelectElement>) =>  void
}

export const Select:FC<SelectProps> = ({onChange}) => {
    return <>
    <label htmlFor="">Seleziona raggrupamento</label>
    <select
    className="form-select form-select-sm"
    onChange={onChange}
  >
       <option className="text-capitalaze" value="">Seleziona raggrupamento</option>
    <option className="text-capitalaze" value="project">project</option>
    <option value="employee">employe</option>
  </select></>
}