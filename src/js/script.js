import options from "./modules/options";
import mobile_menu from "./modules/mobile_menu";
import modal from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
    options();
    mobile_menu();
    modal();
});