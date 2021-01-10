export default function options(){
    const menuItems = document.querySelectorAll(".options_menu ul li a");
    const contentItems = document.querySelectorAll(".content_block");
    const title = document.querySelector(".options_content_title");
    const allParamLink = document.querySelector(".all_parametrs");
    const parametrsMenuItem = document.querySelector(".options_menu_parametrs a");
    const deliveryMenuItem = document.querySelector(".options_menu_delivery a");
    const parametrsBlock = document.querySelector(".options_content_parametrs");
    const delivLinks = document.querySelectorAll(".deliv_link");


    const titlesText = [
        "Наличие",
        "Бесплатная доставка по Москве и области",
        "Характеристики аккумулятора Topla (Топла) EFB Stop&Go Asia (56068 SMF) 60 Ач 600 А прямая полярность",
        "Описание",
        "Аналоги",
    ];

    function checkActive(item, i){
        if(item.classList.contains("active")){
            contentItems[i].classList.remove("hidden")
            title.innerText = titlesText[i]
        }
    }

    function addActive(arr, item){
        arr.forEach(item => item.classList.remove("active"))
        item.classList.add("active")
    }

    contentItems.forEach(item => item.classList.add("hidden"))

    menuItems.forEach((item, i) => {
        checkActive(item, i)

        item.addEventListener("click", () => {
            addActive(menuItems, item)
            contentItems.forEach(item => item.classList.add("hidden"))
            checkActive(item, i)
        });
    });

    allParamLink.addEventListener("click", () => {
        addActive(menuItems, parametrsMenuItem)
        contentItems.forEach(item => item.classList.add("hidden"))
        menuItems.forEach((item, i) => checkActive(item, i))
    });

    delivLinks.forEach((item, i) => {
        item.addEventListener("click", () => {
            addActive(menuItems, deliveryMenuItem)
            contentItems.forEach(item => item.classList.add("hidden"))
            menuItems.forEach((item, i) => checkActive(item, i))
        })
    });
}
