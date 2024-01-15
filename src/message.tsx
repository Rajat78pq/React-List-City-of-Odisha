// function based component

function Message (){
    const name = "Rejo";
    if(name){
    return <h1>Hello {name}</h1>;
    }
    else{
        return <h1>Hello World</h1>;
    }
}

export default Message;
