function block() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function expandButton(el) {
    el.classList.toggle("expanded");
}

function selectOnly(btn) {
    document.querySelectorAll('.button-row button').forEach(b => {
      b.classList.remove('active');
    });
    btn.classList.add('active');
}