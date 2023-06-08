export type ISearchParams = {
  page?: number;
  keyword?: string;
};

export type IService =
  | "trucking_domestic"
  | "trucking_international"
  | "rail_transport"
  | "sea_transport"
  | "lcl_sea_transport"
  | "fcl_sea_transport"
  | "bulk_sea_transport"
  | "air_transport_domestic"
  | "air_transport_international";
