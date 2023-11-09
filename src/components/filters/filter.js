import { SortDrones, SelectCategory, SearchInput, FindBut, CatalogOptions } from './filter.styled'
import React, { useState } from 'react';


const Filter = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSortByPrice = (order) => {
        setSortOrder(order);
    }; 

    return (
        <CatalogOptions>
            <SearchInput
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
            />
            <SelectCategory value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
                <option value="all">All Categories</option>
                <option value="Battle">Battle</option>
                <option value="Inspection">Inspection</option>
            </SelectCategory>
            <SortDrones onSort={() => handleSortByPrice('asc')}>
                <p>Sort by price</p>
            </SortDrones>
            <FindBut>
                Use filters
            </FindBut>
        </CatalogOptions>
    );
};

export default Filter;