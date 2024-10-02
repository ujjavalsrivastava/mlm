import { useEffect, useRef, useState } from "react";
import { axios } from "../../helper/httpHelper";
import styles from "./invoice.module.css";
import html2pdf from "html2pdf.js";

const Invoice = () => {
  const [data, setData] = useState([]);
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
                    <th scope="col">Timestap</th>
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
                      <td>{row.timestamp}</td>
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
                    <p>Email: company@example.com</p>
                    <p>Phone: +123 456 789</p>
                  </div>

                  <div className={styles["customer-details"]}>
                    <h2>BILLED TO:</h2>
                    <p>Customer Name</p>
                    <p>Customer Address Line 1</p>
                    <p>City, ZIP Code</p>
                    <p>Email: customer@example.com</p>
                    <p>Phone: +123 456 789</p>
                  </div>

                  <div className={styles["invoice-info"]}>
                    <p>
                      <strong>Invoice No:</strong> #INV-00123
                    </p>
                    <p>
                      <strong>Invoice Date:</strong> September 25, 2024
                    </p>
                    <p>
                      <strong>Invoice Amount:</strong> $429.00
                    </p>
                    <p>
                      <strong>Paid:</strong> Yes
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
                        <td>Product 1</td>
                        <td>2</td>
                        <td>$50.00 * 2</td>
                        <td>$100.00</td>
                      </tr>
                      <tr>
                        <td>Product 2</td>
                        <td>1</td>
                        <td>$200.00 * 1</td>
                        <td>$200.00</td>
                      </tr>
                      <tr>
                        <td>Product 3</td>
                        <td>3</td>
                        <td>$30.00 *1</td>
                        <td>$90.00</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className={styles.total}>
                        <td colspan="3">Subtotal</td>
                        <td>$390.00</td>
                      </tr>
                      <tr className={styles.total}>
                        <td colspan="3">GST (18%)</td>
                        <td>$39.00</td>
                      </tr>
                      <tr className={styles.total}>
                        <td colspan="3">Total Amount</td>
                        <td>$429.00</td>
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
