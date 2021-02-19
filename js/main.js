// get telegram
let telegramElement = document.querySelector('.telegram');
// get account section
let accountSectionElement = document.querySelector('.account');
// get chats section
let chatSectionsElement = document.querySelector('.chats');
const searchBar = document.forms['search-bar'].querySelector('input');
const listElement = $('.account-list');
const listItemElements = document.querySelectorAll('.account-list .account-item');
const chatsTextElements = document.querySelectorAll('.text-section-chats');
// get chats header 
let chatsHeader = document.querySelector('.chats-header');
// get chats footer
let chatsFooter = document.querySelector('.chats-footer')
// get sidebar modal
let accountSidebar = document.getElementById('sidebar');
// get account sidebar button 
let sidebarBtn = document.querySelector('.account-header .account-header-btn-img');
// get chats textarea 
let textareaElement = document.getElementById('textarea');
// get chat footer microphone
let microphone = document.querySelector('.microphone-image');
// get chats message send button 
let chatsBtn = document.querySelector('.send-button-image ');
// get sidebar settings item
let sidebarItem = document.querySelector('.sidebar-settings-item');
// get accout sidebar settings modal
let sidebarSettings = document.querySelector('.account-settings-section');
// get account sidebar settings wrapper 
let sidebarSettingsWrapper = document.querySelector('.account-settings_wrapper');
// get side bar game item
let sidebarGameItem = document.getElementById('sidebar-game');
// get account sidebar settings section modal close btn
let settingsCloseBtn = document.querySelector('.account-settings-close-btn');
// get account sidebar settings section change btn
let settingsChaneBtn = document.querySelector('.account-settings-image');
// get sidebar settings change list
let settingsChangeList = document.querySelector('.account-settings-change-list');
// get settings Owner Image
let settingsOwnerImg = document.querySelector('.account-settings-owner-image');
// settings owner modal
let settingsOwnerModal = document.querySelector('.settings-owner-modal');
// get settings owner modal close btn
let settingsOwnerModalCloseBtn = document.querySelector('.settings-owner-modal-close-btn');
// get settings edit profile item
let settingsEditProfile = document.getElementById('account-settings-edit-item');
// get settings remove item
let settingsRemoveProfile = document.getElementById('account-settings-remove-item');
// get chats search loop
let chatsSearch = document.querySelector('.chat-loop-image');
// get chats list 
let chatsList = document.querySelector('.chats-list');
// get chat item
let chatItem = document.querySelector('.chat-item');
// get chat send btn
let chatSendBtn = document.querySelector('.send-button-image');
// get account settings edit item
let accountSettingsEditItem = document.querySelector('.account-settings-edit-item');
// get account settings edit modal
let accountSettingsEditModal = document.querySelector('.account-settings-edit-modal');
// get account settings edid modal arrow
let editArrow = document.querySelector('.account-settings-edit-modal-arraw svg');
// get edit clos btn
let editCloseBtn = document.querySelector('.account-settings-edit-modal-close-btn');
// get edit owner img
let editOwnerImg = document.querySelector('.account-settings-edit-modal-profile-img');
// get edit edit btn
let editEditBtn = document.querySelector('.account-settings-edit-modal-change-photo-btn');
// get every things close btn
let escapeBtn = document.querySelector('.every-thing-close-btn');
// get chat message check icon
// let chatChecker = document.querySelector('.chat-check-img');
// get chats lists
let chatsLists = document.querySelectorAll('.chats-list');
// get users account modal
let userAccountModalFirst = document.querySelector('.chats-user-modal');
// get users account info modal close btn
let userAccountModalCloseBtn = document.querySelector('.chats-user-modal-close-btn');
// get users account info modal change list btn img
let userAccountModalChangeListImg = document.querySelector('.chats-user-modal-change-list-img');
// get users info modal change list
let usersInfoChangeList = document.querySelector('.chats-user-modal-change-list');
// get users info modal wrapper
let userAccountModalWrapper = document.querySelector('.chats-user-modal-wrapper');
// get phone call sound 
let phoneCallAudio = document.querySelector('.audio-phone-call');
// get users info modal phone img
let usersAccountModalPhone = document.querySelector('.chats-user-modal-phone-img');
// get user phone call modal wrapper
let userPhoneCallModal = document.querySelector('.user-phone-call-modal-wrapper');
// get user phone call close btn
let phoneCallCloseBtn = document.querySelector('.user-phone-call-modal-close-btn');
// get user phone call modal call end
let phoneCallEndBtn = document.querySelector('.user-phone-call-modal-phone-cancel-img');
// get user phone call big screen btn
let phoneCallBigScreenBtn = document.querySelector('.user-phone-call-modal-big-screen');
// get user phone call modal 
let phoneCallModal = document.querySelector('.user-phone-call-modal');
// get user phone call mini screen btn
let phoneCallMiniScreenBtn = document.querySelector('.user-phone-call-modal-mini-screen');
// get user phone call start video btn
let phoneCallVideoBtn = document.querySelector('.user-phone-call-modal-video-img');
// get phone call video icon
let phoneCallVideoIcon = document.querySelector('.user-phone-call-modal-video-img svg');
// get danny account modal main image btn
let userAccountModalMainImageBtn = document.querySelector('.chats-user-modal-img');
// get danny accunt main img
let userAccountModalMainImage = document.querySelector('.danny-account-image-modal');
// get danny account modal main image close btn
let userAccountModalMainImageCloseBtn = document.querySelector('.danny-account-image-modal-close-btn');
// get user account sara modal
let saraAccountModal = document.querySelector('.chats-user-modal-second');
// get user account sara close btn
let saraAccountCloseBtn = document.querySelector('.chats-user-modal-second-close-btn');
// get user account sara change list btn
let saraAccountChangeListBtn = document.querySelector('.chats-user-modal-second-change-list-img');
// get sara account change list
let saraAccountChangeList = document.querySelector('.chats-user-modal-second-change-list');
// get sara account modal wrapper
let saraAccountModalWrapper = document.querySelector('.chats-user-modal-second-wrapper');
// get sara account phone call btn
let saraAccountPhoneCallBtn = document.querySelector('.chats-user-modal-second-phone-img');
// get sara account phone call section
let saraAccountPhoneCall = document.querySelector('.user-phone-call-modal-second-wrapper');
// get sara phone call close btn
let saraPhoneCallCloseBtn = document.querySelector('.user-phone-call-modal-second-close-btn');
// get sara phone call big screen btn
let saraPhoneCallBigScreenBtn = document.querySelector('.user-phone-call-modal-second-big-screen');
// get sara phone call modal
let saraPhoneCallModal = document.querySelector('.user-phone-call-modal-second');
// get sara phone call mini screen btn
let saraPhoneCallMiniScreenBtn = document.querySelector('.user-phone-call-modal-second-mini-screen');
// get sara phone call video btn
let saraPhoneCallVideoImg = document.querySelector('.user-phone-call-modal-second-video-img svg')
// get sara phone call video btn
let saraPhoneCallVideoBtn = document.querySelector('.user-phone-call-modal-second-video-img');
// get sara account main image 
let saraAccountModalImage = document.querySelector('.chats-user-modal-second-img'); 
// get sara account modal main image
let saraAccountModalMainImg = document.querySelector('.sara-account-image-modal');
// get sara phone call phone end btn
let saraPhoneCallEndBtn = document.querySelector('.user-phone-call-modal-second-phone-cancel-img');
// get mark account modal
let markAccountModal = document.querySelector('.chats-user-modal-third');
// get mark account modal clse btn
let markAccountModalCloseBtn = document.querySelector('.chats-user-modal-third-close-btn');
// get mark account modal change list
let markAccountModalChangeListBtn = document.querySelector('.chats-user-modal-third-change-list-img');
// get mark modal change list
let markModalChangeList = document.querySelector('.chats-user-modal-third-change-list');
// get mark account modal wrapper
let markAccountModalWrapper = document.querySelector('.chats-user-modal-third-wrapper');
// get mark phone modal
let markPhoneModalWrapper = document.querySelector('.user-phone-call-modal-third-wrapper');
// get mark account modal phone modal get btn
let markPhoneGetBtn = document.querySelector('.chats-user-modal-third-phone-img');
// get mark phone modal close btn
let markPhoneModalWrapperCloseBtn = document.querySelector('.user-phone-call-modal-third-close-btn');
// get mark phone modal big screen btn
let markPhoneModalWrapperBigScreenBtn = document.querySelector('.user-phone-call-modal-third-big-screen');
// get mark phone modal 
let markPhoneModal = document.querySelector('.user-phone-call-modal-third');
// get mark phone modal mini screen
let markPhoneModalMiniScreenBtn = document.querySelector('.user-phone-call-modal-third-mini-screen');
// get mark phone modal video btn
let markPhoneModalVideoBtn = document.querySelector('.user-phone-call-modal-third-video-img');
// get mark phone modal video img btn
let markPhoneModalVideoImg = document.querySelector('.user-phone-call-modal-third-video-img svg');
// get mark phone modal phone btn
let markPhoneModalPhoneBtn = document.querySelector('.user-phone-call-modal-third-phone-cancel-img');
// get mark account modal main image
let markAccountModalMainImage = document.querySelector('.mark-account-image-modal');
// get mark account modal main image open btn
let markAccountModalMainImageBtn = document.querySelector('.chats-user-modal-third-img');
// get mark phone modal close btn
let markPhoneModalCloseBtn = document.querySelector('.mark-account-image-modal-close-btn');
// get chat back btn to account section
let chatBtnToAccountBack = document.querySelector('.back-to-account-section svg');
// get chats change list btn
let chatChangeListBtn = document.querySelector('.chat-settings-image');

