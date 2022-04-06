import { FC } from "react";

export const Select:FC = () => {
    return <select
    className="form-select form-select-sm"
    multiple
    
  >
    <option value="">Open this select menu</option>
    <option value="away">Away</option>
    <option value="home">Home</option>
  </select>
}