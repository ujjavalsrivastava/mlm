import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const jobOpeningStore = create()(
  devtools(
    immer((set) => ({
      jobOpeningState: {
        loading: false,
        error: null,
        deptTemplates: null,
        selectedTemplate: null,
      },
      fetchTemplate: async ({ dept }) => {},
    }))
  )
);

export default jobOpeningStore;
