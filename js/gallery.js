const panels = document.querySelectorAll('.panel');
let currentPanelIndex = 0;

const changeActivePanel = () => {
  removeActiveClasses();
  currentPanelIndex = (currentPanelIndex + 1) % panels.length;
  panels[currentPanelIndex].classList.add('active');
};

setInterval(changeActivePanel, 5000); // change panel every 5 seconds

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}
