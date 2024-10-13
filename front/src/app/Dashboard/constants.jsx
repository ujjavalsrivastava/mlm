import $ from "jquery";

import { axios } from "../../helper/httpHelper";

import { Link } from "react-router-dom";
import moment from "moment";
import $ from "jquery";

export const columns = [
  {
    name: "Name",

    cell: (row) => (
      <>
        <img
          style={{ width: "25px", height: "25px", borderRadius: "50%" }}
          src={"dist/img/img1.jpg"}
          className="user-image"
          alt="User Image"
        />
        <span style={{ padding: "10px" }}>{row.name}</span>
      </>
    ),
  },

  {
    name: "Today Team Size",
    selector: (row) => row._id,
    cell: (row) => (
      <div id={`today_team_size_${row._id}`}>
        <button onClick={() => handletotalMember(row._id)}>Show Balance</button>
      </div>
    ),
  },

  {
    name: "All Team Size",
    selector: (row) => row._id,
    cell: (row) => (
      <div id={`all_team_size_${row._id}`}>
        <button onClick={() => handletotalMember(row._id)}>Show Balance</button>
      </div>
    ),
  },

  {
    name: "Today Earning",
    selector: (row) => row._id,
    cell: (row) => (
      <div id={`today_bal_${row._id}`}>
        <button onClick={() => handleShowBal(row._id)}>Show Balance</button>
      </div>
    ),
  },
  {
    name: "Total Earning",
    selector: (row) => row._id,
    cell: (row) => (
      <div id={`bal_${row._id}`}>
        <button onClick={() => handleShowBal(row._id)}>Show Balance</button>
      </div>
    ),
  },

  {
    name: "Joing Date",
    selector: (row) => row.createdAt,
    cell: (row) => <span>{moment(row.createdAt).format("DD/MM/YYYY")}</span>,
  },

  {
    name: "Hirarcy",
    selector: (row) => row._id,
    cell: (row) => <Link to={`/tree?user=${row._id}`}>View Tree</Link>,
  },
];

const handleShowBal = async (id) => {
  const response = await axios.get("user/percent-earning?userId=" + id);
  console.log(response);
  const totalvalue = response.data.overallEarning.toFixed(2);
  const todayvalue = response.data.oneDayEarning.toFixed(2);
  $("#bal_" + id).text(totalvalue);
  $("#today_bal_" + id).text(totalvalue);
};

const handletotalMember = async (id) => {
  const response = await axios.get("user/group-status?userId=" + id);
  const { totalGroupUser, todayGroupUser } = response.data || {};
  const totalvalue = totalGroupUser?.toFixed(2);
  const todayvalue = todayGroupUser?.toFixed(2);
  $("#today_team_size_" + id).text(todayvalue);
  $("#all_team_size_" + id).text(totalvalue);
};
