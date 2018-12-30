
/*
    Events that need to happen:
        - Add to console: add user input to the game console
        - Add to inventory: add items from game into inventory
        - Game Intro onLoad: load initial story
        - StoryLine code: main story function
            - Subplot functions
        - Use Items function
    
    Game Items:

*/

let gameConsole = document.getElementById("mainContent");
let playerInventory = document.getElementById("playerInventory");
let inventoryCount = document.getElementById("inventoryCount");
let userChoice = "";
let gameState = "new";
let itemCount = 0;

function addInput()
{
    console.log("button was pressed");
    userChoice = document.getElementById("playerInput").value;
    if ( userChoice === ""){
        console.log("Nothing was added");
        document.getElementById("playerInput").value = "";
    }else if (userChoice.includes("add") || userChoice.includes("Add")){
        console.log("User chose to: " + userChoice);
        checkItem(userChoice);
        document.getElementById("playerInput").value = "";
    }else if (userChoice.includes("use") || userChoice.includes("Use")){
        // TODO: Add Item Logic
        var item = "";
        console.log("User decided to use an item");
        useItem(item);
        document.getElementById("playerInput").value = "";
    }else{
        addToConsole(userChoice);
        gameLoop(userChoice);
        document.getElementById("playerInput").value = "";
    }
    return userChoice;
}

function addToConsole(s){
    s = "> " + s;
    let node = document.createElement("li");

    let choiceToAdd = document.createTextNode(s);

    node.appendChild(choiceToAdd);
    gameConsole.appendChild(node);

    let objDiv = document.getElementById("mainGame");
    objDiv.scrollTop = objDiv.scrollHeight;
}

var input = document.getElementById("playerInput");
input.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode ===13)
    {
        document.getElementById("BtnInput").click();
    }
});

function addToInventory(userItem)
{
    if (itemCount < 15)
    {
        console.log(userItem + " was added to Inventory");
        let node = document.createElement("li");
        let itemToAdd = document.createTextNode(userItem);
        node.appendChild(itemToAdd);
        playerInventory.appendChild(node);
        itemCount++;
        inventoryCount.innerHTML = itemCount + " / 15";
    }else
    {
        alert("Inventory Full");
    }
}

function useItem(item){
    console.log("User chose to use " + item);
}

function checkItem(userInput){
    userInput = userInput.toLowerCase();
    if (userInput.includes("knife") === true){
        addToInventory("Knife");
        console.log("Knife was added into the inventory");
    }
}

function gameLoop(userInput){
    if (gameState === 'new'){
        console.log("Game in new state");
        if (userInput.includes("left")){
            console.log("Changing to left game state");
            gameState = 'left';
            return gameState;
        }
        if (userInput.includes("right")){
            console.log("Changing to right game state");
            gameState = 'right';
            return gameState;
        }
    }
    if (gameState === 'left'){
        console.log("Currently in left game state");
    }
    if (gameState === 'right'){
        console.log("Currently in right game state");
    }
}