const hex_arr = [
  {
    'type': "text",
    'content': "1",
  },
  {
    'type': "text",
    'content': "2",
  },
  {
    'type': "text",
    'content': "3",
  },
  {
    'type': "text",
    'content': "4",
  },
  {
    'type': "text",
    'content': "5",
  },
  {
    'type': "text",
    'content': "6",
  },
  {
    'type': "text",
    'content': "7",
  },
  {
    'type': "text",
    'content': "8",
  },
  {
    'type': "text",
    'content': "9",
  },
  {
    'type': "img",
    'content': "/img/[1]C_QDN8hXkAIvXTg.jpg",
    'description': "Helvetica / Neue Haas Grotesk - one of the world’s favorite typeface",
  },
  {
    'type': "text",
    'content': "11",
  },
  {
    'type': "text",
    'content': "12",
  },
  {
    'type': "text",
    'content': "13",
  },
  {
    'type': "text",
    'content': "14",
  },
  {
    'type': "img",
    'content': "/img/[4]5fed23482365aa146bf61c815253650f.jpg",
    'description': "Egyptian Hieroglyphs - a cornerstone of ancient writing systems",
  },
  {
    'type': "img",
    'content': "/img/[2]Shang_dynasty_inscribed_scapula.jpg",
    'description': "甲骨文 “Oracle bone script” - the origin of Chinese characters",
  },
  {
    'type': "text",
    'content': "17",
  },
  {
    'type': "text",
    'content': "18",
  },
  {
    'type': "text",
    'content': "19",
  },
  {
    'type': "img",
    'content': "/img/[3]5GGISTWGJU5C3H5QBXD36ILKJM.jpg",
    'description': "Robert Palladino’s calligraphy at Reed College - what inspired Steve Jobs to design/apply wonderful typography to personal computers",
  },
  {
    'type': "text",
    'content': "21",
  },
  {
    'type': "text",
    'content': "22",
  },
  {
    'type': "text",
    'content': "23",
  },
  {
    'type': "img",
    'content': "/img/[5]comment_zHQhJePu2VYZKophPKxf68QgrAO5mUD1.jpg",
    'description': "Blackletter - one variation of blackletter was the official typeface for Nazi, contribute to the reason why we stopped using this typeface",
  },
  {
    'type': "text",
    'content': "25",
  },
  {
    'type': "text",
    'content': "26",
  },
  {
    'type': "text",
    'content': "27",
  },
  {
    'type': "text",
    'content': "28",
  },
  {
    'type': "text",
    'content': "29",
  },
  {
    'type': "text",
    'content': "30",
  },
  {
    'type': "text",
    'content': "H",
  },
  {
    'type': "text",
    'content': "H",
  },
  {
    'type': "text",
    'content': "H",
  },
  {
    'type': "text",
    'content': "H",
  },
  {
    'type': "text",
    'content': "H",
  },
  {
    'type': "text",
    'content': "H",
  },
  {
    'type': "text",
    'content': "H",
  },
  {
    'type': "text",
    'content': "H",
  },
  {
    'type': "text",
    'content': "H",
  },
  {
    'type': "text",
    'content': "H",
  },
  {
    'type': "text",
    'content': "H",
  },
];

for (let key in hex_arr) {
  var obj = hex_arr[key];

  // Single hexagon
  let hex_gird = document.getElementById("hexGrid");
  let hex_li = document.createElement("li");
  let hex_div = document.createElement("div");
  let hex_a = document.createElement("a");
  let hex_img = document.createElement("img");
  let hex_p = document.createElement("p");

  let img_canvas = document.getElementById("imgCanvas");
  // let img_lg = document.getElementById("img-lg");

  if (obj.type === "img") {
    hex_img.src = obj.content;
    console.log(obj.description);
    hex_img.alt = obj.description;
    // img_lg.src = obj.content;
  }

  hex_a.setAttribute("class", "hexLink")
  hex_a.setAttribute("id", key)
  hex_a.appendChild(hex_img);

  // hex_p.innerHTML = obj.content;
  hex_p.innerHTML = "";
  hex_p.setAttribute("class", "text");

  // hex_a.appendChild(hex_p);
  hex_div.appendChild(hex_a);

  hex_div.setAttribute("class", "hexIn");
  hex_li.appendChild(hex_div);
  hex_li.setAttribute("class", "hex");
  hex_gird.appendChild(hex_li);

  // <a class="hexLink" href="#">
}


let elementsArray = document.getElementsByClassName("hexLink");
let elementClicked = false;
for (elem of elementsArray) {
  elem.addEventListener("click", function(event) {
    elementClicked = true;

    if (event.target.nodeName === "IMG") {
      let img_con = document.getElementById("img-container");
      img_con.style.display = "block";
      img_con.style.opacity = "1";

      let img_lg = document.getElementById("img-lg");
      img_lg.src = event.target.src;

      let img_des = document.getElementById("img-description");
      img_des.innerHTML = event.target.alt;

      let typed_cursor = document.getElementsByClassName("typed-cursor");
      typed_cursor[0].style.display = "none";
      typed_cursor[0].style.opacity = "0";

      let typed = document.getElementById("typed");
      typed.style.display = "none";
      typed.style.opacity = "0";
    }
  });
}

let icon_container = document.getElementById("icon-container");
icon_container.addEventListener("click", function(event) {
  let img_lg = document.getElementById("img-lg");
  img_lg.src = "";

  let img_con = document.getElementById("img-container");
  img_con.style.display = "none";
  img_con.style.opacity = "0";

  let typed_cursor = document.getElementsByClassName("typed-cursor");
  typed_cursor[0].style.display = "block";
  typed_cursor[0].style.opacity = "1";

  let typed = document.getElementById("typed");
  typed.style.display = "block";
  typed.style.opacity = "1";
});
