document.getElementById("payNow").addEventListener("click", function () {
    const upiLink = "upi://pay?pa=muhammedasim711@oksbi&pn=Muhammed%20Asim&am=100&cu=INR&tn=Debt%20Payment";
    window.location.href = upiLink;
  
    // Mock payment success (for demonstration purposes)
    setTimeout(() => {
        document.getElementById("successMessage").classList.remove("hidden");
    }, 3000);
});
