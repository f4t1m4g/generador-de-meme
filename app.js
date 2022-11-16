//SELECTORES//

const $ = (selector) => document.querySelector(selector);
const $$ = (id) => document.getElementById(id);

//TEMA DE PAGINA//

$('#dark-btn').addEventListener('click', () => {
  document.body.classList.remove('dark-theme')
})

$('#ligth-btn').addEventListener('click', () => {
  document.body.classList.add('dark-theme')
})

//URL DE IMAGEN//

let inputURL = $('#img-input');
let img = $("#img-meme");

inputURL.addEventListener("input", (event) => {
  img.style.backgroundImage = `url(${inputURL.value})`;
});


//PANELES//

let panel = $("#canvas");
let panelTxt = $("#panel-txt");
let panelImg = $("#panel-img");
let botonImg = $("#img-btn");
let botonText = $("#text-btn");
let botonCerrarPanel = $("#btn-close-panel");

const ocultarPanelTexto = () => {
  panelTxt.classList.add("oculto");
  panelImg.classList.remove("oculto");
}

const ocultarPanelImagen = () => {
  panelImg.classList.add("oculto");
  panelTxt.classList.remove("oculto");
}

const abrirPanel = () => {
  panel.classList.remove("oculto");
}

const cerrarPanel = () => {
  panel.classList.add("oculto");
}

botonImg.addEventListener('click', ocultarPanelTexto);
botonImg.addEventListener('click', abrirPanel);
botonText.addEventListener('click', ocultarPanelImagen);
botonText.addEventListener('click', abrirPanel);

botonCerrarPanel.addEventListener('click', cerrarPanel);

//F0NDO DE MEME//

$('#color-input').addEventListener('input', (evento) => {
  $('#color-input-text').innerText = evento.target.value.toUpperCase();
  $('#img-meme').style.backgroundColor = evento.target.value;
});

$('#color-select').addEventListener('change', (evento) => {
  $('#img-meme').style.backgroundBlendMode = evento.target.value;
});

//FILTROS DE MEME//

const actualizarFiltros = () => {
  let brightness = $$('brightness').value;
  let opacity = $$('opacity').value;
  let blur = $$('blur').value;
  let contrast = $$('contrast').value;
  let grayscale = $$('grayscale').value;
  let hue = $$('hue').value;
  let sepia = $$('sepia').value;
  let saturate = $$('saturate').value;
  let invert = $$('invert').value;

  $('#img-meme').style.filter = `brightness(${brightness}) opacity(${opacity}) blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturate}%) invert(${invert})`;
}

const resetearFiltros = () => {
  $('#brightness').value = 1;
  $('#opacity').value = 1;
  $('#blur').value = 0;
  $('#contrast').value = 100;
  $('#grayscale').value = 0;
  $('#hue').value = 0;
  $('#sepia').value = 0;
  $('#saturate').value = 100;
  $('#invert').value = 0;

  actualizarFiltros()
}

$('#brightness').addEventListener('change', actualizarFiltros);
$('#opacity').addEventListener('change', actualizarFiltros);
$('#blur').addEventListener('change', actualizarFiltros);
$('#contrast').addEventListener('change', actualizarFiltros);
$('#grayscale').addEventListener('change', actualizarFiltros);
$('#hue').addEventListener('change', actualizarFiltros);
$('#sepia').addEventListener('change', actualizarFiltros);
$('#saturate').addEventListener('change', actualizarFiltros);
$('#invert').addEventListener('change', actualizarFiltros);

$("#btn-filter").addEventListener('click', resetearFiltros)


//TEXTO DE IMAGEN//

$("#top-text-edit").addEventListener("input", (event) => {
  $("#top-text").innerText = event.target.value;
});

$("#top-bottom-edit").addEventListener("input", (event) => {
  $("#bottom-text").innerText = event.target.value;
});

//SIN TEXTO//

const checboxTextoSuperior = () => {
  if ($('#no-top-text').checked) {
  $('#top-text').classList.add('oculto')
  console.log('QUE PASA')
} else {
  $('#top-text').classList.remove('oculto')
}
}

const checboxTextoInferior = () => {
if ($('#no-bottom-text').checked) {
  $('#bottom-text').classList.add('oculto')
} else {
  $('#bottom-text').classList.remove('oculto')
}
}

$('#no-top-text').addEventListener('change', checboxTextoSuperior);
$('#no-bottom-text').addEventListener('change', checboxTextoInferior);


