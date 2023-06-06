  function time() {
        const hr = document.querySelector('#hr');
        const sec = document.querySelector('#sec');
        const min = document.querySelector('#min');

        const date = new Date();
        let hrs = date.getHours();
        const mins = date.getMinutes();
        const secs = date.getSeconds();
       
        let amPm = 'AM';
        if (hrs >= 12) {
            amPm = 'PM';
        }
        if (hrs > 12) {
            hrs -= 12;
        }
        
        const formattedMins = String(mins).padStart(2, '0');
        const formattedSecs = String(secs).padStart(2, '0');
        const format = document.querySelector('.format');
       
        hr.innerText = `${hrs}`;
        min.innerText = formattedMins;
        sec.innerText = formattedSecs;
        format.innerText = ` ${amPm}`;
    }
    setInterval(time, 1000);