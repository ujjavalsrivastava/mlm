import { httpAxios, httpFileAxios } from "@/helper/httpHelper";

export async function createJDTemplate(data) {
  try {
    const response = await httpAxios.post(
      "/recruitment/jdTemplate/create",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error.message;
  }
}

export async function getJDTemplates(department) {
  try {
    const response = await httpAxios.post("/recruitment/jdTemplate/get", {
      department,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error.message;
  }
}

export async function uploadJDTemplate(data) {
  try {
    const response = await httpFileAxios.post(
      "/recruitment/jdTemplate/parse",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error.message;
  }
}


export async function getTemplateTypes() {
  try {
    const response = await httpAxios.get(`/recruitment/jdTemplate/types`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error.message;
  }
}
