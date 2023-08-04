import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient, {
  FetchResponse,
} from '../services/rawg-api-client';
import useGameQueryStore from '../store';
import Game from '../entities/Game';

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  let platformIds = gameQuery.platformId ? [gameQuery.platformId] : "1,2,3";

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: platformIds,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          metacritic: "70,100",
          dates: "2003-01-01,2023-08-01"
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
};

export default useGames;
