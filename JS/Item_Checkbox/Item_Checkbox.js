const item_1_checkbox = document.getElementById('item_1_checkbox');
const item_2_checkbox = document.getElementById('item_2_checkbox');
const item_3_checkbox = document.getElementById('item_3_checkbox');

const item_1_checkbox_mobile = document.getElementById('item_1_checkbox_mobile');
const item_2_checkbox_mobile = document.getElementById('item_2_checkbox_mobile');
const item_3_checkbox_mobile = document.getElementById('item_3_checkbox_mobile');

const select_all_checkbox =  document.getElementById('select_all_items');
const select_all_mobile_checkbox =  document.getElementById('select_all_items_mobile');

function declOfNum(num, text_forms) {  
    let n = Math.abs(num) % 100; 
    let n1 = n % 10;

    if (n > 10 && n < 20) { 
        document.getElementById('goods').textContent = text_forms[1]; 
    }

    if (n1 > 1 && n1 < 5) { 
        document.getElementById('goods').textContent = ` ${text_forms[0]}`; 
    }

    if (n1 == 1) { 
        document.getElementById('goods').textContent = ` ${text_forms[2]}`; 
    }
    if (Number(document.getElementById("total_count").textContent) === 0) {
        document.getElementById('goods').textContent = ` ${text_forms[1]}`;
    }
}

function selectAllItemsHandler() {
    if (select_all_checkbox.checked) {
        item_1_checkbox.setAttribute('checked','checked');
        item1Handler();
        item_2_checkbox.setAttribute('checked','checked');
        item2Handler();
        item_3_checkbox.setAttribute('checked','checked');
        item3Handler();
    }
    
    if (!select_all_checkbox.checked) {
        item_1_checkbox.removeAttribute('checked');
        item_2_checkbox.removeAttribute('checked');
        item_3_checkbox.removeAttribute('checked');
        document.getElementById("summa").textContent = 0;
        document.getElementById("total_count").textContent = 0;
    }
}

function selectAllItemsMobileHandler() {
    if (select_all_mobile_checkbox.checked) {
        item_1_checkbox_mobile.setAttribute('checked','checked');
        item1MobileHandler();
        item_2_checkbox_mobile.setAttribute('checked','checked');
        item2MobileHandler();
        item_3_checkbox_mobile.setAttribute('checked','checked');
        item3MobileHandler();
    }
    
    if (!select_all_mobile_checkbox.checked) {
        item_1_checkbox_mobile.removeAttribute('checked');
        item_2_checkbox_mobile.removeAttribute('checked');
        item_3_checkbox_mobile.removeAttribute('checked');
        document.getElementById("summa").textContent = 0;
        document.getElementById("total_count").textContent = 0;
    }
}

select_all_checkbox.addEventListener('change', selectAllItemsHandler);
select_all_mobile_checkbox.addEventListener('change', selectAllItemsMobileHandler);

function item1Handler() {
    let cost = document.getElementById('item_1_actual_cost').textContent;
    let count = Number(document.getElementById('item_1_count').textContent);
    let sum = document.getElementById("summa").textContent;
    let normalizeSum = Number(sum.split('сом')[0].replaceAll(' ', ''));
    let total_count = Number(document.getElementById("total_count").textContent);
    
    if (item_1_checkbox.checked) {
        document.getElementById("summa").textContent = normalizeSum + Number(cost.split('сом')[0]);
        document.getElementById("total_count").textContent = total_count + count;
        declOfNum(Number(document.getElementById("total_count").textContent), ['товара', 'товаров', 'товар']);
        document.getElementById("item_1_photo_container").style.display = 'inline';
        document.getElementById("first_delivery_date").style.display = 'flex';
        document.getElementById("first_delivery_date_title").style.display = 'flex';
        document.getElementById("first_items_row").style.display = 'flex';
    }

    if (!item_1_checkbox.checked) {
        document.getElementById("summa").textContent = normalizeSum - Number(cost.split('сом')[0]);
        document.getElementById("total_count").textContent = total_count - count ;
        declOfNum(Number(document.getElementById("total_count").textContent), ['товара', 'товаров', 'товар'])
        document.getElementById("item_1_photo_container").style.display = 'none';
        document.getElementById("first_delivery_date").style.display = 'none';
        document.getElementById("first_delivery_date_title").style.display = 'none';
        document.getElementById("first_items_row").style.display = 'none';
    }
}

