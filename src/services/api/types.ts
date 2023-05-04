import { CharacterInfo } from '../../models/Character';

export type Data<T = any> = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
};

export type BaseResponse<T = any> = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: Data<T>;
  etag: string;
};

export type GetCharacters = BaseResponse<CharacterInfo>;
