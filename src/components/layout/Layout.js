import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import LeftNavbar from "./LeftNavbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className={classes.pagecontainer}>
      <div className={classes.contentwrapper}>
        <MainNavigation />
        {/* <LeftNavbar /> */}
        <section className={classes.layout__section}>
          <main className={classes.main}>{props.children}</main>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
