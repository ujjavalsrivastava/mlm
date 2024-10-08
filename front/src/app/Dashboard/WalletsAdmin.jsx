import { useDispatch, useSelector } from "react-redux";
import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from 'react';
import { axios } from "../../helper/httpHelper";
import { fetchProfile } from "../../store/profileReducer";
import { toast } from "react-toastify";
const WalletsAdmin = () => {
  const state = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);
  const [withdrolReq, setWithdrolReq] = useState({
    amount:"",message:""
  });
  const [history, setHistory] = useState([]);

  const [Inprocess, setInprocess] = useState(0);
  const [redeem, setredeem] = useState(0);

  const [showBal, setShowBal] = useState(0);

  

  // const data = [
  //   { id: 1, amount: '0', status: 'Pending' },
  //   { id: 2, amount: '0', status: 'Pending' },
  //   { id: 3, amount: '0', status: 'Pending' },
  // ];
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'approve':
        return 'green';
      case 'pending':
        return 'red';
      case 'Pending':
        return 'orange';
      default:
        return 'black';
    }
  };

  const handleRowAction  =(status,id)=> {
    alert(status)
  }
  const capitalizeFirstLetter = (string) => {
    return string.replace(/\b\w/g, char => char.toUpperCase());
  };
  const columns = [
    {
      name: 'Name',
      selector: row => row.user.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.user.email,
      sortable: true,
    },
    {
      name: 'Mobile',
      selector: row => row.user.mobile,
      sortable: true,
    },
  
    {
      name: 'Amount',
      selector: row => row.amount,
      sortable: true,
    },
    {
      name: 'Remarks',
      selector: row => row.message,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      cell: (row) => (
        <div style={{ color: getStatusColor(row.status) }}>
          {capitalizeFirstLetter(row.status)}
        </div>
      ),
    },
    {
        name: 'Actions',
        selector: row => row.status,
        cell: (row) => (
          <button onClick={() => handleRowAction(row.status,row._id)}>
            Action
          </button>
        ),
      },
  ];

 
  
 

  const handle = (e) => {
    setWithdrolReq((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!withdrolReq.amount) {
      toast.error("Enter Amount is Required");
      return;
    }

    if (!withdrolReq.message) {
      toast.error("Enter Message is Required");
      return;
    }
   
    try {
      const response = await axios.post("user/withdrawal-request", withdrolReq);
      if (response) {
        toast.success(response.data.message);
        setShowModal(false);
        withdrolReq.amount = '';
        withdrolReq.message = '';
        fetchWithdrolHis();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
    const errorData = error.response.data.error;
    const errorDatafield = error.response.data.field;
    toast.error(errorData);
    }
  };
  
const fetchWithdrolHis = async()=>{
  try {
    const response = await axios.get("user/withdrawal-request");
    setHistory(response.data);
    let inproAmt = 0;
    let redeem = 0;
    const listAmount =  response.data.map(row =>{
      if(row.status == 'pending'){
        inproAmt +=row.amount;
      }
      if(row.status == 'approve'){
        redeem +=row.amount;
      }
      
    })
    setInprocess(inproAmt);
    setredeem(redeem);
  } catch (error) {
  console.log(error)
   // const errorData = error.response.data.error;
    //const errorDatafield = error.response.data.field;
   // toast.error(errorData);
    
  }
}
  
console.log('history' + history);
  useEffect(()=>{
 
    fetchWithdrolHis();
  },[])
  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1>Wallets </h1>
          <ol class="breadcrumb">
            <li>
              <a href="#">Home / Wallets </a>
            </li>
          
          </ol>
        </div>

        <div class="content">
          


              <DataTable
                title="Withdrawal Status"
                columns={columns}
                data={history}
                pagination
                />
      
         
        </div>
      </div>
    </>
  );
};

export default WalletsAdmin;
