import React,{useState,useEffect} from 'react';


export default function Text(props) {
  const [Text, setText] = useState("");
  const [Words, setWords] = useState();



  useEffect(() => {
    setWords(countWords(Text));
  }, [Text]);




const upperbutton=()=>{
const a=Text.toUpperCase()
setText(a)
props.showAlert("converted to Uppercase", "success");

}

const lowerbutton=()=>{
const a=Text.toLowerCase()
setText(a)
props.showAlert("converted to lowercase", "success");
}

const clearbutton=()=>{
const a=""
setText(a)
props.showAlert("Everything removed!", "success");
}

const copybutton=()=>{
navigator.clipboard.writeText(Text)
props.showAlert("copyed to clipboard", "success");
}



const handleonclick=(event)=>
{
const a= event.target.value;
setText(a)
}

const countWords = (Text) => {
  if (Text.trim() === '') {
    return 0;
  }
  const words = Text.trim().split(/\s+/);
  return words.length;
};

  return (
    <>
      <div className={`container bg-${props.mode.backgroundColor}`}>
        <div className="mb-3 my-5">
          <h1 className={`text-${props.mode.color}`}>Enter the text to analyze below</h1>
          <textarea className={`form-control bg-${props.mode.backgroundColor} text-${props.mode.color}`} value={Text} onChange={handleonclick}id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>

        <button className="mx-1 btn btn-primary" onClick={upperbutton}type="button">Convert-to-uppercase</button>
        <button className="mx-1 btn btn-primary" onClick={lowerbutton} type="button">Convert to lowercase</button>
        <button className="mx-1 btn btn-primary" onClick={clearbutton} type="button">Clear Text</button>
        <button className="mx-1 btn btn-primary" onClick={copybutton} type="button">Copy Text</button>
        
       


        <h1 className={`text-${props.mode.color}`}>Your text summary</h1>
        <p className={`text-${props.mode.color}`}>  {Words} and {Text.length} characters</p>
       
        <h2 className={`text-${props.mode.color}`}>Preview</h2>
        <p className={`text-${props.mode.color}`}>{Text}</p>
      </div>
    </>
  );
}
