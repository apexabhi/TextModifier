import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converte to UpperCase","success");
    }
    const handleloClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converte to LowerCase", "success");
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard", "success");
    }
    
    const handleSeClick=()=>{
        let newText = text.toLowerCase().replace(/(^\s*\w|[ . ! ?]\s*\w)/g, function (c) { return c.toUpperCase() });
        setText(newText);
        props.showAlert("Converte to SentenceCase", "success");
    }

    const handleClear=()=>{
        setText("");
    }
    //best approach to count no of words
    function countWords(str) {
        return str.split(/\s+/ )
            .filter(function (n) { return n !== '' })
            .length;
    }
    function countChar(str){
        let count=0;
        for(let i=0;i<str.length;i++){
            if(str[i]!==" "){
                count++;
            }
        }
        return count;
    }
    return (
        <>
        <div className="container" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                    <textarea id="myBox" value={text} onChange={handleOnChange} rows="7" className="form-control" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ?'#14213d':'white' }}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-4" onClick={handleClick} >Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-4"  onClick={handleloClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-4"  onClick={handleSeClick}>Convert to SentenceCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-4"  onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-4"  onClick={handleClear}>Clear Text</button>
        </div>
            <div className="container my-5 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2>Text Summary</h2>
            <p>No of words: {countWords(text)}</p>
            <p>No of characters: {countChar(text)}</p>
            <p>Time required to read the given content: {0.008*countChar(text)} mins</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
