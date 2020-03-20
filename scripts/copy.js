let buttons = document.querySelectorAll("tr button");
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.onclick = button_click;
    button.onmouseleave = button_mouseleave;
}
async function button_click() {
    let copyText = this.parentElement.parentElement.querySelector("input[type=text]");
    let tooltip = this.firstElementChild;
    // await navigator.clipboard.writeText(copyText.value);
 
    copyText.hidden = false;
    copyText.select();
    document.execCommand("copy");
    copyText.hidden = true;
    
    // let copytext = document.createElement('input')
    // copytext.value = copyText.value 
    // document.body.appendChild(copytext)
    // copytext.select()
    // document.execCommand('copy')
    // document.body.removeChild(copytext)
 
    tooltip.innerHTML = "Скопировано: " + copyText.value;
}
function button_mouseleave() {
    let tooltip = this.firstElementChild;
    tooltip.innerHTML = "Копировать в буфер";
}