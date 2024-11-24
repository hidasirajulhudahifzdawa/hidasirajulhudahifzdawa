// Array of payment data
const payments = [
  { name: "Muhammed Adil", place: "Perambra", class: "Degree First", debt: 5, upiId: "adil@upi" },
  { name: "Shaheer", place: "Perambra", class: "Degree First", debt: 100, upiId: "shaheer@upi" },
  { name: "Uvais", place: "Koothuparamba", class: "Degree First", debt: 270, upiId: "uvais@upi" },
  { name: "Thajudheen", place: "Tharuvana", class: "Degree First", debt: 352, upiId: "thajudheen@upi" },
];

// Reference to the payment container
const paymentContainer = document.getElementById("payment-container");

// Generate payment cards dynamically
payments.forEach((payment) => {
  // Create card element
  const card = document.createElement("div");
  card.className = "card";

  // Add content to the card
  card.innerHTML = `
    <h3>${payment.name}</h3>
    <p>Place: ${payment.place}</p>
    <p>Class: ${payment.class}</p>
    <p>Debt to be Given: ₹${payment.debt}</p>
    <a class="pay-button" href="#" data-upi="upi://pay?pa=${payment.upiId}&pn=${payment.name}&am=${payment.debt}&cu=INR">Pay Now</a>
  `;

  // Append the card to the container
  paymentContainer.appendChild(card);
});

// Add event listeners to "Pay Now" buttons
document.querySelectorAll('.pay-button').forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const upiLink = event.target.getAttribute('data-upi');
    
    // Open the UPI link
    window.location.href = upiLink;

    // Simulate payment confirmation
    setTimeout(() => {
      document.getElementById('confirmation').style.display = 'flex';
    }, 5000); // Simulate delay for payment confirmation
  });
});
