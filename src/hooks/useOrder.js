"use client";
import { useEffect, useState } from "react";
import { useOrderQueryParams } from "./useOrderQueryParams";

export const useOrders = () => {
  const { orderStatus, startDate, endDate, page } = useOrderQueryParams();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchOrders = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();
        if (orderStatus) params.set("orderStatus", orderStatus);
        if (startDate) params.set("startDate", startDate);
        if (endDate) params.set("endDate", endDate);
        params.set("page", page.toString());

        const res = await fetch(`/api/orders?${params.toString()}`, {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Failed to fetch orders");

        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Unknown error");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();

    return () => controller.abort();
  }, [orderStatus, startDate, endDate, page]);

  return { data, isLoading, error };
};
