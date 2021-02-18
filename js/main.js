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
let chatsLists = document.querySelectorAll('.chats-list')

// listen input form to search accounts
searchBar.addEventListener('keyup', searchAccounts);
// listen show sidebar click
sidebarBtn.addEventListener('click', openSidebar);
// listen sidebar game item
sidebarGameItem.addEventListener('click', toGame);
// listen for outside click
window.addEventListener('click', outsideClick);
// listen textarea valeu
textareaElement.addEventListener('keyup', textareaValue);
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
// listen chats for loop 
// chatsSearch.addEventListener('click', searchForAccounts);
// listen chat message send btn
chatSendBtn.addEventListener('click', sendChatMessage);
// listen edit arrow 
editArrow.addEventListener('click', backToAccountSettings);
// listen edit close btn
editCloseBtn.addEventListener('click', closeEditModal);
// listen edit owner img
editOwnerImg.addEventListener('click', openSettingsOwnerImg);
// listen edit edit btn
editEditBtn.addEventListener('click', openSettingsOwnerImg);

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
    if (e.target == sidebarSettingsWrapper) {
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



// send messages to lists
// listItemElements.forEach(item => {
//     let targetItem = document.querySelector(item.dataset.target)
//     item.addEventListener('click', () => {
//         chatsLists.forEach(list => {

//         })
//     })
// })



let saraChat = [];
let messages = [];
// send chats message
function sendChatMessage() {
    if (textareaElement.value) {
        let chatParagraph = document.createElement('p');
        chatParagraph.classList.add('chat-send-text');
        chatParagraph.textContent = textareaElement.value;
        let newChatItem = document.createElement('li');
        newChatItem.classList.add('chat-item');
        newChatItem.classList.add('active');
        newChatItem.appendChild(chatParagraph);
        chatsList.appendChild(newChatItem);
        textareaElement.value = '';
        let time = document.createElement('time');
        time.textContent = moment().format('h:mm A');
        time.classList.add('chat-text-time');
        chatParagraph.appendChild(time);
        let tick = document.querySelector('.chat-text-img');
        let newTick = tick.cloneNode(true)
        chatParagraph.appendChild(newTick);
        messages.push({
            id: messages.length + 1,
        })
        newChatItem.setAttribute('id', `message#${messages.length + 1}`);
        window.location.href = `#message#${messages.length + 1}`;
    }
}

// add names of item to chat
listItemElements.forEach(function (e) {
    let targetText = document.querySelector(e.dataset.target);
    e.addEventListener('click', event => {
        chatsTextElements.forEach(function(chat) {
            if (chat == targetText) {
                chat.classList.add('active');
            } else {
                chat.classList.remove('active');
            }
        })
        chatsLists.forEach(function(list) {
            if (list.id == targetText.id) {
                list.classList.add('active');
            } else {
                list.classList.remove('active');
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
    }
})

// close every thing by btn
escapeBtn.addEventListener('click', logOut);

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

// // press account
// let liId = [];
// listItemElements.forEach(function(li){
//     li.addEventListener('click', function(e){
//         liId.push(e);
//         li.setAttribute('Id', liId.length + 1);
//     })
// })

// query function
function $(element) {
    return document.querySelector(element)
}
