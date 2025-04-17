document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const authMessage = document.getElementById("auth-message");
  const deviceSection = document.getElementById("device-setup-section");

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log("✅ User created:", user.uid);

      await firebase.firestore().collection("users").doc(user.uid).set({
        email: user.email,
        createdAt: new Date()
      });

      authMessage.textContent = "✅ Account created!";
      deviceSection.style.display = "block";
    } catch (err) {
      console.error("❌ Signup error:", err.message);
      authMessage.textContent = "Error: " + err.message;
    }
  });
});
