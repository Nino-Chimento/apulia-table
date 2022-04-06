import { useEffect, useState } from "react";
import { Filters } from "./components/Filters";
import { Select } from "./components/Select";
import { Table } from "./components/Table";
import { data } from "./data";
import { formatDate, getTbody, getThead } from "./utils/formatter";



function App() {
  const [thead,setThead] =useState(getThead(data))
  const [tbody,setTbody] =useState(getTbody(data))
  const [filters,setFilters] = useState<string[]>([])
  
  const setGroup = (e:React.ChangeEvent<HTMLSelectElement>  ) => {
    if(!filters.includes(e.target.value as never)) {
      setFilters([...filters,e.target.value])
    }
  };

  const removeFilter = (filter:string) => {
    const newFilters = filters.filter(f => f !== filter)
    setFilters(newFilters)
  }

  useEffect(() => {},[filters])
  
  return (
    <div className="text-center">
      <div className="mt-2 mb-2">
      <Select onChange={setGroup}/>
      </div>
      <div className="mb-2 mt-3">
      <Filters removeFilter={(filter)=>removeFilter(filter)} filters={filters}/>
      </div>
      <Table thead={thead} tbody={tbody} />
    </div>
  );
}

export default App;
