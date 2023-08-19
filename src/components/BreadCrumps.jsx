import { Link, useLocation } from "react-router-dom";
function BreadCrumps() {
  const loc = useLocation();
  const current_link = [];
  const crumbs = loc.pathname
    .split("/")
    .filter((crumb) => {
      return crumb != "";
    })
    .map((crumb) => {
      current_link.push(`/${crumb}`);
      return (
        <div className="crumb" key={crumb}>
          <Link to={current_link.join("")}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}

export default BreadCrumps;
