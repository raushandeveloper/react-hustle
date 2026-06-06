function TimeDate(){
  let now = new Date();
  let currentTime = now.toLocaleTimeString();
  let currentDate = now.toLocaleDateString();
  
    return(
      <div className="text-center lead">
        <p>this is the current time:  {currentDate}- {currentTime} </p>
      </div>
    )
}

export default TimeDate