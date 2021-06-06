import { useRouter } from "next/router";
import MeetupDetails from "../../components/meetups/MeetupDetails";

// our-domain.com/meetupId

function Meetup(props) {
  const router = useRouter();
  const { meetupId } = router.query;
  return (
    <MeetupDetails
      id="m1"
      title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
      image="https://images.pexels.com/photos/6730320/pexels-photo-6730320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      address="3657  Ashmor Drive"
      description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
    />
  );
}

export async function getStaticPaths() {
  // fetch ids from server
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;

  console.log("meetupId", meetupId);

  // http req to fetch meetup data
  return {
    props: {
      meetupData: {
        id: "m1",
        title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        image:
          "https://images.pexels.com/photos/6730320/pexels-photo-6730320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        address: "3657  Ashmor Drive",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
      },
    },
    revalidate: 10,
  };
}

export default Meetup;
