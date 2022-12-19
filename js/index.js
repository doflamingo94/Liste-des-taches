// let div = document.createElement('div');
// let p = document.createElement('p');
// p.innerText = 'texte';
// p.classList.add('para');
// p.setAttribute('title', 'mon paragraphe');
// console.log(typeof(p));
// console.log(typeof(p.outerHTML));

// document.body.insertAdjacentHTML('beforeend', '<h2>titre2</h2>');
// document.body.insertAdjacentElement('beforeend', p);

// div.classList.add('my-block');
// div.innerHTML = '<p>Lorem ipsum dolor sit amet</p>';
// document.body.appendChild(div);

// let divCreated = document.querySelector('.my-block');
// let newDiv = document.createElement('div');
// newDiv.innerText = 'new div';
// divCreated.insertAdjacentElement('afterbegin', newDiv);
// divCreated.insertAdjacentHTML('beforeend', newDiv.outerHTML);

// // divCreated.firstElementChild.addEventListener('click', event => event.currentTarget.remove());
// html = document.body.innerHTML;
// let boom = document.querySelector('.boom');

// let tester = {
//     items: [],

//     addItems(item){
//         this.items.push(item);
//         boom.innerHTML = this.render();

//         let suppr = document.querySelector('.suppr');
//         suppr.addEventListener('click', event => {
//             event.currentTarget.closest('.ligne').remove();
//         });

//     },

//     getItems() {
//         return this.items;
//     },

//     render()
//     {
//         let html = `<div class="resultat">`;

//         for (let i = 0; i < this.items.length; i++){

//             html += `<div class="ligne">${this.items[i]}             <button type="button" class="modif"><img src="/assets/img/edit.png" alt"edit"></button><button type="button" class="suppr"><img src="/assets/img/remove.png" alt"suppr"></button></div>`;
//         }

//         html += `</div>`;

//         return html;
//     }
// }

// let button = document.querySelector('button');

// button.addEventListener('click', event => {
//     if (item.value == "")
//     {
//         alert("Veuillez remplir le champs");
//     }
//     else
//     {
//         tester.addItems(item.value)
//     }
    
// });

let boom = document.querySelector('.boom');
let button = document.querySelector('.button');



button.addEventListener('click', event => {
    console.log(this);
    p = item.value;

    if (p == "") {
        alert("Veuillez remplir le champs!!!");
    }

    else
    {       
        let div = document.createElement('div');
        div.classList.add('ligne');
        div.setAttribute('contenteditable', false);
        div.insertAdjacentHTML('afterbegin', `<p>${p}</p>`)

        let suppr = document.createElement('button');
        suppr.classList.add('suppr');
        suppr.setAttribute('type', 'button');
        suppr.innerHTML = '<img src="/assets/img/remove.png" alt="suppr">';

        let modif = document.createElement('button');
        modif.classList.add('modif');
        modif.setAttribute('type', 'button');
        modif.innerHTML = '<img src="/assets/img/edit.png" alt="modif">';

        let valide = document.createElement('button');
        valide.classList.add('valide');
        valide.setAttribute('type', 'button');
        valide.innerHTML = '<img src="/assets/img/check.png" alt="valide">';

        console.log(item.value);
        
        div.appendChild(modif);
        div.appendChild(suppr);
        

        boom.insertAdjacentElement('afterbegin', div);

        let supprim = document.querySelector('.suppr');
        supprim.addEventListener('click', event => {
            event.currentTarget.closest('div').remove();
        });

        modif.addEventListener('click', event => {
            event.currentTarget.previousElementSibling.setAttribute('contenteditable', true);
            event.currentTarget.previousElementSibling.style.background = 'orange';
            event.currentTarget.nextElementSibling.insertAdjacentElement('beforebegin', valide);
            event.currentTarget.remove();
            valide.addEventListener('click', event => {
                event.currentTarget.previousElementSibling.setAttribute('contenteditable', false);
                event.currentTarget.previousElementSibling.style.background = 'aquamarine';
                event.currentTarget.nextElementSibling.insertAdjacentElement('beforebegin', modif);
                event.currentTarget.remove();
            })
        })
    }
    // div.appendChild(suppr);
    // div.appendChild(modif);
})













