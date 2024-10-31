import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Cluefinder";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let growth_rate = 1; 
let count: number = -0;

interface Investigator {
    name: string,
    cost: number,
    skill: number,
    desc: string
};
  
const availableItems : Investigator[] = [
    {name: "Watson", cost: 10, skill: 0.1, desc:"A rookie, but willing to join for little prestiege."},
    {name: "Columbo", cost: 100, skill: 2, desc:"A professional. Can get a mean cuplrit to underestimate and slip up."},
    {name: "Kigiri", cost: 1000, skill: 50, desc:"An Ultimate. She may be young, but Hope's Peak has crowned her the Ultimate Detective for a reason."},
    {name: "L", cost: 10000, skill: 1000, desc:"World Class. Bad posture, but his guts and manipulation can throw even the smartest off their game."},
    {name: "Sherlock", cost: 100000, skill: 6000, desc:"A Legend. A Myth. A Man. Through his mind palace he sees all."},
];

const button = document.createElement("button");
button.innerHTML = "Investigate 🔎";

app.append(button);


const counter = document.createElement("div"); counter.id = "counter";
counter.innerHTML = "Clues Found = " + count;
app.append(counter);

function incrementClueCount(addition : number = 1){
    count += addition; 
    counter.innerHTML = "Clues Found = " + count;
}

button.addEventListener("click", () => {
    incrementClueCount();
})

const growthtxt = document.createElement("div"); 
growthtxt.innerHTML = "Growth Rate: " + growth_rate + " per second";
app.append(growthtxt);

requestAnimationFrame((timestamp) => {

    setInterval(()=>{
        count += growth_rate/(1000/timestamp); 
        counter.innerHTML = "Mysteries Solved = " + count.toFixed(6);
    },timestamp)
    
});

const upgrade1 = document.createElement("button");
upgrade1.innerHTML = "Hire a Watson 👨‍💼(Costs "+ availableItems[0].cost+ ")";
upgrade1.addEventListener("click", () => {buyInvestigator(0, "👨‍💼", upgrade1);});
upgrade1.addEventListener("mouseover", () => {investigatorDescription(0)});
app.append(upgrade1);

const upgrade2 = document.createElement("button");
upgrade2.innerHTML = "Hire a Columbo 👮‍♂️(Costs 100)";
upgrade2.addEventListener("click", () => {buyInvestigator(1, "👮‍♂️", upgrade2);});
upgrade2.addEventListener("mouseover", () => {investigatorDescription(1)});
app.append(upgrade2);

const upgrade3 = document.createElement("button");
upgrade3 .innerHTML = "Hire a Kigiri 👩‍🔬(Costs 1000)";
upgrade3.addEventListener("click", () => {buyInvestigator(2, "👩‍🔬", upgrade3);});
upgrade3.addEventListener("mouseover", () => {investigatorDescription(2)});
app.append(upgrade3);

const upgrade4 = document.createElement("button");
upgrade4 .innerHTML = "Hire an L 👨‍🦱(Costs 10000)";
upgrade4.addEventListener("click", () => {buyInvestigator(2, "👨‍🦱", upgrade4);});
upgrade4.addEventListener("mouseover", () => {investigatorDescription(3)});
app.append(upgrade4);

const upgrade5 = document.createElement("button");
upgrade5 .innerHTML = "Hire a Sherlock 🕵️(Costs 100000)";
upgrade5.addEventListener("click", () => {buyInvestigator(2, "🕵️", upgrade5);});
upgrade5.addEventListener("mouseover", () => {investigatorDescription(4)});
app.append(upgrade5);

function buyInvestigator(index:number, emoji:string, button:Element){
    if(count >= availableItems[index].cost){
        count -= availableItems[index].cost; availableItems[index].cost *= 1.15
        growth_rate += availableItems[index].skill; 

        updateGameText(index, emoji, button);
    }
}
    
    function updateGameText(index:number, emoji:string, button:Element){
        console.log("growth is now: " + growth_rate)
        button.innerHTML = "Hire a " + availableItems[index].name +  " " + emoji 
        + "Costs (" + availableItems[index].cost.toFixed(3) + ")";
        growthtxt.innerHTML = "Growth Rate: " + growth_rate.toFixed(1)+ " per second";
        descriptionDiv.innerHTML += emoji;
    }

const description = document.createElement("div"); 
description.innerHTML = "";
app.append(description);

function investigatorDescription(index: number){
    description.innerHTML = availableItems[index].name + ". " + availableItems[index].desc;
}

const descriptionDiv = document.createElement("div"); 
descriptionDiv.innerHTML = "Your Investigation Team: ";
app.append(descriptionDiv);


  