import React from 'react';

export type SearchelementProps={
  id: string
  search: string
  setSearch: string
  handleSearch: string
searchButton?: (id:string) => void
}

export default function Search( props: SearchelementProps){
  const{ id, search, setSearch, searchButton} = props

  function handleSerch(){
    searchButton?.(id)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Søk etter filmer..."
        value={search}
        
      />
      <button onClick={handleSearch}>Søk</button>
    </div>
  );
};
