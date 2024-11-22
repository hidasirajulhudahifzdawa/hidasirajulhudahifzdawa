// Array of payment data with corrected UPI URL format
const payments = [
  { name: "Muhammed Adil", place: "Perambra", class: "Degree First", debt: 5, upiId: "muhammedasim711@oksbi" },
  { name: "Shaheer", place: "Perambra", class: "Degree First", debt: 105, upiId: "muhammedasim711@oksbi" },
  { name: "Uvais", place: "Koothuparamba", class: "Degree First", debt: 270, upiId: "muhammedasim711@oksbi" },
  { name: "Thajudheen", place: "Tharuvana", class: "Degree First", debt: 357, upiId: "muhammedasim711@oksbi" },
  { name: "Muswavir", place: "Kavanoor", class: "Degree First", debt: 5, upiId: "muhammedasim711@oksbi" },
  { name: "Abdulla", place: "Chiyyur", class: "Degree First", debt: 37, upiId: "muhammedasim711@oksbi" },
  { name: "Razi", place: "Mavoor", class: "Degree First", debt: 25, upiId: "muhammedasim711@oksbi" },
  { name: "Shahid", place: "Kadavathur", class: "Degree First", debt: 5, upiId: "muhammedasim711@oksbi" },
  { name: "Althaf", place: "Cheruvannur", class: "Degree First", debt: 5, upiId: "muhammedasim711@oksbi" },
  { name: "Sahad", place: "Karulayi", class: "Degree First", debt: 5, upiId: "muhammedasim711@oksbi" },
  { name: "Ismayi", place: "Pullookkara", class: "Degree Final", debt: 15, upiId: "muhammedasim711@oksbi" },
  { name: "Khader", place: "Mukkam", class: "Degree Final", debt: 140, upiId: "muhammedasim711@oksbi" },
  { name: "Ashkar", place: "Parakkadavu", class: "Degree Final", debt: 42, upiId: "muhammedasim711@oksbi" },
  { name: "Aslah", place: "Vanimal", class: "Degree Final", debt: 177, upiId: "muhammedasim711@oksbi" },
  { name: "Muhammed NK", place: "Meppayyur", class: "Degree Final", debt: 20, upiId: "muhammedasim711@oksbi" },
  { name: "Niyas", place: "Vellamunda", class: "Degree Final", debt: 143, upiId: "muhammedasim711@oksbi" },
  { name: "Muhammed VTK", place: "Cherandathur", class: "Degree Final", debt: 7, upiId: "muhammedasim711@oksbi" },
];

// Reference to the payment container
const paymentContainer = document.getElementById("payment-container");

// Generate payment cards dynamically
payments.forEach((payment) => {
  // Check if debt exceeds the UPI limit
  if (payment.debt > 100000) { 
    console.log("Amount exceeds UPI limit.");
    alert(`Amount for ${payment.name} exceeds the UPI limit. Please try a smaller amount or multiple payments.`);
    return; // Skip this payment card
  }

  // Create card element
  const card = document.createElement("div");
  card.className = "card";

  // Corrected UPI URL format
  const upiUrl = `upi://pay?pa=${payment.upiId}&pn=${encodeURIComponent(payment.name)}&am=${payment.debt}&cu=INR&tn=Payment%20for%20Debt`;

  // Add content to the card
  card.innerHTML = `
    <h3>${payment.name}</h3>
    <p>Place: ${payment.place}</p>
    <p>Class: ${payment.class}</p>
    <p>Debt to be Given: ₹${payment.debt}</p>
    <a class="pay-button" href="${upiUrl}" target="_blank">Pay Now</a>
  `;

  // Append the card to the container
  paymentContainer.appendChild(card);
});

// Add event listeners to "Pay Now" buttons
document.querySelectorAll('.pay-button').forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const upiLink = event.target.href;

    // Open the UPI link
    window.location.href = upiLink;

    // Simulate payment confirmation
    setTimeout(() => {
      document.getElementById('confirmation').classList.remove('hidden');
    }, 5000); // Simulate delay for payment confirmation
  });
});
