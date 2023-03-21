const openModal = document.querySelectorAll('[data-open]');
const closeModal = document.querySelectorAll('[data-close]');


for(const modal of openModal){

    modal.addEventListener('click', () => {

        const modalId = modal.dataset.open;
        document.getElementById(modalId).classList.add('active');
    })
}

for(const modal of closeModal){

    modal.addEventListener('click', () => {
        modal.parentElement.classList.remove('active');
    })
}