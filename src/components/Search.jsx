// ---------- SEARCH Component ----------
const Search = ({ search, setSearch }) => {
  // Handle search changes
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  // Search input

  return (
    <div>
      <input
        type="tex"
        placeholder="Recherche des articles"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
