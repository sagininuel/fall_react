import { useState } from "react";
import { useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUM_DATA = [
  {
    id: "1m",
    title: "First Meetup",
    image: "#",
    description: "Heavenly",
    address: "0100-10",
  },

  {
    id: "2m",
    title: "Second Meetup",
    image: "#",
    description: "Heavenly",
    address: "0100-10",
  },
  {
    id: "3m",
    title: "Third Meetup",
    image: "#",
    description: "Heavenly",
    address: "0100-10",
  },
  {
    id: "4m",
    title: "Fourth Meetup",
    image: "#",
    description: "Heavenly",
    address: "0100-10",
  },
];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch("https://react-autumn-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for(const key in data){
            const meetup = {
                id: key,
                ...data[key]
            };
            meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);


  if (isLoading) {
    return <section>Loading ...</section>
  }

  return (
    <section>
      <h1>All Meetups Page</h1>{/* Plain list Items */}
      {/* {[<li>Hard coded Item1</li>,<li>Hard coded Item2</li>]} */}
      {/* Map function */}
      {/* {DUM_DATA.map((meetup) =>{
        return <li key={meetup.id}>{meetup.title}</li>;
      })} */}
      {/* Scaling purposes */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
