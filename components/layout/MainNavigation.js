import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  return (
    <header className={classes.MainNavigation}>
      <div className={classes.MainNavigation__logo}>Meetups</div>
      <nav>
        <ul className={classes.MainNavigation__links}>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
