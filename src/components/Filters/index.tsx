import { FC } from "react";

interface FiltersProps{
    filters:string[]
    removeFilter:(filter:string )=> void
}

export const Filters:FC<FiltersProps> = ({filters,removeFilter}) => {
return <div className="d-flex w-100">
    {filters.map(filter =><div className="p-2 border border-primary me-2 position-relative"><span >{filter}</span> <span onClick={() =>removeFilter(filter)} className="cursor-pointer">x</span></div> )}
</div>
}