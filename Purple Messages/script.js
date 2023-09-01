const users = [
  {
    name: "Mary Smsons",
    text: "Should the header hide and login button to be lifted above the",
    img: "https://i.pravatar.cc/150?img=47",
    datetime: "18:20",
    unread: 3,
  },
  {
    name: "Crystal Dunham",
    text: "Thanks mate! Feel way better now. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://i.pravatar.cc/150?img=48",
    datetime: "13:42",
    unread: 1,
  },
  {
    name: "Alexandre Becker",
    text: "Greetings! Your insights have been incredibly helpful. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "https://i.pravatar.cc/150?img=12",
    datetime: "09:15",
    unread: 2,
  },

  {
    name: "Eleanor Manning",
    text: "Hey there, thanks a bunch! Your guidance is invaluable. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "https://i.pravatar.cc/150?img=33",
    datetime: "17:30",
    unread: 0,
  },

  {
    name: "Oliver Bennett",
    text: "Appreciate it greatly! I'm learning a lot from you. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "https://i.pravatar.cc/150?img=25",
    datetime: "11:59",
    unread: 13,
  },

  {
    name: "Sophia Foster",
    text: "Thanks a million! Your support means the world. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "https://i.pravatar.cc/150?img=9",
    datetime: "19:22",
    unread: 0,
  },

  {
    name: "William Parker",
    text: "Hello! Your insights have enlightened me. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "https://i.pravatar.cc/150?img=17",
    datetime: "08:05",
    unread: 4,
  },

  {
    name: "Isabella Ramirez",
    text: "Thank you so much! Your wisdom is truly appreciated. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "https://i.pravatar.cc/150?img=7",
    datetime: "14:18",
    unread: 0,
  },

  {
    name: "Benjamin Hughes",
    text: "Thanks a ton! Your assistance has been enlightening. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "https://i.pravatar.cc/150?img=29",
    datetime: "16:05",
    unread: 0,
  },

  {
    name: "Ava Peterson",
    text: "Greetings! Your expertise is incredibly valuable. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "https://i.pravatar.cc/150?img=41",
    datetime: "10:45",
    unread: 8,
  },

  {
    name: "Matthew Collins",
    text: "Thank you kindly! Your insights have been indispensable. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "https://i.pravatar.cc/150?img=2",
    datetime: "21:07",
    unread: 0,
  },
];

const chats = [
  {
    friend: "Hey there! How's your day going?",
    me: "Hey! It's been pretty good so far. Just had the most amazing lunch!",
  },
  {
    friend: "Oh, you're making me curious now. What did you have?",
    me: "Well, I decided to treat myself to some sushi. You know how much I adore those delicate rolls of goodness!",
  },
  {
    friend:
      "Oh, absolutely! Sushi is an art form, and I totally get why you love it. Any particular type you went for?",
    me: "I went for a mix, actually. Some classic nigiri with salmon that just melted in my mouth, and a couple of those fancy maki rolls with avocado and tempura shrimp. Pure delight!",
  },
  {
    friend:
      "Wow, you're making my taste buds envy you! I'm a bit more on the savory side today. Had a hearty bowl of creamy tomato soup and a grilled cheese sandwich for lunch.",
    me: "Ah, comfort food at its finest! You can never go wrong with that combo. How was the soup?",
  },
  {
    friend:
      "It was like a warm hug in a bowl, seriously. Rich, velvety, and that hint of basil just elevated it. And the grilled cheese? Perfectly crispy and gooey. Hits the spot every time.",
    me: "Now I'm torn between sushi and grilled cheese! You're really painting a vivid picture. By the way, have you ever tried making sushi at home?",
  },
  {
    friend:
      "I did, once! Let's just say it turned out to be a hilarious disaster. I ended up with rice everywhere except on the seaweed. But hey, it's the effort that counts, right?",
    me: "Haha, absolutely! Cooking adventures are part of the fun. Speaking of cooking, have you explored any new recipes lately?",
  },
  {
    friend:
      "Funny you ask! I've been on a pasta kick lately. Tried my hand at making homemade fettuccine Alfredo from scratch. The process was a bit intricate, but oh my, the end result was beyond satisfying.",
    me: "Impressive! Making pasta from scratch is quite the feat. I can almost taste the creamy Alfredo sauce. You've really got a talent for turning your kitchen into a gourmet haven!",
  },
  {
    friend: "Thanks! It's all about experimenting and learning as I go. So, what's on the menu for dinner?",
    me: "I think I'm going to switch gears and go for some Indian cuisine tonight. Aromatic curry, fluffy naan, and maybe some samosas on the side.",
  },
  {
    friend:
      "Indian food is a symphony of flavors. Your taste journey is taking you around the world today! Enjoy every bite.",
    me: "Will do! And you, enjoy your evening comfort food. Catch you later!",
  },
  {
    friend: "Definitely! Have a fantastic dinner and chat with you soon!",
    me: "hmm. ❤️",
  },
];

