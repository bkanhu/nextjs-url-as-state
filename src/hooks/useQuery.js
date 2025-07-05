"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useQueryFilters = (filterKeys) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get filters from URL
  const getFiltersFromURL = useCallback(() => {
    const result = {};
    filterKeys.forEach((key) => {
      result[key] = searchParams.getAll(key);
    });
    return result;
  }, [filterKeys, searchParams]);

  const [filters, setFilters] = useState(getFiltersFromURL);

  // Update state if URL changes
  useEffect(() => {
    setFilters(getFiltersFromURL());
  }, [getFiltersFromURL]);

  const updateURL = (newFilters) => {
    const params = new URLSearchParams();

    Object.entries(newFilters).forEach(([key, values]) => {
      values.forEach((val) => params.append(key, val));
    });

    router.replace(`?${params.toString()}`);
  };

  // Toggle a single value for a filter field (e.g., checkbox)
  const toggleFilterValue = (field, value) => {
    setFilters((prev) => {
      const currentValues = prev[field] || [];
      const exists = currentValues.includes(value);
      const updatedValues = exists
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      const updatedFilters = { ...prev, [field]: updatedValues };
      updateURL(updatedFilters);
      return updatedFilters;
    });
  };

  const setFilterValues = (field, values) => {
    const updated = { ...filters, [field]: values };
    setFilters(updated);
    updateURL(updated);
  };

  const resetFilters = () => {
    setFilters({});
    router.replace("?");
  };

  return {
    filters,
    toggleFilterValue,
    setFilterValues,
    resetFilters,
  };
};
