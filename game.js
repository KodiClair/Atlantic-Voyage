function main(){
    async function startingText(){
    document.getElementById("gameText").innerHTML = "Welcome to the Atlantic Voyage!";
    await sleep(2000);
    document.getElementById("gameText").innerHTML = "Your grand prize awaits!";
    await sleep(2000);
    document.getElementById("gameText").innerHTML = "What is your name?";
    await sleep(1000);
    var name = prompt("What is your name?");
    document.getElementById("gameText").innerHTML = "Hello" + name + "!";
    await sleep(1000);
    document.getElementById("gameText").innerHTML = "Y";

    }
    startingText();
    
    
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
main()