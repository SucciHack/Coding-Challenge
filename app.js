const addToCart = document.getElementById("addToCart");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");
const categorySection = document.querySelector(".cards");

const productsArray = JSON.parse(localStorage.getItem("category")) || [];

addToCart.addEventListener("click", () => {
    form.classList.toggle("visible");
});

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const categoryInput = document.getElementById("categoryInput");
    const categoryImage = document.getElementById("categoryImage");

    productsArray.push({
        image: categoryImage.value,
        name: categoryInput.value,
    });

    // if(categoryImage.value === categoryImage.image){
        
    // }

    localStorage.setItem("category", JSON.stringify(productsArray));
    form.classList.remove("visible");
    renderUi();
});

function renderUi() {
    categorySection.innerHTML = "";
    productsArray.forEach(product => {
        categorySection.innerHTML += `
            <div class="card">
                <h2>${product.name}</h2>
                <p>Local Market</p>
                <div class="img">
                    <img src="${product.image}" alt="">
                </div>
            </div>
        `;
    });
}
renderUi();
