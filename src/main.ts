import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Cluefinder";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("button");
button.innerHTML = "Investigate 🔎";

app.append(button);

interface Item {
    name: string,
    cost: number,
    skill: number,
    desc: string
  };
  
  const availableItems : Item[] = [
    {name: "Watson", cost: 10, skill: 0.1, desc:"New to the job, but willing to join for little prestiege."},
    {name: "Constable", cost: 100, skill: 2, desc:"A hardened professional. Knows what they're doing."},
    {name: "Sherlock", cost: 1000, skill: 50, desc:"When the possible has been exhausted, knows to look for the impossible explanations."},
    {name: "Oracle", cost: 10000, skill: 50*3, desc:"Utilizes magic to consult the god's wisdom on mysterious matters."},
    {name: "Immortal Machine God", cost: 100000, skill: 50*3*5, desc:"Sees past the veil that binds all things."},
  ];


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


let growth_rate = 1; 
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
upgrade1.innerHTML = "Hire a Watson 👨‍💼(Costs "+ availableItems[0].cost+ ")";

function buy(index:number, emoji:string, button:Element){
    if(count >= availableItems[index].cost){
        count -= availableItems[index].cost; availableItems[index].cost *= 1.15
        growth_rate += availableItems[index].skill; console.log("growth is now: " + growth_rate)
        button.innerHTML = "Hire a " + availableItems[index].name +  " " + emoji 
        + "Costs (" + availableItems[index].cost.toFixed(3) + ")";
        growthtxt.innerHTML = "Growth Rate: " + growth_rate.toFixed(1)+ " per second";
        chardiv.innerHTML += emoji;
    }
}

upgrade1.addEventListener("click", () => {buy(0, "👨‍💼", upgrade1);});
upgrade1.addEventListener("mouseover", () => {summon_description(0)});
app.append(upgrade1);

const upgrade2 = document.createElement("button");
upgrade2.innerHTML = "Hire a Constable 👮‍♂️(Costs 100)";
upgrade2.addEventListener("click", () => {buy(1, "👮‍♂️", upgrade2);});
upgrade2.addEventListener("mouseover", () => {summon_description(1)});
app.append(upgrade2);

const upgrade3 = document.createElement("button");
upgrade3 .innerHTML = "Hire a Sherlock 🕵️(Costs 1000)";
upgrade3.addEventListener("click", () => {buy(2, "🕵️", upgrade3);});
upgrade3.addEventListener("mouseover", () => {summon_description(2)});
app.append(upgrade3);

const upgrade4 = document.createElement("button");
upgrade4 .innerHTML = "Hire an Oracle 🧙‍♀️(Costs 10000)";
upgrade4.addEventListener("click", () => {buy(2, "🧙‍♀️", upgrade4);});
upgrade4.addEventListener("mouseover", () => {summon_description(3)});
app.append(upgrade4);

const upgrade5 = document.createElement("button");
upgrade5 .innerHTML = "Hire an Immortal Machine God 🤖(Costs 100000)";
upgrade5.addEventListener("click", () => {buy(2, "🤖", upgrade5);});
upgrade5.addEventListener("mouseover", () => {summon_description(4)});
app.append(upgrade5);

const description = document.createElement("div"); 
description.innerHTML = "";
app.append(description);

function summon_description(index: number){
    description.innerHTML = availableItems[index].name + ". " + availableItems[index].desc;
}

app.append(chardiv);


  