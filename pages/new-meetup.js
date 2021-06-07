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

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
