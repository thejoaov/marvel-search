import api from './config';
import { GetCharacters } from './types';

export const getCharacters = async (req?: {
  page?: number;
  name?: string;
}): Promise<GetCharacters> => {
  const offset = req?.page ? req.page * 4 : 0;
  const { data, status, config } = await api.get<GetCharacters>(
    '/characters?',
    {
      params: {
        limit: 4,
        offset,
        nameStartsWith: req?.name,
      },
    },
  );

  console.log(
    '[API]',
    JSON.stringify({
      status,
      url: `${config?.baseURL}${config?.url}${new URLSearchParams(
        config?.params,
      )}`,
    }),
  );

  return data;
};
