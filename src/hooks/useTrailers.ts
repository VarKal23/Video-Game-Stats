import { useQuery } from '@tanstack/react-query';
import Trailer from '../entities/Trailer';
import APIClient from '../services/rawg-api-client';

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(
    `/games/${gameId}/movies`
  );
  console.log("Trailer info: ", apiClient);
  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
