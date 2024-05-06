const inputs = document.querySelector('#inputs')

inputs.addEventListener('click', event => {
    if (event.target.classList.contains('num-input')) {
        console.log('Number input clicked!');
    }
})