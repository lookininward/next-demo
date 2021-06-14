import { useRef } from "react";
import classes from "./NewMeetupForm.module.scss";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const title = titleInputRef.current.value;
    const image = imageInputRef.current.value;
    const address = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;

    props.onAddMeetup({
      title,
      image,
      address,
      description, 
    });
  }

  return (
    <form className={classes.newMeetupForm} onSubmit={submitHandler}>
      <div className={classes.newMeetupForm__inputWrapper}>
        <label className={classes.newMeetupForm__inputLabel} htmlFor="title">Title</label>
        <input className={classes.newMeetupForm__input} type="text" id="title" ref={titleInputRef} required />
      </div>
      <div className={classes.newMeetupForm__inputWrapper}>
        <label className={classes.newMeetupForm__inputLabel} htmlFor="title">Image Link</label>
        <input className={classes.newMeetupForm__input} type="url" id="image" ref={imageInputRef} required />
      </div>
      <div className={classes.newMeetupForm__inputWrapper}>
        <label className={classes.newMeetupForm__inputLabel} htmlFor="title">Address</label>
        <input className={classes.newMeetupForm__input} type="text" id="address" ref={addressInputRef} required />
      </div>
      <div className={classes.newMeetupForm__inputWrapper}>
        <label className={classes.newMeetupForm__inputLabel} htmlFor="title">Description</label>
        <textarea
          className={classes.newMeetupForm__input}
          type="text"
          id="description"
          ref={descriptionInputRef}
          rows="4"
          required
        />
      </div>
      <div className={classes.newMeetupForm__actions}>
        <button className={classes.newMeetupForm__btnSubmit}>Add Meetup</button>
      </div>
    </form>
  );
}

export default NewMeetupForm;
