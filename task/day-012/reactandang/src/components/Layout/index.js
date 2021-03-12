const Layout = (props) => {
  return (
    <main>
      <div className="container-fluid">{props.children}</div>
    </main>
  );
};

export default Layout;
