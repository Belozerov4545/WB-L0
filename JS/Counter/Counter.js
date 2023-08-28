const plus_btns = document.getElementsByClassName('plus_icon');
const minus_btns = document.getElementsByClassName('minus_icon');


for (let i = 0; i < plus_btns.length; i++) {
    const element = plus_btns[i];

    if (element.id === 'item_1_plus') {
        element.addEventListener('click', () => {
            if (document.getElementById('item_1_count').textContent < 2) {
                document.getElementById('item_1_count').textContent = Number(document.getElementById('item_1_count').textContent) + 1;
                document.getElementById('item_1_actual_cost').innerHTML = (522 * Number(document.getElementById('item_1_count').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_1_old_cost').innerHTML = (1051 * Number(document.getElementById('item_1_count').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_1_photo_count').textContent = document.getElementById('item_1_count').textContent;
            }
        })
    }

    if (element.id === 'item_2_plus') {
        element.addEventListener('click', () => {
            document.getElementById('item_2_count').textContent = Number(document.getElementById('item_2_count').textContent) + 1;
            document.getElementById('item_2_actual_cost').innerHTML = Math.round((10500.235 * Number(document.getElementById('item_2_count').textContent))) + ' ' + '<span>сом</span>';
            document.getElementById('old_cost_tooltip_1').innerHTML = Math.round((11500.235 * Number(document.getElementById('item_2_count').textContent))) + ' ' + '<span>сом</span>';
            document.getElementById('item_2_photo_count').textContent = (Number(document.getElementById('item_2_count').textContent) - Number(document.getElementById('item_22_photo_count').textContent));
            document.getElementById('item_22_photo_count').textContent = (Number(document.getElementById('item_2_count').textContent) - Number(document.getElementById('item_2_photo_count').textContent));
        })
    }

    if (element.id === 'item_3_plus') {
        element.addEventListener('click', () => {
            if (document.getElementById('item_3_count').textContent < 2) {
                document.getElementById('item_3_count').textContent = Number(document.getElementById('item_3_count').textContent) + 1;
                document.getElementById('item_3_actual_cost').innerHTML = (247 * Number(document.getElementById('item_3_count').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_3_old_cost').innerHTML = (475 * Number(document.getElementById('item_3_count').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_3_photo_count').textContent = document.getElementById('item_3_count').textContent;
            }
        })    
    }

    if (element.id === 'item_1_plus_mobile') {
        element.addEventListener('click', () => {
            if (document.getElementById('item_1_count_mobile').textContent < 2) {
                document.getElementById('item_1_count_mobile').textContent = Number(document.getElementById('item_1_count_mobile').textContent) + 1;
                document.getElementById('item_1_actual_cost_mobile').innerHTML = (522 * Number(document.getElementById('item_1_count_mobile').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_1_old_cost_mobile').innerHTML = (1051 * Number(document.getElementById('item_1_count_mobile').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_1_photo_count_mobile').textContent = document.getElementById('item_1_count_mobile').textContent;
            }
        })
    }

    if (element.id === 'item_2_plus_mobile') {
        element.addEventListener('click', () => {
            document.getElementById('item_2_count_mobile').textContent = Number(document.getElementById('item_2_count_mobile').textContent) + 1;
            document.getElementById('item_2_actual_cost_mobile').innerHTML = Math.round((10500.235 * Number(document.getElementById('item_2_count_mobile').textContent))) + ' ' + '<span>сом</span>';
            document.getElementById('item_2_old_cost_mobile').innerHTML = Math.round((11500.235 * Number(document.getElementById('item_2_count_mobile').textContent))) + ' ' + '<span>сом</span>';
            document.getElementById('item_2_photo_count_mobile').textContent = (Number(document.getElementById('item_2_count_mobile').textContent) - Number(document.getElementById('item_22_photo_count_mobile').textContent));
            document.getElementById('item_22_photo_count_mobile').textContent = (Number(document.getElementById('item_2_count_mobile').textContent) - Number(document.getElementById('item_2_photo_count_mobile').textContent));
        })
    }

    if (element.id === 'item_3_plus_mobile') {
        element.addEventListener('click', () => {
            if (document.getElementById('item_3_count_mobile').textContent < 2) {
                document.getElementById('item_3_count_mobile').textContent = Number(document.getElementById('item_3_count_mobile').textContent) + 1;
                document.getElementById('item_3_actual_cost_mobile').innerHTML = (247 * Number(document.getElementById('item_3_count_mobile').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_3_old_cost_mobile').innerHTML = (475 * Number(document.getElementById('item_3_count_mobile').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_3_photo_count_mobile').textContent = document.getElementById('item_3_count_mobile').textContent;
            }
        })    
    }
}

for (let j = 0; j < minus_btns.length; j++) {
    const element = minus_btns[j];
    
    if (element.id === 'item_1_minus') {
        element.addEventListener('click', () => {
            if (document.getElementById('item_1_count').textContent > 1) {
                document.getElementById('item_1_count').textContent = Number(document.getElementById('item_1_count').textContent) - 1;
                document.getElementById('item_1_actual_cost').innerHTML = (522 * Number(document.getElementById('item_1_count').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_1_old_cost').innerHTML = (1051 * Number(document.getElementById('item_1_count').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_1_photo_count').textContent = document.getElementById('item_1_count').textContent;
            }
        })
    }

    if (element.id === 'item_2_minus') {
        element.addEventListener('click', () => {
            if (document.getElementById('item_2_count').textContent > 1) {
                document.getElementById('item_2_count').textContent = Number(document.getElementById('item_2_count').textContent) - 1;
                document.getElementById('item_2_actual_cost').innerHTML = Math.round((10500.235 * Number(document.getElementById('item_2_count').textContent))) + ' ' + '<span>сом</span>';
                document.getElementById('old_cost_tooltip_1').innerHTML = Math.round((11500.235 * Number(document.getElementById('item_2_count').textContent))) + ' ' + '<span>сом</span>';
                document.getElementById('item_2_photo_count').textContent = (Number(document.getElementById('item_2_count').textContent) - Number(document.getElementById('item_22_photo_count').textContent));
                document.getElementById('item_22_photo_count').textContent = (Number(document.getElementById('item_2_count').textContent) - Number(document.getElementById('item_2_photo_count').textContent));
            }
        })
    }

    if (element.id === 'item_3_minus') {
        element.addEventListener('click', () => {
            if (document.getElementById('item_3_count').textContent > 1) {
                document.getElementById('item_3_count').textContent = Number(document.getElementById('item_3_count').textContent) - 1;
                document.getElementById('item_3_actual_cost').innerHTML = (247 * Number(document.getElementById('item_3_count').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_3_old_cost').innerHTML = (475 * Number(document.getElementById('item_3_count').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_3_photo_count').textContent = document.getElementById('item_3_count').textContent;
            }
        })    
    }

    if (element.id === 'item_1_minus_mobile') {
        element.addEventListener('click', () => {
            if (document.getElementById('item_1_count_mobile').textContent > 1) {
                document.getElementById('item_1_count_mobile').textContent = Number(document.getElementById('item_1_count_mobile').textContent) - 1;
                document.getElementById('item_1_actual_cost_mobile').innerHTML = (522 * Number(document.getElementById('item_1_count_mobile').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_1_old_cost_mobile').innerHTML = (1051 * Number(document.getElementById('item_1_count_mobile').textContent)) + ' ' + '<span>сом</span>';
            }
        })
    }

    if (element.id === 'item_2_minus_mobile') {
        element.addEventListener('click', () => {
            if (document.getElementById('item_2_count_mobile').textContent > 1) {
                document.getElementById('item_2_count_mobile').textContent = Number(document.getElementById('item_2_count_mobile').textContent) - 1;
                document.getElementById('item_2_actual_cost_mobile').innerHTML = Math.round((10500.235 * Number(document.getElementById('item_2_count_mobile').textContent))) + ' ' + '<span>сом</span>';
                document.getElementById('item_2_old_cost_mobile').innerHTML = Math.round((11500.235 * Number(document.getElementById('item_2_count_mobile').textContent))) + ' ' + '<span>сом</span>';
                document.getElementById('item_2_photo_count_mobile').textContent = (Number(document.getElementById('item_2_count_mobile').textContent) - Number(document.getElementById('item_22_photo_count_mobile').textContent));
                document.getElementById('item_22_photo_count_mobile').textContent = (Number(document.getElementById('item_2_count_mobile').textContent) - Number(document.getElementById('item_2_photo_count_mobile').textContent));
            }
        })
    }

    if (element.id === 'item_3_minus_mobile') {
        element.addEventListener('click', () => {
            if (document.getElementById('item_3_count_mobile').textContent > 1) {
                document.getElementById('item_3_count_mobile').textContent = Number(document.getElementById('item_3_count_mobile').textContent) - 1;
                document.getElementById('item_3_actual_cost_mobile').innerHTML = (247 * Number(document.getElementById('item_3_count_mobile').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_3_old_cost_mobile').innerHTML = (475 * Number(document.getElementById('item_3_count_mobile').textContent)) + ' ' + '<span>сом</span>';
                document.getElementById('item_3_photo_count_mobile').textContent = document.getElementById('item_3_count_mobile').textContent;
            }
        })    
    }
}