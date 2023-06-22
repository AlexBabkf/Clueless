import Image from "next/image";

export default function ProductCard({ product }) {
  const { name, image, price } = product;
  return (
    <div className="productCard">
      <img src={image} alt="name" width={200} height={200}></img>
      <h3>{name}</h3>
      <h4>{price}</h4>
    </div>
  );
}