// ---------- SEARCH Component ----------
const Search = () => {
  // Listen search changes
  const handleSearch = (event) => {
    const value = event.target.value;
    console.log(value);
  };

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
