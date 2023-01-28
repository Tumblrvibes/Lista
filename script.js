var lista_colores = [];
function guardar(){
    var color1=document.getElementById("color1").value;
    var color2=document.getElementById("color2").value;
    var color3=document.getElementById("color3").value;
    var color4=document.getElementById("color4").value;

    lista_colores.unshift(color1);
    lista_colores.unshift(color2);
    lista_colores.unshift(color3);
    lista_colores.unshift(color4);

    console.log(lista_colores);
    
    document.getElementById("resultado").innerHTML=lista_colores;
    document.getElementById("guardar").style.display="none";
    document.getElementById("ordenar").style.display="inline-block";
}
function ordenar(){
    lista_colores.sort();
    console.log(lista_colores);
    document.getElementById("resultado").innerHTML=lista_colores;
}