import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.scss";

function MeetupList(props) {
  return (
    <div className={classes.meetupList}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </div>
  );
}

export default MeetupList;
