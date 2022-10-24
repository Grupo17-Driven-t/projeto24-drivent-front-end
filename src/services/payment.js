import api from './api';

export async function creditCard(body, token) {
  const response = await api.post('/payment/card', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}; 
