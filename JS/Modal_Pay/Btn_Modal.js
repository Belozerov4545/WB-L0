let btns = document.querySelectorAll("*[data-modal-btn]");
let accept_btn = document.getElementsByClassName('modal_footer_btn');
let card_texts = document.getElementsByClassName('modal_body_line_text');
let radio_inputs = document.getElementsByClassName('custom-radio');
let icons = document.getElementsByClassName('radio_card_icon');
let current_icons = document.getElementsByClassName('mir_icon');
let current_card_texts = document.getElementsByClassName('card_block_info_text');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let name = btns[i].getAttribute('data-modal-btn');
    let modal = document.querySelector("[data-modal-window='" + name + "']");
    modal.style.display = "block";
    let close = modal.querySelector(".close_modal_window");
    close.addEventListener('click', function () {
      modal.style.display = "none";
    });
  });
}

window.onclick = function (event) {
  if (event.target.hasAttribute('data-modal-window')) {
    let modals = document.querySelectorAll('*[data-modal-window]');
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
  }
}

function acceptHandler() {
    let modal = document.querySelector(`[data-modal-window="my_modal1"]`);
    modal.style.display = "none";
    
    for (let i = 0; i < radio_inputs.length; i++) {
        const element = radio_inputs[i];
        if (element.checked) {
            if (element.id === 'radio_mir_card') {
                for (let j = 0; j < current_icons.length; j++) {
                    const el = current_icons[j];
                    el.src = "/styles/Main_Icons/mir.svg";
                }
                for (let i = 0; i < current_card_texts.length; i++) {
                  current_card_texts[i].textContent ='1234 56•• •••• 1234';
                }
            }
            if (element.id === 'radio_visa_card') {
                for (let j = 0; j < current_icons.length; j++) {
                    const el = current_icons[j];
                    el.src = "/styles/Main_Icons/Card_Icons/visa_card.svg";
                }
                for (let i = 0; i < current_card_texts.length; i++) {
                  current_card_texts[i].textContent ='1234 56•• •••• 1235';
                }
            }
            if (element.id === 'radio_master_card') {
                for (let j = 0; j < current_icons.length; j++) {
                    const el = current_icons[j];
                    el.src = "/styles/Main_Icons/Card_Icons/master_card.svg";
                }
                for (let i = 0; i < current_card_texts.length; i++) {
                  current_card_texts[i].textContent ='1234 56•• •••• 1236';
                }
            }
            if (element.id === 'radio_maestro_card') {
                for (let j = 0; j < current_icons.length; j++) {
                    const el = current_icons[j];
                    el.src = "/styles/Main_Icons/Card_Icons/maestro_card.svg";
                }
                for (let i = 0; i < current_card_texts.length; i++) {
                  current_card_texts[i].textContent ='1234 56•• •••• 1237';
                }
            } 
          }
      }
}

accept_btn[0].addEventListener('click', acceptHandler);