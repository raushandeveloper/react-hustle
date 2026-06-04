function TimeDate(){
  let now = new Date();
  let currentTime = now.toLocaleTimeString();
  let currentDate = now.toLocaleDateString();
  
    return(
      <div className="text-center">
      <div className="container">
        <p><b>Date:</b> {currentDate}</p>
        <p><b>Time:</b> {currentTime}</p>
      </div>
    </div>
    )
}

export default TimeDate