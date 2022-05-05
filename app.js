let burger_menu = document.querySelector('.burger_menu')
let navbar = document.querySelector('.navbar')
burger_menu.onclick = () =>{
    navbar.classList.toggle('active')
    burger_menu.classList.toggle('active_burger')
}

let nav_links = document.querySelectorAll('.nav_link')
console.log(nav_links);

nav_links.forEach( item => item.onclick = () =>{
    burger_menu.classList.remove('active_burger')
    navbar.classList.remove('active')
})


//pop up for tarrifs_not_registered.html






//pathname 

let pathname = window.document.location.pathname 

// creating pop up not registered


if(pathname === "/tariffs_not_registered/tariffs_not_registered.html"){

    let my_pop_up = document.querySelector('.my_pop_up')
my_pop_up.innerHTML = `<div class="popup_not_registered">
    <div class="popup_not_registered_body">
        <div class="popup_not_registered_title">You need an account to get tariif:</div>
        <div class="popup_not_registered_btns">
            <div class="popup_not_registered_cancel_block">
                <button class="popup_not_registered_cancel_btn">Cancel</button>
            </div>
            <div class="popup_not_registered_get_connected_block">
                <a href="/register page/register.html"><button class="popup_not_registered_get_connected_btn">Register</button></a>
            </div>
        </div>
    </div>
</div> `
    

    let pop_up_not_registered = document.querySelector('.popup_not_registered')

let connect_btns = document.querySelectorAll('.tariffs_tariff_connect_btn')

connect_btns.forEach( item => item.addEventListener('click', showingPopUp))

    function showingPopUp(){
        pop_up_not_registered.classList.add('active_popup')
    }
    let cancel_btn = document.querySelector('.popup_not_registered_cancel_btn')


cancel_btn.addEventListener('click', function (){
    pop_up_not_registered.classList.remove('active_popup')})
}

// creating pop up for sure deleting

else if (pathname === "/tariffs_management%20page/tariffs_management.html"){

    let pop_up_delete = document.querySelector('.pop_up_delete')

    pop_up_delete.innerHTML = `<div class="popup_sure_delete">
    <div class="popup_sure_delete_body">
        <div class="popup_sure_delete_title">Are you sure to delete this tariff?</div>
        <div class="popup_sure_delete_subtitle">All users that have this tariff will be INACTIVE, if you delete current tariff</div>
        <div class="popup_sure_delete_btns">
            <div class="popup_sure_delete_cancel_block">
                <button class="popup_sure_delete_cancel_btn">Cancel</button>
            </div>
            <div class="popup_sure_delete_delete_block">
                <button class="popup_sure_delete_delete_btn">Delete</button>
            </div>
        </div>
    </div>
</div> `

    let popup_sure_delete = document.querySelector('.popup_sure_delete')
    let delete_tariff_btns = document.querySelectorAll('.table_delete_button')

    delete_tariff_btns.forEach( item => item.addEventListener('click', function(){
        popup_sure_delete.classList.add('active_popup')
    }))

    let cancel_btn_sure_delete = document.querySelector('.popup_sure_delete_cancel_btn')

cancel_btn_sure_delete.addEventListener('click', function(){
    popup_sure_delete.classList.remove('active_popup')
}
)
}

else if(pathname === "/register%20page/register.html"){

    let my_pop_up_success = document.querySelector('.my_popup_success')
    my_pop_up_success.innerHTML = `<div class="popup_success_apply">
    <div class="popup_success_apply_body">
        <div class="popup_not_registered_title popup_success_apply_title">Your application has been successfuly accepted. Wait for the result of registration in your email</div>

        <div class="popup_success_apply_btn_block">
            <button class="popup_success_apply_btn">Ok</button>
        </div>
        
    </div>
</div> `


    let alertRegister = document.querySelector('.create_acc_btn')

    let popupApply = document.querySelector('.popup_success_apply')

    alertRegister.addEventListener('click', showingApply)


    function showingApply(e){
        e.preventDefault()
        popupApply.classList.add('active_popup')
    }

    let success_apply_btn_ok = document.querySelector('.popup_success_apply_btn')

    success_apply_btn_ok.addEventListener('click', closeApplyModal)

    function closeApplyModal(){
        popupApply.classList.remove('active_popup')
    }

}









console.log(window.document.location.pathname);