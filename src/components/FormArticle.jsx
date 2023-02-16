// import { useState } from "react";

const FormArticle = ({ content, setContent }) => {
    const handelChange = (event) => {
        setContent(event.target.value);
    };
    return (
        <div>
            <form>
                <label htmlFor="textarea">Write your Article:</label>
                <textarea
                    name="textarea"
                    id="textarea"
                    cols="30"
                    rows="10"
                    onChange={handelChange}
                    value={content}
                />
            </form>
        </div>
    );
};

export default FormArticle;
