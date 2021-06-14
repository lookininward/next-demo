import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.scss";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <div className={classes.layout}>{props.children}</div>
    </div>
  );
}

export default Layout;
  