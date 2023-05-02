import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

//Switch module checks that only route will function
// Without switch, if we open '/favorites' then it will render two routes
//i. One with having on '/' that means All MeetUps Page
//ii. And other with complete url i.e Favorites page

//But problem in Switch is as soon as it find one match, for example we want '/favorites' but react will
// come to '/' and render AllMeetups Page, leaving rest url 'favorites'
//To overcome this issue we use 'exact' for exact url match and render

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact={true}>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}
export default App;
