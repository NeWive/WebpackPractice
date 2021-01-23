import image from './assets/EjqRlK4VcAArSFL.jpeg';
import {print} from './module/print';
import './style/style.css';

function component() {
    let element = document.createElement('div');
    element.innerHTML = `<h1>This is a webpack test page</h1>`;
    let img = new Image();
    img.src = image;
    img.onload = () => {
        console.log('img load done');
    }
    element.appendChild(img);
    return element;
}

document.body.appendChild(component());
print(['ying']);