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

interface Item {
    name: string,
    cost: number,
    skill: number
  };
  
  const availableItems : Item[] = [
    {name: "Watson", cost: 10, skill: 0.1},
    {name: "Constable", cost: 100, skill: 2},
    {name: "Sherlock", cost: 1000, skill: 50},
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

upgrade1.addEventListener("click", () => {

    buy(0, "👨‍💼", upgrade1);

});
app.append(upgrade1);

const upgrade2 = document.createElement("button");
upgrade2.innerHTML = "Hire a Constable 👮‍♂️(Costs 100)";
upgrade2.addEventListener("click", () => {
    buy(1, "👮‍♂️", upgrade2);

});
app.append(upgrade2);

const upgrade3 = document.createElement("button");
upgrade3 .innerHTML = "Hire a Sherlock 🕵️(Costs 1000)";
upgrade3.addEventListener("click", () => {
    buy(2, "🕵️", upgrade3);

});
app.append(upgrade3);

app.append(chardiv);


  