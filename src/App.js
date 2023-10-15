import {  Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
// import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      {/* <MainNavigation/>  */}
        <Routes>
          <Route path="/" element={<AllMeetupsPage/>}></Route>
          <Route path="/new-meetup" element={<NewMeetupPage/>}></Route>
          <Route path="/favorites" element={<FavoritesPage/>}></Route>
          <Route path="/*" element={<AllMeetupsPage/>}></Route>
        </Routes>
    </Layout>
  );
}

export default App;
