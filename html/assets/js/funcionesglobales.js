// window['EventManager'].appocultar.emit();
// function mostrar (e) {
//     console.log(window['EventManager']);
//     window['EventManager'].appocultar.emit();
// }
// function mostrar (e) {
//     console.log(window['EventManager']);
//     window['EventManager'].appocultar.emit();
// }
function PrintCaptureDisable(e) {
    var info = e.info;
    var el = document.createElement('textarea');
    el.value = info ? info : 'Print Capture Cancel';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
function consolelog(e) {
    console.log(e);
}
function buscar(e) {
    // console.log(e);
    return '';
    // console.log(window['EventManager']);
    // window['EventManager'].appocultar.emit();
}
function type(e) {
    // console.log(e);
    return '';
    // console.log(window['EventManager']);
    // window['EventManager'].appocultar.emit();
}
function legajo(options) {
    // console.log(options);
    return 'Leg: ' + options.value;
}
function calculartotalesrandom(options) {
    // console.log(options);
    return 5;
}
function cargarmonaco() {
}
function desactivarmodoproduccion(options) {
    console.clear();
    window['EventManager'].setCookie('mododesarrollador', '');
    window['EventManager'].deletescript('funcionesadvancedbeta', null);
    window['EventManager'].addexternalscript('funcionesadvanced', window['EventManager'].pathglobal + 'advanced/js');
    window['EventManager'].deletecss('cssadvancedbeta'); // aca llamaria al css personalizado del cliente
    window['EventManager'].addcssexternal('cssadvanced', window['EventManager'].pathglobal + 'advanced/css'); // aca llamaria al css personalizado del cliente
    window['EventManager'].alert('Modo Desarrollador Desactivado!', { type: 'info' });
}
function activarmodoproduccion(options) {
    window['EventManager'].setCookie('mododesarrollador', 'beta');
    window['EventManager'].deletescript('funcionesadvanced', null);
    window['EventManager'].addexternalscript('funcionesadvancedbeta', window['EventManager'].pathglobal + 'advanced/jsbeta');
    window['EventManager'].deletecss('cssadvanced'); // aca llamaria al css personalizado del cliente
    window['EventManager'].addcssexternal('cssadvancedbeta', window['EventManager'].pathglobal + 'advanced/cssbeta'); // aca llamaria al css personalizado del cliente
    window['EventManager'].alert('Modo Desarrollador!');
    console.log("%cModo Desarrollador Activado!", "color:red;font-family:system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold");
    console.log('%cLas funciones personalizadas estaran editables solo para los que esten en mododesarrollador. Compile el codigo editado al estar completado y probado, para habilitarlo al resto de los usuarios!', "font-family:system-ui;font-size:1rem;font-weight:bold");
}
function cambiarmodoproduccion(options) {
    if (window['EventManager'].getcookie('mododesarrollador') === 'beta') {
        desactivarmodoproduccion(options);
    }
    else {
        activarmodoproduccion(options);
    }
    setTimeout(function () {
        inicializarcodigo(options);
    }, 100);
}
function compilarjavascript(options) {
    var data = options.group.value.beta;
    window['EventManager'].patchform.emit({ formname: options.formname, data: {
            data: data
        }
    });
    var formanme = options.formname;
    setTimeout(function () {
        window['EventManager'].saveform(formanme);
        window['EventManager'].alert('Codigo Compilado!');
    }, 500);
}
function cambiartipocodigovisor(options) {
    if (options.idform === 'idadvanced' && options.field.name === 'type') {
        cambiartipoinicialvisor(options.event);
        /*
        codigo par probar los extras
        */
        //    pruebasistemas(options);
        /*-------------------------*/
    }
}
function cambiartipoinicialvisor(val) {
    switch (val) {
        case 'js':
            window['EventManager']['Elementcodigoavanzadobeta'].setOption('mode', 'javascript');
            break;
        case 'css':
            window['EventManager']['Elementcodigoavanzadobeta'].setOption('mode', 'css');
            break;
        default:
            window['EventManager']['Elementcodigoavanzadobeta'].setOption('mode', 'javascript');
            break;
    }
}
function acomodarbotonesmodoproduccion(options) {
    console.log(options);
}
function ejecutarjavascript(options) {
    window['EventManager'].saveform(options.formname);
    setTimeout(function () {
        window['EventManager'].deletescript('funcionesadvanced', null);
        window['EventManager'].deletescript('funcionesadvancedbeta', null);
        window['EventManager'].addscript('funcionesadvancedbeta');
        window['EventManager'].deletecss('cssadvanced');
        window['EventManager'].deletecss('cssadvancedbeta'); // aca llamaria al css personalizado del cliente
        window['EventManager'].addcssexternal('cssadvancedbeta', window['EventManager'].pathglobal + 'advanced/cssbeta'); // aca llamaria al css personalizado del cliente
        window['EventManager'].alert('Codigo Ejecutado!');
    }, 1000);
}
function inicializarcodigo(options) {
    if (window['EventManager'].getcookie('mododesarrollador') === 'beta') {
        window['EventManager']['Elementcodigoavanzadomodo'].setOption('field.label', 'Desactivar Modo Desarrollador');
        window['EventManager']['Elementcodigoavanzadomodo'].setOption('class', 'btn-secondary');
    }
    else {
        window['EventManager']['Elementcodigoavanzadomodo'].setOption('class', 'btn-primary');
        window['EventManager']['Elementcodigoavanzadomodo'].setOption('field.label', 'Activar Modo Desarrollador');
    }
    cambiartipoinicialvisor(window['EventManager']['Elementcodigoavanzadotype'].getOption('group').value.type);
}
// console.log(window['EventManager']['Elementcodigoavanzadomodo'].getOptions());
// console.log(window['EventManager']['Elementcodigoavanzadoname'].setValue('hola'));
// console.log(window['EventManager']['Elementcodigoavanzadoname'].getValue());
// window['EventManager']['Elementcodigoavanzadomodo'].setOption('field.options.hidden',true);
