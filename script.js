const container = document.getElementsByClassName("container")[0];
const cube_options = document.getElementsByClassName("cube-options")[0];
const cube_container = document.getElementsByClassName("cube-container")[0];
const flip_checkbox = document.getElementById("flip-checkbox");
const number_of_cubes = 5;

function create_cubes() {
    for (let i = 0; i < number_of_cubes; i++) {
        var cube = document.createElement("div");
        cube.classList.add("cube");
        cube.classList.add(`cube${i+1}`);
        cube.style.backgroundColor = `rgb(0, ${(i*20)+50}, ${(i*20)+50})`;
        cube.style.order = i+1;
        cube_container.append(cube);
    }
}

function onflip_check() {
    for (let i = 0; i < number_of_cubes; i++) {
        var cube = cube_container.children[i];
        cube.style.order = number_of_cubes-i;
    }
}

function onflip_uncheck() {
    for (let i = 0; i < number_of_cubes; i++) {
        var cube = cube_container.children[i];
        cube.style.order = i+1;
    }
}

flip_checkbox.addEventListener("change", function() {
    if (this.checked) {
        onflip_check();
    } else {
        onflip_uncheck();
    }
});

window.onload = function() {
    create_cubes();
}