// listen input form to search accounts
searchBar.addEventListener('keyup', searchAccounts);
// listen show sidebar click
sidebarBtn.addEventListener('click', openSidebar);
// listen sidebar game item
sidebarGameItem.addEventListener('click', toGame);
// listen for outside click
window.addEventListener('click', outsideClick);
// listen textarea valeu
// textareaElement.addEventListener('keyup', textareaValue);
// listen sidebar settings item
sidebarItem.addEventListener('click', openSettings);
// listen sidebar settings close btn
settingsCloseBtn.addEventListener('click', colseSettings);
// listen sidebar settings change btn
settingsChaneBtn.addEventListener('click', changeSettings);
// listen settings owner image
settingsOwnerImg.addEventListener('click', openSettingsOwnerImg);
// listen settings owner modal close btn
settingsOwnerModalCloseBtn.addEventListener('click', closeSettingsOwnerModal);
// listen settings edit item
settingsEditProfile.addEventListener('click', openSettingsEditModal);
// listen account settings edit item
accountSettingsEditItem.addEventListener('click', openSettingsEditModal);
// listen account settings remove item
settingsRemoveProfile.addEventListener('click', alert);
// chatsSearch.addEventListener('click', searchForAccounts);
// listen edit arrow 
editArrow.addEventListener('click', backToAccountSettings);
// listen edit close btn
editCloseBtn.addEventListener('click', closeEditModal);
// listen edit owner img
editOwnerImg.addEventListener('click', openSettingsOwnerImg);
// listen edit edit btn
editEditBtn.addEventListener('click', openSettingsOwnerImg);
// listen users account ifno modal close btn
userAccountModalCloseBtn.addEventListener('click', closeUserInfoModal);
// listen users account info modal change list btn img
userAccountModalChangeListImg.addEventListener('click', openUsersInfoChangeList);
// listen users account modal phone 
usersAccountModalPhone.addEventListener('click', userPhoneCall); 
// listen user phone call close btn
phoneCallCloseBtn.addEventListener('click', closeUserPhoneCall);
// listen user phone call big screen btn
phoneCallBigScreenBtn.addEventListener('click', toBigScreenPhoneCall);
// listen phone call mini screen btn
phoneCallMiniScreenBtn.addEventListener('click', toMiniScreenPhoneCall)
// listen phone call video btn
phoneCallVideoBtn.addEventListener('click', changeVideCall);
// listen phone call phone end btn
phoneCallEndBtn.addEventListener('click', closeUserPhoneCall);
// listen user account modal image close btn
userAccountModalMainImageCloseBtn.addEventListener('click', closeUserAccountModalMainImage);
// listen danny modal main img btn
userAccountModalMainImageBtn.addEventListener('click', openUserAccountModalMainImage);
// listen sara account close btn
saraAccountCloseBtn.addEventListener('click', closeUserInfoModal)
// listen sara account change list btn
saraAccountChangeListBtn.addEventListener('click', openUsersInfoChangeList)
// listen sara account phone call btn
saraAccountPhoneCallBtn.addEventListener('click', toPhoneCallSara);
// listen sara phone call close btn
saraPhoneCallCloseBtn.addEventListener('click', closeSaraPhoneCall);
// listen sara phone call big screen btn
saraPhoneCallBigScreenBtn.addEventListener('click', toBigScreenPhoneCall);
// listen sara phone call mini screen btn
saraPhoneCallMiniScreenBtn.addEventListener('click', toMiniScreenPhoneCall);
saraPhoneCallVideoBtn.addEventListener('click', changeVideCall);
// listen sara account modal main image
saraAccountModalImage.addEventListener('click', openSaraAccountMainImg);
saraPhoneCallEndBtn.addEventListener('click', closeSaraPhoneCall);
// listen mark account modal close btn
markAccountModalCloseBtn.addEventListener('click', closeMarkAccount);
// listen mark account modal change list
markAccountModalChangeListBtn.addEventListener('click', openMarkModalChangeList);
// listen mark modal phone modal get btn
// listen phone modal close btn
markPhoneModalWrapperCloseBtn.addEventListener('click', closeMakrPhoneModal);
// listen mark phone modal big screen btn
markPhoneModalWrapperBigScreenBtn.addEventListener('click', toBigScreenmarkPhoneModalWrapper);
// listen mark phone modal mini screen btn
markPhoneModalMiniScreenBtn.addEventListener('click', toMiniScreenMarkPhoneModal);
// listen mark phone modal video btn
markPhoneModalVideoBtn.addEventListener('click', changeVideCall);
markPhoneModalPhoneBtn.addEventListener('click', closeMarkPhoneModal);
// listen mark account modal main image open btn
markAccountModalMainImageBtn.addEventListener('click', openMarkAccountModalMainImg);
// listen mark phone modal close btn
markPhoneModalCloseBtn.addEventListener('click', closeMarkPhoneModalByBtn);
// listen chat btn back to account section
chatBtnToAccountBack.addEventListener('click', backToAccountSection);
// listen chat change list btn
chatChangeListBtn.addEventListener('click', openChatChangeList);

