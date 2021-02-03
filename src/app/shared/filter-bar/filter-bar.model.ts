export interface QueryParam {
  key: string;
  value: string;
}
export interface FilterOption {
  name: string;
  filterBarName: string;
  filterQueryValue: QueryParam;
  shortQueryName: string;
}
