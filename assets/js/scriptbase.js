document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    const item = this.parentElement;
    item.classList.toggle("active");
  });
});

document.querySelectorAll(".sub-accordion-header").forEach((subHeader) => {
  subHeader.addEventListener("click", function () {
    const subItem = this.parentElement;
    subItem.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const headers = document.querySelectorAll(".accordion-header, .sub-accordion-header");
  
  headers.forEach(header => {
    header.addEventListener("click", function() {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });

  mostrarTodosLosProductos();

  const subContentButtons = document.querySelectorAll(".sub-content-button");
  subContentButtons.forEach(button => {
    button.addEventListener("click", function() {
      const categoria = this.textContent.trim();
      const categorias = {
        "- Notebooks": "Notebook",
        "- Kits de actualizacion": "KitActualizacion",
        "- Procesadores AMD": "ProcesadoresAMD",
        "- Procesadores Intel": "ProcesadoresIntel",
        "- Mothers AMD": "MotherAMD",
        "- Mothers Intel": "MotherIntel",
        "- Placas de Video GeForce": "VideoGeForce",
        "- Placas de Video Radeon AMD": "VideoAMD",
        "- Memorias": "Ram",
        "- Memorias Notebook": "RamNotebook",
        "- Discos Rigidos": "HDD",
        "- Discos Solidos": "SSD",
        "- Tarjetas de Memoria Micro SD": "MicroSD",
        "- Coolers Fan": "CoolerFan",
        "- Coolers CPU": "CoolerCPU",
        "- Pasta Termica": "PastaT",
        "- Gabinetes": "Gabinete",
        "- Modding | Cables, Iluminación y otros": "Modding",
        "- Fuentes de Alimentacion": "Fuente",
        "- Monitores y pantallas": "Monitor",
        "- Auriculares": "Auriculares",
        "- Teclados": "Teclado",
        "- Mouses": "Mouse",
        "- Webcams": "Webcam",
        "- Joysticks": "Joystick",
        "- Mousepads": "Mousepads",
        "- Parlantes": "Parlantes",
        "- Combos de Teclados, Mouses y otros": "Combo",
        "- Microfono": "Microfono",
        "- Sillas Gamer": "SillaG",
        "- Robots": "Robot",
        "- Placas de red inalambricas": "PlacaRI",
        "- Routers WiFi": "Router",
        "- Estabilizadores": "Estabilizador",
        "- UPS": "UPS",
        "- Cables y adaptadores": "Modding",
        "- Celulares": "Celular",
        "- Accesorios de celulares": "Funda",
        "- Impresoras y Multifunciones": "Impresora",
        "- Insumos Originales": "Insumos",
        "- Televisores": "Televisores"
      };
      const categoriaFiltro = categorias[categoria] || "";
      if (categoriaFiltro) {
        mostrarProductosPorCategoria(categoriaFiltro);
      }
    });
  });

subContentButtons.forEach((button) => {
  button.addEventListener("click", function () {
    switch (this.textContent.trim()) {
      case "- Notebooks":
        mostrarNotebooks();
        break;
      case "- Kits de actualizacion":
        mostrarKA();
        break;
      case "- Procesadores AMD":
        mostrarProceAMD();
        break;
      case "- Procesadores Intel":
        mostrarProceIntel();
        break;
      case "- Mothers AMD":
        mostrarMotherAMD();
        break;
      case "- Mothers Intel":
        mostrarMotherIntel();
        break;
      case "- Placas de Video GeForce":
        mostrarVideoG();
        break;
      case "- Placas de Video Radeon AMD":
        mostrarVideoAMD();
        break;
      case "- Memorias":
        mostrarRam();
        break;
      case "- Memorias Notebook":
        mostrarRamN();
        break;
      case "- Discos Rigidos":
        mostrarHDD();
        break;
      case "- Discos Solidos":
        mostrarSSD();
        break;
      case "- Tarjetas de Memoria Micro SD":
        mostrarMSD();
        break;
      case "- Coolers Fan":
        mostrarCF();
        break;
      case "- Coolers CPU":
        mostrarCCPU();
        break;
      case "- Pasta Termica":
        mostrarPT();
        break;
      case "- Gabinetes":
        mostrarGabi();
        break;
      case "- Modding | Cables, Iluminación y otros":
        mostrarModd();
        break;
      case "- Fuentes de Alimentacion":
        mostrarFuente();
        break;
      case "- Auriculares":
        mostrarAuri();
        break;
      case "- Teclados":
        mostrarTeclado();
        break;
      case "- Mouses":
        mostrarMouse();
        break;
      case "- Webcams":
        mostrarWebcam();
        break;
      case "- Joysticks":
        mostrarJoystic();
        break;
      case "- Mousepads":
        mostrarMousepad();
        break;
      case "- Monitores y pantallas":
        mostrarMon();
        break;
      case "- Parlantes":
        mostrarParlantes();
        break;
      case "- Combos de Teclados, Mouses y otros":
        mostrarCombo();
        break;
      case "- Microfono":
        mostrarMicro();
        break;
      case "- Sillas Gamer":
        mostrarSillaG();
        break;
      case "- Robots":
        mostrarRobot();
        break;
      case "- Placas de red inalambricas":
        mostrarPlacaRI();
        break;
      case "- Routers WiFi":
        mostrarRouter();
        break;
      case "- Estabilizadores":
        mostrarEsta();
        break;
      case "- UPS":
        mostrarUPS();
        break;
      case "- Cables y adaptadores":
        mostrarCables();
        break;
      case "- Celulares":
        mostrarCelular();
        break;
      case "- Acesorios de celulares":
        mostrarFunda();
        break;
      case "- Impresoras y Multifunciones":
        mostrarImpresora();
        break;
      case "- Insumos Originales":
        mostrarInsumos();
        break;
      case "- Televisores":
        mostrarTelevisor();
        break;
      default:
        console.log("Botón no reconocido");
    }
  });
});

  document.getElementById("eliminarFiltro").addEventListener("click", function() {
    mostrarTodosLosProductos();
  });

  document.getElementById('sort-price-high').addEventListener('click', function() {
    ordenarPorPrecio('desc');
  });

  document.getElementById('sort-price-low').addEventListener('click', function() {
    ordenarPorPrecio('asc');
  });
});

// Funciones mostrar

function mostrarNotebooks() {
  mostrarProductosPorCategoria("Notebook");
  cambiarContenido(
    "imagenArriba",
    "./assets/Img-Productos/laptop.jpg",
    "notebooks"
  );
}

function mostrarKA() {
  mostrarProductosPorCategoria("KitActualizacion");
  cambiarContenido("imagenArriba","./assets/Img-Productos/update.jpg", "Kits de Actualizacion");
}
function mostrarProceAMD() {
  mostrarProductosPorCategoria("ProcesadoresAMD");
  cambiarContenido(
    "imagenArriba",
    "./assets/Img-Productos/Procesadores_AMD.jpg",
    "Procesadores AMD"
  );
}
function mostrarProceIntel() {
  mostrarProductosPorCategoria("ProcesadoresIntel");
  cambiarContenido(
    "imagenArriba",
    "./assets/Img-Productos/Procesadores_Intel.jpg",
    "Procesadores Intel"
  );
}
function mostrarMotherAMD() {
  mostrarProductosPorCategoria("MotherAMD");
  cambiarContenido(
    "imagenArriba",
    "./assets/Img-Productos/Mothers_AMD.jpg",
    "Mothers AMD"
  );
}
function mostrarMotherIntel() {
  mostrarProductosPorCategoria("MotherIntel");
  cambiarContenido(
    "imagenArriba",
    "./assets/Img-Productos/Mother_Intel.jpg",
    "Mothers Intel"
  );
}
function mostrarVideoG() {
  mostrarProductosPorCategoria("VideoGeForce");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Placas_Video_Nvidia.jpg", "PLACA DE VIDEO GEFORCE");
}

function mostrarVideoAMD() {
  mostrarProductosPorCategoria("VideoAMD");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Placas_de_Video_Radeon.jpg", "PLACA DE VIDEO RADEON AMD");
}

function mostrarRam() {
  mostrarProductosPorCategoria("Ram");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/ram.jpeg", "MEMORIAS");
}

function mostrarRamN() {
  mostrarProductosPorCategoria("RamNotebook");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/RamLaptop.jpg", "MEMORIAS NOTEBOOK");
}

function mostrarHDD() {
  mostrarProductosPorCategoria("HDD");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Discos_Rigidos.jpg", "DISCOS RIGIDOS");
}

function mostrarSSD() {
  mostrarProductosPorCategoria("SSD");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "DISCOS SOLIDOS");
}

function mostrarMSD() {
  mostrarProductosPorCategoria("MicroSD");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "MICRO SD");
}

function mostrarCF() {
  mostrarProductosPorCategoria("CoolerFan");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/coolers.jpg", "COOLERS FAN");
}

function mostrarCCPU() {
  mostrarProductosPorCategoria("CoolerCPU");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/cpu_cooler.jpg", "COOLERS CPU");
}

function mostrarPT() {
  mostrarProductosPorCategoria("PastaT");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "PASTA TERMICA");
}

function mostrarGabi() {
  mostrarProductosPorCategoria("Gabinete");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/gabinetes.jpg", "GABINETES");
}

function mostrarModd() {
  mostrarProductosPorCategoria("Modding");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "MODDING | CABLES, ILUMINACIÓN Y OTROS");
}