const messagebarInput = document.getElementById("messagebar");
const back = document.querySelector(".ti-chevron-left");
const container = document.querySelector(".container");
const searchBtn = document.querySelector(".ti-search");
const searchbar = document.getElementById("searchbar");
const vScroll = document.querySelector(".v-scroll");
const chatset = document.querySelector(".charset");
const chatbox = document.querySelector(".chatbox");
const send = document.querySelector(".ti-send");
const me = document.querySelector(".me");

searchbar.addEventListener("input", (e) => {
  searchQuery(e);
});
send.addEventListener("click", textMessage);
searchBtn.addEventListener("click", searchbarFocus);

users.forEach((user) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <img src="${user.img}" alt="profile">
    <div class="profile-info">
      <h3 ${user.unread > 0 ? `data-unread="${user.unread}"` : ""} class="user">${user.name} <time datetime="${
    user.datetime
  }">${user.datetime}</time></h3>
      <p class="user-text">${user.text}</p>
    </div>
  `;
  chatset.appendChild(li);
});

chatset.querySelectorAll("li").forEach((li, index) => {
  li.addEventListener("click", (e) => {
    window.scrollTo(0, 0);
    let selectedImg = e.target.closest("li").querySelector("img").src;
    container.classList.toggle("back");
    chatbox.classList.toggle("top");
    populateChat(selectedImg);
    if (users[index].unread > 0) {
      e.target.closest("li").querySelector("h3").removeAttribute("data-unread");
    }

    messagebarInput.focus();
  });
});

back.addEventListener("click", () => {
  window.scrollTo(0, 0);
  chatbox.classList.toggle("top");
  container.classList.toggle("back");
  vScroll.querySelectorAll("li").forEach((li, i) => {
    if (i != 0) {
      li.remove();
    }
    li.style.opacity = "0";
  });
});

messagebarInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    textMessage();
  }
});

// send message [==chatbox==]
function textMessage() {
  let clone = me.cloneNode(true);
  if (messagebarInput.value == "") {
    return;
  }
  clone.querySelector("p").textContent = messagebarInput.value;
  vScroll.appendChild(clone);
  scrollToEnd();

  // reset input after sending.
  messagebarInput.value = "";
}

// populate chat [==chatbox==]
function populateChat(selectedImg) {
  chats.forEach((chat) => {
    const chatClone = vScroll.querySelector("li").cloneNode(true);
    chatClone.querySelector(".friend img").src = selectedImg;
    chatClone.querySelector(".friend p").textContent = chat.friend;
    chatClone.querySelector(".me p").textContent = chat.me;
    vScroll.appendChild(chatClone);
    scrollToEnd();
  });
  vScroll.querySelectorAll("li").forEach((li, i) => {
    li.style.opacity = "1";
    if (i == 0) {
      li.remove();
    }
  });
}

// scroll to the bottom [==chatbox==]
function scrollToEnd() {
  vScroll.scrollTo({
    top: vScroll.scrollHeight,
    behavior: "smooth",
  });
}

// search the users when typing [==chatset==]
function searchQuery(e) {
  let queryText = e.target.value;
  let x = [...chatset.querySelectorAll("li")].filter((li) => {
    return li.querySelector("h3").textContent.toLowerCase().includes(queryText.toLowerCase());
  });
  chatset.querySelectorAll("li").forEach((li) => {
    li.style.display = "none";
  });
  x.forEach((li) => {
    li.style.display = "flex";
  });
}

// focus when search button is clicked.
function searchbarFocus() {
  searchbar.focus();
}
