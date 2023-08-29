const musics = [
  {
    img: "https://img.freepik.com/premium-photo/concept-media-presentations-retro-microphone-background-concert-show-poster-music-album-cover_494741-31960.jpg",
    title: "Interstellar: A Trip Hop Mix",
    artist: "Misiniformed Culture",
    duration: "1:15:55",
    songID: "1BxfuPKGuaTgP7aM0Bbdwr",
  },
  {
    img: "https://img.freepik.com/free-vector/music-speakers-album-cover-poster_1017-26877.jpg?w=2000",
    title: "Best of Trip-Hop | Rock | Electronic",
    artist: "Six Music",
    duration: "2:02:50",
    songID: "741UUVE2kuITl0c6zuqqbO",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5YOm9r3FLfjJzBnJT5sybLs7tqdnK4AZm__k71kbxhRSfgiFb2hfkkLAtZtQas3a87nM&usqp=CAU",
    title: "Inspiring mix | Chillout",
    artist: "Dreamy",
    duration: "1:00:07",
    songID: "3k79jB4aGmMDUQzEwa46Rz",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jjKE3R3hoRqb-v--I5KGVQz_FJb-8TEHlDztWWK1-ZbOfXR_-EcBi9I8WA5Hw2rNgPo&usqp=CAU",
    title: "Chill Study Beats | Pop Music [2022]",
    artist: "Chillhop Music",
    duration: "3:12:52",
    songID: "2nxy7TbWDWOBm2bseZJX2A",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu9vWalUhlLyye6SBjex3WHoY9w9JWHDsPpQ&usqp=CAU",
    title: "Hip Hop Jazz - Ours [2023]",
    artist: "Stay See",
    duration: "1:27:50",
    songID: "5eqiMMbaeUZ32Q7sS00H35",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58snkxxDtMe9nU30yf_8PZiIXomDr5inG8Q&usqp=CAU",
    title: "a darker kind of shimmer | Hip Hop Mix [2023]",
    artist: "Classic Beam",
    duration: "6:32:19",
    songID: "3BKD1PwArikchz2Zrlp1qi",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvC9EjyKFLIYCQDcHOQuc6AIFgguLgkjqag&usqp=CAU",
    title: "An Overture to soiree | Mooded Jazz Mix",
    artist: "PitchPlay",
    duration: "4:23:47",
    songID: "23RoR84KodL5HWvUTneQ1w",
  },
];

const cardContent = document.querySelector(".card-content");
const more = document.getElementById("more");
const countMusic = document.getElementById("countMusic");
const hidePlayer = document.querySelector(".hidePlayer");

countMusic.textContent = `${musics.length} Musics`;
musics.forEach((music, index) => {
  const li = document.createElement("li");
  li.setAttribute("data-open", index < 3 ? "yes" : "no");
  li.innerHTML = `
    <div class="card-thumbnail">
        <img
        src="${music.img}"
        alt=""
        />
        <small class="duration">${music.duration}</small>
    </div>
    <div>
        <h2>${music.title}</h2>
        <p>${music.artist}</p>
    </div>
    `;
  cardContent.appendChild(li);
});

more.addEventListener("click", openHandle);

function openHandle() {
  const listItems = document.querySelectorAll("li");

  listItems.forEach((li, index) => {
    li.setAttribute("data-open", index < 3 || more.classList.contains("close") ? "yes" : "no");
  });
  more.classList.toggle("close");
}

cardContent.querySelectorAll("li").forEach((song, index) => {
  song.addEventListener("click", () => {
    const play = document.querySelector(".play");
    const iframe = document.querySelector(".play");
    hidePlayer.style.display = "block";
    play.style.display = "block";
    iframe.src = `https://open.spotify.com/embed/track/${musics[index].songID}?utm_source=generator`;
  });
});

hidePlayer.addEventListener("click", () => {
  const play = document.querySelector(".play");
  play.style.display = "none";
  hidePlayer.style.display = "none";
});
