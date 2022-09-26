import MainNavigation from "../layout/MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <div> {props.children} </div>
    </div>
  );
}

export default Layout;
