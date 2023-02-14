const fadeOut = (event) => {
    let url = event.currentTarget.href;
    event.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(function() {
      location.replace(url);
    }, 500);
}