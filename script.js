// Array of payment data
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

// Maximum transaction limit (₹5000 as an example)
const maxTransactionLimit = 5000;

// Generate payment cards dynamically
payments.forEach((payment) => {
    const card = document.createElement("div");
    card.className = "card";

    const upiUrl = `upi://pay?pa=${payment.upiId}&pn=${encodeURIComponent(payment.name)}&am=${payment.debt}&cu=INR&tn=Payment%20for%20Debt`;

    // Check debt against limit
    const payNowButton = payment.debt > maxTransactionLimit
        ? `<p class="warning">Debt exceeds transaction limit. Please pay in smaller amounts.</p>`
        : `<a class="pay-button" href="${upiUrl}" target="_blank">Pay Now</a>`;

    card.innerHTML = `
      <h3>${payment.name}</h3>
      <p>Place: ${payment.place}</p>
      <p>Class: ${payment.class}</p>
      <p>Debt to be Given: ₹${payment.debt}</p>
      ${payNowButton}
    `;

    paymentContainer.appendChild(card);
});

// Event listener for "Pay Now" buttons
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
