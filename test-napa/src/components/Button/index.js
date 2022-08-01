
import "./index.css"
import {Avatar, Col, Form, Image, Input, Row} from "antd";
import {SearchOutlined} from '@ant-design/icons';
import { Button, Modal } from 'antd';
import React, {useEffect, useState} from 'react';
import imageUpload from "../../access/upload-solid.svg"
import {useDispatch, useSelector} from "react-redux";
import '../Post/post.css'
import imageEdit from "../../access/pencil-alt-solid.svg";
import imageTrash from "../../access/trash-alt-regular.svg";
import searchIcon from "../../access/search-solid.svg"
import trash_can from "../../access/trash-can-regular.svg"

const AppButton = (props) => {
    const [isModalAddVisible, setIsModalAddVisible] = useState(false);
    const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const showModalAdd = () => {
        setIsModalAddVisible(true);
    };
    const showModalDelete = () => {
        setIsModalDeleteVisible(true);
    };


    const handleAddOk = () => {
        setIsModalAddVisible(false);
    };

    const handleDeleteOk = () => {
        setIsModalDeleteVisible(false);
    };


    const handleAddCancel = () => {
        setIsModalAddVisible(false);
    };
    const handleDeleteCancel = () => {
        setIsModalAddVisible(false);
    };





    const post = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrievePost());
    }, []);



  return(
     <>
         <div className="group-btn">
             <div className="btn-revert">
                 <Button className="btn-revert-ant">Revert</Button>
             </div>
             <div className="btn-add-new">
                 <Button className="btn-add" onClick={showModalAdd}>
                     Add New
                 </Button>
                 <Modal className="post-modal" title="Add new card"  visible={isModalAddVisible} >
                     <div className="post-modal-content">
                         <div className="post-modal-avatar">
                             <p>Avatar</p>
                             <img    src={imageUpload}/>
                             <form  method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
                                 <span>Upload image</span>

                                 {/*<img src={imageSrc} />*/}
                                 {imageSrc && !uploadData && (
                                     <p>
                                         <button>Upload Files</button>
                                     </p>
                                 )}

                                 {/*{uploadData && (*/}
                                 {/*    <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>*/}
                                 {/*)}*/}
                             </form>

                         </div>
                         {/*<div className="post-modal-name">*/}
                         {/*    <p>Name</p>*/}
                         {/*    <span>*</span>*/}
                         {/*    <Input  className="post-modal-name-input"/>*/}
                         {/*</div>*/}
                         {/*<div className="post-modal-description">*/}
                         {/*      <p>Description</p>*/}
                         {/*    <span>*</span>*/}
                         {/*    <TextArea  className="post-modal-description-textarea" rows={4}/>*/}
                         {/*</div>*/}
                         <div className="post-add-name">
                             <p>Name</p>
                             <input/>
                         </div>
                         <div className="post-add-description">
                             <p>Description</p>
                             <input/>
                         </div>
                         <div className="post-modal-image">
                             <p>Image</p>
                             <img    src={imageUpload}/>
                             <span style={{ color: "black"}}>Upload Image</span>
                             <form  method="post" onChange={handleOnChange} onSubmit={handleOnSubmit} style={ {marginLeft: 66}}>
                                 {/*<p>*/}
                                 {/*    <input type="file" name="file" />*/}
                                 {/*</p>*/}
                                 {imageSrc && !uploadData && (
                                     <p>
                                         <button>Upload Files</button>
                                     </p>
                                 )}
                                 {/*<img src={imageSrc} />*/}
                                 {uploadData && (
                                     <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
                                 )}
                             </form>
                         </div>
                         <hr className="tag-hr"></hr>
                     </div>
                     <div className="post-modal-footer">

                             <Button className="post-modal-footer-save" onClick={{saveTutorial,handleAddOk}}>Save</Button>
                             <Button className="post-modal-footer-cancel" onClick={handleAddCancel}>Cancel</Button>

                     </div>
                 </Modal>
             </div>
             <div className="input">
                 <div className="app-search" onChange={onChangeSearchTitle} ><p>Search name...</p></div>

                 <img className="input-icon" src={searchIcon}/>
             </div>
         </div>
         <div className="post-container">
             <ul style={ {marginLeft: 100}}>
                     { post && post.map( (value, index) =>(
                         <li style={{display: "inline-block", marginRight: 28, width: 370}} key={index}>
                             <div className="post" onClick={() => setCurrentPost(value.id)}>
                                 <div className="post-top">
                                     <div className="post-avatar"> <img  src={value.image}/></div>
                                     <div className="post-info">
                                         <h3>{value.title}</h3>

                                         <p>{new Date(value.createdAt).toLocaleDateString('en-GB')}</p>
                                     </div>
                                     <div className="post-option">
                                         <Image preview={false} className="icon-edit" width={18} height={18} src={imageEdit}/>
                                         {/*<Image preview={false} onClick={() => removePost(currentPost)} className="icon-trash" width={18} height={18} src={imageTrash} />*/}

                                             <Image preview={false} onClick={showModalDelete} className="icon-trash" width={18} height={18} src={imageTrash} />
                                             <Modal  className="modal-delete" title="Your about to delete a item" visible={isModalDeleteVisible}>
                                                 <div className="modal-delete-icon">
                                                    <img src={trash_can}/>
                                                 </div>
                                                 <div className="modal-delete-notice">
                                                        <p>This will delete your item form list <br/> Are you sure?</p>
                                                 </div>
                                                 <hr className="tag-hr"/>
                                                 <div className="modal-delete-footer">

                                                        <Button type={"primary"} className="modal-delete-btn-delete">Delete</Button>
                                                        <Button  className="modal-delete-btn-cancel">Cancel</Button>

                                                 </div>

                                             </Modal>


                                     </div>
                                 </div>
                                 <div className="post-mid">
                                     <p>{value.description}</p>
                                 </div>
                                 <div className="post-bottom">
                                     <img  width={310} height={180} style={{paddingBottom: 22}} src={value.image}/>
                                 </div>
                             </div>
                         </li>
                     ))}

             </ul>
         </div>
     </>

  )
}
export default AppButton