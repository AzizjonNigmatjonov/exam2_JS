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
// get account sidebar settings section modal close btn
let settingsCloseBtn = document.querySelector('.account-settings-close-btn');
// get account sidebar settings section change btn
let settingsChaneBtn = document.querySelector('.account-settings-image');
// get sidebar settings change list
let settingsChangeList = document.querySelector('.account-settings-change-list');
// get chats search loop
let chatsSearch = document.querySelector('.chat-loop-image');
// get chats list 
let chatsList = document.querySelector('.chats-list');
// get chat item
let chatItem = document.querySelector('.chat-item');
// get chat send btn
let chatSendBtn = document.querySelector('.send-button-image');
// get chat message check icon
// let chatChecker = document.querySelector('.chat-check-img');
// get chat default items
let chatDefaultItems = document.querySelectorAll('.chat-default-item');

// listen input form to search accounts
searchBar.addEventListener('keyup', searchAccounts);
// listen show sidebar click
sidebarBtn.addEventListener('click', openSidebar);
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
// listen chats for loop 
// chatsSearch.addEventListener('click', searchForAccounts);
// listen chat message send btn
chatSendBtn.addEventListener('click', sendChatMessage);

// open sidebar 
function openSidebar() {
    accountSidebar.style.display = 'block'
}

// close sidebar outside of click
function outsideClick(e){
    if(e.target == accountSidebar) {
        accountSidebar.style.display = 'none';
    }
    if (e.target == sidebarSettings) {
        sidebarSettings.style.display = 'none';
    }
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

let messages = [];
// send chats message
function sendChatMessage() {
    if (textareaElement.value) {
        let chatParagraph = document.createElement('p');
        chatParagraph.classList.add('chat-text');
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
        chatDefaultItems.forEach(function(chat) {
            if (chat.id == targetText.id) {
                chat.classList.add('active');
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

// close chats header & chats footer
document.body.addEventListener('keyup', e => {
    if (e.keyCode == 27) {
        chatsHeader.style.display = 'none';
        chatsFooter.style.display = 'none';
        chatsList.style.display = 'none';
        accountSidebar.style.display = 'none';
        sidebarSettings.style.display = 'none';
        
    }
})

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