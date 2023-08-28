let arrows = document.getElementsByClassName('arrow_up_icon');

let in_stock= document.getElementsByClassName('in_stock');

let na_mobile_hrs = document.getElementsByClassName('not_available_mobile_hr');
let mobile_hrs = document.getElementsByClassName('in_stock_mobile_hr');
let not_available_mobile = document.getElementsByClassName('not_available_mobile');
let not_available_header_hr = document.getElementById('not_available_header_hr');

let item_1 = document.getElementById('item_1');
let item_2 = document.getElementById('item_2');
let item_3 = document.getElementById('item_3');

let item_1_not_available = document.getElementById('item_1_not_available');
let item_2_not_available = document.getElementById('item_2_not_available');
let item_3_not_available = document.getElementById('item_3_not_available');

let item_1_mobile = document.getElementById('item_1_stock_mobile');
let item_2_mobile = document.getElementById('item_2_stock_mobile');
let item_3_mobile = document.getElementById('item_3_stock_mobile');

let item_1_not_available_mobile = document.getElementById('item_1_dark_mobile');
let item_2_not_available_mobile = document.getElementById('item_2_dark_mobile');
let item_3_not_available_mobile = document.getElementById('item_3_dark_mobile');

let busket_checkbox = document.getElementsByClassName('busket_checkbox')[0];
let busket_header = document.getElementsByClassName('busket_header')[0];

let busket_checkbox_mobile = document.getElementsByClassName('busket_checkbox')[1];
let busket_header_mobile = document.getElementsByClassName('busket_header')[1];

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function () {
        let src =  arrows[i].src;
        let oldSrc = "/styles/Main_Icons/arrow_up_icon.svg";
        let newSrc = "/styles/Main_Icons/arrow_down_icon.svg";
        let id = arrows[i].getAttribute("id");
        
        if (id === "in_stock_arrow") {
            if (src.match(oldSrc)) {
                busket_header.style.flexDirection = 'row-reverse';

                let sum = document.getElementById("summa").textContent;
                let normalizeSum = Number(sum.split('сом')[0].replaceAll(' ', ''));
                let total_count = Number(document.getElementById("total_count").textContent);
                let p = document.createElement("p");

                p.setAttribute('id', 'header_goods_info')
                p.textContent = ` ${total_count} товаров · ${normalizeSum} сом`;
                busket_header.append(p);
                
                not_available_header_hr.style.display = 'none';
                busket_checkbox.style.display = 'none';
                item_1.style.display = "none";
                item_2.style.display = "none";
                item_3.style.display = "none";
                return arrows[i].src = newSrc;
            }
            else {
                busket_header.style.flexDirection = 'row';
                let p = document.getElementById('header_goods_info')
                p.remove()
                not_available_header_hr.style.display = 'block';
                busket_checkbox.style.display = 'flex';
                item_1.style.display = "flex";
                item_2.style.display = "flex";
                item_3.style.display = "flex";
                return arrows[i].src = oldSrc;
            }
        }

        if (id === "in_stock_mobile_arrow") {
            if (src.match(oldSrc)) {
                for (let i = 0; i < mobile_hrs.length; i++) {
                    const element = mobile_hrs[i];
                    element.style.display = "none";
                }
                busket_header_mobile.style.flexDirection = 'row-reverse';

                let sum = document.getElementById("summa").textContent;
                let normalizeSum = Number(sum.split('сом')[0].replaceAll(' ', ''));
                let total_count = Number(document.getElementById("total_count").textContent);
                let p = document.createElement("p");

                p.setAttribute('id', 'header_goods_info')
                p.textContent = ` ${total_count} товаров · ${normalizeSum} сом`;
                busket_header_mobile.append(p);

                document.getElementById('not_available_mobile_hr').style.display = 'none'
                not_available_mobile[0].style.marginTop = "0";
                busket_checkbox_mobile.style.display = 'none';
                item_1_mobile.style.display = "none";
                item_2_mobile.style.display = "none";
                item_3_mobile.style.display = "none";
                return arrows[i].src = newSrc;
            }
            else {
                for (let i = 0; i < mobile_hrs.length; i++) {
                    const element = mobile_hrs[i];
                    element.style.display = "block";
                }
                busket_header_mobile.style.flexDirection = 'row';
                let p = document.getElementById('header_goods_info')
                p.remove()

                document.getElementById('not_available_mobile_hr').style.display = 'block'
                not_available_mobile[0].style.marginTop = "48px";
                busket_checkbox_mobile.style.display = 'flex';
                item_1_mobile.style.display = "block";
                item_2_mobile.style.display = "block";
                item_3_mobile.style.display = "block";
                return arrows[i].src = oldSrc;
            }
        }

        if (id === "not_available_arrow") {
            if (src.match(oldSrc)) {
                item_1_not_available.style.display = "none";
                item_2_not_available.style.display = "none";
                item_3_not_available.style.display = "none";
                return arrows[i].src = newSrc;
            }
            else {
                item_1_not_available.style.display = "flex";
                item_2_not_available.style.display = "flex";
                item_3_not_available.style.display = "flex";
                return arrows[i].src = oldSrc;
            }
        }

        if (id === "not_available_mobile_arrow") {
            if (src.match(oldSrc)) {
                for (let i = 0; i < na_mobile_hrs.length; i++) {
                    const element = na_mobile_hrs[i];
                    element.style.display = "none";
                }
                item_1_not_available_mobile.style.display = "none";
                item_2_not_available_mobile.style.display = "none";
                item_3_not_available_mobile.style.display = "none";
                return arrows[i].src = newSrc;
            }
            else {
                for (let i = 0; i < na_mobile_hrs.length; i++) {
                    const element = na_mobile_hrs[i];
                    element.style.display = "block";
                }
                item_1_not_available_mobile.style.display = "block";
                item_2_not_available_mobile.style.display = "block";
                item_3_not_available_mobile.style.display = "block";
                return arrows[i].src = oldSrc;
            }
        }
    })
}
