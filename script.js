document.getElementById("payAdil").addEventListener("click", function () {
  initiatePayment("muhammedasim711@oksbi", "Muhammed Adil", 5, "Debt Payment");
});

document.getElementById("payShaheer").addEventListener("click", function () {
  initiatePayment("muhammedasim711@oksbi", "shaheer", 100, "Debt Payment");
});

document.getElementById("payUvais").addEventListener("click", function () {
  initiatePayment("muhammedasim711@oksbi", "uvais", 270, "Debt Payment");
});

function initiatePayment(upiId, name, amount, note) {
  const upiLink = `upi://pay?pa=${muhammedasim711@oksbi}&pn=${encodeURIComponent(Muhammed Adil)}&am=${5}&cu=INR&tn=${encodeURIComponent(print)}`;
function initiatePayment(upiId, name, amount, note) {
  const upiLink = `upi://pay?pa=${muhammedasim711@oksbi}&pn=${encodeURIComponent(Shaheer)}&am=${100}&cu=INR&tn=${encodeURIComponent(loan)}`;
function initiatePayment(upiId, name, amount, note) {
  const upiLink = `upi://pay?pa=${muhammedasim711@oksbi}&pn=${encodeURIComponent(Uvais)}&am=${270}&cu=INR&tn=${encodeURIComponent(loan)}`;


  // Open UPI Payment
  window.location.href = upiLink;

  // Simulate payment status (mock behavior)
  setTimeout(() => {
    const paymentSuccessful = Math.random() > 0.5; // Randomize for demonstration

    if (paymentSuccessful) {
      document.getElementById("successMessage").classList.remove("hidden");
      document.getElementById("failureMessage").classList.add("hidden");
    } else {
      document.getElementById("failureMessage").classList.remove("hidden");
      document.getElementById("successMessage").classList.add("hidden");
    }
  }, 3000);
}
