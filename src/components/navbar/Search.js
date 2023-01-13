import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../features/filter/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.filter);
  const [input, setInput] = useState(searchText);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search(input));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default Search;
