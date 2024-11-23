// Get references to elements
const payButton = document.getElementById("payButton");
const paymentContainer = document.getElementById("paymentContainer");

// Add payment link to the button
payButton.setAttribute(
  "href",
  "upi://pay?pa=muhammedasim711@oksbi&pn=Muhammed%20Asim&am=100&cu=INR"
);

// Simulate payment completion when the button is clicked
payButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default action to simulate the payment flow
  
  // Simulate a delay (e.g., waiting for UPI response)
  setTimeout(() => {
    // Clear the existing content
    paymentContainer.innerHTML = `
      <div class="success-message">
        <span class="tick">✔</span>
        <p>Payment Successful</p>
      </div>
    `;
  }, 2000); // Simulate a 2-second delay
});
