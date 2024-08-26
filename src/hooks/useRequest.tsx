import { getAllRequestsService } from '@service/internalServices';

export default function useRequest() {
  const getAllRequests = async () => {
    try {
      const response = await getAllRequestsService();
      return response;
    } catch (error) {
      throw error;
    }
  };

  return { getAllRequests };
}
