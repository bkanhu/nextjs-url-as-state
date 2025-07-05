import FilterComponent from "@/components/Filter/FilterComponent";

const HomePage = () => {
  return (
    <>
      <header className="bg-gradient-to-br from-green-50 via-yellow-50 to-teal-50 px-4 py-12 md:px-20 lg:px-48">
        <h1 className="mb-2 text-2xl font-medium">
          Exploring NextJS URL State.
        </h1>
        <p>
          This is a POC webapp for using URL as state to filter Orders in a
          admin panel.
        </p>
      </header>
      <FilterComponent />
    </>
  );
};

export default HomePage;
