var Startscreen = (function () {
    function Startscreen() {
        this.title = document.createElement("title");
        document.body.appendChild(this.title);
        this.title.innerHTML = "Little Big Spender";
        this.nameTextField = document.createElement("input");
        this.nameTextField.setAttribute("class", "textfield");
        this.nameTextField.setAttribute("id", "playerInput");
        this.nameTextField.setAttribute("type", "text");
        this.nameTextField.setAttribute("value", "");
        this.nameTextField.setAttribute("placeholder", "Jouw naam");
        document.body.appendChild(this.nameTextField);
    }
    return Startscreen;
}());
window.addEventListener("load", function () {
    new Startscreen();
});
var Message = (function () {
    function Message() {
        this.div = document.createElement("message");
        document.body.appendChild(this.div);
        this.div.innerHTML = "Little Big Spender. Dit is een leeg VS Code project met de volgende instellingen:<br><ul><li>DIST folder bevat de website : html, css en javascript</li><li>DEV folder bevat de typescript files</li><li>tsconfig.json bevat instellingen voor het compileren naar javascript</li>      <li>tasks.json bevat het 'build' commando. Dit voer je uit met CMD+SHIFT+B</li></ul>";
    }
    return Message;
}());
//# sourceMappingURL=main.js.map