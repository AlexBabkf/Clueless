import Image from "next/image";

export default function ProductCard({ product }) {
  const { name, image, price } = product;
  return (
    <div className="productCard">
      <Image src={image} alt="name" width={200} height={200}></Image>
      <h3>{name}</h3>
      <h4>{price}</h4>
    </div>
  );
}
