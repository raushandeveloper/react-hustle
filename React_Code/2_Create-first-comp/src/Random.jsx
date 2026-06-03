function Random(){
    let Number = Math.random() *100;
    return <h1 style={{'backgroundColor':'#776691'}}>
        Random Number is: {Math.round(Number)}
    </h1>
}

export default Random;