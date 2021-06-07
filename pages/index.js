import { getMongoClient } from "../helpers/db";
import MeetupList from "../components/meetups/MeetupList";

// our-domain.com

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const client = await getMongoClient();
  const db = client.db();
  const meetupsCollection = await db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  fetch("http://localhost:3000/api/meetups/");

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
