let cng_btn = document.getElementById('cng_courier');
let radio_adres_inputs = document.getElementsByClassName('adres_radio');
let current_addresses = document.getElementsByClassName('adres');
let mobile_current_addresses = document.getElementsByClassName('adres_mobile');
let courier_btn = document.getElementById('select_courier_btn');
let delivery_btn = document.getElementById('select_delivery_btn');
let section_courier = document.getElementById('modal2_section_courier');
let section_delivery = document.getElementById('modal2_section_delivery');
// let adres_descriptions = document.getElementsByClassName('info_delivery_adres_description');

// console.log(btns);
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

function selectCourier() {
  section_courier.style.display = "flex";
  section_delivery.style.display = "none";
  cng_btn.setAttribute('id','cng_courier');
}

function selectDelivery() {
  section_courier.style.display = "none";
  section_delivery.style.display = "flex";
  cng_btn.setAttribute('id','cng_delivery');
}

function acceptCourier() {
    let modal = document.querySelector(`[data-modal-window="my_modal2"]`);
    modal.style.display = "none";

    for (let i = 0; i < radio_adres_inputs.length; i++) {
      const element = radio_adres_inputs[i];
      const radio_value = radio_adres_inputs[i].value;
      if (element.checked) {
        for (let j = 0; j < current_addresses.length; j++) {
          let current_adres = current_addresses[j];
          current_adres.textContent = radio_value;
        }
        for (let k = 0; k < mobile_current_addresses.length; k++) {
          let mobile_current_adres = mobile_current_addresses[k];
          mobile_current_adres.textContent = radio_value;
        }
        // for (let k = 0; k < adres_descriptions.length; k++) {
        //   const element = adres_descriptions[k].style.display = "none";;
          
        // }
      }
    }
}

// console.log(radio_adres_inputs);

// function acceptDelivery() {
//   let modal = document.querySelector(`[data-modal-window="my_modal2"]`);
//   modal.style.display = "none";


// }

let cng_btn_id = cng_btn.getAttribute('id');

if (cng_btn_id === 'cng_courier') {
  cng_btn.addEventListener('click', acceptCourier);
}

if (cng_btn_id === 'cng_delivery') {
  cng_btn.addEventListener('click', acceptCourier);
}

courier_btn.addEventListener('click', selectCourier);
delivery_btn.addEventListener('click', selectDelivery);