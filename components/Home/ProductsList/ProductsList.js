import ProductCard from "../../ProductCard/ProductCard";
import isEmpty from "lodash/isEmpty";

const ProductsList = ({ loading, data }) => {
  // If no product found
  if (!loading && isEmpty(data?.data?.[0]?.name)) {
    return <p>No product found</p>;
  }

  return (
    <>
      <div className="my-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8">
        {loading && !data?.data?.length ? (
          <p>Loading...</p>
        ) : (
          data?.data?.map((product) => <ProductCard key={`product--key${product.id}`} product={product} />)
        )}
      </div>
    </>
  );
};

export default ProductsList;
