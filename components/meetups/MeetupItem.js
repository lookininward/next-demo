import { useRouter } from "next/router";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push(`/${props.id}`);
  }

  return (
    <div className={classes.meetupItem} onClick={showDetailsHandler}>
      <div className={classes.meetupItem__imgWrapper}>
        <img className={classes.meetupItem__img} src={props.image} />
      </div>
      <div className={classes.meetupItem__info}>
        <div className={classes.meetupItem__info__title}>{props.title}</div>
        <div className={classes.meetupItem__info__address}>{props.address}</div>
      </div>
    </div>
  );
}

export default MeetupItem;
