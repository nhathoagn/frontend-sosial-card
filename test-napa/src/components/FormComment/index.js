import React from "react";
import './index.css'
import {Button} from "antd";
const FormComment = () => {
  return(

          <div className="form-comment-container">
              <div className="form-comment-title">
                  <p>Post a new coment</p>
              </div>
              <div className="form-comment-title-input">
                  <div className="form-comment-title-input-placeholder"><p>Add comment...</p></div>
                  <div className="form-comment-btn">
                      <Button type={"primary"} className="form-comment-btn-post">Post</Button>
                  </div>
              </div>

          </div>
  )
}
export default FormComment