document.getElementById("payNow").addEventListener("click", function () {
  // UPI Payment Link
  const upiLink = "upi://pay?pa=muhammedasim711@oksbi&pn=Muhammed%20Adil&am=5&cu=INR&tn=Exam%20Fee";
  const upiLink = "upi://pay?pa=muhammedasim711@oksbi&pn=Shaheer&am=100&cu=INR&tn=Debt%20Payment";
  const upiLink = "upi://pay?pa=muhammedasim711@oksbi&pn=Uvais&am=270&cu=INR&tn=Debt%20Payment";
  
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
});
