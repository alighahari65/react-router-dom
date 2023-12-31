import {
  Link,
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { getBooks } from "../data";
import Search from "./Search";

const Books = () => {
  const books = getBooks();
  const [search, setSearch] = useSearchParams();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div style={{ display: "flex" }}>
        <nav style={{ borderLeft: "1px solid", padding: "1rem" }}>
          <Search setSearch={setSearch}  />

          {books
            .filter((book, i) => {
              let filter = search.get("query");
              if (!filter) return true;

              return book.name.startsWith(filter);
            })
            .map((book, index) => (
              <NavLink
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1em",
                    color: isActive ? "red" : "",
                  };
                }}
                to={`/books/${book.number}${location.search}`}
                key={index}
              >
                {book.name}
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Books;
