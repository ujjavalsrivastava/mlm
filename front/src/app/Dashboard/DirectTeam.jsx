import { useDispatch, useSelector } from "react-redux";
import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from 'react';
import { axios } from "../../helper/httpHelper";
import { fetchProfile } from "../../store/profileReducer";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import moment from "moment";
import $ from 'jquery';
const DirectTeam = () => {
  const state = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);

  const [history, setHistory] = useState([]);

  const [Inprocess, setInprocess] = useState(0);
  const [redeem, setredeem] = useState(0);

  const [showBal, setShowBal] = useState(0);
  const [data, setData] = useState([]);
  

  // const data = [
  //   { id: 1, amount: '0', status: 'Pending' },
  //   { id: 2, amount: '0', status: 'Pending' },
  //   { id: 3, amount: '0', status: 'Pending' },
  // ];
  



  const columns = [
    {
      name: 'Name',
    
      cell: (row) => (
        <>
        <img style={{width: '25px',
            height: '25px',
            borderRadius: '50%'}}
                    src={
                      "dist/img/img1.jpg"
                    }
                    className="user-image"
                    alt="User Image"
                  /> <span style={{padding:'10px'}}>{row.name}</span>
                  </>
    ),
    },

    {
      name: 'Today Team Size',
      selector: row => row._id,
      cell: (row) => (
          <div id={`today_team_size_${row._id}`}>
        <button   onClick={() => handletotalMember(row._id)}>
          Show Balance
        </button>
        </div>
      ),
    },

    {
      name: 'All Team Size',
      selector: row => row._id,
      cell: (row) => (
          <div id={`all_team_size_${row._id}`}>
        <button    onClick={() => handletotalMember(row._id)}>
          Show Balance
        </button>
        </div>
      ),
    },
   
    {
      name: 'Today Earning',
      selector: row => row._id,
      cell: (row) => (
          <div id={`today_bal_${row._id}`}>
        <button    onClick={() => handleShowBal(row._id )}>
          Show Balance
        </button>
        </div>
      ),
    },
    {
        name: 'Total Earning',
        selector: row => row._id,
        cell: (row) => (
            <div id={`bal_${row._id}`}>
          <button    onClick={() => handleShowBal(row._id )}>
            Show Balance
          </button>
          </div>
        ),
      },

      {
        name: 'Joing Date',
        selector: row => row.createdAt,
        cell: (row) => (
            
          <span>
            {moment(row.createdAt).format('DD/MM/YYYY')}
          </span>
          
        ),
      },

      

      {
        name: 'Hirarcy',
        selector: row => row._id,
        cell: (row) => (
       
          <Link target="_blank"  to={`/tree?user=${row._id}`}>
            View Tree
          </Link>
        ),
      },

      
  ];

 
  const handleShowBal = async(id)=>{
    const response = await axios.get("user/percent-earning?userId=" + id);
    console.log(response)
    const totalvalue =response.data.overallEarning.toFixed(2) ;
    const todayvalue =response.data.oneDayEarning.toFixed(2) ;
    $('#bal_'+id).text(totalvalue);
    $('#today_bal_'+id).text(totalvalue);
  
  }

  const handleLeve = async(id)=>{
    const response = await axios.get("user/level-status?_id=" + id);
   
    const totalvalue =response.data;
    const len = totalvalue?.totalByLevel
    ? Object.keys(totalvalue?.totalByLevel).length
    : 0;
    $('#level_'+id).text(len);
 
  }
  

  const handletotalMember = async(id)=>{
    const response = await axios.get("user/group-status?userId=" + id);
   
    const totalvalue =response.data?.totalGroupUser.toFixed(2);
    const todayvalue =response.data?.todayGroupUser.toFixed(2);
  
    $('#today_team_size_'+id).text(todayvalue);
    $('#all_team_size_'+id).text(totalvalue);
 
  }
 

console.log(data);

const fetchWithdrolHis = async()=>{
  try {
    const response = await axios.get("user/associate-list?type=direct");
    setHistory(response.data.user);
 
  } catch (error) {
  console.log(error)
 
    
  }
}
  


  useEffect(()=>{
 
    fetchWithdrolHis();
  },[])
  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1>Associate Report </h1>
          <ol class="breadcrumb">
            <li>
              <a href="#">Home / Associate Report </a>
            </li>
          
          </ol>
        </div>

        <div class="content">
          
        

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

export default DirectTeam;