//FUENTE DE TEXTO// 

$('#font-text').addEventListener('change', (evento) => {
  let fuenteTexto = $('#font-text').value;
  $('#top-text').style.fontFamily = fuenteTexto;
  $('#bottom-text').style.fontFamily = fuenteTexto;
})

//TAMAÑO DE TEXTO//

$('#text-size').addEventListener('input', (evento) => {
  const sizeTexto = $('#text-size').value;
  $('#top-text').style.fontSize = `${sizeTexto}px`;
  $('#bottom-text').style.fontSize = `${sizeTexto}px`;
})

//ALINEACIÓN DE TEXTO//

$('#align-left').addEventListener('click', () => {
    $('#top-text').style.textAlign = ('left');
    $('#bottom-text').style.textAlign = ('left');
})

$('#align-center').addEventListener('click', () => {
  $('#top-text').style.textAlign = ('center');
  $('#bottom-text').style.textAlign = ('center');
})

$('#align-right').addEventListener('click', () => {
  $('#top-text').style.textAlign = ('right');
  $('#bottom-text').style.textAlign = ('right');
})

//COLOR DE TEXTO Y FONDO//

const cambiarColorTexto = (evento) => {
  $('#color-text').innerText = evento.target.value.toUpperCase();
  $('#top-text').style.color = evento.target.value;
  $('#bottom-text').style.color = evento.target.value;
}

$('#text-color').addEventListener('input', cambiarColorTexto);

const cambiarColorFondo = () => {
  if (!$('#background-checkbox').checked) {
    const color = $('#text-fondo').value;
    $('#fondo-text').innerText = color.toUpperCase();
    $('#top-text').style.backgroundColor = color;
    $('#bottom-text').style.backgroundColor = color;
  } else {
    $('#top-text').style.backgroundColor = 'transparent';
    $('#bottom-text').style.backgroundColor = 'transparent';
  }
  if ($('#background-checkbox').checked) {
    $('#top-text').style.position = 'absolute';
    $('#bottom-text').style.position = 'absolute';
  } else {
    $('#top-text').style.position = 'static';
    $('#bottom-text').style.position = 'static';
  }
}

$('#text-fondo').addEventListener('input', cambiarColorFondo);

$('#background-checkbox').addEventListener('change', cambiarColorFondo);

//CONTORNO DE TEXTO//

$("#sin-contorno-btn").addEventListener('click', () => {
  $('#top-text').classList.add("no-contorno");
  $('#bottom-text').classList.add("no-contorno");
  $('#top-text').classList.remove("contorno-claro");
  $('#bottom-text').classList.remove("contorno-claro");
  $('#top-text').classList.remove("contorno-oscuro");
  $('#bottom-text').classList.remove("contorno-oscuro");
})

$("#contorno-claro-btn").addEventListener('click', () => {
  $('#top-text').classList.add("contorno-claro");
  $('#bottom-text').classList.add("contorno-claro");
  $('#top-text').classList.remove("no-contorno");
  $('#bottom-text').classList.remove("no-contorno");
  $('#top-text').classList.remove("contorno-oscuro");
  $('#bottom-text').classList.remove("contorno-oscuro");
})

$("#contorno-oscuro-btn").addEventListener('click', () => {
  $('#top-text').classList.add("contorno-oscuro");
  $('#bottom-text').classList.add("contorno-oscuro");
})

//ESPACIADO DE TEXTO//

$('#spacing-letter-input').addEventListener('change', (evento) => {
  let espaciadoTexto = $('#spacing-letter-input').value;
  $('#top-text').style.padding = `${espaciadoTexto}px 50px`;
  $('#bottom-text').style.padding = `${espaciadoTexto}px 50px`;
})

//INTERLINEADO DE TEXTO//

$('#lineheigth-input').addEventListener('change', () => {
  let lineHeight = $('#lineheigth-input').value;
  $('#top-text').style.lineHeight = lineHeight;
  $('#bottom-text').style.lineHeight = lineHeight;
})

//RESIZE//

window.addEventListener('resize',() => {
  $('#meme').style.height = `${$('#meme').getBoundingClientRect().width}px`;
})

//DESCARGAR MEME//

const descargarMeme = () => {
    domtoimage.toBlob($$('meme')).then(function (blob) {
      saveAs(blob, 'mi-meme.png');
    })
}

$$('downdlad-btn').addEventListener('click', descargarMeme);
  