markPhoneGetBtn.addEventListener('click', openmarkPhoneModalWrapper);
// open sidebar 
function openSidebar() {
    accountSidebar.style.display = 'block'
}

// close sidebar outside of click
function outsideClick(e){
    if (e.target == accountSidebar) {
        accountSidebar.style.display = 'none';
    } else if (e.target == sidebarSettings) {
        sidebarSettings.style.display = 'none';
    } else if (e.target == settingsOwnerModal) {
        settingsOwnerModal.style.display = 'none';
    } else if (e.target == accountSettingsEditModal) {
        accountSettingsEditModal.style.display = 'none';
    } else if (e.target == userAccountModalFirst) {
        userAccountModalFirst.style.display = 'none';
    } else if (e.target == userPhoneCallModal) {
        userPhoneCallModal.style.display = 'none';
    } else if (e.target == saraAccountModal) {
        saraAccountModal.style.display = 'none';
    } else if (e.target == saraAccountPhoneCall) {
        saraAccountPhoneCall.style.display = 'none';
    } else if (e.target == saraAccountModalMainImg) {
        saraAccountModalMainImg.style.display = 'none';
    } else if (e.target == markAccountModal) {
        markAccountModal.style.display = 'none';
    } else if (e.target == markPhoneModalWrapper) {
        markPhoneModalWrapper.style.display = 'none';
    } else if (e.target == markAccountModalMainImage) {
        markAccountModalMainImage.style.display = 'none';
    } else if (e.target == userAccountModalMainImage) {
        userAccountModalMainImage.style.display = 'none';
    }
}

