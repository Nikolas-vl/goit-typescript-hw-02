import axios from 'axios';
import type { Image } from './types/types';
type ApiResponse = {
  results: Image[];
  total_pages: number;
};

const KEY = 'VABl1_LpCUxzV0k9rwevcSxxwRGrgznH-6V3sQop27w';

export const fetchData = async (query: string, page: number): Promise<ApiResponse> => {
  const response = await axios.get(`https://api.unsplash.com/search/photos/`, {
    params: {
      client_id: KEY,
      per_page: 15,
      query,
      page,
      orientation: 'landscape',
    },
  });
  return response.data;
};
