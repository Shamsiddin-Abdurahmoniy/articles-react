import useFetch from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";
function Articles() {
  const { data, isPending, error } = useFetch("http://localhost:3000/articles");
  return (
    <div className="article-container">
      {isPending && <h3>LOADING...</h3>}
      {error && <h3>{error}</h3>}
      {data &&
        data.map((article) => {
          return (
            <div className="card" key={article.id}>
              <h3>Title: {article.title}</h3>
              <p>
                <i>Author: {article.author}</i>
              </p>
              <NavLink to={`/articles/${article.id}`}>Read more</NavLink>
            </div>
          );
        })}
    </div>
  );
}

export default Articles;
