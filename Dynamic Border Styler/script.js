const inp = document.querySelector('input');
const myborder = document.querySelector("#border");

inp.addEventListener('input', function() {
  const result = inp.value;

  if (result === "") {
    myborder.style.borderStyle = 'solid';
    myborder.style.borderColor = 'black';
    myborder.style.borderWidth = '2px';
    myborder.style.borderRadius = '0px';
    return;
  }
  const parts = result.split(" ");

  if (parts.length >= 1 && parts.length <= 3) {
    const part1 = parts[0];

    
    if ( /^(solid|dashed|dotted)$/i.test(part1) ||  /^\d+px$/.test(part1) ||/^\d+%$/.test(part1)  ||
     /^#[A-Fa-f0-9]{3}$/.test(part1) || /^[a-zA-Z]+$/.test(part1) | /^#[A-Fa-f0-9]{6}$/.test(part1)) {
      if (/^\d+px$/.test(part1) || /^\d+%$/.test(part1)) {
        myborder.style.borderRadius = part1;
      } else if (/^(solid|dashed|dotted)$/i.test(part1)) {
        myborder.style.borderStyle = part1;
      } else {
        myborder.style.borderColor = part1;
      }
      if (parts.length === 3) {
        const style = parts[1];
        const color = parts[2];

        if (/^#[A-Fa-f0-9]{6}$/.test(color) ||
         /^#[A-Fa-f0-9]{3}$/.test(color) || 
         /^[a-zA-Z]+$/.test(color)) {
          myborder.style.borderColor = color;
        }

        if (/^(solid|dashed|dotted)$/i.test(style)) {
          myborder.style.borderStyle = style;
        }
      }
    }











  }
});
