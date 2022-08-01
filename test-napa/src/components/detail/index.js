import React from "react";
import './index.css'
import heartImg from "../../access/heart-solid.png"
import messageImg from "../../access/message-solid.png"
import FormComment from "../FormComment";
const PageDetail = () => {
   return(
       <>
           <div className="page-detail-container">
               <div className="page-detail-title">
                   <p>SOCIAL CARD DETAIL</p>
               </div>
               <div className="page-detail-info">
                    <div className="page-detail-info-avatar">
                        <img src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"/>
                    </div>
                   <div className="page-detail-info-name-date">
                       <h3 className="page-detail-info-name">Binance</h3>
                       <p className="page-detail-info-date">31/02/2022</p>
                   </div>
               </div>
               {/*<div className="page-detail-content">*/}
               {/*    <div className="page-detail-content-tex">*/}
               {/*        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more- or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>*/}
               {/*    </div>*/}
               {/*    <div className="page-detail-content-image">*/}
               {/*        <img id="page-detail-content-image" src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"/>*/}
               {/*    </div>*/}
               {/*</div>*/}

               <div className="page-detail-react-cmt">
                   <div className="page-detail-react">
                       <img src={heartImg}/>
                       <span>2</span>
                   </div>
                   <div className="page-detail-cmt">
                       <img src={messageImg}/>
                       <span>2</span>
                   </div>
               </div>
               <hr className="tag-hr-detail"/>
                <div className="page-detail-comment-data">
                    <ul>
                        <li>
                            <>
                                <div className="page-detail-comment-data-date">
                                    <span>30/02/2022</span>
                                </div>
                                <div className="page-detail-comment-data-text">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more- or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                </div>
                            </>
                        </li>
                    </ul>
                </div>
               <hr className="tag-hr-detail-final "/>
                <FormComment/>
           </div>
       </>
   )
}
export default PageDetail