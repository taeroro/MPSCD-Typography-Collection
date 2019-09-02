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
  },
  {
    'type': "img",
    'content': "/img/[2]Shang_dynasty_inscribed_scapula.jpg",
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
for (elem of elementsArray) {
  elem.addEventListener("click", function(event) {
    if (event.target.nodeName === "IMG") {
      let img_lg = document.getElementById("img-lg");
      img_lg.src = event.target.src;

      // console.log(event.target.nodeName);
    }


    // for (let key in hex_arr) {
    //   var obj = hex_arr[key];
    //   console.log(obj.content);
    // }
  });
}

// elementsArray.forEach(function(elem) {
//   elem.addEventListener("click", clickHandler);
// });
