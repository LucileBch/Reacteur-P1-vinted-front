// ---------- SEARCH Component ----------
const Search = () => {
  // Handle search changes
  const handleSearch = (event) => {
    const value = event.target.value;
  };

  // Search input
  // Sort input
  // Range input
  return (
    <div>
      <div>
        <input
          type="tex"
          placeholder="Recherche des articles"
          onChange={handleSearch}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p>Trier par prix</p>
        <label>
          <input type="checkbox" />
        </label>
        <p>Prix entre : </p>
        <input type="range" />
      </div>
    </div>
  );
};

export default Search;
