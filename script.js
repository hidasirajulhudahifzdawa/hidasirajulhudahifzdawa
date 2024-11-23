function initiatePayment(name, amount) {
  // Create UPI Payment Link
  const upiLink = upi://pay?pa=muhammedasim711@oksbi&pn=Muhammed%20Adil&am=5&cu=INR&tn=Debt%20Payment`;

  // Log the link to verify
  console.log("UPI Link: ", upiLink);

  // Redirect to the UPI Payment Link
  window.location.href = upiLink;

  // Optional: Mock behavior for demonstration
  setTimeout(() => {
    const paymentSuccessful = Math.random() > 0.5;

    if (paymentSuccessful) {
      document.getElementById("successMessage").classList.remove("hidden");
      document.getElementById("failureMessage").classList.add("hidden");
    } else {
      document.getElementById("failureMessage").classList.remove("hidden");
      document.getElementById("successMessage").classList.add("hidden");
    }
  }, 3000);
}

// Add event listeners for each button
document.getElementById("payAdil").addEventListener("click", function () {
  initiatePayment("Muhammed Adil", 5);
});

document.getElementById("payShaheer").addEventListener("click", function () {
  initiatePayment("Shaheer", 100);
});

document.getElementById("payUvais").addEventListener("click", function () {
  initiatePayment("Uvais", 270);
});
