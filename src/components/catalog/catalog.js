import React, {useState} from "react";
import Filter from "../filters/filter";
import ProductList from '../ProductList/ProductList';
import { CatalogStyle } from './catalog.styled';

const Catalog = () => {
    const [filter, setFilter] = useState({
      searchQuery: '',
      selectedCategory: 'all',
      sortByPrice: 'asc',
    });

    const handleFilter = (Filter) => {
      setFilter(Filter);
    };

    return (
        <CatalogStyle>
            <Filter onFilterChange={handleFilter} />
            <ProductList
                    filter={filter}
                />
        </CatalogStyle>
    );
};

export default Catalog;
