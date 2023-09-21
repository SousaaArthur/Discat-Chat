const btnCreateServer = document.getElementById('btnCreateServer');
const TextCreateServe = document.querySelector('.floating-text-create-serve');

btnCreateServer.addEventListener('mouseover', () => {
    TextCreateServe.style.display = 'flex';
});

btnCreateServer.addEventListener('mouseleave', () => {
    TextCreateServe.style.display = 'none';
});

const btnNewGroup = document.getElementById('btnNewGroup');
const floatingTextNewGroup = document.querySelector('.floating-text-btn-new-group');

btnNewGroup.addEventListener('mouseover', () => {
    floatingTextNewGroup.style.display = 'flex';
});

btnNewGroup.addEventListener('mouseleave', () => {
    floatingTextNewGroup.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() {

    const BtnActivityOptions = document.getElementById('btnActivityOptions');
    const StyleActivityOption = document.querySelector('.activity-option');
    
    BtnActivityOptions.addEventListener('click', () => {
        StyleActivityOption.style.display = 'block';
    });

    document.addEventListener("click", function(event) {
        if (!StyleActivityOption.contains(event.target) && !BtnActivityOptions.contains(event.target)) {
            StyleActivityOption.style.display = 'none';
        }
    });
});

const btnUserOnline = document.querySelector('.btn-user-online');
const styleUserOnline = document.querySelector('.user-online');

const btnUserIdle = document.querySelector('.btn-user-idle');
const styleUserIdle = document.querySelector('.user-idle');

const btnUserBusy = document.querySelector('.btn-user-busy');
const styleUserBusy = document.querySelector('.user-busy');

const btnUserInactive = document.querySelector('.btn-user-inactive');
const styleUserInactive = document.querySelector('.user-inactive');

btnUserOnline.addEventListener('click', () => {
    btnUserOnline.style.backgroundColor = '#343d5a'
    btnUserOnline.style.color = '#FAFAFA'

    btnUserIdle.style.backgroundColor = 'transparent'
    btnUserIdle.style.color = '#a3a3a3'

    btnUserBusy.style.backgroundColor = 'transparent'
    btnUserBusy.style.color = '#a3a3a3'

    styleUserInactive.style.backgroundColor = 'transparent'
    styleUserInactive.style.color = '#a3a3a3'

    styleUserOnline.style.display = 'block'
    styleUserIdle.style.display = 'none'
    styleUserBusy.style.display = 'none'
    styleUserInactive.style.display = 'none'
})

btnUserIdle.addEventListener('click', () => {
    btnUserOnline.style.backgroundColor = 'transparent'
    btnUserOnline.style.color = '#a3a3a3'

    btnUserIdle.style.backgroundColor = '#343d5a'
    btnUserIdle.style.color = '#FAFAFA'

    btnUserBusy.style.backgroundColor = 'transparent'
    btnUserBusy.style.color = '#a3a3a3'

    styleUserInactive.style.backgroundColor = 'transparent'
    styleUserInactive.style.color = '#a3a3a3'

    styleUserOnline.style.display = 'none'
    styleUserIdle.style.display = 'block'
    styleUserBusy.style.display = 'none'
    styleUserInactive.style.display = 'none'
})

btnUserBusy.addEventListener('click', () => {
    btnUserOnline.style.backgroundColor = 'transparent'
    btnUserOnline.style.color = '#a3a3a3'

    btnUserIdle.style.backgroundColor = 'transparent'
    btnUserIdle.style.color = '#a3a3a3'

    btnUserBusy.style.backgroundColor = '#343d5a'
    btnUserBusy.style.color = '#FAFAFA'

    styleUserInactive.style.backgroundColor = 'transparent'
    styleUserInactive.style.color = '#a3a3a3'

    styleUserOnline.style.display = 'none'
    styleUserIdle.style.display = 'none'
    styleUserBusy.style.display = 'block'
    styleUserInactive.style.display = 'none'
})

btnUserInactive.addEventListener('click', () => {
    btnUserOnline.style.backgroundColor = 'transparent'
    btnUserOnline.style.color = '#a3a3a3'

    btnUserIdle.style.backgroundColor = 'transparent'
    btnUserIdle.style.color = '#a3a3a3'

    btnUserBusy.style.backgroundColor = 'transparent'
    btnUserBusy.style.color = '#a3a3a3'

    styleUserInactive.style.backgroundColor = '#343d5a'
    styleUserInactive.style.color = '#FAFAFA'

    styleUserOnline.style.display = 'none'
    styleUserIdle.style.display = 'none'
    styleUserBusy.style.display = 'none'
    styleUserInactive.style.display = 'block'
})
