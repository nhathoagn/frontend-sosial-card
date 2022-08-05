import React from 'react'
import Title from "../Title";
import  Button from "../Button";
import AppTitle from "../Title";
import AppButton from "../Button";
import AppPost from "../Post";
import AppDelete from "../Modal/modal";
import PageDetail from "../detail";
import FormComment from "../FormComment";
import Notfound from "../Notfound";

const Home = () => {
   return(
       <div className="home-container">
            <AppTitle/>
           <AppButton/>
           {/*<PageDetail/>*/}
           {/*<FormComment/>*/}
           {/*<Notfound/>*/}
       </div>
   )
}
export default Home