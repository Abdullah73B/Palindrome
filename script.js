function checkPalindrome() {
    const input = document.getElementById('inputString').value.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (!input) {
        document.querySelector('.result').textContent = "Please enter a string.";
        return;
    }

    let isPalindrome = true;
    let left = 0;
    let right = input.length - 1;

    while (left < right) {
        if (input[left] !== input[right]) {
            isPalindrome = false;
            break;
        }
        left++;
        right--;
    }

    const resultElement = document.querySelector('.result');
    resultElement.textContent = isPalindrome ? "Yes, it's a palindrome! 😃" : "No, it's not a palindrome. 😔";
}
