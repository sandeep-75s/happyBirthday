document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const input = document.querySelector('.input');
    const button = document.querySelector('.btn');

    function toggleButton() {
        if (input.value.trim() !== '') {
            button.disabled = false;
            button.style.cursor = 'pointer';
        } else {
            button.disabled = true;
            button.style.cursor = 'not-allowed';
        }
    }

    function clickBtn(event) {
        event.preventDefault(); 

        const value = input.value.trim();
        if (value.toLowerCase() === 'sneha') {
            window.location.href = 'wishesPage.html'; 
        } else {
            alert('Wrong name!');
        }
    }

    input.addEventListener('input', toggleButton);
    form.addEventListener('submit', clickBtn); 
});
