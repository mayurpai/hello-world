import { useRouter } from "next/router";

export default function prodID() {
  const router = useRouter();
  const prodID = router.query.prodID;
  return <h1>Details Over {prodID}</h1>;
}
