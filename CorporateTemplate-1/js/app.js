header_menu_level_one = document.querySelectorAll('.header-main_menu-list > ul > li');
header_menu_level_one.forEach(item => {
    // console.log(item)
    if(item.querySelector('ul') !== null){
        // console.log(item)
        item.querySelector('a').insertAdjacentHTML('beforeend','<i class="fas fa-chevron-down"></i>')
    }
});

header_menu_level_two = document.querySelectorAll('.header-main_menu-list > ul > li ul li');
header_menu_level_two.forEach(item => {
    // console.log(item)
    if(item.querySelector('ul') !== null){
        // console.log(item)
        item.querySelector('a').insertAdjacentHTML('beforeend','<i class="fas fa-chevron-left"></i>')
    }
});

const responsive_menu_list = document.querySelectorAll('.responsive-menu_list ul li');
responsive_menu_list.forEach((item) =>{
    if(item.querySelector('ul') !== null){
        item.querySelector('a').insertAdjacentHTML('afterend','<i class="fas fa-chevron-down"></i>')
        const arrow = item.querySelector('.fa-chevron-down');
        arrow.addEventListener('click',(e) =>{
            // console.log(e.target)
            const target_el = e.target;
            const ul_el = target_el.parentElement.querySelector('ul');
            ul_el.classList.toggle('show')
            target_el.classList.toggle('rotate')

        })
    }
});

const services_item = document.querySelectorAll('.services_item');
services_item.forEach((service,idx) =>{
    // console.log(service)
    service.addEventListener('mouseover',()=>{
        if (!service.classList.contains('services_item--selected')){
            service.classList.add('services_item--selected');
        }

        services_item.forEach((el,index) => {
            if(index !== idx){
                if(el.classList.contains('services_item--selected')){
                    el.classList.remove('services_item--selected');
                }
            }
        })
    })
   
})