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
        if (StyleActivityOption.style.display === 'none' || StyleActivityOption.style.display === ''){
            StyleActivityOption.style.display = 'block';
        } else {
            StyleActivityOption.style.display = 'none';
        }
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
    btnUserOnline.style.backgroundColor = '#343d5a';
    btnUserOnline.style.color = '#FAFAFA';

    btnUserIdle.style.backgroundColor = 'transparent'
    btnUserIdle.style.color = '#a3a3a3'

    btnUserBusy.style.backgroundColor = 'transparent';
    btnUserBusy.style.color = '#a3a3a3';

    btnUserInactive.style.backgroundColor = 'transparent';
    btnUserInactive.style.color = '#a3a3a3';

    styleUserOnline.style.display = 'block';
    styleUserIdle.style.display = 'none';
    styleUserBusy.style.display = 'none';
    styleUserInactive.style.display = 'none';
})

btnUserIdle.addEventListener('click', () => {
    btnUserOnline.style.backgroundColor = 'transparent';
    btnUserOnline.style.color = '#a3a3a3';

    btnUserIdle.style.backgroundColor = '#343d5a';
    btnUserIdle.style.color = '#FAFAFA';

    btnUserBusy.style.backgroundColor = 'transparent';
    btnUserBusy.style.color = '#a3a3a3';

    btnUserInactive.style.backgroundColor = 'transparent';
    btnUserInactive.style.color = '#a3a3a3';

    styleUserOnline.style.display = 'none';
    styleUserIdle.style.display = 'block';
    styleUserBusy.style.display = 'none';
    styleUserInactive.style.display = 'none';
})

btnUserBusy.addEventListener('click', () => {
    btnUserOnline.style.backgroundColor = 'transparent';
    btnUserOnline.style.color = '#a3a3a3';

    btnUserIdle.style.backgroundColor = 'transparent';
    btnUserIdle.style.color = '#a3a3a3';

    btnUserBusy.style.backgroundColor = '#343d5a'
    btnUserBusy.style.color = '#FAFAFA'

    btnUserInactive.style.backgroundColor = 'transparent';
    btnUserInactive.style.color = '#a3a3a3';

    styleUserOnline.style.display = 'none';
    styleUserIdle.style.display = 'none';
    styleUserBusy.style.display = 'block';
    styleUserInactive.style.display = 'none';
})

btnUserInactive.addEventListener('click', () => {
    btnUserOnline.style.backgroundColor = 'transparent';
    btnUserOnline.style.color = '#a3a3a3';

    btnUserIdle.style.backgroundColor = 'transparent';
    btnUserIdle.style.color = '#a3a3a3';

    btnUserBusy.style.backgroundColor = 'transparent';
    btnUserBusy.style.color = '#a3a3a3';

    btnUserInactive.style.backgroundColor = '#343d5a';
    btnUserInactive.style.color = '#FAFAFA';

    styleUserOnline.style.display = 'none';
    styleUserIdle.style.display = 'none';
    styleUserBusy.style.display = 'none';
    styleUserInactive.style.display = 'block';
})


const btnMicrophone = document.querySelector('.btn-microphone');
const muteMicrophone = document.querySelector('.mute-microphone');

btnMicrophone.addEventListener('click', () => {
    if (muteMicrophone.style.display === 'none' || muteMicrophone.style.display === ''){
        muteMicrophone.style.display = 'block';
        btnMicrophone.style.color = '#F78181';
    } else {
        muteMicrophone.style.display = 'none';
        btnMicrophone.style.color = '#6f778a';
    }
});

const btnHeadphone = document.querySelector('.btn-headphone');
const muteHeadphone = document.querySelector('.mute-headphone');

btnHeadphone.addEventListener('click', () => {
    if (muteHeadphone.style.display === 'none' || muteHeadphone.style.display === ''){
        muteHeadphone.style.display = 'block';
        btnHeadphone.style.color = '#F78181';

        muteMicrophone.style.display = 'block';
        btnMicrophone.style.color = '#F78181';
    } else {
        muteHeadphone.style.display = 'none';
        btnHeadphone.style.color = '#6f778a';

        muteMicrophone.style.display = 'none';
        btnMicrophone.style.color = '#6f778a';
    }
})

const btnConfig = document.querySelector('.btn-config');
const userConfigurationPanel = document.querySelector('.user-configuration-panel');

btnConfig.addEventListener('click', () => {
    if (userConfigurationPanel.style.display === 'none' || userConfigurationPanel.style.display === ''){
        userConfigurationPanel.style.display = 'block';
    } else {
        userConfigurationPanel.style.display = 'none';
        profilePhotoPanel.style.display = 'none'
    }
})

const userProfilePhoto = document.querySelector('.user-profile-photo');
const profilePhotoImage = document.querySelector('.user-profile-photo img');

userProfilePhoto.addEventListener('mouseover', () => {
    profilePhotoImage.style.filter = 'blur(1px)';
    btnEditProfilePicture.style.display = 'flex';
})

userProfilePhoto.addEventListener('mouseout', () => {
    profilePhotoImage.style.filter = 'none';
    btnEditProfilePicture.style.display = 'none';
})

const btnEditProfilePicture = document.querySelector('.btn-edit-profile-picture');
const profilePhotoPanel = document.querySelector('.profile-photo-panel')

btnEditProfilePicture.addEventListener('click', () => {
    if (profilePhotoPanel.style.display === 'none' || profilePhotoPanel.style.display === ''){
        profilePhotoPanel.style.display = 'block'
    } else {
        profilePhotoPanel.style.display = 'none'
    }
})

const profilePhoto1 = document.querySelector('.profile-photo-1');

profilePhoto1.addEventListener('click', () => {
    profilePhotoImage.src = '../../assets/profile-picture/profiles-pictures/profile-picture-1.jpg'
});

const profilePhoto2 = document.querySelector('.profile-photo-2');

profilePhoto2.addEventListener('click', () => {
    profilePhotoImage.src = '../../assets/profile-picture/profiles-pictures/profile-picture-2.jpg'
});

const profilePhoto3 = document.querySelector('.profile-photo-3');

profilePhoto3.addEventListener('click', () => {
    profilePhotoImage.src = '../../assets/profile-picture/profiles-pictures/profile-picture-3.jpg'
});

const profilePhoto4 = document.querySelector('.profile-photo-4');

profilePhoto4.addEventListener('click', () => {
    profilePhotoImage.src = '../../assets/profile-picture/profiles-pictures/profile-picture-4.jpg'
});

const profilePhoto5 = document.querySelector('.profile-photo-5');

profilePhoto5.addEventListener('click', () => {
    profilePhotoImage.src = '../../assets/profile-picture/profiles-pictures/profile-picture-5.jpg'
});

const profilePhoto6 = document.querySelector('.profile-photo-6');

profilePhoto6.addEventListener('click', () => {
    profilePhotoImage.src = '../../assets/profile-picture/profiles-pictures/profile-picture-6.jpg'
});
