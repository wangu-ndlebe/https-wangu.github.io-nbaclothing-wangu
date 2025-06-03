const cart = [];

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.product button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const name = product.querySelector('h3').textContent;
            const image = product.querySelector('img').src;

            cart.push({ name, image });

            alert(`✔️ ${name} added to cart!`);
            console.log(cart);
        });
    });
});



     document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert(`Thank you for ${document.getElementById('name').value}!`);
    this.reset();
});
