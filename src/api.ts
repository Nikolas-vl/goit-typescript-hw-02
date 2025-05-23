import axios from 'axios';
import type { Image } from './types/types';

type ApiResponse = {
  results: Image[];
  total_pages: number;
};

const KEY = 'VABl1_LpCUxzV0k9rwevcSxxwRGrgznH-6V3sQop27w';

export const fetchData = async (query: string, page: number): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>('https://api.unsplash.com/search/photos/', {
      params: {
        client_id: KEY,
        per_page: 15,
        query,
        page,
        orientation: 'landscape',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Unable to fetch data');
  }
};
