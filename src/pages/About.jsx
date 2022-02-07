import queryString from "query-string";
import { useLocation } from "react-router"; //v6

export default function About(props) {
  console.log(props);
  // const searchParams = props.location.search;  //v5 에서 사용
  const { searchParams } = useLocation(); //v6
  console.log(searchParams);
  // const obj = new URLSearchParams(searchParams);
  // console.log(obj.get("name"));
  // const query = queryString.parse(searchParams);
  const query = useQuery();
  console.log(query);
  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {query.name && <p>name 은 {query.name}입니다.</p>}
    </div>
  );
}
