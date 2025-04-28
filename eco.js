const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
// ====== Coupon Button Functionality ======
const applyBtn = document.getElementById('applyBtn');
const couponInput = document.getElementById('couponInput');

if (applyBtn) {
    applyBtn.addEventListener('click', () => {
        const coupon = couponInput.value.trim();

        if (coupon === "") {
            alert("Please enter a coupon code!");
        } else if (coupon === "DISCOUNT10") {
            alert("Coupon applied! 10% discount will be added.");
            // You can add more logic here (like updating price)
        } else {
            alert("Invalid coupon code.");
        }
    });
}
// ====== Proceed to Checkout Button ======
const checkoutBtn = document.getElementById('checkoutBtn');

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        alert("Proceeding to checkout...");
        // You can redirect to a real checkout page here:
        // window.location.href = "checkout.html";
    });
}
