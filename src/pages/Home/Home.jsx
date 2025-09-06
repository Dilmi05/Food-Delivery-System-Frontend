import React from "react";
import './Home.css';
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";

const Home = () => {

  const[category,setCategory]= React.useState("menu")
  return (

    <div className="home">
        <Header>
         </Header>
          <ExploreMenu></ExploreMenu>

       
    </div>
  );
}
export default Home;