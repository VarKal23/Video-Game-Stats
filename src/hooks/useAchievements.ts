import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/xbl-api-client';
import Game from '../entities/Game';

// TODO: Add node server to handle api calls to bypass CORS issues
const apiClient = new APIClient('achievements');

const useAchievements = () =>
  useQuery({
    queryKey: ['achievements'],
    queryFn: () => apiClient.get(),
  });

export default useAchievements;
