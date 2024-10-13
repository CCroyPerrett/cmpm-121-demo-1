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

let growth_rate = 1; //console.log("growth is now: " + growth_rate)
const growthtxt = document.createElement("div"); 
growthtxt.innerHTML = "Growth Rate: " + growth_rate + " per second";
app.append(growthtxt);

requestAnimationFrame((timestamp) => {

    setInterval(()=>{
        count += growth_rate/(1000/timestamp); 
        counter.innerHTML = "Mysteries Solved = " + count.toFixed(6);
    },timestamp)
    
});

const chardiv = document.createElement("div"); 
chardiv.innerHTML = "Your Investigation Team: ";


const upgrade1 = document.createElement("button");
upgrade1.innerHTML = "Hire a Watson 👨‍💼(Costs 10)";
let cost1 = 10
upgrade1.addEventListener("click", () => {
    if(count >= cost1){
        count -= cost1; cost1 *= 1.15
        growth_rate += 0.1; console.log("growth is now: " + growth_rate)
        upgrade1 .innerHTML = "Hire a Watson 👨‍💼(Costs " + cost1.toFixed(3) + ")";
        growthtxt.innerHTML = "Growth Rate: " + growth_rate.toFixed(1)+ " per second";
        //const watson = document.createElement("h5");
        chardiv.innerHTML += "👨‍💼";
        //app.append(watson);
        
    }
});
app.append(upgrade1);

const upgrade2 = document.createElement("button");
upgrade2.innerHTML = "Hire a Constable 👮‍♂️(Costs 100)";
let cost2 = 100
upgrade2.addEventListener("click", () => {
    if(count >= cost2){
        count -= cost2; cost2 *= 1.15;
        growth_rate += 2; 
        upgrade2 .innerHTML = "Hire a Constable 👮‍♂️(Costs " + cost2.toFixed(3) + ")";
        growthtxt.innerHTML = "Growth Rate: " + growth_rate.toFixed(1) + " per second";
        //const watson = document.createElement("h5");
        chardiv.innerHTML += "👮‍♂️";
        //app.append(watson);
    }
});
app.append(upgrade2);

const upgrade3 = document.createElement("button");
upgrade3 .innerHTML = "Hire a Sherlock 🕵️(Costs 1000)";
let cost3 = 1000
upgrade3.addEventListener("click", () => {
    if(count >= cost3){
        count -= cost3; cost3 *= 1.15;
        growth_rate += 50; 
        upgrade3 .innerHTML = "Hire a Sherlock 🕵️(Costs " + cost3.toFixed(3) + ")";
        growthtxt.innerHTML = "Growth Rate: " + growth_rate.toFixed(1)+ " per second";
        //const watson = document.createElement("h5");
        chardiv.innerHTML += "🕵️";
        //app.append(watson);
    }
});
app.append(upgrade3);

app.append(chardiv);

