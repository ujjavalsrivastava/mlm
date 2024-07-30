import { httpAxios } from "@/helper/httpHelper";

export async function getLocationDetails(keyword) {
  try {
    const response = await httpAxios.get(
      `/expense/get-location-details?address=${keyword}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error.message;
  }
}
