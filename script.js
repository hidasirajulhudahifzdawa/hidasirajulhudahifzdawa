function initiatePayment(name, amount) {
  // UPI ID
  const upiId = "muhammedasim711@oksbi";
  const note = encodeURIComponent("Debt Payment");

  // Create the dynamic UPI payment link
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    name
  )}&am=${amount}&cu=INR&tn=${note}`;

  // Redirect to the UPI payment link
  window.location.href = upiLink;

  // Display a message to encourage the user to complete payment in the app
  console.log("Redirecting to UPI Payment...");
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
