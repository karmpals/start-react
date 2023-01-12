import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { productRow } from "../../../dummyData";

import "./productList.css";

const ProductList = () => {
    const [data, setData] = useState(productRow);

    const handleDelete= (id)=>{
        setData(data.filter((item)=>item.id !== id))
      }
      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
          field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            )
          }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 160,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/product/"+params.row.id}>
                <button className="productListEdit">Edit</button>
                </Link>
                <FaTrash className="productListDelete" onClick={()=>handleDelete(params.row.id)} />
              </>
            )
          }
        },
    
      ];
  return (
    <div className="productList">
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
    </div>
  )
}

export default ProductList
