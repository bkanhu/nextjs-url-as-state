"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const FilterPanel = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (e) => {
    const params = new URLSearchParams(searchParams.toString());
    const { name, value } = e.target;

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    // Reset pagination when filter changes
    params.delete("page");

    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      <div className="col-span-2 md:col-span-1">
        <label
          htmlFor="orderStatus"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Order Status
        </label>
        <select
          name="orderStatus"
          id="orderStatus"
          value={searchParams.get("orderStatus") || ""}
          onChange={handleFilterChange}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Choose a status</option>
          <option value="initiated">Initiated</option>
          <option value="in progress">In Progress</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="col-span-1">
        <label
          htmlFor="startDate"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Start Date
        </label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={searchParams.get("startDate") || ""}
          onChange={handleFilterChange}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="col-span-1">
        <label
          htmlFor="endDate"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          End Date
        </label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          value={searchParams.get("endDate") || ""}
          onChange={handleFilterChange}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default FilterPanel;
