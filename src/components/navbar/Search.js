import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../features/filter/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.filter);
  const [input, setInput] = useState(searchText);
  const match = useMatch("/");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search(input));
    if (!match) {
      navigate("/");
    }
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
