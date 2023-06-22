import ProductDetails from "@/components/ProductDetails";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DetailedProduct({ products }) {
  const router = useRouter();

  const { id } = router.query;
  const product = products.find((product) => product._id == id);

  if (!product) {
    return null;
  }

  return <ProductDetails product={product} />;
}
