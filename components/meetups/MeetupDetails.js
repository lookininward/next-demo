import classes from "./MeetupDetails.module.scss";

function MeetupDetails(props) {
  return (
    <div className={classes.meetupDetail}>
      <div className={classes.meetupDetail__title}>{props.title}</div>
      <div className={classes.meetupDetail__address}>{props.address}</div>
      <div className={classes.meetupDetail__description}>
        {props.description}
      </div>
      <div className={classes.meetupDetail__imgWrapper}>
        <img className={classes.meetupDetail__img} src={props.image} />
      </div>
    </div>
  );
}

export default MeetupDetails;
