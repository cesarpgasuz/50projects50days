const contents = document.querySelectorAll('.content');

for(const content of contents){

    content.addEventListener('mouseover', function() {
        this.classList.add('active');
    });

    content.addEventListener('mouseout', function() {
        this.classList.remove('active');
    })

}