// open sidebar game
function toGame() {
    sidebarGameItem.href = 'https://lesson12jshomework.netlify.app/';
    let sidebarGame = document.querySelector('.sidebar-settings-text');
    sidebarGame.href = 'https://lesson12jshomework.netlify.app/';
}

// textarea element value
function textareaValue(e){
    if(e.target.value.length == 0) {
        chatsBtn.style.display = 'none';
        microphone.style.display = 'block'; 
    } else {
        microphone.style.display = 'none'; 
        chatsBtn.style.display = 'block';
    }
    if (e.keyCode == 13 && e.shiftKey) {
        sendChatMessage(e.target.value)
    }
}

// open sidebar settings section modal
sidebarSettings.classList.remove('active');
function openSettings() {
    sidebarSettings.style.display = 'block';
    accountSidebar.style.display = 'none';
    sidebarSettings.classList.add('active');
}

// close sidebar settings modal
function colseSettings() {
    sidebarSettings.style.display = 'none';
}

// open settings owner modal img
function openSettingsOwnerImg() {
    settingsOwnerModal.style.display = 'block';
    sidebarSettings.style.zIndex = '1';
    settingsOwnerModal.style.zIndex = '2';
}

// close settings owner modal img
function closeSettingsOwnerModal() {
    settingsOwnerModal.style.display = 'none';
}

