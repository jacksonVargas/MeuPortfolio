let btn = document.querySelector('.btn');
btn.onclick = () => {
    btn.classList.toggle('active');
    let nav = document.querySelector('.nav');
    if(nav.classList.contains('hide')) {
        nav.classList.add('show');
        nav.classList.remove('hide');
    }else {
        nav.classList.add('hide');
        nav.classList.remove('show');
    }
}