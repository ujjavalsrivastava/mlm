import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const loginPageStore = create()(
  devtools(
    immer((set) => ({
      loginPageState: {
        loading: false,
        error: null,
        units: null,
        finYear: null,
      },

      fetchData: async ({ username }) => {
        if (username === "") {
          set((state) => {
            state.loginPageState.error = "Username cannot be empty";
            state.loginPageState.loading = false;
            state.loginPageState.units = null;
            state.loginPageState.finYear = null;
          });
          return;
        }

        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/get-unit-and-finyear?username=${username}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.data.status === "success") {
            set((state) => {
              state.loginPageState.units = response.data.payload.userUnits;
              state.loginPageState.finYear = response.data.payload.finYear;
              state.loginPageState.loading = false;
              state.loginPageState.error = null;
            });
          } else if (response.data.status === "fail") {
            set((state) => {
              state.loginPageState.error = response.data.message;
              state.loginPageState.loading = false;
              state.loginPageState.units = null;
              state.loginPageState.finYear = null;
            });
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          set((state) => {
            state.loginPageState.error = error.message;
            state.loginPageState.loading = false;
          });
        }
      },
      // Combined setter function
      setState: ({ loading, units, finYear, error }) => {
        set((state) => {
          state.loginPageState.loading =
            loading !== undefined ? loading : state.loginPageState.loading;
          state.loginPageState.units =
            units !== undefined ? units : state.loginPageState.units;
          state.loginPageState.finYear =
            finYear !== undefined ? finYear : state.loginPageState.finYear;
          state.loginPageState.error =
            error !== undefined ? error : state.loginPageState.error;
        });
      },
    }))
  )
);
export default loginPageStore;
