/**
 * Startscreen
 */
class Startscreen {

    private title:HTMLElement;
    private nameTextField:HTMLInputElement;
    private startButton:HTMLElement;

    constructor() {
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
}