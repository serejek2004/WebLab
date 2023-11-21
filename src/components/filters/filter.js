import React, { useState } from "react";
import {
  SortDrones,
  SelectCategory,
  SearchInput,
  FindBut,
  CatalogOptions,
  DividingLine,
  Inputs,
} from "./filter.styled";

const Filter = ({ onFilterChange }) => {
  const options = [
    {
      title: "All",
    },
    {
      title: "Battle",
    },
    {
      title: "Inspection",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortByPrice, setSortByPrice] = useState("asc");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSort = (typeSort) => {
    setSortByPrice(typeSort);
  };  

  const handleApplyFilter = () => {
    onFilterChange({ searchQuery, selectedCategory, sortByPrice });
  };

  return (
    <CatalogOptions>
      <Inputs>
        <SearchInput
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <SelectCategory
          onChange={(e) => handleCategoryChange(e.target.value)}>
          {options.map((option, index) => (
            <option key={index} value={option.title}>
              {option.title}
            </option>
          ))}
        </SelectCategory>
        <SortDrones
            onChange={(e) => handleSort(e.target.value)}>
            <option value="ns">Without sort</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </SortDrones>
        <FindBut onClick={handleApplyFilter}>Use filters</FindBut>
      </Inputs>
      <DividingLine></DividingLine>
    </CatalogOptions>
  );
};

export default Filter;
