export default function mobile_menu(){
    const hamburger = document.querySelector(".hamburger");
    const phoneBtn = document.querySelector(".phone_icon");
    const mobileMenu = document.querySelector(".header_mobile");
    const mobileContacts = document.querySelector(".header_contacts");
    const closeMenulBtn = document.querySelector(".header_mobile_title svg")
    const closeContactslBtn = document.querySelector(".header_contacts_title svg")
    
    function toggleDropMenus(dropEl, openBtn, closeBtn){
        openBtn.addEventListener("click", () =>{
            document.querySelector("body").classList.add("body_freeze");
            dropEl.classList.add("show_mobile");
        });
        closeBtn.addEventListener("click", () => {
            document.querySelector("body").classList.remove("body_freeze");
            dropEl.classList.remove("show_mobile");
        });
    }
    
    toggleDropMenus(mobileMenu, hamburger, closeMenulBtn);
    toggleDropMenus(mobileContacts, phoneBtn, closeContactslBtn);
}
