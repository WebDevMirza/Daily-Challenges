const navToggle = document.querySelector('.mirza-toggle');
const profileSection = document.querySelector(".profile-section");
const userID = document.querySelectorAll(".userID");
const body = document.body;
const bell = document.querySelector(".ti-bell");
const noofReplies = document.querySelectorAll(".no-of-replies");
// const hideTooltip = document.querySelector(".tooltip-container");

navToggle.addEventListener('click', toggleNav);
// hideTooltip.addEventListener('click', () => {
//     hideTooltip.style.display = "none";
// })

userID.forEach((user) => {
  user.addEventListener("click", (e) => {
    profileSection.classList.toggle("active");
  });
});

noofReplies.forEach((reply) => {
  reply.addEventListener("click", (e) => {
    let totalReplies = e.target.closest(".view-replies").children;
    for (const totalReply of totalReplies) {
      totalReply.style.display = "flex";
    }
    e.target.closest(".view-replies").children[0].style.display = "none";
  });
})

body.addEventListener("click", (e) => {
  if (e.target.classList.contains("userID")) return;

  if (e.target !== profileSection) {
    profileSection.classList.remove("active");
  }
});

bell.addEventListener("click", ()=>{
    alert("Sorry, you don't have any notifications");
});

function toggleNav() {
    document.getElementById('nav-icon3').classList.toggle('open');
    const isActive = navToggle.getAttribute('data-active') === 'true';
    navToggle.setAttribute('data-active', isActive ? 'false' : 'true');
    document.body.classList.toggle('stop-moving');
}
