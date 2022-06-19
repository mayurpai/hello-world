import Link from "next/link";
import { useRouter } from "next/router";

export default function index() {
  const route = useRouter();
  const handleClick = () => {
    route.replace("/products");
    // route.push("/products");
  };
  return (
    <div>
      <Link href={"/blog"}>
        <a>Blog</a>
      </Link>
      <br></br>
      <Link href={"/products"}>
        <a>Products</a>
      </Link>
      <br></br>
      Home Page
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