item_1_checkbox.addEventListener('change', item1Handler)

function item2Handler() {
    let cost = document.getElementById('item_2_actual_cost').textContent;
    let count = Number(document.getElementById('item_2_count').textContent);
    let sum = document.getElementById("summa").textContent;
    let normalizeSum = Number(sum.split('сом')[0].replaceAll(' ', ''))
    let total_count = Number(document.getElementById("total_count").textContent);
    
    if (item_2_checkbox.checked) {
        document.getElementById("summa").textContent = normalizeSum + Number(cost.split('сом')[0].replaceAll(' ', ''))
        document.getElementById("total_count").textContent = total_count + count;
        declOfNum(Number(document.getElementById("total_count").textContent), ['товара', 'товаров', 'товар']);
        document.getElementById("first_delivery_date").style.display = 'flex';
        document.getElementById("first_delivery_date_title").style.display = 'flex';
        document.getElementById("second_delivery_date").style.display = 'flex';
        document.getElementById("second_delivery_date_title").style.display = 'flex';
        document.getElementById("second_items_row").style.display = 'flex';
        document.getElementById("first_items_row").style.display = 'flex';
        document.getElementById("item_2_photo_container").style.display = 'inline';
    }
    
    if (!item_2_checkbox.checked) {
        document.getElementById("summa").textContent = normalizeSum - Number(cost.split('сом')[0].replaceAll(' ', ''));
        document.getElementById("total_count").textContent = total_count - count ;
        declOfNum(Number(document.getElementById("total_count").textContent), ['товара', 'товаров', 'товар']);
        document.getElementById("first_delivery_date").style.display = 'none';
        document.getElementById("first_delivery_date_title").style.display = 'none';
        document.getElementById("second_delivery_date").style.display = 'none';
        document.getElementById("second_delivery_date_title").style.display = 'none';
        document.getElementById("second_items_row").style.display = 'none';
        document.getElementById("first_items_row").style.display = 'none';
        document.getElementById("item_2_photo_container").style.display = 'none';
    }  
}

item_2_checkbox.addEventListener('change', item2Handler)

function item3Handler() {
    let cost = document.getElementById('item_3_actual_cost').textContent;
    let count = Number(document.getElementById('item_3_count').textContent);
    let sum = document.getElementById("summa").textContent;
    let normalizeSum = Number(sum.split('сом')[0].replaceAll(' ', ''))
    let total_count = Number(document.getElementById("total_count").textContent);
    
    if (item_3_checkbox.checked) {
        document.getElementById("summa").textContent = normalizeSum + Number(cost.split('сом')[0]);
        document.getElementById("total_count").textContent = total_count + count ;
        declOfNum(Number(document.getElementById("total_count").textContent), ['товара', 'товаров', 'товар']);
        document.getElementById("item_3_photo_container").style.display = 'inline';
        document.getElementById("first_delivery_date").style.display = 'flex';
        document.getElementById("first_delivery_date_title").style.display = 'flex';
        document.getElementById("first_items_row").style.display = 'flex';
    }
    
    if (!item_3_checkbox.checked) {
        document.getElementById("summa").textContent = normalizeSum - Number(cost.split('сом')[0]);
        document.getElementById("total_count").textContent = total_count - count ;
        declOfNum(Number(document.getElementById("total_count").textContent), ['товара', 'товаров', 'товар']);
        document.getElementById("item_3_photo_container").style.display = 'none';
        document.getElementById("first_delivery_date").style.display = 'none';
        document.getElementById("first_delivery_date_title").style.display = 'none';
        document.getElementById("first_items_row").style.display = 'none';
    }
}

item_3_checkbox.addEventListener('change', item3Handler)

