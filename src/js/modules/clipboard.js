export default function clipboard(){
    const codeField = document.querySelectorAll(".product_title_top_code");
    const productCode = document.querySelectorAll(".code");
    const copiedBlock = document.querySelectorAll(".copied");
    const code = 6543543;

    productCode.forEach(item => item.innerHTML = code);

    codeField.forEach(item => {
        item.addEventListener('click', () => {
            navigator.clipboard.writeText(item.querySelector(".code").innerHTML);

            copiedBlock.forEach(item => {
                item.classList.remove("hidden");
            });
            
            copiedBlock.forEach(item => {
                setTimeout(() => {
                    item.classList.add("hidden");
                }, 2000);
            });
        });
    });
}