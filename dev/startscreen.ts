/**
 * Startscreen
 */
class Startscreen {

    private title:HTMLElement;
    private nameTextField:HTMLInputElement;
    private startButton:HTMLElement;

    constructor() {

        //Title
        this.title = document.createElement("title");
        document.body.appendChild(this.title);
        this.title.innerHTML = "Little Big Spender";

        //Input field for name
        this.nameTextField = document.createElement("input");
        this.nameTextField.setAttribute("class", "textfield");
        this.nameTextField.setAttribute("id", "playerInput");
        this.nameTextField.setAttribute("type", "text");
        this.nameTextField.setAttribute("value", "");
        this.nameTextField.setAttribute("placeholder", "Jouw naam");
        document.body.appendChild(this.nameTextField);

        //Startbutton
        this.startButton = document.createElement("start");
        this.startButton.setAttribute("id", "startButton");
        this.startButton.innerHTML = "Start Game";
        document.body.appendChild(this.startButton);
        this.startButton.addEventListener("click", this.startGame.bind(this))

    }

    private startGame(){

        this.title.remove();
        this.nameTextField.remove();
        this.startButton.remove();

        new Game();

    }
}