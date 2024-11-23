document.getElementById("payNow").addEventListener("click", function () {
    const upiLink = "upi://pay?pa=muhammedasim711@oksbi&pn=Muhammed Asim&am=100&cu=INR&tn=Debt Payment";
    window.location.href = upiLink;
  
    // Mock payment success
    setTimeout(() => {
      document.getElementById("successMessage").classList.remove("hidden");
    }, 3000);
  });
