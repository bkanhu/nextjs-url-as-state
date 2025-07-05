"use client";
import { useSearchParams } from "next/navigation";

// Custom hook to get orderStatus, startDate, endDate, and page from URL.
const useOrderQueryParams = () => {
  const searchParams = useSearchParams();

  const orderStatus = searchParams.get("orderStatus") || "";
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);

  return { orderStatus, startDate, endDate, page };
};

export default useOrderQueryParams;
