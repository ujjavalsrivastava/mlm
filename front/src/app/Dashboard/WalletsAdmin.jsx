import { useDispatch, useSelector } from "react-redux";
import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from 'react';
import { axios } from "../../helper/httpHelper";
import { fetchProfile } from "../../store/profileReducer";
import { toast } from "react-toastify";
const WalletsAdmin = () => {
  const state = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);
  const [withdrolApprovel, setWithdrolApprovel] = useState({
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
      case 'accepted':
        return 'green';
      case 'pending':
        return 'red';
      case 'Reject':
        return 'orange';
      default:
        return 'black';
    }
  };

  const handleRowAction  =(id)=> {
    setWithdrolApprovel({requestId : id});
    setShowModal(true);
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
      selector: row => row.kyc.mobile,
      sortable: true,
    },
    {
      name: 'Bank Name',
      selector: row => row.kyc.Inbank,
      sortable: true,
    },
    {
      name: 'Bank Branch',
      selector: row => row.kyc?.InbankBranch,
      sortable: true,
    },
    
    {
      name: 'Account No',
      selector: row => row.kyc.accNo,
      sortable: true,
    },
    {
      name: 'Account Holder Name',
      selector: row => row.kyc.InbankName,
      sortable: true,
    },
    {
      name: 'Ifsc No',
      selector: row => row.kyc.ifscCode,
      sortable: true,
    },
    {
      name: 'Currnt Amount',
      selector: row => row.currentAmount.toFixed(2),
      sortable: true,
    },
  
    {
      name: 'Amount',
      selector: row => row.amount,
      sortable: true,
    },
    {
      name: 'User Remarks',
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
          
          (row.status == 'pending') ?
          
          <button onClick={() => handleRowAction(row._id)}>
            Action
          </button>
          :null
          
        ),
      },
  ];

 
  
 

  const handle = (e) => {
    setWithdrolApprovel((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

console.log(withdrolApprovel);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!withdrolApprovel.status) {
      toast.error("Enter Status is Required");
      return;
    }
    if (!withdrolApprovel.adminRemark) {
      toast.error("Enter Message is Required");
      return;
    }
   
    try {

      const userConfirmed = window.confirm("Are you sure "+withdrolApprovel.status);
      if (userConfirmed) {
      
      const response = await axios.post("user/withdrawal-approval", withdrolApprovel);
      if (response) {
        toast.success(response.data.message);
        setShowModal(false);
        fetchWithdrolHis();
      } else {
        toast.error(response.data.message);
      }
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
      if(row.status == 'accepted'){
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
          
        <div
            className={`modal fade ${showModal ? "show" : ""}`}
            style={{ display: showModal ? "block" : "none" }}
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
           >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
              Approve for Request
              </h5>
              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="close closebtn"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" style={{ fontWeight: "bold" }}>
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
            <form onSubmit={handleSubmit}>
                    <div class="row">
                    <div class="col-md-12">
                        <div class="form-group has-feedback">
                          <label class="control-label">Approve/Reject</label>
                          <select class="form-control" name="status" onChange={handle}>
                          <option value="">Select Option</option>
                            <option>accepted</option>
                            <option>Reject</option>
                          </select>
                         
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group has-feedback">
                          <label class="control-label">
                           Enter Message
                          </label>
                          <input class="form-control"  name="adminRemark" onChange={handle} type="text" />
                        </div>
                      </div>
                      <br />
                      <br />
                      <div class="col-md-12">
                        <button
                          type="submit"
                          class="btn btn-success"
                          
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
            </div>
          </div>
        </div>
      </div>

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
