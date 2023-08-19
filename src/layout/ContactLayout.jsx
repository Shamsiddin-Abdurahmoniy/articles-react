import { NavLink, Outlet } from "react-router-dom";
function ContactLayout() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rerum
        dolore animi accusamus nesciunt temporibus laboriosam dignissimos amet
        expedita, officiis quaerat at mollitia dolorum deleniti tempore corrupti
        autem illum dolorem numquam praesentium ratione illo voluptatem nisi
        soluta? Quo recusandae repudiandae rerum neque consequuntur explicabo
        aliquam dolorum? Provident magnam laboriosam enim sint ratione! Cumque
        nostrum eius illum ullam modi odit architecto!
      </p>

      <nav>
        <NavLink to="faq">Faq</NavLink>
        <NavLink to="form">Form</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default ContactLayout;
