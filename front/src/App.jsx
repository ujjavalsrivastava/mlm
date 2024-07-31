import { RouterProvider } from "react-router-dom";
import router from "./lib/routes/AppRoutes";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={2}
        transition={Flip}
        theme="light"
      />
      <div id="layout-wrapper">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
