import React, {useState} from "react";
import Filter from "../filters/filter";
import ProductList from '../ProductList/ProductList';
import { CatalogStyle } from './catalog.styled';

const Catalog = ({ products }) => {

    const [filter, setFilter] = useState({
      searchQuery: '',
      selectedCategory: 'All',
      sortByPrice: 'ns',
    });

    const handleFilter = (Filter) => {
      setFilter(Filter);
    };

    return (
        <CatalogStyle>
            <Filter onFilterChange={handleFilter} />
            <ProductList
                    products={products}
                    filter={filter}
                />
        </CatalogStyle>
    );
};

export default Catalog;
