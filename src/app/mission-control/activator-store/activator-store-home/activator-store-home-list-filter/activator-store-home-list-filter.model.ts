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

export const FilterOptions = [
  {
    name: 'Active',
    filterBarName: 'isActive:true',
    filterQueryValue: { key: 'isActive', value: 'true' },
    shortQueryName: 'isActive',
  },
  {
    name: 'Favourite',
    filterBarName: 'isFavourite:true',
    filterQueryValue: { key: 'isFavourite', value: 'true' },
    shortQueryName: 'isFavourite',
  },
] as FilterOption[];
