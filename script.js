// Array of payment data with corrected UPI URL format
const payments = [
  { name: "Muhammed Adil", place: "Perambra", class: "Degree First", debt: 5, upiId: "muhammedasim711@oksbi" },
  { name: "Shaheer", place: "Perambra", class: "Degree First", debt: 100, upiId: "muhammedasim711@oksbi" },
  { name: "Uvais", place: "Koothuparamba", class: "Degree First", debt: 270, upiId: "muhammedasim711@oksbi" },
  { name: "Thajudheen", place: "Tharuvana", class: "Degree First", debt: 352, upiId: "muhammedasim711@oksbi" },
];

// Reference to the payment container
const paymentContainer = document.getElementById("payment-container");

// Group payment data by class
const groupedPayments = payments.reduce((groups, payment) => {
  if (!groups[payment.class]) {
    groups[payment.class] = [];
  }
  groups[payment.class].push(payment);
  return groups;
}, {});

// Reference to the category container
const categoryContainer = document.querySelector(".category-container");

// Generate categories dynamically
Object.entries(groupedPayments).forEach(([className, payments]) => {
  // Create a category element
  const category = document.createElement("div");
  category.className = "category";

  // Add the category header
  category.innerHTML = `<h2>${className}</h2>`;

  // Create a sub-category section
  const subCategory = document.createElement("div");
  subCategory.className = "sub-category";
  subCategory.innerHTML = `<h3>Pay Card of Students</h3>`;

  // Add cards to the sub-category
  payments.forEach(payment => {
    const card = document.createElement("div");
    card.className = "card";

    const upiUrl = `upi://pay?pa=${payment.upiId}&pn=${encodeURIComponent(payment.name)}&am=${payment.debt}&cu=INR&tn=Payment%20for%20Debt`;

    card.innerHTML = `
      <h3>${payment.name}</h3>
      <p>Place: ${payment.place}</p>
      <p>Debt to be Given: ₹${payment.debt}</p>
      <a class="pay-button" href="${upiUrl}" target="_blank">Pay Now</a>
    `;
    subCategory.appendChild(card);
  });

  // Append the sub-category to the category
  category.appendChild(subCategory);

  // Append the category to the container
  categoryContainer.appendChild(category);
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
