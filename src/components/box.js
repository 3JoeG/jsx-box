import React, {useState} from  'react';
    
    
const Box = () => {
    const [boxInfo, setBoxInfo] = useState({
        color:"",
        height:0,
        width:0
    });

const [boxlist, setBoxList]= useState([])

const changeHandler=(e) =>{
    console.log("changing form info:", e.target.name)
    setBoxInfo({...boxInfo, [e.target.name]:e.target.value})
}

const submitHandler=(e) =>{
    e.preventDefault();
    setBoxList([...boxlist,boxInfo])
    setBoxInfo({
        color:"",
        height:0,
        width:0
    })
    
}

    return(
        <>
        <form onSubmit={submitHandler}>
            <div>
                <label>Color: </label> 
                <input type="text" name="color" id="color" onChange={changeHandler} value={boxInfo.color} />
            </div>
            <div>
                <label>Height: </label> 
                <input type="number" name="height"id="width" onChange={changeHandler} value={boxInfo.height}/>
            </div>
            <div>
                <label>Width: </label> 
                <input type="number" name="width" id="width" onChange={changeHandler} value={boxInfo.width}/>
            </div>
            
            <input type="submit" value="Create Box" style={{margin:'20px'}}/>
        </form>
        <div style={{display: 'inline-block'}}>
            {
            boxlist.map((box,i)=>{
                return <div key={i} style={{backgroundColor:box.color, height:box.height+'px', width:box.width+'px', display:'inline-block', margin: '10px'}}></div>
            })
        }
        </div>

      </>  
    );
    }


export default Box;