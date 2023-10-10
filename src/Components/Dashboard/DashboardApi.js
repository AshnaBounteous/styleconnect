import axiosInstance from "../../Utilities/axiosInstance";

export const fetchStylistActions = async () => {
  
  try {
    const response = await axiosInstance.get(
      "/commerce-mock-services/styleconnect/actions"
    );
   
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchStylistMetrics = async () => {
  
  try {
    const response = await axiosInstance.get(
      "/commerce-mock-services/styleconnect/metrics"
    );
   
    return response.data;
  } catch (error) {
    throw error;
  }
};
