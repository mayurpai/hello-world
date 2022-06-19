import Link from "next/link";

export default function ProductList({ productID = 17 }) {
  return (
    <div>
      <Link href={"/products/1"}>
        <a>
          <h1>Product List 1</h1>
        </a>
      </Link>
      <Link href={"/products/2"}>
        <a>
          <h2>Product List 2</h2>
        </a>
      </Link>
      <Link href={"/products/3"} replace>
        <a>
          <h3>Product List 3</h3>
        </a>
      </Link>
      <Link href={`/products/${productID}`}>
        <a>
          <h3>Product List {productID}</h3>
        </a>
      </Link>
      <Link href={"/products/watch"}>
        <a>
          <watch>watch</watch>
        </a>
      </Link>

      <h1>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
      </h1>
    </div>
  );
}
