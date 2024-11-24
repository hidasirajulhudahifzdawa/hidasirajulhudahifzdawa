// Organize payment data into sections
const sections = {
  "Plus One (Main)": [
    { name: "Student A", place: "Place 1", debt: 100, upiId: "upi1@oksbi" },
    { name: "Student B", place: "Place 2", debt: 150, upiId: "upi2@oksbi" }
  ],
  "Plus Two (Main)": [
    { name: "Student C", place: "Place 3", debt: 200, upiId: "upi3@oksbi" }
  ],
  "Degree First (Main)": [
    { name: "Student D", place: "Place 4", debt: 300, upiId: "upi4@oksbi" }
  ],
  "Degree Final (Main)": [
    { name: "Student E", place: "Place 5", debt: 400, upiId: "upi5@oksbi" }
  ]
};

// Reference to the payment container
const paymentContainer = document.getElementById("payment-container");

// Dynamically generate sections and their contents
Object.entries(sections).forEach(([sectionName, students]) => {
  // Create a section container
  const sectionDiv = document.createElement("div");
  sectionDiv.className = "section";

  // Add section title
  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = sectionName;
  sectionDiv.appendChild(sectionTitle);

  // Add student cards
  students.forEach((student) => {
    const card = document.createElement("div");
    card.className = "card";

    const upiUrl = `upi://pay?pa=${student.upiId}&pn=${encodeURIComponent(student.name)}&am=${student.debt}&cu=INR&tn=Payment%20for%20Debt`;

    card.innerHTML = `
      <h3>${student.name}</h3>
      <p>Place: ${student.place}</p>
      <p>Debt to be Given: ₹${student.debt}</p>
      <a class="pay-button" href="${upiUrl}" target="_blank">Pay Now</a>
    `;

    sectionDiv.appendChild(card);
  });

  // Append the section to the container
  paymentContainer.appendChild(sectionDiv);
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
