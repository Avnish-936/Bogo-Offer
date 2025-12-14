function selectOption(optionNumber) {
    const options = document.querySelectorAll('.option'); //for all option
	const totalPrice = document.getElementById('#total'); //total price

    options.forEach((option, index) => {
        const radio = option.querySelector('input[type="radio"]');
        const sizes = option.querySelector('.sizes');

        if (index === optionNumber - 1) {
            //expand
            option.classList.add('active');
            radio.checked = true;
            sizes.style.display = 'block';
        } else {
            //collapse
            option.classList.remove('active');
            radio.checked = false;
            sizes.style.display = 'none';
        }
    });
}