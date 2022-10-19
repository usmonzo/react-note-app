import React from "react";
import { MdSearch } from "react-icons/md";
import { Input } from "@chakra-ui/react";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="3em" />
      <Input
        size="lg"
        fontSize="1em"
        padding={10}
        variant="filled"
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="search note..."
      />
    </div>
  );
};

export default Search;
