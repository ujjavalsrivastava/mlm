import { useDispatch, useSelector } from "react-redux";
import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from 'react';
import { axios } from "../../helper/httpHelper";
import { fetchProfile } from "../../store/profileReducer";
import { toast } from "react-toastify";
const Wallets = () => {
  const state = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);
  const [withdrolReq, setWithdrolReq] = useState({
    amount:"",message:""
  });
  const [history, setHistory] = useState([]);
     console.log({history})
  const [Inprocess, setInprocess] = useState(0);
  const [redeem, setredeem] = useState(0);

  const [showBal, setShowBal] = useState(0);
  const user = useSelector((state) => state.profile?.data || {});
  
  const dispatch = useDispatch();
  // const data = [
  //   { id: 1, amount: '0', status: 'Pending' },
  //   { id: 2, amount: '0', status: 'Pending' },
  //   { id: 3, amount: '0', status: 'Pending' },
  // ];
  
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
      name: 'Admin Remarks',
      selector: row => row.adminRemark,
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
  ];
  const capitalizeFirstLetter = (string) => {
    return string.replace(/\b\w/g, char => char.toUpperCase());
  };
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
  
  const wallet = async (id) => {
    const response = await axios.get("user/percent-earning?userId=" + id);
    setShowBal(response.data);
  };

  const showBalance = async (id) => {
  
    setShowModal(true);
  };
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
    console.log(response);
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
 
    if (!user?._id) {
      dispatch(fetchProfile());
     
    }else{
      wallet(user?._id)
    }
    fetchWithdrolHis();
  },[])
  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1>Wallets</h1>
          <ol class="breadcrumb">
            <li>
              <a href="#">Home / Wallets </a>
            </li>
          
          </ol>
        </div>

        <div class="content">
          <div class="row">
            <div class="col-lg-12 col-xs-12">
              <div class="info-box" style={{background: '#5867dd'}}>
              <span class="info-box-icon">
                <i style={{color: 'white'}} onClick={showBalance} class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </span>
                <div class="info-box-content">
                 <h3 style={{color: 'white'}}>Available Balance</h3>
                  <span class="info-box-number" style={{color: 'white'}}>₹{showBal && showBal.overallEarning.toFixed(2)}</span>{" "}
                  <span class="info-box-text" style={{color: 'white'}}>This amount is available for withdrawal</span>{" "}
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-xs-6">
              <div class="info-box">
                {" "}
                {/* <span class="info-box-icon">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </span> */}
                <div class="info-box-content">
                <h3>In Progress</h3>
                  <span class="info-box-number">₹{Inprocess}</span>{" "}
                  <span class="info-box-text">This amount will be reflected in your balance soon</span>{" "}
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-xs-6">
              <div class="info-box">
                {" "}
                {/* <span class="info-box-icon">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </span> */}
                <div class="info-box-content">
                <h3>Amount Redeemed</h3>
                  <span class="info-box-number">₹{redeem}</span>{" "}
                  <span class="info-box-text">This is the total commission redeemed</span>{" "}
                </div>
              </div>
            </div>

         
          </div>


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
              Withdrawal Request
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
                          <label class="control-label">Enter Amount</label>
                          <input class="form-control" value={withdrolReq.amount} onChange={handle} name="amount" type="number" />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group has-feedback">
                          <label class="control-label">
                           Enter Message
                          </label>
                          <input class="form-control" value={withdrolReq.message} onChange={handle} name="message" type="text" />
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

{
  Array.isArray(history) &&

          <DataTable
      title="Withdrawal Status"
      columns={columns}
      data={history}
      pagination
    />
  }
         
        </div>
      </div>
    </>
  );
};

export default Wallets;
