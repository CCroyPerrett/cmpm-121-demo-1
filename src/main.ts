import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Cluefinder";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("button");
//button.type = "button";
button.innerHTML = "Investigate 🔎";

app.append(button);


let count: number = -1; count ++;
const counter = document.createElement("div"); counter.id = "counter";
counter.innerHTML = "Clues Found = " + count;
app.append(counter);

function incriment(addition : number = 1){
    count += addition; 
    counter.innerHTML = "Clues Found = " + count;
}

button.addEventListener("click", () => {
    incriment();
})

//setInterval(()=>{incriment()}, 1000)

requestAnimationFrame((timestamp) => {

    setInterval(()=>{
        count += 1/(1000/timestamp); 
        counter.innerHTML = "Clues Found = " + count;
    },timestamp)
    
});
