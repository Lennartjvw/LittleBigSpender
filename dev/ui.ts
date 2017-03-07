/**
 * Ui
 */
class Ui {

    private sideBar:HTMLElement;

    private health:HTMLElement;
    private happiness:HTMLElement;
    private stamina:HTMLElement;



    constructor() {

        this.sideBar = document.createElement("sideBar");
        this.sideBar.setAttribute("id", "sideBar");
        document.body.appendChild(this.sideBar);

        this.health = document.createElement("health");
        this.health.setAttribute("id", "health");
        this.sideBar.appendChild(this.health)

        this.happiness = document.createElement("happiness");
        this.happiness.setAttribute("id", "happiness");
        this.sideBar.appendChild(this.happiness);

        this.stamina = document.createElement("stamina");
        this.stamina.setAttribute("id", "stamina");
        this.sideBar.appendChild(this.stamina)
        
    }
    
}