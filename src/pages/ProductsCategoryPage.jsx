import ProductPreview from "@/components/ProductPreview";
import useGetRequest from "@/hooks/use-get-request";
import { useParams } from "react-router-dom";

function ProductsCategoryPage() {
  const { id } = useParams();

  const {
    done,
    error,
    result: categoryProducts,
  } = useGetRequest(`categories/${id}`, {
    _embed: "products",
  });

  if (!done) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">{categoryProducts?.name}</h1>
      </div>
      <div className="flex flex-wrap justify-between gap-3">
        {categoryProducts?.products?.map((product, index) => {
          return (
            <ProductPreview
              key={index}
              id={product.id}
              imageUrl={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsCategoryPage;
