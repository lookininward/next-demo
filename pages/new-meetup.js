import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

// our-domain.com/new-meetup

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(meetupData) {
    await fetch("http://localhost:3000/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
      <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetup to our huge list."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