// open account settings edit modal
function openSettingsEditModal() {
    accountSettingsEditModal.style.display = 'block';
    sidebarSettings.style.display = 'none'
}

// show sidebar settings change btn modul
function changeSettings() {
    settingsChangeList.style.display = 'block';
}

// close sidebar settings change list
sidebarSettings.addEventListener('mouseover', e => {
    if (e.target == sidebarSettingsWrapper || e.target == sidebarSettings) {
        settingsChangeList.style.display = 'none';
    }
})

// close edit modal by btn
function closeEditModal() {
    accountSettingsEditModal.style.display = 'none';
}

// back to account settings modal from edit modal
function backToAccountSettings() {
    accountSettingsEditModal.style.display = 'none';
    sidebarSettings.style.display = 'block'
}


// filter accounts
function searchAccounts(e) {
    const term = e.target.value.toLowerCase();
    const accounts = listElement.getElementsByTagName('li');
    Array.from(accounts).forEach(function(account){
        let textAccount = account.querySelector('h3');
        const title = textAccount.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            account.style.display = 'flex';
        } else {
            account.style.display = 'none';
        }
    })
}

// add names of item to chat
listItemElements.forEach(function (e) {
    let targetText = document.querySelector(e.dataset.target);
    e.addEventListener('click', event => {
        let chatElement = document.querySelector('.chats');
        chatElement.classList.toggle('active');
        let accountElement = document.querySelector('.account');
        accountElement.classList.add('remove');
        chatsTextElements.forEach(function(chat) {
            if (chat == targetText) {
                chat.classList.add('active');
                chatsLists.forEach(function(list) {
                    if (list.id == targetText.id) {
                        list.classList.add('active');
                        let chatButtons = document.querySelectorAll('.chatBtn');
                        chatButtons.forEach(function(btn) {
                            if (btn.id == targetText.id) {
                                btn.classList.add('active')
                                let messages = [];
                                let textAreaElements = document.querySelectorAll('.chat-textarea');
                                textAreaElements.forEach(function(area) {
                                    if (area.id == targetText.id) {
                                        area.classList.add('active')
                                        btn.addEventListener('click', () => {
                                            if (area.value) {
                                                let newItem = document.createElement('li');
                                                newItem.classList.add('chat-item');
                                                let newPelement = document.createElement('p');
                                                newPelement.textContent = area.value;
                                                newPelement.classList.add('chat-send-text');
                                                let timeElement = document.createElement('time');
                                                timeElement.textContent = moment().format('h:mm A');
                                                timeElement.classList.add('chat-text-time');
                                                let tick = document.querySelector('.chat-text-img');
                                                let newTick = tick.cloneNode(true)
                                                newPelement.appendChild(newTick);
                                                newPelement.appendChild(timeElement);
                                                newItem.appendChild(newPelement);
                                                list.appendChild(newItem);
                                                area.value = '';
                                                messages.push({
                                                    id: messages.length + 1,
                                                })
                                                newItem.setAttribute('id', `message#${messages.length + 1}`);
                                                window.location.href = `#message#${messages.length + 1}`;
                                            }
                                        })    
                                    } else {
                                        area.classList.remove('active')
                                    }
                                })
                            } else {
                                btn.classList.remove('active')
                            }
                        })
                    } else {
                        list.classList.remove('active');
                    }
                })
            } else {
                chat.classList.remove('active');
            }
        })
        // show chats header
        chatsHeader.style.display = 'flex';
        // show chats footer
        chatsFooter.style.display = 'flex';
        // show chats list
        chatsList.style.display = 'block';
    })
})

