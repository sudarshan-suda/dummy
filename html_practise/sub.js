function s_N() {
    // Get the input element with user's name
    const nameInput = document.getElementById('username');
    
    // Check if input exists and has a value
    if (nameInput && nameInput.value) {
        // Show alert with user's name
        alert('Hello, ' + nameInput.value + '!');
    } else {
        // Show error if no name is entered
        alert('Please enter your name!');
    }
}