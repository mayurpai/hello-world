import { useRouter } from "next/router";

export default function reviewID() {
  const router = useRouter();
  const {prodID, reviewID} = router.query
  return <h1>Details Over {prodID} and {reviewID}</h1>;
}