// close every thing by escape
document.body.addEventListener('keyup', e => {
    if (e.keyCode == 27) {
        chatsHeader.style.display = 'none';
        chatsFooter.style.display = 'none';
        chatsList.style.display = 'none';
        accountSidebar.style.display = 'none';
        sidebarSettings.style.display = 'none';
        accountSettingsEditModal.style.display = 'none';
        userAccountModalFirst.style.display = 'none';
        saraAccountModal.style.display = 'none';
        saraAccountPhoneCall.style.display = 'none';
        saraAccountModalMainImg.style.display = 'none';
        userPhoneCallModal.style.display = 'none';
        markAccountModal.style.display = 'none';
        markPhoneModalWrapper.style.display = 'none';
        userAccountModalMainImage.style.display = 'none';
    }
})

// close every thing by btn
escapeBtn.addEventListener('click', logOut);
let telegramCloseBtn = document.querySelector('.account-close-btn');
telegramCloseBtn.addEventListener('click', () => {
    logOut()
})

function logOut() {
    telegram.style.display = 'none';
}
// log out by settings reomove item
function alert() {
    let confirmation = confirm('Are you sure to log out from telegram?');
    if(confirmation == true) {
        logOut()
    }
}

// query function
function $(element) {
    return document.querySelector(element)
}


// show users info modal
chatsTextElements.forEach(function(chat) {
    chat.addEventListener('click', e => {
        if (e.target.parentNode.id == 'danny') {
            userAccountModalFirst.style.display = 'block';
        } else if (e.target.parentNode.id == 'sara') {
            saraAccountModal.style.display = 'block';
        } else if (e.target.parentNode.id == 'mark') {
            markAccountModal.style.display = 'block';
        }
    })
})

// close users info modal by close btn
function closeUserInfoModal() {
    userAccountModalFirst.style.display = 'none';
    saraAccountModal.style.display = 'none';
}

// open users info modal change list
function openUsersInfoChangeList() {
    usersInfoChangeList.style.display = 'block'
    saraAccountChangeList.style.display = 'block';
}

// close users info modal change list
userAccountModalFirst.addEventListener('mouseover', e => {
    if (e.target == userAccountModalWrapper || e.target == userAccountModalFirst) {
        usersInfoChangeList.style.display = 'none';
    }
})

// users modal phone call function
function userPhoneCall() {
    phoneCallAudio.play();
}

