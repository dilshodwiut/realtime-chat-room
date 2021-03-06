import moment from "moment";

// render chat templates to the dom
// clear the list of chats (when the room changes)

class ChatUI {
  constructor(list) {
    this.list = list;
  }

  render(data) {
    const when = moment(data.created_at.toDate()).fromNow();
    const html = `
    <li class="list-group-item">
      <span class="username">${data.username}</span>
      <span class="message">${data.message}</span>
      <div class="time">${when}</div>
    </li>
    `;
    this.list.innerHTML += html;
  }

  clear() {
    this.list.innerHTML = "";
  }
}

export default ChatUI;
