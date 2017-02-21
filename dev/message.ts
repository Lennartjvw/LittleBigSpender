class Message {
    
    private div : HTMLElement;
        
    constructor() {
        this.div = document.createElement("message");
        document.body.appendChild(this.div);
        
        this.div.innerHTML = "Little Big Spender. Dit is een leeg VS Code project met de volgende instellingen:<br><ul><li>DIST folder bevat de website : html, css en javascript</li><li>DEV folder bevat de typescript files</li><li>tsconfig.json bevat instellingen voor het compileren naar javascript</li>      <li>tasks.json bevat het 'build' commando. Dit voer je uit met CMD+SHIFT+B</li></ul>";
        this.div.style.top = "50px";
        this.div.style.left= "80px";
    }
   
}