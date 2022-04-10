import { TextField, Button } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../context/UserContext';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


function Add() {

  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()))

  const onEditorStateChange = editorState => {
    setEditorState(editorState);	
    };

    const { user } = useContext(UserContext);
    const [selectedImage, setSelectedImage] = useState();
    
    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    };


    const {AddArticle, wait} = useContext(UserContext);
    const [errMsg, setErrMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [formData, setFormData] = useState({
        ar_title: '',
        meta_desc: '',
        user_name: user.user_name,
        description: '',
        image: ''
    });


  
    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        },console.log(formData))
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    }
  
    const submitForm = async (e) => {
        e.preventDefault();
        console.log(formData);
        const data = await AddArticle(formData);
        if(data.success){
            setSuccessMsg('Your Article has been recieved!');
            setErrMsg(false);
        }
        else if(!data.success && data.message){
            setSuccessMsg(false);
            setErrMsg(data.message);
        }
        
    }
    

  return (
    <Adding>
      <div className="heroInner">
        <form autocomplete="off" className='form' onSubmit={submitForm} action="getArtid.php">
            <h1>Create Content</h1>
            <p className='para'>We believe, we each walk our paths so we can learn and share those lessons with others</p>
            <h3 className='mb-2'>Title</h3>
            <TextField name='ar_title' value={formData.ar_title} onChange={onChangeInput} id="outlined-basic" label="Title of the Post" variant="outlined" className='field' />
            <h3 className='mb-2'>Meta Description</h3>
            <TextField id="outlined-basic" 
                label="Description of your Post on Card" 
                variant="outlined" 
                className='field' 
                multiline
                rows={4}
                name="meta_desc"
                value={formData.meta_desc} onChange={onChangeInput} />

        <div className="flex mt-5 mb-3">
            <h3 className='mr-5 mt-2'>By</h3>    
            <TextField disabled value={formData.user_name} name='user_name' onChange={onChangeInput} id="outlined-basic" variant="outlined" />
        </div>
        <h3 className='mb-2 mt-5'>Cover Image URL</h3>
        <TextField type="url" name='image' value={formData.image} onChange={onChangeInput} id="outlined-basic" label="URL" variant="outlined" className='field' />
        <h3 className='mb-2'>Description</h3>
        <Editor 
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        wrapperClassName="wrapper-class"	   
        editorClassName="editor-class"
        toolbarClassName='toolbar-class' />

        <textarea
                hidden
                disabled
                name="description"
                value={formData.description = draftToHtml(convertToRaw(editorState.getCurrentContent()))} onChange={onChangeInput} />
        <input
            className='btn-v'
            type="submit"
            disabled={wait}       
        />
        {errMsg && <div className="err-msg">{errMsg}</div>}
        {successMsg && <div className="success-msg">{successMsg}</div>}
        </form>
      </div>
    </Adding>
  );
}

export default Add;

const Adding = styled.section`
    background: #ffffff;
    padding: 7rem var(--sidePadding) 6rem;
    .success-msg,
    .err-msg {
      color: #dc3545;
      font-family: Nunito Sans;
      margin-top: 2vh;
  }
  .success-msg {
    color: #20c997;
  }
  .para {
    font-family: "Product Sans";
    font-weight: normal;
    font-size: 30px;
    width: 50vw;
    margin-bottom: 1rem;
  }
  .heroInner {
    display: flex;
    max-width: var(--containerWidth);
    margin: 0 auto;
  }
  .form {
    font-family: "Product Sans";
    font-weight: bold;
    font-size: 30px;
  }
  h1 {
    font-size: 50px;
  }
  .field {
      width: 70vw;
      margin-bottom: 5vh;
  }
  .cover {
      height: 50vh;
  }
  .wrapper-class {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 1vh;
    overflow: auto;
    width: 67vw;
  }
  .editor-class {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 1vh;
  }
  .toolbar-class {
    border: 1px solid #ccc;
    border-radius: 1vh;
  }
  .btn-i {
    background: var(--red);
    color: #ffffff;
  }
  .btn-i:hover {
      background: #17ffbb;
  }
  .btn-v {
      background: var(--red);
      color: #ffffff;
      transition: 0.5s;
      margin-top: 7vh;
      font-family: "Product Sans";
      font-weight: normal;
      width: 8vw;
      height: 7vh;
      border-radius: 1vh;
      font-size: 20px;
      cursor: pointer;
  }
  .btn-v:hover {
      background: #17ffbb;
  }
  @media (max-width: 36rem) {
    padding: 4rem var(--sidePadding) 6rem;
    .btn-v {
      margin-top: 5vh;
      width: 25vw;
      height: 5vh;
      border-radius: 1.2vh;
      font-size: 15px;
  }
  .para {
    font-size: 25px;
    width: 80vw;
    margin-bottom: 1rem;
  }
  .cover {
      height: 25vh;
  }
  }
  @media (min-width: 36rem) and (max-width: 62.5rem) {
    .btn-v {
      margin-top: 5vh;
      width: 15vw;
      height: 5vh;
      border-radius: 1.2vh;
      font-size: 20px;
  }
  .para {
    font-size: 25px;
    width: 80vw;
    margin-bottom: 2rem;
  }
  .cover {
      height: 35vh;
  }
  }
`
