var reasons=[
    "Clifford Perez",
    "Alicia Aguilar",
    "Matilda Perez",
    "Mateo Escalante",
    "Jess Escalante",
    "Lesley Escalante",
  ];
  var images=[
    "https://cdn140.picsart.com/238960419069212.png",
    "https://www.educapeques.com/wp-content/uploads/2020/05/abuela.png",
    "https://www.jing.fm/clipimg/full/35-353045_mom-cartoon-clipart-imagenes-de-mam-animado.png",
    "https://cdn.shopify.com/s/files/1/2068/3659/files/FatherTimeBread_FelixBust.png?v=1510449596",
    "https://i.pinimg.com/originals/0e/29/34/0e293421325f616a5e78cd4582f6e5a4.png",
    "https://images.vexels.com/media/users/3/136828/isolated/preview/48dcc02768bd3e747daa066986f15bd5-caricatura-de-ni-a-de-compras-con-bolsas-by-vexels.png"
  ];
  var i=0;
  function nextslide() {
    document.getElementById("reasontext").innerHTML = reasons[i];
   document.getElementById("album").src=images[i];
    i++;
    document.getElementById("audio").play();
  };