import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  if (params.length === 2)
    return (
      <h1>
        {params[0]} and {params[1]}
      </h1>
    );
  else return <h1>{params[0]} and Hey!</h1>;
}
