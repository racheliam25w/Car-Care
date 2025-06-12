document.addEventListener('DOMContentLoaded', function () {
    var labels = document.querySelectorAll('label.inside, label.user, label.footer_icons');
    labels.forEach(function (label) {
        label.addEventListener('click', function (event) {
            event.preventDefault();
            if (label.classList.contains('contact')) {
                alert('Only example for garage contact information');
            }
            if (label.classList.contains('user')) {
                alert('You are already logged in as "racheliam". You cannot login with another user, this is only for example.');
            } 
            if (label.classList.contains('footer_icons')) {
                alert('Only example for social media links');
            }
        });
    });
});
