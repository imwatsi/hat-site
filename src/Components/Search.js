import { useState, useContext, useRef, useEffect } from "react";
import { AppContext } from "../Context/appContext";
import { useHistory } from "react-router-dom";

export default function Search() {
  const { searchBlock, searchAccount } = useContext(AppContext);
  const history = useHistory();
  const [query, setQuery] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [searchType, setType] = useState("");

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const handleChange = (e) => setQuery(e.target.value);

  const searchFunction = (event) => {
    event.preventDefault();
    setDropdown(false);
    if (searchType === "block") {
      searchBlock(parseInt(query));
      history.push({
        pathname: `/block/${query}`,
        state: { blocknum: query },
      });
    } else if (searchType === "account") {
      searchAccount(query);
      history.push({
        pathname: `/account/${query}`,
        state: { account: query },
      });
    }
  };

  const searchOptions = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <form onSubmit={searchFunction}>
        <input
          type="text"
          required
          value={query}
          onChange={(e) => handleChange(e)}
          placeholder="Search for block number..."
          className="searchinput text-white h-10 p-5 w-72 rounded-full text-sm focus:outline-none transition-all"
        />
        <div className="flex flex-inline absolute right-0 top-0 mt-3 md:mr-4 mr-12">
          <button
            type="submit"
            onClick={() => setType("block") && searchFunction}
          >
            <svg
              className="text-gray-400 fill-current h-4 w-4 mr-2 relative"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
          <button type="button" onClick={searchOptions}>
            <svg
              className="text-gray-400 fill-current h-4 w-4 relative"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              width="10"
              height="10"
              role="img"
            >
              <path d="M.37,5l5.75,5.92a1.23,1.23,0,0,0,1.78,0L13.64,5a1.31,1.31,0,0,0,0-1.83,1.27,1.27,0,0,0-.86-.37H1.25A1.27,1.27,0,0,0,0,4v0A1.28,1.28,0,0,0,.37,5Z"></path>
            </svg>
          </button>

          <div
            className={dropdown ? "block relative" : "hidden relative"}
            ref={ref}
          >
            <div className="absolute right-0 w-40 mt-6 bg-white border rounded shadow-xl">
              <button
                onClick={() => setType("block")}
                className="transition-colors duration-200 block px-4 py-2 w-full text-normal text-gray-900 rounded hover:bg-gray-200"
              >
                Block number
              </button>
              <hr></hr>
              <button
                onClick={() => setType("account")}
                className="transition-colors duration-200 block px-4 py-2 w-full text-normal text-gray-900 rounded hover:bg-gray-200"
              >
                Account name
              </button>
              <hr></hr>
              <button
                onClick={() => setType("tran")}
                className="transition-colors duration-200 block px-4 py-2 w-full text-normal text-gray-900 rounded hover:bg-gray-200"
              >
                Transaction ID
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
