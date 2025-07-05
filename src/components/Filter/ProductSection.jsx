"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

const ProductSection = () => {
  return (
    <section className="my-12">
      Dummy Products
      <div className="my-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
      <OrderPagination totalPages={10} />
    </section>
  );
};

const OrderPagination = ({ totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const goToPage = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.replace(`?${params.toString()}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (currentPage > 1) goToPage(currentPage - 1);
            }}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>

        <PaginationItem>
          <span className="rounded border border-input bg-muted px-3 py-1 text-sm">
            Page {currentPage} of {totalPages}
          </span>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              if (currentPage < totalPages) goToPage(currentPage + 1);
            }}
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

const ProductCard = () => {
  return (
    <div className="space-y-2">
      <div className="h-[145px] w-full animate-pulse rounded-md bg-accent"></div>
      {/* <div className="h-10 animate-pulse rounded-md bg-accent"></div> */}
      <div className="space-y-2">
        <div className="h-4 w-full animate-pulse rounded-md bg-accent" />
        <div className="h-4 w-10/12 animate-pulse rounded-md bg-accent" />
      </div>
    </div>
  );
};

export default ProductSection;
