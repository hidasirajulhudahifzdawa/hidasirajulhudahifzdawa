document.getElementById("payNow").addEventListener("click", function () {
    const upiLink = "upi://pay?pa=yourupiid@upi&pn=Muhammed Asim&am=100&cu=INR";
    window.location.href = upiLink;
  
    // Mock payment success
    setTimeout(() => {
      document.getElementById("successMessage").classList.remove("hidden");
    }, 3000);
  });
  
  