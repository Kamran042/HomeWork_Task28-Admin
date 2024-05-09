import React, { useContext } from "react";
import MainContext from "../../../Context/context";
import Loading from "../../Loading/Loading";
import Table from "../../../Components/Admin/Table/Table";
const Products = () => {
  const { data,loading } = useContext(MainContext);
  return (
    <div style={{marginTop:'20px'}}>
      {
        loading ? <Loading/> : <Table items={data}/>
      }
    </div>
  );
};

export default Products;
