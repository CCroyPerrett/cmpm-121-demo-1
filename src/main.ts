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

/*function incriment(){
    const counter = document.getElementById("counter");
    if(counter != null){
        count ++; counter.innerHTML = "Clues Found = " + count;
        console.log("count is now: " + count);
    }
    //count ++; counter.innerHTML = "Clues Found = " + count;
    console.log("count is now: " + count);
    
  }*/

let count: number = -1; count ++;
const counter = document.createElement("div"); counter.id = "counter";
counter.innerHTML = "Clues Found = " + count;
app.append(counter);

button.addEventListener("click", () => {
    counter.innerHTML = "Clues Found = " + ++count;
})

//app.append(cnt);

/*function handleClick(event: MouseEvent) {
    console.log('Button clicked!');
}
const element = document.querySelector('.element');
if(element!= null)
element.addEventListener('click', handleClick);*/