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

let growth_rate = 1; console.log("growth is now: " + growth_rate)
requestAnimationFrame((timestamp) => {

    setInterval(()=>{
        count += growth_rate/(1000/timestamp); 
        counter.innerHTML = "Clues Found = " + count;
    },timestamp)
    
});


const upgrade1 = document.createElement("button");
upgrade1 .innerHTML = "Hire a Watson (Costs 10)";
upgrade1.addEventListener("click", () => {
    if(count >= 10){
        count -= 10;
        growth_rate += 0.1; console.log("growth is now: " + growth_rate)
        /*const watson = document.createElement("h5");
        watson.innerHTML = '\t' + "🕵️"
        app.append(watson);*/
    }
});
app.append(upgrade1);

const upgrade2 = document.createElement("button");
upgrade2 .innerHTML = "Hire a Constable (Costs 100)";
upgrade2.addEventListener("click", () => {
    if(count >= 100){
        count -= 100;
        growth_rate += 2; 
        /*const watson = document.createElement("h5");
        watson.innerHTML = '\t' + "🕵️"
        app.append(watson);*/
    }
});
app.append(upgrade2);

const upgrade3 = document.createElement("button");
upgrade3 .innerHTML = "Hire a Sherlock (Costs 1000)";
upgrade3.addEventListener("click", () => {
    if(count >= 1000){
        count -= 1000;
        growth_rate += 50; 
        /*const watson = document.createElement("h5");
        watson.innerHTML = '\t' + "🕵️"
        app.append(watson);*/
    }
});
app.append(upgrade3);



