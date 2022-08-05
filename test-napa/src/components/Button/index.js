
import "./index.css"
import {Avatar, Col, Form, Image, Input, Row} from "antd";
import {SearchOutlined} from '@ant-design/icons';
import { Button, Modal } from 'antd';
import React, {useEffect, useState} from 'react';
import imageUpload from "../../access/upload-solid.svg"
import {useDispatch, useSelector} from "react-redux";

import imageEdit from "../../access/pencil-alt-solid.svg";
import imageTrash from "../../access/trash-alt-regular.svg";
import searchIcon from "../../access/search-solid.svg"
import trash_can from "../../access/trash-can-regular.svg"
import {createPost, retrievePost} from "../../actions/post";
import { useNavigate } from "react-router-dom";

const AppButton = (props) => {
    let init =  {

        name: "",
        description: "",

    }
    const navigation = useNavigate()
    const [isModalAddVisible, setIsModalAddVisible] = useState(false);
    const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
    const [imageSrc, setImageSrc] = useState();
    const [uploadData, setUploadData] = useState();
    const [objPost, setObjpost] = useState(init);
    const [isEdit, setIsedit] = useState(false);
    const [curentPost, setCurentPost] = useState("");
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onEdit = async (id) => {
         setCurentPost(id)
        console.log(curentPost)
         setIsedit(true)
          showModalAdd()

    }
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
    const handleEeitCancel = () => {
        setIsedit(false)
        setIsModalAddVisible(false);
        setCurentPost("")
    };
    const handleDeleteCancel = () => {
        navigation('/')
    };

   //Upload Image avatar start

    const [loading, setLoading] = useState(false);
    const [avatarr, setAvatar] = useState("");

    const uploadAvatar = async (e) => {
        const files = e.target.files;
        const data = new FormData
        data.append('file', files[0])
        data.append('upload_preset', 'uploads')
        setLoading(true)
        const res = await fetch('https://api.cloudinary.com/v1_1/ddnv4r9pb/image/upload', {
            method: 'POST',
            body: data

        })
        const file = await res.json()
        console.log("path", file)
      setAvatar(file.secure_url)
        console.log("ssss",objPost)
        setLoading(false)
    }
    //Upload Image end
    console.log("avatar",avatarr)
    //Upload Image start


    const [imagee, setImage] = useState("");

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData
        data.append('file', files[0])
        data.append('upload_preset', 'uploads')
        setLoading(true)
        const res = await fetch('https://api.cloudinary.com/v1_1/ddnv4r9pb/image/upload', {
            method: 'POST',
            body: data

        })
        const file = await res.json()
        console.log("path", file)
        setImage(file.secure_url)
        setLoading(false)
    }
    //Upload Image end

    //Handle onchange name - description - start


     const [state, setState] = useState(init);
    const [submitted, setSubmitted] = useState(false);

    const handleOnchane = async (e) => {
        e.preventDefault()
        const value = e.target.value
        setObjpost({...objPost, [e.target.name]:value})
        console.log("data", objPost)
     }


    //Handle onchange name - description - end

    // add post start;







    const addPost = () => {

       const {name,description} = objPost
        dispatch(createPost(avatarr, name, description,imagee))
            .then(data => {
                setObjpost({
                    avatar: data.avatar,
                    name: data.name,
                    description: data.description,
                    image: data.image
                });
                console.log(data);
            })
            .catch(e => {
                console.log(e);
            });
        handleAddCancel()
    }
    // add post end
    const post = useSelector(state => state.posts);



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrievePost());
    }, []);
    const disable = () => {
      
    }
    const editPost = () => {

    }
  const deletePort = (id)  => {
      const remove = []
      post.map( (value) =>{
          if (value.id === id){
              remove.push(value)
              
          }
      })
      handleDeleteOk()
    }


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
                 { isEdit && curentPost ? (<>{post.map( (value) =>{
                     if (value.id == curentPost){
                         const array = []
                         array.push(value)
                         return (
                             <Modal className="post-modal" title="Edit new card"  visible={isModalAddVisible} >
                                 <div className="post-modal-content">
                                     <div className="post-modal-avatar">
                                         <p>Avatar</p>
                                         <img src={imageUpload}/>
                                         <div onChange={uploadAvatar} className="form-upload-img">
                                             {
                                                 avatarr ? (<span>{avatarr}</span> ) : (<>
                                                     <label htmlFor="file-avatar" className="label-upload" >Uploads</label>
                                                     <input id="file-avatar" type={"file"} name="avatar"  value={avatarr} style={{display: "none"}} />
                                                 </>)
                                             }
                                             {/*{loading ? (<h3>Loading....</h3> ) : (<span>{image}</span>)}*/}
                                         </div>

                                     </div>

                                     <div className="post-add-name" >
                                         <p>Name</p>
                                         {curentPost ? (<><input name="name" value={value.name} onChange={handleOnchane}/></>) : null }
                                     </div>
                                     <div className="post-add-description" >
                                         <p>Description</p>
                                         {curentPost ? (<><input name="description" value={value.description}  onChange={handleOnchane}/></>): null}
                                     </div>
                                     <div className="post-modal-image">
                                         <p>Image</p>
                                         <img    src={imageUpload}/>
                                         <div onChange={uploadImage} className="form-upload-img">
                                             {
                                                 // <span>{value.image}</span>
                                                 imagee ? (<span>{imagee}</span> ) : (<>
                                                     <label htmlFor="file-image" className="label-upload" >Uploads</label>
                                                     <input id="file-image" type={"file"} name="file" value={imagee} style={{display: "none"}} />
                                                 </>)
                                             }
                                         </div>
                                     </div>
                                     <hr className="tag-hr"></hr>
                                 </div>
                                 <div className="post-modal-footer">

                                     <Button className="post-modal-footer-save" onClick={editPost}>Save</Button>
                                     <Button className="post-modal-footer-cancel" onClick={handleEeitCancel}>Cancel</Button>

                                 </div>
                             </Modal>
                         )
                     }
                 })}</>) : (<><Modal className="post-modal" title="Add new card"  visible={isModalAddVisible} >
                     <div className="post-modal-content">
                         <div className="post-modal-avatar">
                             <p>Avatar</p>
                             <img    src={imageUpload}/>
                             <div onChange={uploadAvatar} className="form-upload-img">
                                 {
                                     avatarr ? (<span>{avatarr}</span> ) : (<>
                                         <label htmlFor="file-avatar" className="label-upload" >Uploads</label>
                                         <input id="file-avatar" type={"file"} name="avatar"  value={avatarr} style={{display: "none"}} />
                                     </>)
                                 }

                                 {/*{loading ? (<h3>Loading....</h3> ) : (<span>{image}</span>)}*/}
                             </div>

                         </div>

                         <div className="post-add-name" >
                             <p>Name</p>
                             <input name="name"  onChange={handleOnchane}/>
                         </div>
                         <div className="post-add-description" on>
                             <p>Description</p>
                             <input name="description"  onChange={handleOnchane}/>
                         </div>
                         <div className="post-modal-image">
                             <p>Image</p>
                             <img    src={imageUpload}/>
                             <div onChange={uploadImage} className="form-upload-img">
                                 {
                                     imagee ? (<span>{imagee}</span> ) : (<>
                                         <label htmlFor="file-image" className="label-upload" >Uploads</label>
                                         <input id="file-image" type={"file"} name="file" value={imagee} style={{display: "none"}} />
                                     </>)
                                 }
                             </div>
                         </div>
                         <hr className="tag-hr"></hr>
                     </div>
                     <div className="post-modal-footer">

                         <Button className="post-modal-footer-save" onClick={addPost}>Save</Button>
                         <Button className="post-modal-footer-cancel" onClick={handleAddCancel}>Cancel</Button>

                     </div>
                 </Modal></>)}
             </div>
             <div className="input">
                 <div className="app-search"  ><p>Search name...</p></div>

                 <img className="input-icon" src={searchIcon}/>
             </div>
         </div>
         <div className="post-container">
             <ul style={ {marginLeft: 100}}>
                     { post && post.map( (value, index) =>(
                         <li style={{display: "inline-block", marginRight: 28, width: 370}} key={index}>
                             <div className="post" >
                                 <div className="post-top">
                                     <div className="post-avatar"> <img  src={value.image}/></div>
                                     <div className="post-info">
                                         <h3>{value.name}</h3>
                                         <p>{new Date(value.createdAt).toLocaleDateString('en-GB')}</p>
                                     </div>
                                     <div className="post-option">
                                         <Image preview={false} className="icon-edit" onClick={(id) => onEdit(value.id)} width={18} height={18} src={imageEdit}/>
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

                                                        <Button type={"primary"} className="modal-delete-btn-delete" onClick={(id) => deletePort(value.id)}>Delete</Button>
                                                        <Button  className="modal-delete-btn-cancel" onClick={handleDeleteOk}>Cancel</Button>

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