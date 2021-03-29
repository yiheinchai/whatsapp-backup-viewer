import { chats } from "./data.js";

// console.log(chats);
// initialiseChat(chats[1]);

document.querySelector(".exitChat").addEventListener("click", exitChat);

const chatList = chats.map((ele) => ele.name);
chatList.forEach((ele, i) => {
  const chatCard = document.createElement("div");
  chatCard.classList.add("col-lg-3");
  chatCard.classList.add("col-md-4");
  chatCard.classList.add("col-sm-6");
  chatCard.classList.add("d-flex");
  chatCard.classList.add("justify-content-center");
  chatCard.classList.add("mb-5");
  chatCard.innerHTML = `<button type="button" style="width: 100%;" class="btn btn-outline-primary chatElement">${ele}</button>`;
  chatCard
    .querySelector(".chatElement")
    .addEventListener("click", initialiseChat.bind(null, chats[i]));
  document.querySelector(".chatLibrary").insertAdjacentElement("beforeend", chatCard);
});

function exitChat() {
  document.querySelector(".chatScreen").innerHTML = "";
  document.querySelector(".chatTitle").innerHTML = "";
  document.querySelector(".chatInterface").classList.toggle("d-none");
}

function initialiseChat(chat) {
  document.querySelector(".chatInterface").classList.toggle("d-none");
  const textArray = chat.messageContent.split("\n");
  document.querySelector(".chatTitle").textContent = chat.name;
  textArray.forEach((ele) => {
    const messageTime = ele.slice(1, ele.indexOf("]"));
    const messageSender = ele.slice(ele.indexOf("]") + 2, ele.lastIndexOf(": "));
    const messageContent = ele.slice(ele.lastIndexOf(": ") + 1);
    if (messageSender !== "Yi Hein") {
      document.querySelector(".chatScreen").insertAdjacentHTML(
        "beforeend",
        `<div class="row d-flex justify-content-start">
      <div class="col-8 textMessageReceive">
        <div class="row">
          <div class="col-12">
            ${messageContent}
            <div class="dateTimeReceived">${messageSender} - ${messageTime}</div>
          </div>
        </div>
      </div>
    </div>`
      );
    } else {
      document.querySelector(".chatScreen").insertAdjacentHTML(
        "beforeend",
        `<div class="row d-flex justify-content-end">
    <div class="col-8 textMessageSent">
      <div class="row">
        <div class="col-12">
          ${messageContent}
          <div class="dateTimeReceived">${messageSender} - ${messageTime}</div>
        </div>
      </div>
    </div>
  </div>`
      );
    }
  });
}
