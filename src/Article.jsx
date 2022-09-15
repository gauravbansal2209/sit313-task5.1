import React from "react";
import Title from "./Title";
import Problem from "./Problem";

function Article(){
    return(
        <div>
            <Title heading="Title" placeholder="Enter a descriptive title"/>
            <Problem heading="Abstract: " placeholder="Enter a 1-paragraph abstract" rows="5" />
            <Problem heading="Article Text: " placeholder="Enter a 3-paragraph article text" rows="15" />
            <Title heading="Tags" placeholder="Please add up to 3 tags to describe what your article is about e.g., Java" />
        </div>
    )
}

export default Article;