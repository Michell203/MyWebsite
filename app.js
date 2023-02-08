document.getElementById("modeSwitch").addEventListener("click", changeMode);
const modeButton = document.getElementById("modeSwitch");
const modeChange = document.getElementsByClassName();

function changeMode(){
    if(modeButton.classList.contains("light")){
        modeButton.classList.remove("light");
        modeButton.classList.add("dark");
        modeButton.innerHTML = "Dark Mode";

    } else {
        modeButton.classList.remove("dark");
        modeButton.classList.add("light");
        modeButton.innerHTML = "Light Mode";
    }
    
}
