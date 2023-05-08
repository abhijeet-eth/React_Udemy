import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    //in the firebase url, u need to add /meetups.json at the end of url
    fetch(
      "https://react-practice-bdeba-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      //this will navigate us to homepage
      history.replace("/");
    });
  }
  return (
    <>
      <section>
        <h1> Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </section>
    </>
  );
}

export default NewMeetupPage;
