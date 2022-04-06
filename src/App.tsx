import { useState } from "react";
import { Table } from "./components/Table";
import { data } from "./data";
import { formatDate, getTbody, getThead } from "./utils/formatter";



function App() {
  const [thead,setThead] =useState(getThead(data))
  const [tbody,setTbody] =useState(getTbody(data))

  return (
    <div className="text-center">
      <Table thead={thead} tbody={tbody} />
   
    </div>
  );
}

export default App;
