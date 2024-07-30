import { httpAxios } from "../../helper/httpHelper";

export async function getDepartmentsService() {
  try {
    const response = await httpAxios.get(`/common/getDepartments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error.message;
  }
}

export async function getMenuItems() {
  try {
    const response = await httpAxios.get(`/privileges/getMenuItems`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error.message;
  }
}
