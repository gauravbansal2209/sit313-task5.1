import React from "react";
import Article from './Article';
import Question from './Question';
import Header from './Header';
import PostButton from "./PostButton";
import { useState } from 'react';

const center = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}

function ConditionForm(){

    var [question, setForm] = useState("Question")
    const handleChange = (e) =>{
        setForm(e.target.value)
    }

    const condition = () => {
        if(question === "Question") {
          return (
            <Question />
          )
        } if (question === "Article") {
          return (
            <Article />
          )
        }
      }

    return(
        <div>
            <form style={center}>
                <p><b>Select Post Type: </b></p>
                <input type="radio" value="Question" id="question" name="post" onChange={handleChange} checked={question ==="Question"}></input>
                <label for="question">Question</label>
                <input type="radio" value="Article" id="article" name="post" onChange={handleChange} checked={question ==="Article"}></input>
                <label for="article">Article</label>
            </form>
            <Header title="What do you want to ask or share" />
            {condition()}
            <PostButton />
        </div>
    )
}

export default ConditionForm;