import { RouterProvider } from "react-router-dom";
import router from "./lib/routes/AppRoutes";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";

import store from "./store";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <ToastContainer
        position="bottom-right"
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
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </div>
    </ErrorBoundary>
  );
}

export default App;
