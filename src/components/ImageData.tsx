
const Images = [
  {
    id: 36,
    title: "audio",
    date: 2022,
    image: require("../assets/HOME/MN_audio.jpg"),
    tag: "mine",
    link: "/audio",
  },
  {
    id: 35,
    title: "video edits",
    date: 2022,
    image: require("../assets/HOME/MN_video.png"),
    tag: "mine",
    link: "/video",
  },
  {
    id: 34,
    title: "she otw",
    date: 2022,
    image: require("../assets/HOME/N_sheotw.jpg"),
    tag: "neeltje",
    link: "/sheotw",
  },
  {
    id: 33,
    title: "here, my thoughts",
    date: 2022,
    image: require("../assets/HOME/32 N_wall1.jpg"),
    tag: "neeltje",
    link: "/thoughts",
  },
  {
    id: 31,
    title: "braiding, in silence",
    date: 2021,
    image: require("../assets/HOME/N_braiding.jpg"),
    tag: "neeltje",
    link: "/braiding",
  },
  {
    id: 30,
    title: "dingen die ik niet vergeet",
    date: 2021,
    image: require("../assets/HOME/M_dingenhome.png"),
    tag: "mies",
    link: "/dingenVergeet",
  },
  {
    id: 29,
    title: "zinnen in een allerdaagse waas",
    date: 2021,
    image: require("../assets/HOME/M_waas.png"),
    tag: "mies",
    link: "/zinnen",
  },
  {
    id: 28,
    title: "embody; feel - come back - do not percieve me",
    date: 2021,
    image: require("../assets/HOME/29 N_embody.jpg"),
    tag: "neeltje",
    link: "/embody",
  },
  {
    id: 27,
    title: "prettiest girl at the party",
    date: 2021,
    image: require("../assets/HOME/N_prettiest.jpg"),
    tag: "neeltje",
    link: "/party",
  },
  {
    id: 26.1,
    title: "on the streets",
    date: 2021,
    image: require("../assets/HOME/8 MN_streets.JPG"),
    tag: "mine",
    link: "/streets",
  },
  // {
  //   id: 26,
  //   title: "kind aan zee",
  //   date: 2021,
  //   image: require("../assets/HOME/27 M_kindaanzee.png"),
  //   tag: "mies",
  //   link: "/kindaanzee",
  // },
  // {
  //   id: 25,
  //   title: "kind aan zee - merch",
  //   date: 2021,
  //   image: require("../assets/HOME/M_merch.jpeg"),
  //   tag: "mies",
  //   link: "/kindaanzee/merch",
  // },
  {
    id: 24,
    title: "torn torn torn, as is life",
    date: 2021,
    image: require("../assets/HOME/N_torn.jpg"),
    tag: "neeltje",
    link: "/torn",
  },
  {
    id: 23,
    title: "torn maybe..",
    date: 2021,
    image: require("../assets/HOME/N_butterfly.jpg"),
    tag: "neeltje",
    link: "/tornmaybe",
  },
  {
    id: 22,
    title: "again again again",
    date: 2021,
    image: require("../assets/HOME/23 N_again.jpg"),
    tag: "neeltje",
    link: "/again",
  },
  {
    id: 21,
    title: "nwaad",
    date: 2021,
    image: require("../assets/HOME/21 MN_nwaa.jpg"),
    tag: "mine",
    link: "/nwaad",
  },
  {
    id: 20,
    title: "glitteren",
    date: 2021,
    image: require("../assets/HOME/N_glitteren.jpg"),
    tag: "neeltje",
    link: "/glitteren",
  },
  {
    id: 19,
    title: "melancholy angel",
    date: 2021,
    image: require("../assets/HOME/N_party.png"),
    tag: "neeltje",
    link: "/angel",
  },
  {
    id: 18,
    title: "sketches are also something",
    date: 2021,
    image: require("../assets/HOME/M_sketches.jpg"),
    tag: "mies",
    link: "/sketches",
  },
  {
    id: 17,
    title: "sorrow revolution",
    date: 2021,
    image: require("../assets/HOME/18 N_sorrow.jpg"),
    tag: "neeltje",
    link: "/alterEgo",
  },
  {
    id: 16,
    title: "doek",
    date: 2021,
    image: require("../assets/HOME/17 MN_doek.jpg"),
    tag: "mine",
    link: "/doek",
  },
  {
    id: 15,
    title: "blendr exploration",
    date: 2021,
    image: require("../assets/HOME/M_blendr.jpg"),
    tag: "mies",
    link: "/blendr",
  },
  {
    id: 14,
    title: "excerpts of connection",
    date: 2021,
    image: require("../assets/HOME/N_maya.png"),
    tag: "neeltje",
    link: "/excerpts",
  },
  {
    id: 13,
    title: "nostalgia",
    date: 2021,
    image: require("../assets/HOME/14 MN_shoot2.jpg"),
    tag: "mine",
    link: "/nostalgia",
  },
  {
    id: 13,
    title: "nostalgia zee",
    date: 2021,
    image: require("../assets/HOME/13 MN_zee.jpg"),
    tag: "mine",
    link: "/nostalgiaZee",
  },

  {
    id: 12,
    title: "CC1996 & FDALC???1992",
    date: 2021,
    image: require("../assets/HOME/12 MN_broek.jpg"),
    tag: "mine",
    link: "/cc1996",
  },
  {
    id: 11,
    title: "IHAHOAS '1992",
    date: 2021,
    image: require("../assets/MESH/detail.jpg"),
    tag: "mine",
    link: "/mesh",
  },
  {
    id: 10,
    title: "iwiwf",
    date: 2020,
    image: require("../assets/HOME/10 M_IWIWF.jpg"),
    tag: "mies",
    link: "/iwiwf",
  },
  {
    id: 9,
    title: "blauwdruk",
    date: 2020,
    image: require("../assets/HOME/M_blauwdruk.jpg"),
    tag: "mies",
    link: "/blauwdruk",
  },
  {
    id: 7,
    title: "A0",
    date: 2020,
    image: require("../assets/HOME/M_MIESA0.png"),
    tag: "mies",
    link: "/A0",
  },
  {
    id: 6,
    title: "sadgirlwearables",
    date: 2020,
    image: require("../assets/HOME/N_sieraden2.png"),
    tag: "neeltje",
    link: "/wearables",
  },
  {
    id: 5,
    title: "in color",
    date: 2019,
    image: require("../assets/HOME/M_color.jpg"),
    tag: "mies",
    link: "/incolor",
  },
  {
    id: 2,
    title: "the hole trap",
    date: 2019,
    image: require("../assets/HOLETRAP/book.jpeg"),
    tag: "mies",
    link: "/holetrap"
  },
  {
    id: 4,
    title: "florilegium blonde",
    date: 2020,
    image: require("../assets/HOME/28 N_florilegium.jpeg"),
    tag: "neeltje",
    link: "/florilegium",
  },
  {
    id: 3,
    title: "blaadjes romance",
    date: 2018,
    image: require("../assets/HOME/29 N_blaadje.png"),
    tag: "neeltje",
    link: "/romance",
  },
  {
    id: 2,
    title: "droom archief",
    date: 2018,
    image: require("../assets/HOME/30 N_droom.jpg"),
    tag: "neeltje",
    link: "/droom",
  }

];

export default Images;
