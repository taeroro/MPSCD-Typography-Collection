const hex_arr = [
  {
    'type': "text",
    'content': "A",
  },
  {
    'type': "text",
    'content': "B",
  },
  {
    'type': "text",
    'content': "C",
  },
  {
    'type': "text",
    'content': "D",
  },
  {
    'type': "img",
    'content': "XX",
  },
  {
    'type': "text",
    'content': "E",
  },
  {
    'type': "text",
    'content': "F",
  },
  {
    'type': "text",
    'content': "G",
  },
  {
    'type': "img",
    'content': "XX",
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
  console.log(obj.type + ", " + obj.content);

  // Single hexagon
  let hex_gird = document.getElementById("hexGrid");
  let hex_li = document.createElement("li");
  let hex_div = document.createElement("div");
  // let hex_p = document.createElement("p");
  // hex_p.innerHTML = obj.content;
  // hex_p.setAttribute("class", "text");
  // hex_div.appendChild(hex_p);
  let hex_a = document.createElement("a");
  let hex_img = document.createElement("img");

  // hex_img.src = "https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg";
  hex_a.setAttribute("class", "hexLink")
  hex_a.appendChild(hex_img);
  hex_div.appendChild(hex_a);

  hex_div.setAttribute("class", "hexIn");
  hex_li.appendChild(hex_div);
  hex_li.setAttribute("class", "hex");
  hex_gird.appendChild(hex_li);

  // <a class="hexLink" href="#">
}
