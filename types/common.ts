export type ISearchParams = {
  page?: number;
  keyword?: string;
};

export type IService =
  | "trucking"
  | "rail_transport"
  | "sea_transport"
  | "air_transport";
