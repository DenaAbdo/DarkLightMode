const modeChanger = document.getElementById('modeChanger');
const container = document.querySelector('.container');
    modeChanger.addEventListener("click", () =>{
        container.classList.toggle('dark-mode');
        //container.classList.toggle('light-mode');
    });