function mostrarFuente() {
  mostrarProductosPorCategoria("Fuente");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "FUENTES");
}

function mostrarMon() {
  mostrarProductosPorCategoria("Monitor");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/monitores.jpg", "MONITORES");
}

function mostrarAuri() {
  mostrarProductosPorCategoria("Auriculares");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/auricular1.jpg", "AURICULARES");
}

function mostrarTeclado() {
  mostrarProductosPorCategoria("Teclado");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Teclados-2.jpg", "TECLADOS");
}

function mostrarMouse() {
  mostrarProductosPorCategoria("Mouse");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Mouses-2.jpg", "MOUSES");
}

function mostrarWebcam() {
  mostrarProductosPorCategoria("Webcam");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/webcam.jpg", "WEBCAMS");
}

function mostrarJoystic() {
  mostrarProductosPorCategoria("Joystick");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "JOYSTICKS");
}

function mostrarMousepad() {
  mostrarProductosPorCategoria("Mousepads");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/mousepad.jpg", "MOUSEPADS");
}

function mostrarParlantes() {
  mostrarProductosPorCategoria("Parlantes");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "PARLANTES");
}

function mostrarCombo() {
  mostrarProductosPorCategoria("Combo");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "COMBOS");
}

function mostrarMicro() {
  mostrarProductosPorCategoria("Microfono");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "MICROFONOS");
}

