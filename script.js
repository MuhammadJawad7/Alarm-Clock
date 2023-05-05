function startTimer() {
    const hoursInput = document.getElementById('hours-input');
    const minutesInput = document.getElementById('minutes-input');
    const secondsInput = document.getElementById('seconds-input');
    
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    
    if (hours < 0 || minutes < 0 || seconds < 0) {
      alert('Please enter valid positive numbers.');
      return;
    }
    
    const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
    
    if (totalTimeInSeconds === 0) {
      alert('Please enter a non-zero value.');
      return;
    }
    
    const endTime = Date.now() + totalTimeInSeconds * 1000;
    
    const timerInterval = setInterval(() => {
      const remainingTimeInSeconds = Math.round((endTime - Date.now()) / 1000);
      
      if (remainingTimeInSeconds <= 0) {
        clearInterval(timerInterval);
        alert('Timer has ended!');
        return;
      }
      
      const remainingHours = Math.floor(remainingTimeInSeconds / 3600);
      const remainingMinutes = Math.floor((remainingTimeInSeconds % 3600) / 60);
      const remainingSeconds = remainingTimeInSeconds % 60;
      
      const displayString = `${remainingHours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
      
      document.getElementById('timer-display').textContent = displayString;
    }, 1000);
  }
  