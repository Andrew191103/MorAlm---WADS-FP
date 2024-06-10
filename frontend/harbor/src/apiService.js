import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const getDeliveries = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/delivery/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Deliveries:', error);
    return [];
  }
};

export const getCentra = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/centra/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Centra:', error);
    return [];
  }
};

export const getBatches = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/batch/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Batches:', error);
    return [];
  }
};

export const getBatchByPackage = async (packageId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/batch/package/${packageId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Batch by Package ID:', error);
    return null;
  }
};

export const getBatchById = async (batchId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/batch/${batchId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Batch by ID:', error);
    return null;
  }
};

export const updateDelivery = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/delivery/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating Delivery:', error);
    return null;
  }
};

export const deleteDelivery = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/delivery/${id}`);
  } catch (error) {
    console.error('Error deleting Delivery:', error);
  }
};
