import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react"; 

function AllMeetupsPage() {
  const [isLoading, setIsloading] = useState(true);
  const[loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    fetch("https://react-practice-bdeba-default-rtdb.firebaseio.com/meetups.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("dddata  ", data)
      const meetups = [];
      for(const key in data){
        console.log("keyy", key)
        const meetup = {
          id: key,
          ...data[key]
        };   
        console.log("aa =>", meetup)

        meetups.push(meetup)
      }

      setIsloading(false);
      setLoadedMeetups(meetups)
    });
  },[])

  

  if (isLoading) {
    return (
      <>
        <section>
          <p>Loading...</p>
        </section>
      </>
    );
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
