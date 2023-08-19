import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
function ArticleDetail() {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data, isPending, error } = useFetch(url);
  return (
    <div>
      {isPending && <h3>LOADING...</h3>}
      {error && <h3>{error}</h3>}
      {data && (
        <>
          <img src={data.image} alt={data.title} height="300" />
          <h2>Title: {data.title}</h2>
          <p>
            Author:
            <i> {data.author}</i>
          </p>
          <p>{data.body}</p>
        </>
      )}
    </div>
  );
}

export default ArticleDetail;
