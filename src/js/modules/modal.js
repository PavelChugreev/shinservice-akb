export default function modal(){
    const modal = document.querySelector(".modal_window")
    const mainPhoto = document.querySelector(".product_photo_img")
    const preview = document.querySelector(".product_photo_preview_small")
    const closeModalBtn = document.querySelector(".modal_window_close")
    
    function openModal(){
        modal.classList.remove('hidden')
        document.querySelector("body").classList.add("body_freeze");
    }
    function closeModal(){
        modal.classList.add('hidden')
        document.querySelector("body").classList.remove("body_freeze");
    }
    
    mainPhoto.addEventListener("click", openModal);
    preview.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => e.target === modal ? closeModal(): null);
    document.addEventListener("keydown", (e) => e.code === "Escape" ? closeModal() : null );
}
