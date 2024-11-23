async function startPayment() {
  try {
    // Call the backend to generate UPI link and transaction ID
    const response = await fetch("http://localhost:3000/start-payment");
    const { upiLink, transactionId } = await response.json();

    // Redirect user to UPI app for payment
    window.location.href = upiLink;

    // Check payment status after redirect (simulation)
    setTimeout(async () => {
      const statusResponse = await fetch(`http://localhost:3000/check-payment-status?transactionId=${transactionId}`);
      const statusData = await statusResponse.json();

      if (statusData.status === "success") {
        document.getElementById("payment-status").style.display = "block";
      } else {
        alert("Payment not completed. Please try again.");
      }
    }, 5000); // Wait 5 seconds before checking status
  } catch (error) {
    console.error("Error initiating payment:", error);
  }
}
