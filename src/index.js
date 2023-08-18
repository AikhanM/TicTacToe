import Model from "./Model.js";
import View from "./View.js";
import Controller from "./Controller.js";

window.addEventListener("DOMContentLoaded",function(){
    const model=new Model()
    const view=new View()
    const controller=new Controller(model,view)
    controller.init()
})

window.addEventListener("DOMContentLoaded",initialize)