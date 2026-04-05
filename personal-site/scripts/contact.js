function handleSubmit(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    console.log('Email:', email);
    console.log('Message:', message);
    document.getElementById('success-msg').style.display = 'block';

  }
 