import React from "react";
import FilterPanel from "./FilterPanel";
import ProductSection from "./ProductSection";

const FilterComponent = () => {
  return (
    <section className="px-4 py-12 md:px-20 lg:px-48">
      <FilterPanel />
      <ProductSection />
    </section>
  );
};

export default FilterComponent;
