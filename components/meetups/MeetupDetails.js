import classes from "./MeetupDetails.module.css";

function MeetupDetails(props) {
  return (
    <div className={classes.meetupDetail}>
      <div className={classes.meetupDetail__imgWrapper}>
        <img className={classes.meetupDetail__img} src={props.image} />
      </div>
      <div className={classes.meetupDetail__info}>
        <div className={classes.meetupDetail__info__title}>{props.title}</div>
        <div className={classes.meetupDetail__info__address}>{props.address}</div>
        <div className={classes.meetupDetail__info__description}>{props.description}</div>
      </div>
    </div>
  );
}

export default MeetupDetails;