function item1MobileHandler() {
    let cost = document.getElementById('item_1_actual_cost_mobile').textContent;
    let count = Number(document.getElementById('item_1_count_mobile').textContent);
    let sum = document.getElementById("summa").textContent;
    let normalizeSum = Number(sum.split('сом')[0].replaceAll(' ', ''))
    let total_count = Number(document.getElementById("total_count").textContent);
    
    if (item_1_checkbox_mobile.checked) {
        document.getElementById("summa").textContent = normalizeSum + Number(cost.split('сом')[0]);
        document.getElementById("total_count").textContent = total_count + count ;
        declOfNum(Number(document.getElementById("total_count").textContent), ['товара', 'товаров', 'товар']);
        document.getElementById("item_1_photo_container_mobile").style.display = 'block';
        document.getElementById("first_delivery_date_mobile").style.display = 'block';
    }
    
    if (!item_1_checkbox_mobile.checked) {
        document.getElementById("summa").textContent = normalizeSum - Number(cost.split('сом')[0]);
        document.getElementById("total_count").textContent = total_count - count ;
        declOfNum(Number(document.getElementById("total_count").textContent), ['товара', 'товаров', 'товар']);
        document.getElementById("item_1_photo_container_mobile").style.display = 'none';
        document.getElementById("first_delivery_date_mobile").style.display = 'none';
    }  
}

item_1_checkbox_mobile.addEventListener('change', item1MobileHandler)

function item2MobileHandler() {
    let cost = document.getElementById('item_2_actual_cost_mobile').textContent;
    let count = Number(document.getElementById('item_2_count_mobile').textContent);
    let sum = document.getElementById("summa").textContent;
    let normalizeSum = Number(sum.split('сом')[0].replaceAll(' ', ''))
    let total_count = Number(document.getElementById("total_count").textContent);
    
    if (item_2_checkbox_mobile.checked) {
        document.getElementById("summa").textContent = normalizeSum + Number(cost.split('сом')[0].replaceAll(' ', ''));
        document.getElementById("total_count").textContent = total_count + count ;
        declOfNum(Number(document.getElementById("total_count").textContent), ['товара', 'товаров', 'товар']);
        document.getElementById("item_2_photo_container_mobile").style.display = 'block';
        document.getElementById("item_22_photo_container_mobile").style.display = 'block';
        document.getElementById("first_delivery_date_mobile").style.display = 'block';
        document.getElementById("second_delivery_date_mobile").style.display = 'block';
        document.getElementById("second_items_row_mobile").style.display = 'block';
    }
    
    if (!item_2_checkbox_mobile.checked) {
        document.getElementById("summa").textContent = normalizeSum - Number(cost.split('сом')[0].replaceAll(' ', ''));
        document.getElementById("total_count").textContent = total_count - count ;
        declOfNum(Number(document.getElementById("total_count").textContent), ['товара', 'товаров', 'товар']);
        document.getElementById("item_2_photo_container_mobile").style.display = 'none';
        document.getElementById("item_22_photo_container_mobile").style.display = 'none';
        document.getElementById("first_delivery_date_mobile").style.display = 'none';
        document.getElementById("second_delivery_date_mobile").style.display = 'none';
        document.getElementById("second_items_row_mobile").style.display = 'none';
    }
}

item_2_checkbox_mobile.addEventListener('change', item2MobileHandler)

function item3MobileHandler() {
    let cost = document.getElementById('item_3_actual_cost_mobile').textContent;
    let count = Number(document.getElementById('item_3_count_mobile').textContent);
    let sum = document.getElementById("summa").textContent;
    let normalizeSum = Number(sum.split('сом')[0].replaceAll(' ', ''))
    let total_count = Number(document.getElementById("total_count").textContent);
    
    if (item_3_checkbox_mobile.checked) {
        document.getElementById("summa").textContent = normalizeSum + Number(cost.split('сом')[0]);
        document.getElementById("total_count").textContent = total_count + count ;
        declOfNum(Number(document.getElementById("total_count").textContent), ['товара', 'товаров', 'товар']);
        document.getElementById("item_3_photo_container_mobile").style.display = 'block';
        document.getElementById("first_delivery_date_mobile").style.display = 'block';
    }
    
    if (!item_3_checkbox_mobile.checked) {
        document.getElementById("summa").textContent = normalizeSum - Number(cost.split('сом')[0]);
        document.getElementById("total_count").textContent = total_count - count ;
        declOfNum(Number(document.getElementById("total_count").textContent), ['товара', 'товаров', 'товар']);
        document.getElementById("item_3_photo_container_mobile").style.display = 'none';
        document.getElementById("first_delivery_date_mobile").style.display = 'none';
    } 
}

item_3_checkbox_mobile.addEventListener('change', item3MobileHandler)

selectAllItemsHandler()