// open user phone call modal
function userPhoneCall() {
    userPhoneCallModal.style.display = 'block';
    phoneCallAudio.play();
    userAccountModalFirst.style.display = 'none';
}

// close user phone call modal by btn
function closeUserPhoneCall() {
    userPhoneCallModal.style.display = 'none';
}

// make phone call modal big screen
function toBigScreenPhoneCall() {
    phoneCallModal.classList.toggle('active');
    saraPhoneCallModal.classList.toggle('active');
}

// make phone call modal mini screen
function toMiniScreenPhoneCall() {
    phoneCallModal.classList.remove('active');
    saraPhoneCallModal.classList.remove('active');
}

// phone call video call 
function changeVideCall() {
    phoneCallVideoBtn.classList.toggle('active')
    phoneCallVideoIcon.classList.toggle('active')
    saraPhoneCallVideoBtn.classList.toggle('active');
    saraPhoneCallVideoImg.classList.toggle('active');
    markPhoneModalVideoBtn.classList.toggle('active');
    markPhoneModalVideoImg.classList.toggle('active');
}

saraAccountModal.addEventListener('mouseover', e => {
    if (e.target == saraAccountModal || e.target == saraAccountModalWrapper) {
        saraAccountChangeList.style.display = 'none';
    }
})

// open sara account phone call section
function toPhoneCallSara() {
    saraAccountPhoneCall.style.display = 'block';
    phoneCallAudio.play();
    saraAccountModal.style.display = 'none';
}

// open user account modal main image
function openUserAccountModalMainImage() {
    userAccountModalMainImage.style.display = 'block';
    userAccountModalFirst.style.display = 'none';
    let userAccountModalImg = document.querySelector('.mark-account-image-modal-img')
    userAccountModalImg.style.zIndex = 2;
}

// close user account modal main image
function closeUserAccountModalMainImage() {
    userAccountModalMainImage.style.display = 'none';
}

// close sara phone call
function closeSaraPhoneCall() {
    saraAccountPhoneCall.style.display = 'none';
}

// open sara account main img
function openSaraAccountMainImg() {
    saraAccountModalMainImg.style.display = 'block';
    saraAccountModal.style.display = 'none';
}


// close mark account modal by close btn
function closeMarkAccount() {
    markAccountModal.style.display = 'none';
}

// open mark modal change list
function openMarkModalChangeList() {
    markModalChangeList.style.display = 'block';
}

// close mark modal change list
markAccountModal.addEventListener('mouseover', e => {
    if (e.target == markAccountModal || e.target == markAccountModalWrapper) {
        markModalChangeList.style.display = 'none';
    }
})

// open mark phone modal
function openmarkPhoneModalWrapper() {
    markPhoneModalWrapper.style.display = 'block';
    markAccountModal.style.display = 'none';
    phoneCallAudio.play();
}

// close mark phone modal by btn
function closeMakrPhoneModal() {
    markPhoneModalWrapper.style.display = 'none';
}

// make bigger mark phone modal by btn
function toBigScreenmarkPhoneModalWrapper() {
    markPhoneModal.classList.toggle('active');
}

// make mini mark phone modal by btn
function toMiniScreenMarkPhoneModal(){
    markPhoneModal.classList.remove('active')
}

// end mark phone modal by btn
function closeMarkPhoneModal() {
    markPhoneModal.style.display = 'none';
}

// open mark account modal main img
function openMarkAccountModalMainImg() {
    markAccountModalMainImage.style.display = 'block';
    markAccountModal.style.display = 'none';
    markAccountModalMainImage.style.zIndex = 2;
}

// 
function closeMarkPhoneModalByBtn() {
    markAccountModalMainImage.style.display = 'none';
}

// back to account section from chats section
function backToAccountSection() {
    accountSectionElement.style.display = 'block';
    chatSectionsElement.style.display = 'none';
}

listItemElements.forEach(function(e){
    e.addEventListener('click', i => {
        
    })
})