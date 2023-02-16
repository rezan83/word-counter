import { useState } from "react";
import FormArticle from "./components/FormArticle";
import Counter from "./components/Counter";
function App() {
    const [content, setContent] = useState("Hello There");
    return (
        <div className="App">
            <header className="App-header">
                <h1>Word Counter</h1>
            </header>

            <FormArticle content={content} setContent={setContent}/>
            <Counter content={content}/>
        </div>
    );
}

export default App;
