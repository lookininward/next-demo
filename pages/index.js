import MeetupList from "../components/meetups/MeetupList";

// our-domain.com

const MEETUPS = [
  {
    id: "m1",
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image:
      "https://images.pexels.com/photos/6730320/pexels-photo-6730320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "3657  Ashmor Drive",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
  },
  {
    id: "m2",
    title: "Aliquam tincidunt mauris eu risus.",
    image:
      "https://images.pexels.com/photos/4497373/pexels-photo-4497373.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    address: "2956  Maud Street",
    description:
      "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
  },
  {
    id: "m3",
    title: "Vestibulum auctor dapibus neque.",
    image:
      "https://images.pexels.com/photos/6271685/pexels-photo-6271685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "4481  Kimberly Way",
    description:
      "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // http req to fetch meetup data
  return {
    props: {
      meetups: MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
