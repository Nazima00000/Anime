const romantic = [
  {
    id: 1,
    name: "Tunnel to summer the exit of goodbyes ",
    description: "A tunnel that can return the past or go the future",
    imageUrl:
      "https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/3118900/ERJz49lNMekBQDuBSBIw.jpg",
  },
  {
    id: 2,
    name: "A wisker away",
    description: "The girl turns into a cat to be with him",
    imageUrl:
      "https://img.ixbt.site/live/topics/preview/00/05/99/91/4d3d188745.jpg",
  },
  {
    id: 3,
    name: "Suzume",
    description:
      "Suzume saves the world from a door that has a worm coming out from inside",
    imageUrl:
      "https://sxodim.com/uploads/posts/2023/04/13/optimized/07a52c894ce4d4c7b929fd320bb385ab_1400x790-q-85.jpg",
  },
  {
    id: 4,
    name: "Horimiya",
    description:
      "Horimiya is a name of the same name from the names Hori and Miyamura",
    imageUrl:
      "https://somoskudasai.com/wp-content/uploads/2023/09/portada_horimiya-37.jpg",
  },
  {
    id: 5,
    name: "Laputa",
    description:
      "A boy and girl are looking fora lost island, which,accordion to legend,hides countless treasures",
    imageUrl:
      "https://i.ytimg.com/vi/fP6biHtRO5A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCyoLbpgJJAUf4UHyo3MkvQEvtmCQ",
  },
  {
    id: 6,
    name: "On your wave",
    description: "The guy who taught the girl how ti ride a wave",
    imageUrl:
      "https://kinotv.ru/upload/setka-editor/4d1/elgrrzx4rn75a71c7ialu4tkulze70a8.webp",
  },
  {
    id: 7,
    name: "Her deepest wish",
    description: "A girl on wheel meets a guy who will change her life",
    imageUrl:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/bfb2285a-37e8-4f30-8595-f23d7a4f989d/x178",
  },
  {
    id: 8,
    name: "Her blue sky",
    description: "A girl who dreamed of playing guitar together with one guy",
    imageUrl: "https://pbs.twimg.com/media/EgWgLGkXsAMH_5t.jpg",
  },
];
console.log(romantic);

const jenreContent = document.querySelector(".jenre-content");
const romanticMap = romantic.map((rom) => {
  return `
        <div class="jenre-box">
            <img src="${rom.imageUrl}" alt="" class="jenre-img">
            <h2 class="jenre-title">${rom.name}</h2>
            <i class="fa-regular fa-eye"></i>
            <i class='bx bx-star'>566</i>
        </div>
    `;
});

jenreContent.innerHTML += romanticMap.join("");
const actionMovie = [
  {
    id: 1,
    name: "Tokyo revengers",
    description: "",
    imageUrl:
      "https://awsimages.detik.net.id/community/media/visual/2022/10/19/manga-tokyo-revengers_169.jpeg?w=600&q=90",
  },
  {
    id: 2,
    name: "Demon slayer",
    description: "",
    imageUrl:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/demon-slayer-cast-feature.jpg",
  },
  {
    id: 3,
    name: "Dororo",
    description: "",
    imageUrl:
      "https://takamakiokerar.wordpress.com/wp-content/uploads/2019/06/thumb-1920-1126612.jpg?w=1400",
  },
  {
    id: 4,
    name: "Jujutsu Kaisen",
    description: "",
    imageUrl:
      "https://www.impericon.com/cdn/shop/articles/Jujutsu_Kaisen.webp?v=1718630060",
  },
  {
    id: 5,
    name: "Chainsaw man",
    description: "",
    imageUrl:
      "https://storage.googleapis.com/stateless-thedailyfandom-org/2023/05/f67e7858-1366_2000-1.jpeg",
  },
  {
    id: 6,
    name: "My hero academia",
    description: "",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@._V1_QL75_UX500_CR0,213,500,281_.jpg",
  },
  {
    id: 7,
    name: "Attack on Titan",
    description: "",
    imageUrl:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/12/attack-on-titan-characters.jpg",
  },
  {
    id: 8,
    name: "Tokyo ghoul",
    description: "",
    imageUrl:
      "https://animehunch.com/wp-content/uploads/2021/12/TokyoGhoul.jpg",
  },
];

// const jenreContent2 = document.querySelector(".jenre-content");
// const actionMovieMap = actionMovie.map((rom) => {
//   return `
//         <div class="jenre-box">
//             <img src="${rom.imageUrl}" alt="" class="jenre-img">
//             <h2 class="jenre-title">${rom.name}</h2>
//             <i class="fa-regular fa-eye"></i>
//             <i class='bx bx-star'>566</i>
//         </div>
//     `;
// });

jenreContent2.innerHTML += actionMovieMap.join("");

const comedy = [
  {
    id: 1,
    name: "Spy x family",
    description: "",
    imageUrl: "https://99px.ru/sstorage/53/2023/12/tmb_355092_549237.jpg",
  },
  {
    id: 2,
    name: "Toilet-bound",
    description: "",
    imageUrl:
      "https://static1.squarespace.com/static/5ace4845e17ba35c9d8eb95e/5e7fa8314ada5c7980200b4c/5e81bdc54ada5c798062e25f/1588065859127/hanako+kun+panel.PNG?format=1500w",
  },
  {
    id: 3,
    name: "Kamisama Kami",
    description: "",
    imageUrl:
      "https://media.myshows.me/shows/760/b/5b/b5bcfa71e9bbc1e73ab2131ae17b0aa9.jpg",
  },
  {
    id: 4,
    name: "Mashle",
    description: "",
    imageUrl:
      "https://resizing.flixster.com/qi53IBdkGBxlSo5Kc1mr9sqCXlM=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24451901_i_h9_ab.jpg",
  },
  {
    id: 5,
    name: "Eminence in shadow",
    description: "",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYquq6l9La9eo8VfzGdCgH5v_iHtrcT1ASdFD8fEy1e3HIZvw_hR1uKqs5pBmh1oNRLXk&usqp=CAU",
  },
  {
    id: 6,
    name: "Deadly games",
    description: "",
    imageUrl: "",
  },
  {
    id: 7,
    name: "Dangers in my heart",
    description: "",
    imageUrl:
      "https://img.seriebox.com/series/26/26741/_thumbs/400_200/boku-no-kokoro-no-yabai-yatsu_1680616539.jpg",
  },
  {
    id: 8,
    name: "Case of the benozom hot springs murder",
    description: "",
    imageUrl:
      "https://kinotv.ru/upload/resize_cache/iblock/339/339010f2ec6f2cd9177356957092c3ae/1200_1200_1/9ebedafd0a641fd96c6c224433201700.jpg",
  },
];
console.log(comedy);

{
  /* <div class="jenre-box">
<img src="./tokyo.jpeg" alt="" class="jenre-img">
<h2 class="jenre-title">Tokyo Revengers</h2>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam.</p>
<i class='bx bx-star'>373</i>
</div> */
}

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const resultList = document.getElementById('result-list');

const data = [
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'Node.js',
  'Vue.js',
  'Angular',
  'TypeScript',
  'Python',
  'Java',
];

searchButton.addEventListener('click', function() {
  const query = searchInput.value.toLowerCase();
  const filteredData = data.filter(item => item.toLowerCase().includes(query));
  
  resultList.innerHTML = '';

  if (filteredData.length > 0) {
    filteredData.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      resultList.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'Результаты не найдены';
    li.classList.add('no-results');
    resultList.appendChild(li);
  }
});
