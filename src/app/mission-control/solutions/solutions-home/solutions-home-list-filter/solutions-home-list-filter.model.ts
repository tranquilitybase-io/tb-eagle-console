export interface ListFilter {
  name: string;
  filterBarName: string;
  filterQueryValue: string;
}

export const FilterOptions = [
  {
    name: 'Active',
    filterBarName: 'isActive:true',
    filterQueryValue: 'isActive=true'
  },
  {
    name: 'Favourite',
    filterBarName: 'isFavourite:true',
    filterQueryValue: 'isFavourite=true'
  },
  {
    name: 'Sandbox',
    filterBarName: 'isSandbox:true',
    filterQueryValue: 'isSandbox=true'
  },
  {
    name: 'Names only',
    filterBarName: 'namesonly:true',
    filterQueryValue: 'namesonly=true'
  }
] as ListFilter[];
