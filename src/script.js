// script.js

// Handle user sign-up and store user data in Firestore
document.getElementById('signup-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      // Create a new user with Firebase Authentication
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
  
      // Save the user's profile data in Firestore
      await db.collection('users').doc(user.uid).set({
        email: user.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
  
      document.getElementById('auth-message').textContent = "Account created successfully!";
      // Show the device setup section now that the user is authenticated
      document.getElementById('device-setup-section').style.display = 'block';
    } catch (error) {
      document.getElementById('auth-message').textContent = "Error: " + error.message;
    }
  });
  
  // Simulate device discovery when the button is clicked
  document.getElementById('discover-device-btn').addEventListener('click', function() {
    document.getElementById('device-message').textContent = "Searching for device...";
    
    // Simulated device discovery process (replace with actual discovery code as needed)
    setTimeout(async function() {
      const discoveredDeviceId = "device-12345";  // This is a simulated device ID.
      document.getElementById('device-message').textContent = "Device discovered: " + discoveredDeviceId;
      
      const user = auth.currentUser;
      if (user) {
        const deviceData = {
          deviceId: discoveredDeviceId,
          status: "connected",
          lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
          owner: user.uid
        };
        
        // Save the discovered device data in Firestore
        await db.collection('devices').doc(discoveredDeviceId).set(deviceData);
        document.getElementById('device-message').textContent += "\nDevice data stored in Firestore.";
      } else {
        document.getElementById('device-message').textContent += "\nUser not authenticated.";
      }
    }, 1500);  // Adjust the timeout duration as necessary.
  });
  