function mostrarSillaG() {
  mostrarProductosPorCategoria("SillaG");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos", "SILLAS GAMER");
}

function mostrarRobot() {
  mostrarProductosPorCategoria("Robot");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "ROBOT");
}

function mostrarPlacaRI() {
  mostrarProductosPorCategoria("PlacaRI");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "PLACAS DE RED INALAMBRICAS");
}

function mostrarRouter() {
  mostrarProductosPorCategoria("Router");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "ROUTERS WIFI");
}

function mostrarEsta() {
  mostrarProductosPorCategoria("Estabilizador");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/estabilizadores.jpg", "ESTABILIZADORES");
}

function mostrarUPS() {
  mostrarProductosPorCategoria("UPS");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "UPS");
}

function mostrarCables() {
  mostrarProductosPorCategoria("Modding");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/cables y otros.jpg", "CABLES Y ADAPTADORES");
}

function mostrarCelular() {
  mostrarProductosPorCategoria("Celular");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/celulares.jpg", "CELULARES");
}

function mostrarFunda() {
  mostrarProductosPorCategoria("Funda");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/celulares.jpg", "ACCESORIOS CELULARES");
}

function mostrarImpresora() {
  mostrarProductosPorCategoria("Impresora");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "IMPRESORAS");
}

function mostrarInsumos() {
  mostrarProductosPorCategoria("Insumos");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "INSUMOS ORIGINALES");
}

function mostrarTelevisor() {
  mostrarProductosPorCategoria("Televisores");
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "TELEVISORES");
}

function mostrarTodosLosProductos() {
  productosFiltrados = productos.slice(); 
  actualizarContenedor(productosFiltrados);
  cambiarContenido("imagenArriba", "./assets/Img-Productos/Destacados_Productos.jpg", "PRODUCTOS DESTACADOS");
}

function mostrarProductosPorCategoria(categoria) {
  productosFiltrados = filtrarProductosPorCategoria(categoria);
  actualizarContenedor(productosFiltrados);
  cambiarContenido("imagenArriba", `./assets/Img-Productos/${categoria}.jpg`, categoria.toUpperCase());
}

function actualizarContenedor(productos) {
  const contenedor = document.getElementById("contenedor_cards");
  contenedor.innerHTML = "";

  productos.forEach(producto => {
    contenedor.innerHTML += crearCard(producto);
  });
}

function ordenarPorPrecio(orden) {
  if (orden === 'asc') {
    productosFiltrados.sort((a, b) => convertirPrecioAFloat(a.Precio) - convertirPrecioAFloat(b.Precio));
  } else if (orden === 'desc') {
    productosFiltrados.sort((a, b) => convertirPrecioAFloat(b.Precio) - convertirPrecioAFloat(a.Precio));
  }

  actualizarContenedor(productosFiltrados);
}

function convertirPrecioAFloat(precio) {
  return parseFloat(precio.replace('$', '').replace(/\./g, '').replace(',', '.'));
}

function crearCard(producto) {
  return `
    <div class="card" style="width: 240px;">
      <img src="${producto.Imagen}" class="card-img" alt="${producto.Nombre}">
      <div class="card-body">
        <h5 class="card-title">${producto.Nombre}</h5>
        <p class="card-price">${producto.Precio}</p>
        <div class="caja-boton">
          <a href="#" class="card-button">SUMAR AL CARRITO</a>
        </div>
      </div>
    </div>
  `;
}

function filtrarProductosPorCategoria(categoria) {
  return productos.filter((producto) => producto.Categoria === categoria);
}

function cambiarContenido(divId, nuevaimagen, nuevotexto) {
  const div = document.getElementById(divId);
  const img = div.querySelector("img");
  const texto = div.querySelector("h3");

  if (img) {
    img.src = nuevaimagen;
    img.alt = nuevotexto;
  }

  if (texto) {
    texto.textContent = nuevotexto;
  }
}
