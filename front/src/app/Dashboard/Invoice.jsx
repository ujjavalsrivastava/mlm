import { useEffect, useRef, useState } from "react";
import { axios } from "../../helper/httpHelper";
import styles from "./invoice.module.css";
import html2pdf from "html2pdf.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../store/profileReducer";
import { convertInvoiceDateFormat } from "../../utils/helper";

const Invoice = () => {
  const [data, setData] = useState([]);
  const profile = useSelector((state) => state.profile?.data);
  const dispatch = useDispatch();
  console.log({ profile, data });

  const invoiceRef = useRef();

  const invoiceFun = async () => {
    try {
      const response = await axios.get("user/invoice");
      setData(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadPDF = () => {
    const element = invoiceRef.current;
    html2pdf()
      .from(element)
      .set({
        margin: 1,
        filename: "invoice.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { orientation: "portrait" },
      })
      .save();
  };

  useEffect(() => {
    invoiceFun();
    if (!profile?._id) {
      dispatch(fetchProfile());
    }
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1>Invoice </h1>
          <ol className="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / Invoice
              </a>
            </li>
            {/* <li>
              <i className="fa fa-angle-right"></i> Dashboard
            </li> */}
          </ol>
        </div>

        <div className="content">
          <div className={styles.downloadBtnContainer}>
            <button
              className="button-default tf-btn w-20"
              onClick={downloadPDF}
            >
              Download
            </button>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th colspan="7" style={{ textAlign: "center" }}>
                      Invoice
                    </th>
                  </tr>
                  <tr>
                    <th scope="col">S.R</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Amount</th>
                    <th scope="col">GST</th>
                    <th scope="col">Total</th>
                    <th scope="col">Status</th>
                    <th scope="col">Timestamp</th>
                  </tr>
                </thead>

                {data &&
                  data.map((row, i) => (
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>Digital Entrepreneurship Bundles</td>
                      <td>2499</td>
                      <td>449.82</td>
                      <td>2948.82</td>
                      <td>{row.status}</td>
                      <td>{row?.timestamp}</td>
                    </tr>
                  ))}
              </table>
            </div>
            <div style={{ display: "none" }}>
              <div className={styles["invoice-container"]} ref={invoiceRef}>
                <div className={styles["invoice-header"]}>
                  <img src="/assets/images/lgo.jpg" alt="digital duniya logo" />
                </div>

                <div className={styles["invoice-body"]}>
                  <div className={styles["company-details"]}>
                    <h2 className={styles["companyname"]}>
                      MDDIGITAL DUNIYAA PRIVATE LIMITED
                    </h2>
                    <p>Chiraigaon, Varanasi,</p>
                    <p>Uttar Pradesh</p>
                    <p>India, 221112</p>
                    <p>Email: info@digitalduniyaa.in</p>
                    <p>Phone: +91 9170355968</p>
                  </div>

                  <div className={styles["customer-details"]}>
                    <h2>BILLED TO:</h2>
                    <p>{profile.name}</p>
                    <p>{profile.address}</p>
                    <p>
                      {profile.city}, {profile.pincode} {profile.country}
                    </p>
                    <p>{profile.email}</p>
                    <p>{profile.mobile}</p>
                  </div>

                  <div className={styles["invoice-info"]}>
                    <p>
                      <strong>Invoice No:</strong> #{data[0]?._id}
                    </p>
                    <p>
                      <strong>Invoice Date: </strong>
                      {data[0]?.timestamp && convertInvoiceDateFormat(data[0]?.timestamp)}
                    </p>
                    <p>
                      <strong>Invoice Amount: </strong> ₹2948.82
                    </p>
                    <p>
                      <strong>Paid: </strong>
                      {data[0]?.status === "success" ? "Yes" : "No"}
                    </p>
                  </div>

                  <div className={styles["clear"]}></div>

                  <table>
                    <thead>
                      <tr id="invotblhead">
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Digital Entrepreneurship Bundles</td>
                        <td>1</td>
                        <td>₹2499.00 * 1</td>
                        <td>₹2499.00</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className={styles.total}>
                        <td colspan="3">Subtotal</td>
                        <td>₹2499.00</td>
                      </tr>
                      <tr className={styles.total}>
                        <td colspan="3">GST (18%)</td>
                        <td>₹449.82.00</td>
                      </tr>
                      <tr className={styles.total}>
                        <td colspan="3">Total Amount</td>
                        <td>₹2948.82</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className={styles["invoice-footer"]}>
                  <p>Thank you for your business!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Invoice;
