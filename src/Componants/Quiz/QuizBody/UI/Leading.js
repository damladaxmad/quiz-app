const Leading = (props)=>{
    let nuuc = "red"
    nuuc = props.midab
    return <div style = {{
        backgroundColor: nuuc,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        padding: "0.4rem",
        height: "30px",
        width: "26px",
        color: "white",
        
     }}> <div style ={{marginLeft: "4px", fontSize: "20px"}}> {props.content} </div> </div>
}

export default Leading;

