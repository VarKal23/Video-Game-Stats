import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/xbl-api-client';
import Game from '../entities/Game';

const apiClient = new APIClient<Game>('/games');

// TODO: Add node server to handle api calls to bypass CORS issues
// const useGameStats = (slug: string) =>
//   useQuery({
//     queryKey: ['stats', slug],
//     queryFn: () => apiClient.get(slug),
//   });

// export default useGameStats;
