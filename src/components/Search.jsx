const Search = ({setSearch}) => {
    return ( 
        <input
            type="text"
            placeholder="جستجوی کتاب"
            onChange={(e) => {
              let query = e.target.value;
              if (!query) setSearch({});
              setSearch({ query });
            }}
          />
     );
}
 
export default Search;