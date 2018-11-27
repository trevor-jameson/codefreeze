  // Calculates the hours remaining until the code freeze
  
   codeFreeze = () => {
   
    const codeFreeze = Date.parse('December 5, 2018 14:00:00')
    const remainingTime = codeFreeze - Date.parse(new Date())
    
    if (remainingTime <= 0) {
      return <iframe src="https://giphy.com/embed/T08JhumnpKAI8" width="180" height="150" ></iframe>
    }
      let remainingHours = Math.round(remainingTime / 1000 / 60 / 60)
      return <p>{remainingHours} Hours until code freeze</p>
  }
