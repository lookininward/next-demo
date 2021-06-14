import Link from "next/link";
import classes from "./MainNavigation.module.scss";

function MainNavigation() {
  return (
    <header className={classes.MainNavigation}>
      <Link href="/"><div className={classes.MainNavigation__logo}>Meetups</div></Link>
      <nav>
        <ul className={classes.MainNavigation__links}>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
