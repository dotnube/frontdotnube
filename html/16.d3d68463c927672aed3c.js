(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{kiPX:function(i,n,t){"use strict";t.d(n,"a",function(){return e});var o=t("CcnG"),r=t("gIcY"),l=t("6blF"),e=(t("H18U"),t("tXlq"),t("/YwC"),t("20mB"),function(){function i(i,n,t,r,l){var e=this;this.fb=i,this.alert=n,this.eventmanager=t,this.formdinamicoservice=r,this.httpadit=l,this.fields=[],this.submit=new o.n,this.actualizar=new o.n,this.detectchanges=0,this.forminvalido=0,this.ruta="informes",this.idform="id",this.elemento="id",this.updateOn="change",this.valorestemporales={},this.mododesarrollador=this.getcookie("mododesarrollador");try{this.suscripcion20=this.eventmanager.eventGlobal("getinfodesarrollador").subscribe(function(i){if(e.mododesarrollador=e.eventmanager.getcookie("mododesarrollador"),e.mododesarrollador){var n={};n.dato=e.dato,n.elemento=e.elemento,n.fields=e.fields,n.form=e.form,n.forminvalido=e.forminvalido,n.formname=e.formname,n.idform=e.idform,n.informe=e.informe,n.ruta=e.ruta,n.tipoinforme=e.tipoinforme,n.updateOn=e.updateOn,n.valorestemporales=e.valorestemporales,n.valornulo=e.valornulo,n.value=e.value,console.log("Form Dinamic",n)}},function(i){})}catch(a){}}return i.prototype.ngOnDestroy=function(){this.suscripcion20&&this.suscripcion20.unsubscribe()},Object.defineProperty(i.prototype,"value",{get:function(){return this.form.value},enumerable:!0,configurable:!0}),i.prototype.setTipoForm=function(i){this.tipoinforme=i},i.prototype.resetform=function(){this.form.reset(),this.valorestemporales={},this.dato=this.randomId()},i.prototype.randomId=function(){return Math.floor(999999*Math.random())+1},i.prototype.pasarvalor=function(i,n,t,o){var r=this;if(this.ruta&&(this.ruta=n),this.idform&&(this.idform=t),o||(o={}),o.where||(o.where={}),"object"==typeof this.idform)for(var l=i.split(","),e=0;e<this.idform.length;e++)o.where[this.idform[e]]=l[e];else o.where[this.idform]=i;this.renovarValores(),this.dato&&this.resetform();var a="?filter="+JSON.stringify(o);this.httpadit.get(this.ruta+a).subscribe(function(t){Object.keys(t).forEach(function(n){if(r.informe=new Object(t[n]),"informes"===r.ruta){r.informe[r.idform]=r.informe.id,r.informe.tipo=r.tipoinforme;try{r.form.patchValue(JSON.parse(r.informe.datos))}catch(o){window.EventManager.logerror(o)}}else r.form.patchValue(r.informe);r.dato=i}),r.formdinamicoservice.seteditando(!1),r.formdinamicoservice.fincambiarform({idform:r.idform,dato:i,ruta:n})})},i.prototype.pasarvalorActualizado=function(i){if(this.informe=new Object(i),"informes"===this.ruta){this.informe[this.idform]=this.informe.id,this.informe.tipo=this.tipoinforme;try{this.form.patchValue(JSON.parse(this.informe.datos))}catch(n){window.EventManager.logerror(n)}}else this.form.patchValue(this.informe);this.dato=i,this.formdinamicoservice.seteditando(!1),this.formdinamicoservice.fincambiarform({idform:this.idform,dato:i,ruta:this.ruta})},i.prototype.ngOnInit=function(){var i=this;this.formdinamicoservice.field&&(this.fields=this.formdinamicoservice.field),this.form=this.createControl(),"informes"===this.ruta&&(this.formdinamicoservice.nombreform&&(this.tipoinforme=this.formdinamicoservice.nombreform),this.eventmanager.eventGlobal("changetipoform").subscribe(function(n){i.tipoinforme=n}))},i.prototype.onSubmit=function(i){i.preventDefault(),i.stopPropagation()},i.prototype.guardar=function(i,n,t){var o=this;if(this.form.valid){var r;if("object"==typeof this.idform){r={};for(var e=0;e<this.idform.length;e++)r[this.idform[e]]=this.informe[this.idform[e]]}else r=this.informe[this.idform];"informes"===this.ruta&&(this.informe.datos=JSON.stringify(this.form.value),this.informe.tipo=this.tipoinforme,this.informe.user=1,this.informe.fecha=new Date);var a=!0;if("object"==typeof this.idform)for(e=0;e<this.idform.length;e++)null==this.informe[this.idform[e]]&&(a=!1);else a=void 0!==this.informe[this.idform];var s=Object.assign({},this.informe),u=this.compareJSONactualizar(s,this.form.value);return a?u?new l.a(function(l){o.updateinforme(u,r).subscribe(function(r){return r&&(o.informe=r,o.respuesta=r),o.formdinamicoservice.cambiarTabla(!0),o.formdinamicoservice.seteditando(!1),o.alert.bien("Guardado"),n&&o.formdinamicoservice.ir(i,n,t),l.next(!0)},function(i){return o.alert.error("Error al Guardar"),window.EventManager.logerror(i),l.next(!1)})}):(this.alert.advertencia("No hay cambios para Guardar"),new l.a(function(i){return i.next(!1)})):((s=u)[this.idform]||(s[this.idform]=0,this.valornulo&&(s[this.idform]=null)),new l.a(function(r){o.saveinforme(s).subscribe(function(l){if(l)return o.informe=l,o.formdinamicoservice.cambiarTabla(!0),o.formdinamicoservice.seteditando(!1),o.alert.bien("Creado"),n?(o.formdinamicoservice.ir(i,n,t),r.next(!0)):r.next(l)},function(i){return o.alert.error("Error al Guardar"),window.EventManager.logerror(i),r.next(!1)})}))}return this.validateAllFormFields(this.form),this.alert.advertencia("Formulario Invalido"),this.forminvalido++,this.actualizar.emit(!0),new l.a(function(i){return i.next(!1)})},i.prototype.getalert=function(){return this.alert},i.prototype.compareJSONactualizar=function(i,n){var t=!1,o={};if("object"==typeof this.idform)for(var r=0;r<this.idform.length;r++)i[this.idform[r]]&&(o[this.idform[r]]=i[this.idform[r]]);else i[this.idform]&&(o[this.idform]=i[this.idform]);for(var l in this.valorestemporales)n.hasOwnProperty(l)||(o[l]=this.valorestemporales[l],i[l]=this.valorestemporales[l],t=!0);for(var e in n)i.hasOwnProperty(e)?i[e]!==n[e]&&(o[e]=n[e],i[e]=n[e],t=!0):n[e]&&(o[e]=n[e],i[e]=n[e],t=!0);return!!t&&o},i.prototype.compareJSON=function(i,n){for(var t in n)i.hasOwnProperty(t)?i[t]!==n[t]&&(i[t]=n[t]):i[t]=n[t];return i},i.prototype.compareJSONtemporales=function(i){for(var n in this.valorestemporales)i.hasOwnProperty(n)||(i[n]=this.valorestemporales[n]);return i},i.prototype.createControl=function(){var i=this,n=this.fb.group({});return this.renovarValores(),this.fields.forEach(function(t){if(t.options||(t.options={}),t.options.validations||(t.options.validations=[]),t.validations=t.options.validations,"button"===t.type);else{var o={validators:i.bindValidations(t.validations||[]),asyncValidators:i.bindValidationsAsync(t.validations||[]),updateOn:i.bindValidationsAsynctrue(t.validations||[])},l=new r.g(t.value,o);n.addControl(t.name,l)}}),n},i.prototype.recargarControl=function(){this.form=null,this.form=this.createControl()},i.prototype.bindValidations=function(i){if(i.length>0){var n=[];return i.forEach(function(i){if(!i.async){switch(i.name){case"required":i.validator=r.x.required;break;case"min":var t=Number.parseInt(i.params);Number.isNaN(t)||(i.validator=r.x.min(t));break;case"max":t=Number.parseInt(i.params),Number.isNaN(t)||(i.validator=r.x.max(t));break;case"requiredTrue":i.validator=r.x.requiredTrue;break;case"email":i.validator=r.x.email;break;case"minLength":t=Number.parseInt(i.params),Number.isNaN(t)||(i.validator=r.x.minLength(t));break;case"maxLength":t=Number.parseInt(i.params),Number.isNaN(t)||(i.validator=r.x.maxLength(t));break;case"pattern":i.validator=r.x.pattern(i.params);break;case"nullValidator":i.validator=r.x.nullValidator;break;default:try{window[i.name]?i.validator=window[i.name]:console.log("no existe la funcion para validar: "+i.name)}catch(o){console.log(o)}}i.validator&&n.push(i.validator)}}),r.x.compose(n)}return null},i.prototype.bindValidationsAsynctrue=function(i){var n="change";if(i.length>0)for(var t=0;t<i.length;t++)i[t].async&&(n=!i[t].updateOn||"submit"!==i[t].updateOn&&"blur"!==i[t].updateOn&&"change"!==i[t].updateOn?"blur":i[t].updateOn);return n},i.prototype.bindValidationsAsync=function(i){if(i.length>0){var n=[];return i.forEach(function(i){if(i.async)switch(i.name){case"required":case"min":case"max":case"requiredTrue":case"email":case"minLength":case"maxLength":case"pattern":case"nullValidator":break;default:try{window[i.name]?(i.validator=window[i.name],n.push(i.validator)):console.log("no existe la funcion para validar: "+i.name)}catch(t){console.log("error en funcion para validar: "+i.name),console.log(t)}}}),r.x.composeAsync(n)}return null},i.prototype.validateAllFormFields=function(i){var n=this;Object.keys(i.controls).forEach(function(t){var o=i.get(t);o instanceof r.g?o.markAsTouched({onlySelf:!0}):o instanceof r.i&&n.validateAllFormFields(o)})},i.prototype.renovarValores=function(){this.informe=new Object,"informes"===this.ruta&&(this.informe.tipo=this.tipoinforme,this.informe.user=1,this.informe.fecha=new Date)},i.prototype.updateinforme=function(i,n){if("object"==typeof this.idform){var t=!1,o={};return Object.keys(n).forEach(function(r){o[r]=i[r],n[r]!==i[r]&&(t=!0)}),t?this.httpadit.patch(this.ruta+"/changeids",{exid:n,newid:o,data:i}):this.httpadit.patch(this.ruta+"/",i)}return this.httpadit.patch(n!==i[this.idform]?this.ruta+"/changeid/"+n+"/"+i[this.idform]:this.ruta+"/"+i[this.idform],i)},i.prototype.saveinforme=function(i){return this.httpadit.post(this.ruta+"/",i)},i.prototype.patchvalue=function(i){this.form.patchValue(i),this.patchtemporales(i)},i.prototype.patchtemporales=function(i){var n=this;i&&"object"==typeof i&&Object.keys(i).forEach(function(t){n.valorestemporales[t]=i[t]})},i.prototype.getcookie=function(i){for(var n=i+"=",t=document.cookie.split(";"),o=0;o<t.length;o++){for(var r=t[o];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(n))return decodeURIComponent(r.substring(n.length,r.length))}return""},i}())},pfTW:function(i,n,t){"use strict";t.r(n);var o=t("CcnG"),r=t("xtb/"),l=(t("kiPX"),t("tXlq")),e=t("h/uZ"),a=(t("bHpV"),t("H18U")),s=t("Q6jE"),u=t("20mB"),c=function(){function i(i,n,t,o,r,l,e,a){var s=this;this._route=i,this.formdinamicoservice=n,this.visualUsuario=t,this.eventmanager=o,this.ref=r,this.creafavoritos=l,this.httpadit=e,this.dialog=a,this.tipoinforme="",this.ruta="",this.nombretabladinamica="",this.opciones={},this.nombreform="",this.nuevoelemento="Creando ",this.edicionelemento="Editando ",this.btnguardar="Crear",this.regConfig=[],this.editar=!1,this.enviaraescritorio=!1,this.favorito=!1,this.direction=!1,this.valdirection="column",this.valornulo=!1,this.nombreform="",this.subtitle="",window.onbeforeunload=function(i){var n=i||window.event;n&&s.formdinamicoservice.editando&&(n.returnValue="Se perderan todos los datos que no hayas guardado")}}return i.prototype.detectChanges=function(){this.ref&&!this.ref.destroyed&&this.ref.detectChanges()},i.prototype.submit=function(i){},i.prototype.enviar=function(i){},i.prototype.cancelar=function(i){this.cerrardialog()},i.prototype.ngOnInit=function(){var i=this;this.suscripcion1=this._route.params.subscribe(function(n){i.idinforme=n.id||"fabricantes",i.cargarFormDinamico(i.idinforme),i.editar=!1,i.getdirection(),i.getFavorito(!0),i.detectChanges()}),this.suscripcion8=this.eventmanager.eventGlobal("cambiarruta").subscribe(function(n){i.noir=!1,i.activerouter=n.opciones.activerouter,i.routerlink=n.opciones.routerlink,i.queryparams=n.opciones.queryparams,i.openDialog(i.modalconfirmacion)})},i.prototype.ngAfterViewInit=function(){var i=this;this.idinforme&&this.formdinamicoservice.cambiarid(this.idinforme),this.suscripcion2=this.eventmanager.eventGlobal("changeid").subscribe(function(n){var t=n.id;t&&(i.form.pasarvalor(t),i.editar=!0,i.idelemento=t,i.getFavorito())}),this.suscripcion3=this._route.queryParams.subscribe(function(n){try{var t=n;if(n.id){var o=i.formdinamicoservice.decodificar(n.id);if(o&&(t="string"==typeof JSON.parse(o)?JSON.parse(JSON.parse(o)):JSON.parse(o)),t.idinforme&&(i.idinforme=t.idinforme,i.formdinamicoservice.cambiarid(t.idinforme),i.editar=!0,i.idelemento=t.idinforme),!i.idform){var r=Object.keys(t)[0];i.tengovalor=t[r],i.idelemento=i.tengovalor,i.primer=!0}t[i.idform]?(i.idelemento=t[i.idform],i.formdinamicoservice.cambiarid(t[i.idform]),i.editar=!0):(r=Object.keys(t)[0],i.tengovalor=t[r],i.primer=!0,i.idelemento=i.tengovalor,i.formdinamicoservice.cambiarid(t[i.tengovalor]))}}catch(l){}})},i.prototype.cargarInformeDinamico=function(i){var n=this;"informes"===i?this.suscripcion4=this.httpadit.get("FormDinamicos/?filter[where][Nombre]="+i+"&filter[fields][Elementos]=false").subscribe(function(i){try{var t=JSON.parse(i.Elementos);n.regConfig=[],n.regConfig=t,n.form.fields=[],n.form.fields=n.regConfig,n.form.recargarControl()}catch(o){}},function(i){n.httpadit.errorget(i)}):this.suscripcion5=this.httpadit.get("FormDinamicos/?filter[where][Nombre]="+i+"&filter[fields][Elementos]=false").subscribe(function(i){try{var t=JSON.parse(i.Elementos);n.regConfig=[],n.regConfig=t,n.form.fields=[],n.form.fields=n.regConfig,n.form.recargarControl()}catch(o){}},function(i){n.httpadit.errorget(i)})},i.prototype.cargarFormDinamico=function(i){if("informes"===i)this.ocultar=!1;else{this.ocultar=!0;var n=void 0;if(this._route.snapshot.data.datos&&this._route.snapshot.data.datos[0]?(n=this._route.snapshot.data.datos[0],this.formdinamicoservice.datosform=this._route.snapshot.data.datos[0]):n=this.formdinamicoservice.datosform,n){this.icono=n.icono,this.ruta=n.ruta;var t=n.elementos;this.regConfig=[],this.regConfig=t,this.form?(this.form.fields=[],this.form.fields=this.regConfig,this.form.recargarControl()):this.formdinamicoservice.field=this.regConfig,this.nombreform=n.titulo,this.idform=n.idform,this.tipoinforme=n.tipoinforme,this.opciones=n.opciones,this.opciones&&this.opciones.valornulo&&(this.valornulo=!0),this.nombretabladinamica=n.nombretabladinamica,this.subtitle=n.subtitulo,this.comentarios=n.comentarios,this.propiedadescomentarios=n.propiedadescomentarios}this.tengovalor&&this.primer&&(this.formdinamicoservice.cambiarid(this.tengovalor),this.editar=!0,this.primer=!1)}},i.prototype.cargarTitulo=function(i){var n=this;this.suscripcion7=this.httpadit.get("nombreformularios/?filter[where][valor]="+i+"&filter[fields][nombre]=false").subscribe(function(i){n.nombreform=i.nombre,window.EventManager.setTitleEmpresa(n.nombreform)},function(i){n.httpadit.errorget(i)})},i.prototype.nuevo=function(i){this.noir=!0,this.formdinamicoservice.editando&&i?this.openDialog(i):(this.idelemento=null,this.editar=!1,this.form.resetform(),this.form.renovarValores(),this.formdinamicoservice.vaciarvalores(),this.formdinamicoservice.rutaactual(this._route),this.formdinamicoservice.seteditando(!1))},i.prototype.cartelcancelar=function(i){this.formdinamicoservice.editando&&i&&this.openDialog(i)},i.prototype.onSubmit=function(){this.form.guardar(this.activerouter)},i.prototype.restoreForm=function(){this.formdinamicoservice.id?this.formdinamicoservice.recargarvalores():this.nuevo(),this.formdinamicoservice.seteditando(!1),this.cerrardialog()},i.prototype.openDialog=function(i){this.sidebarClose(),window.innerWidth<=450&&window,window.innerHeight<600&&window,this.dialogRef=this.dialog.open(i,{})},i.prototype.clickmio=function(i,n){var t="";switch(1===n&&this.tabladinamica.funcion.click&&(t=this.tabladinamica.funcion.click),2===n&&(t=this.tabladinamica.funcion.dblclick?this.tabladinamica.funcion.dblclick:"open"),4===n&&this.tabladinamica.funcion.derclick&&(t=this.tabladinamica.funcion.derclick),3===n&&(t=this.tabladinamica.funcion.ruedita?this.tabladinamica.funcion.ruedita:"opentab"),t){case"open":this.ir(i[this.idform]);break;case"log":window.EventManager.log(i);break;case"opentab":this.irtab(i[this.idform])}},i.prototype.setdirection=function(i){this.direction=i,i?(this.visualUsuario.setLayoutTabla("true",this.ruta),this.valdirection="row"):(this.visualUsuario.setLayoutTabla("false",this.ruta),this.valdirection="column")},i.prototype.getdirection=function(){!0===this.visualUsuario.getLayoutTabla(this.ruta)?(this.direction=!0,this.valdirection="row"):(this.direction=!1,this.valdirection="column")},i.prototype.setFavorito=function(i){this.favorito=i;try{var n=JSON.parse(JSON.stringify('{"'+this.idform+'":"'+this.idelemento+'"}'));i?this.creafavoritos.creofavorito(this.nombreform,this.icono,n):this.creafavoritos.quitarfavoritos(this.nombreform,this.icono,n)}catch(t){}},i.prototype.setEnviarEscritorio=function(i){this.enviaraescritorio=i,i?this.creafavoritos.creofavorito(this.nombreform,this.icono):this.creafavoritos.quitarfavoritos(this.nombreform,this.icono)},i.prototype.getFavorito=function(i){var n=this;if(i)this.creafavoritos.soyFavorito(this.nombreform,this.icono).subscribe(function(i){n.enviaraescritorio=!(!i||!i.length)});else try{var t=JSON.parse(JSON.stringify('{"'+this.idform+'":"'+this.idelemento+'"}'));this.creafavoritos.soyFavorito(this.nombreform,this.icono,t).subscribe(function(i){n.favorito=!(!i||!i.length)})}catch(o){}},i.prototype.guardarycontinuar=function(){this.noir?(this.noir=!1,this.form.guardar(),this.nuevo()):this.form.guardar(this.activerouter,this.routerlink,this.queryparams),this.cerrardialog()},i.prototype.noguardarycontinuar=function(){this.cerrardialog(),this.formdinamicoservice.seteditando(!1),this.noir?(this.noir=!1,this.nuevo()):this.formdinamicoservice.ir(this.activerouter,this.routerlink,this.queryparams)},i.prototype.cerrardialog=function(){this.dialogRef&&this.dialogRef.close()},i.prototype.ir=function(i){var n='{"'+this.idform+'":"'+i+'"}',t=this._route.toString(),o=t.indexOf("'")+1;t=t.slice(o,t.indexOf("'",o)),this.formdinamicoservice.ir(this._route,"/"+t,n)},i.prototype.irtab=function(i){var n='{"'+this.idform+'":"'+i+'"}',t=this._route.toString(),o=t.indexOf("'")+1;t=t.slice(o,t.indexOf("'",o)),this.formdinamicoservice.irtab("/"+t,n)},i.prototype.ngOnDestroy=function(){this.suscripcion1&&this.suscripcion1.unsubscribe(),this.suscripcion2&&this.suscripcion2.unsubscribe(),this.suscripcion3&&this.suscripcion3.unsubscribe(),this.suscripcion4&&this.suscripcion4.unsubscribe(),this.suscripcion5&&this.suscripcion5.unsubscribe(),this.suscripcion6&&this.suscripcion6.unsubscribe(),this.suscripcion7&&this.suscripcion7.unsubscribe(),this.suscripcion8&&this.suscripcion8.unsubscribe()},i.prototype.sidebarClose=function(){var i=document.getElementsByTagName("body")[0];document.getElementsByClassName("navbar-toggler")[0].classList.remove("toggled"),i.classList.remove("nav-open");var n=document.getElementsByClassName("close-layer")[0];n&&n.remove()},i}(),d=function(){return function(){}}(),m=t("t68o"),f=t("zbXB"),b=t("NcP4"),h=t("PMZn"),p=t("JgYj"),v=t("Kx81"),g=t("iyiK"),y=t("QvFI"),B=t("v1Kq"),k=t("g1AD"),x=t("pMnS"),w=t("W8VD"),N=t("9lwt"),O=t("n90K"),C=t("xyLg"),L=t("9Bt9"),F=t("Ip0R"),S=t("qAlS"),D=t("Fzqc"),E=t("+EyX"),j=t("HF1C"),P=t("21Lb"),_=t("OzfB"),I=t("OXe7"),J=t("61mI"),V=t("ZYCi"),z=o.rb({encapsulation:0,styles:[["@media (min-width:991px){.maximizar[_ngcontent-%COMP%]{z-index:500;position:fixed;top:0;right:0;bottom:0;margin:0;width:calc(100% - 40px);height:calc(100%);background-color:#fff}}@media (max-width:991px){.maximizar[_ngcontent-%COMP%]{z-index:500;position:fixed;top:0;left:70;right:0;bottom:0;margin:0;width:calc(100%);height:calc(100%);background-color:#fff}}.mio[_ngcontent-%COMP%]{background-color:#fff;padding:3px!important;border-radius:5px;overflow:auto}.header_fix[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:0}.botones_footer[_ngcontent-%COMP%]{clear:both;white-space:nowrap;overflow-x:auto;padding-top:5px;padding-bottom:5px}.alinear_right[_ngcontent-%COMP%]{text-align:right}"]],data:{}});function q(i){return o.Nb(0,[(i()(),o.tb(0,0,null,null,1,"i",[["class","material-icons lisadit star"],["style","color: #FFD700;"]],null,[[null,"click"]],function(i,n,t){var o=!0;return"click"===n&&(o=!1!==i.component.setEnviarEscritorio(!1)&&o),o},null,null)),(i()(),o.Lb(-1,null,["star"]))],null,null)}function G(i){return o.Nb(0,[(i()(),o.tb(0,0,null,null,1,"i",[["class","material-icons lisadit star_border"]],null,[[null,"click"]],function(i,n,t){var o=!0;return"click"===n&&(o=!1!==i.component.setEnviarEscritorio(!0)&&o),o},null,null)),(i()(),o.Lb(-1,null,["star_border"]))],null,null)}function M(i){return o.Nb(0,[(i()(),o.tb(0,0,null,null,1,"span",[["style","font-size: 12px"]],null,null,null,null,null)),(i()(),o.Lb(1,null,[" - ",""]))],null,function(i,n){i(n,1,0,n.component.subtitle)})}function T(i){return o.Nb(0,[(i()(),o.tb(0,0,null,null,1,"i",[["class","material-icons lisadit favorite"],["style","color:#d60202;"]],null,[[null,"click"]],function(i,n,t){var o=!0;return"click"===n&&(o=!1!==i.component.setFavorito(!1)&&o),o},null,null)),(i()(),o.Lb(-1,null,["favorite"]))],null,null)}function A(i){return o.Nb(0,[(i()(),o.tb(0,0,null,null,1,"i",[["class","material-icons lisadit favorite_border"]],null,[[null,"click"]],function(i,n,t){var o=!0;return"click"===n&&(o=!1!==i.component.setFavorito(!0)&&o),o},null,null)),(i()(),o.Lb(-1,null,["favorite_border"]))],null,null)}function U(i){return o.Nb(0,[(i()(),o.tb(0,0,null,null,1,"i",[["class","material-icons lisadit view_column"]],null,[[null,"click"]],function(i,n,t){var o=!0;return"click"===n&&(o=!1!==i.component.setdirection(!1)&&o),o},null,null)),(i()(),o.Lb(-1,null,["view_column"]))],null,null)}function H(i){return o.Nb(0,[(i()(),o.tb(0,0,null,null,1,"i",[["class","material-icons lisadit view_stream"]],null,[[null,"click"]],function(i,n,t){var o=!0;return"click"===n&&(o=!1!==i.component.setdirection(!0)&&o),o},null,null)),(i()(),o.Lb(-1,null,["view_stream"]))],null,null)}function Y(i){return o.Nb(0,[(i()(),o.tb(0,0,null,null,1,"app-comentarios",[["tipo","abm"]],null,null,null,w.b,w.a)),o.sb(1,4440064,null,0,N.a,[l.a,O.a,C.a],{componente:[0,"componente"],ruta:[1,"ruta"],titulo:[2,"titulo"],tipo:[3,"tipo"],idform:[4,"idform"],elemento:[5,"elemento"],propiedades:[6,"propiedades"]},null)],function(i,n){var t=n.component;i(n,1,0,t.idinforme,t.ruta,t.nombreform,"abm",t.idform,t.idelemento,t.propiedadescomentarios)},null)}function R(i){return o.Nb(0,[(i()(),o.tb(0,16777216,null,null,6,"h6",[["cdkDrag",""],["cdkDragRootElement",".cdk-overlay-pane"],["class","cdk-drag"],["mat-dialog-title",""],["style","cursor: grab"]],[[2,"cdk-drag-dragging",null]],null,null,null,null)),o.Ib(6144,null,L.j,null,[L.c]),o.sb(2,4341760,null,3,L.c,[o.k,[3,L.b],F.e,o.B,o.S,S.d,L.g,L.a,[2,D.b]],{rootElementSelector:[0,"rootElementSelector"]},null),o.Jb(603979776,4,{_handles:1}),o.Jb(335544320,5,{_previewTemplate:0}),o.Jb(335544320,6,{_placeholderTemplate:0}),(i()(),o.Lb(-1,null,["Cambios sin Guardar"])),(i()(),o.tb(7,0,null,null,1,"div",[["class","dialogo-contenido"]],null,null,null,null,null)),(i()(),o.Lb(-1,null,["Desea Guardar los Cambios Realizados?"])),(i()(),o.tb(9,0,null,null,0,"br",[],null,null,null,null,null)),(i()(),o.tb(10,0,null,null,6,"div",[["class","pull-right doNotPrint"]],null,null,null,null,null)),(i()(),o.tb(11,0,null,null,1,"button",[["class","btn btn-success btn-md"]],null,[[null,"click"]],function(i,n,t){var o=!0;return"click"===n&&(o=!1!==i.component.guardarycontinuar()&&o),o},null,null)),(i()(),o.Lb(-1,null,["Guardar"])),(i()(),o.tb(13,0,null,null,1,"button",[["class","btn btn-danger btn-md"]],null,[[null,"click"]],function(i,n,t){var o=!0;return"click"===n&&(o=!1!==i.component.noguardarycontinuar()&&o),o},null,null)),(i()(),o.Lb(-1,null,["No Guardar"])),(i()(),o.tb(15,0,null,null,1,"button",[["class","btn btn-secondary btn-md"]],null,[[null,"click"]],function(i,n,t){var o=!0;return"click"===n&&(o=!1!==i.component.cancelar()&&o),o},null,null)),(i()(),o.Lb(-1,null,["Cancelar"]))],function(i,n){i(n,2,0,".cdk-overlay-pane")},function(i,n){i(n,0,0,o.Db(n,2)._hasStartedDragging&&o.Db(n,2)._isDragging())})}function W(i){return o.Nb(0,[(i()(),o.tb(0,16777216,null,null,6,"h6",[["cdkDrag",""],["cdkDragRootElement",".cdk-overlay-pane"],["class","cdk-drag"],["mat-dialog-title",""],["style","cursor: grab"]],[[2,"cdk-drag-dragging",null]],null,null,null,null)),o.Ib(6144,null,L.j,null,[L.c]),o.sb(2,4341760,null,3,L.c,[o.k,[3,L.b],F.e,o.B,o.S,S.d,L.g,L.a,[2,D.b]],{rootElementSelector:[0,"rootElementSelector"]},null),o.Jb(603979776,7,{_handles:1}),o.Jb(335544320,8,{_previewTemplate:0}),o.Jb(335544320,9,{_placeholderTemplate:0}),(i()(),o.Lb(-1,null,["Cambios sin Guardar"])),(i()(),o.tb(7,0,null,null,1,"div",[["class","dialogo-contenido"]],null,null,null,null,null)),(i()(),o.Lb(-1,null,["Desea Deshacer los Cambios Realizados?"])),(i()(),o.tb(9,0,null,null,0,"br",[],null,null,null,null,null)),(i()(),o.tb(10,0,null,null,4,"div",[["class","pull-right doNotPrint"]],null,null,null,null,null)),(i()(),o.tb(11,0,null,null,1,"button",[["class","btn btn-primary btn-md"]],null,[[null,"click"]],function(i,n,t){var o=!0;return"click"===n&&(o=!1!==i.component.restoreForm()&&o),o},null,null)),(i()(),o.Lb(-1,null,["Deshacer"])),(i()(),o.tb(13,0,null,null,1,"button",[["class","btn btn-secondary btn-md"]],null,[[null,"click"]],function(i,n,t){var o=!0;return"click"===n&&(o=!1!==i.component.cancelar()&&o),o},null,null)),(i()(),o.Lb(-1,null,["No Deshacer"]))],function(i,n){i(n,2,0,".cdk-overlay-pane")},function(i,n){i(n,0,0,o.Db(n,2)._hasStartedDragging&&o.Db(n,2)._isDragging())})}function X(i){return o.Nb(0,[o.Jb(402653184,1,{form:0}),o.Jb(402653184,2,{tabladinamica:0}),o.Jb(402653184,3,{modalconfirmacion:0}),(i()(),o.tb(3,0,null,null,52,"div",[["class","container-fluid"]],null,null,null,null,null)),(i()(),o.tb(4,0,null,null,49,"div",[["class","main-content"]],null,null,null,null,null)),(i()(),o.tb(5,0,null,null,7,"as-split",[["direction","horizontal"],["unit","pixel"]],null,null,null,E.b,E.a)),o.sb(6,4374528,null,0,j.c,[o.B,o.k,o.h,o.H],{direction:[0,"direction"],unit:[1,"unit"]},null),(i()(),o.tb(7,0,null,0,2,"as-split-area",[["size","*"]],null,null,null,null,null)),o.sb(8,212992,null,0,j.b,[o.B,o.k,o.H,j.c],{size:[0,"size"]},null),(i()(),o.tb(9,0,null,null,0,"div",[["class","mat-app-background basic-container doNotPrint"]],null,null,null,null,null)),(i()(),o.tb(10,0,null,0,2,"as-split-area",[["size","30"]],null,null,null,null,null)),o.sb(11,212992,null,0,j.b,[o.B,o.k,o.H,j.c],{size:[0,"size"]},null),(i()(),o.tb(12,0,null,null,0,"div",[["class","mat-app-background basic-container doNotPrint"]],null,null,null,null,null)),(i()(),o.tb(13,0,null,null,40,"div",[["class","content"],["fxFlexFill",""],["fxLayout.xs","column"],["fxLayoutGap","10px"]],null,null,null,null,null)),o.sb(14,671744,null,0,P.d,[o.k,_.i,[2,P.m],_.f],{fxLayout:[0,"fxLayout"],"fxLayout.xs":[1,"fxLayout.xs"]},null),o.sb(15,1720320,null,0,P.e,[o.k,o.B,D.b,_.i,[2,P.l],_.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),o.sb(16,671744,null,0,P.f,[o.k,_.i,P.g,_.f],null,null),(i()(),o.tb(17,0,null,null,33,"div",[["class","sec1"],["fxFlex","100"],["fxFlex.gt-sm","50"]],null,null,null,null,null)),o.sb(18,671744,null,0,P.a,[o.k,_.i,_.e,P.j,_.f],{fxFlex:[0,"fxFlex"],"fxFlex.gt-sm":[1,"fxFlex.gt-sm"]},null),(i()(),o.tb(19,0,null,null,31,"div",[["class","card"]],null,null,null,null,null)),(i()(),o.tb(20,0,null,null,18,"div",[["class","card-header"]],null,null,null,null,null)),(i()(),o.tb(21,0,null,null,4,"span",[["class","estrella no-seleccionable click"]],null,null,null,null,null)),(i()(),o.kb(16777216,null,null,1,null,q)),o.sb(23,16384,null,0,F.p,[o.S,o.P],{ngIf:[0,"ngIf"]},null),(i()(),o.kb(16777216,null,null,1,null,G)),o.sb(25,16384,null,0,F.p,[o.S,o.P],{ngIf:[0,"ngIf"]},null),(i()(),o.tb(26,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(i()(),o.Lb(27,null,["",""])),(i()(),o.kb(16777216,null,null,1,null,M)),o.sb(29,16384,null,0,F.p,[o.S,o.P],{ngIf:[0,"ngIf"]},null),(i()(),o.tb(30,0,null,null,8,"div",[["class","btnsright no-seleccionable click"]],null,null,null,null,null)),(i()(),o.kb(16777216,null,null,1,null,T)),o.sb(32,16384,null,0,F.p,[o.S,o.P],{ngIf:[0,"ngIf"]},null),(i()(),o.kb(16777216,null,null,1,null,A)),o.sb(34,16384,null,0,F.p,[o.S,o.P],{ngIf:[0,"ngIf"]},null),(i()(),o.kb(16777216,null,null,1,null,U)),o.sb(36,16384,null,0,F.p,[o.S,o.P],{ngIf:[0,"ngIf"]},null),(i()(),o.kb(16777216,null,null,1,null,H)),o.sb(38,16384,null,0,F.p,[o.S,o.P],{ngIf:[0,"ngIf"]},null),(i()(),o.tb(39,0,null,null,11,"div",[["class","card-body"],["id","print-section"]],null,null,null,null,null)),(i()(),o.tb(40,0,null,null,8,"div",[["class","pull-right doNotPrint"]],null,null,null,null,null)),(i()(),o.tb(41,0,null,null,1,"app-auditoria",[],null,null,null,I.b,I.a)),o.sb(42,245760,null,0,J.a,[e.a,l.a],{componente:[0,"componente"],elemento:[1,"elemento"],ruta:[2,"ruta"]},null),(i()(),o.tb(43,0,null,null,1,"button",[["class","btn btn-primary btn-md"],["id","form-submit"],["type","submit"]],null,[[null,"click"]],function(i,n,t){var r=!0;return"click"===n&&(r=!1!==i.component.nuevo(o.Db(i,54))&&r),r},null,null)),(i()(),o.Lb(-1,null,["Nuevo"])),(i()(),o.tb(45,0,null,null,1,"button",[["class","btn btn-success btn-md"],["id","form-submit"],["type","submit"]],[[8,"disabled",0]],[[null,"click"]],function(i,n,t){var o=!0;return"click"===n&&(o=!1!==i.component.onSubmit()&&o),o},null,null)),(i()(),o.Lb(-1,null,["Guardar"])),(i()(),o.tb(47,0,null,null,1,"button",[["class","btn btn-secondary btn-md"],["id","form-submit"],["type","submit"]],null,[[null,"click"]],function(i,n,t){var r=!0;return"click"===n&&(r=!1!==i.component.cartelcancelar(o.Db(i,55))&&r),r},null,null)),(i()(),o.Lb(-1,null,["Cancelar"])),(i()(),o.kb(16777216,null,null,1,null,Y)),o.sb(50,16384,null,0,F.p,[o.S,o.P],{ngIf:[0,"ngIf"]},null),(i()(),o.tb(51,0,null,null,2,"div",[["class","sec2"],["fxFlex","100"],["fxFlex.gt-sm","50"]],null,null,null,null,null)),o.sb(52,671744,null,0,P.a,[o.k,_.i,_.e,P.j,_.f],{fxFlex:[0,"fxFlex"],"fxFlex.gt-sm":[1,"fxFlex.gt-sm"]},null),(i()(),o.tb(53,0,null,null,0,"div",[["class","card"]],null,null,null,null,null)),(i()(),o.kb(0,[[3,2],["modalconfirmacion",2]],null,0,null,R)),(i()(),o.kb(0,[["modalcancelar",2]],null,0,null,W))],function(i,n){var t=n.component;i(n,6,0,"horizontal","pixel"),i(n,8,0,"*"),i(n,11,0,"30"),i(n,14,0,t.valdirection,"column"),i(n,15,0,"10px"),i(n,18,0,"100","50"),i(n,23,0,t.enviaraescritorio),i(n,25,0,!t.enviaraescritorio),i(n,29,0,t.subtitle),i(n,32,0,t.favorito&&t.idelemento),i(n,34,0,!t.favorito&&t.idelemento),i(n,36,0,t.direction),i(n,38,0,!t.direction),i(n,42,0,t.idinforme,t.idelemento,t.ruta),i(n,50,0,t.comentarios&&t.idelemento),i(n,52,0,"100","50")},function(i,n){var t=n.component;i(n,27,0,t.editar&&t.nombreform?"Editando "+t.nombreform:"Creando "+t.nombreform),i(n,45,0,!t.formdinamicoservice.editando)})}function Z(i){return o.Nb(0,[(i()(),o.tb(0,0,null,null,1,"app-lisadit",[],null,null,null,X,z)),o.sb(1,4440064,null,0,c,[V.a,a.a,r.a,u.a,o.h,s.a,l.a,e.a],null,null)],function(i,n){i(n,1,0)},null)}var K=o.pb("app-lisadit",c,Z,{idform:"idform",tipoinforme:"tipoinforme",ruta:"ruta",nombretabladinamica:"nombretabladinamica"},{},[]),Q=t("sE5F"),$=t("gIcY"),ii=t("eDkP"),ni=t("mVsa"),ti=t("M2Lx"),oi=t("uGex"),ri=t("o3x0"),li=t("jQLj"),ei=t("ZYjt"),ai=t("Wf4p"),si=t("4tE/"),ui=t("v9Dh"),ci=t("4epT"),di=t("dWZg"),mi=t("OkvK"),fi=t("6uYy"),bi=t("lLAP"),hi=t("OBdK"),pi=t("wmQ5"),vi=t("a1DB"),gi=t("2L9D"),yi=t("4c35"),Bi=t("Z+uX"),ki=t("6Wmm"),xi=t("jVYb"),wi=t("seP3"),Ni=t("UodH"),Oi=t("de3e"),Ci=t("dEvt"),Li=t("pOPN"),Fi=t("w+lc"),Si=t("y4qS"),Di=t("BHnd"),Ei=t("9It4"),ji=t("Blfk"),Pi=t("8mMr"),_i=t("La40"),Ii=t("r43C"),Ji=t("LC5p"),Vi=t("J12g"),zi=t("Lwpp"),qi=t("SMsm"),Gi=t("YhbO"),Mi=t("jlZm"),Ti=t("9Ul1"),Ai=t("/VYK"),Ui=t("hUWP"),Hi=t("3pJQ"),Yi=t("V9q+"),Ri=t("cI9U"),Wi=t("Zseb"),Xi=t("kWGw"),Zi=t("FVSy"),Ki=t("b716"),Qi=t("Foo5");t.d(n,"LazyModuleNgFactory",function(){return $i});var $i=o.qb(d,[],function(i){return o.Ab([o.Bb(512,o.j,o.fb,[[8,[m.a,f.b,f.a,b.a,h.a,p.a,v.a,g.a,y.a,B.a,k.a,x.a,K]],[3,o.j],o.z]),o.Bb(4608,Q.c,Q.c,[]),o.Bb(4608,Q.g,Q.b,[]),o.Bb(5120,Q.i,Q.j,[]),o.Bb(4608,Q.h,Q.h,[Q.c,Q.g,Q.i]),o.Bb(4608,Q.f,Q.a,[]),o.Bb(5120,Q.d,Q.k,[Q.h,Q.f]),o.Bb(4608,$.B,$.B,[]),o.Bb(4608,F.r,F.q,[o.w,[2,F.J]]),o.Bb(4608,$.f,$.f,[]),o.Bb(4608,ii.c,ii.c,[ii.i,ii.e,o.j,ii.h,ii.f,o.s,o.B,F.e,D.b,[2,F.l]]),o.Bb(5120,ii.j,ii.k,[ii.c]),o.Bb(5120,ni.b,ni.g,[ii.c]),o.Bb(4608,ti.c,ti.c,[]),o.Bb(5120,oi.a,oi.b,[ii.c]),o.Bb(5120,ri.b,ri.c,[ii.c]),o.Bb(135680,ri.d,ri.d,[ii.c,o.s,[2,F.l],[2,ri.a],ri.b,[3,ri.d],ii.e]),o.Bb(4608,li.i,li.i,[]),o.Bb(5120,li.a,li.b,[ii.c]),o.Bb(4608,ei.f,ai.e,[[2,ai.i],[2,ai.n]]),o.Bb(5120,si.b,si.c,[ii.c]),o.Bb(5120,ui.b,ui.c,[ii.c]),o.Bb(5120,ci.c,ci.a,[[3,ci.c]]),o.Bb(4608,ai.c,ai.y,[[2,ai.h],di.a]),o.Bb(5120,mi.d,mi.a,[[3,mi.d]]),o.Bb(5120,fi.e,fi.d,[fi.a,fi.b]),o.Bb(4608,fi.g,fi.g,[fi.e]),o.Bb(135680,bi.h,bi.h,[o.B,di.a]),o.Bb(4608,hi.e,hi.e,[o.P]),o.Bb(5120,pi.g,pi.a,[[3,pi.g]]),o.Bb(4608,ai.d,ai.d,[]),o.Bb(4608,vi.a,vi.a,[[2,"PapaParseGlobalConfig"]]),o.Bb(5120,o.b,function(i,n){return[_.j(i,n)]},[F.e,o.D]),o.Bb(4608,r.a,r.a,[]),o.Bb(1073742336,Q.e,Q.e,[]),o.Bb(1073742336,$.y,$.y,[]),o.Bb(1073742336,$.k,$.k,[]),o.Bb(1073742336,F.c,F.c,[]),o.Bb(1073742336,$.v,$.v,[]),o.Bb(1073742336,gi.b,gi.b,[]),o.Bb(1073742336,D.a,D.a,[]),o.Bb(1073742336,ai.n,ai.n,[[2,ai.f],[2,ei.g]]),o.Bb(1073742336,di.b,di.b,[]),o.Bb(1073742336,ai.x,ai.x,[]),o.Bb(1073742336,yi.g,yi.g,[]),o.Bb(1073742336,S.b,S.b,[]),o.Bb(1073742336,ii.g,ii.g,[]),o.Bb(1073742336,ni.e,ni.e,[]),o.Bb(1073742336,Bi.c,Bi.c,[]),o.Bb(1073742336,ti.d,ti.d,[]),o.Bb(1073742336,bi.a,bi.a,[]),o.Bb(1073742336,ki.b,ki.b,[]),o.Bb(1073742336,xi.b,xi.b,[]),o.Bb(1073742336,ai.v,ai.v,[]),o.Bb(1073742336,ai.s,ai.s,[]),o.Bb(1073742336,wi.e,wi.e,[]),o.Bb(1073742336,oi.d,oi.d,[]),o.Bb(1073742336,Ni.c,Ni.c,[]),o.Bb(1073742336,ri.g,ri.g,[]),o.Bb(1073742336,li.j,li.j,[]),o.Bb(1073742336,Oi.c,Oi.c,[]),o.Bb(1073742336,Ci.b,Ci.b,[]),o.Bb(1073742336,Li.a,Li.a,[]),o.Bb(1073742336,Fi.b,Fi.b,[]),o.Bb(1073742336,si.e,si.e,[]),o.Bb(1073742336,ui.e,ui.e,[]),o.Bb(1073742336,ci.d,ci.d,[]),o.Bb(1073742336,Si.p,Si.p,[]),o.Bb(1073742336,Di.o,Di.o,[]),o.Bb(1073742336,Ei.a,Ei.a,[]),o.Bb(1073742336,ai.z,ai.z,[]),o.Bb(1073742336,ai.p,ai.p,[]),o.Bb(1073742336,ji.c,ji.c,[]),o.Bb(1073742336,mi.e,mi.e,[]),o.Bb(1073742336,fi.c,fi.c,[]),o.Bb(1073742336,L.f,L.f,[]),o.Bb(1073742336,Pi.b,Pi.b,[]),o.Bb(1073742336,_i.j,_i.j,[]),o.Bb(1073742336,ai.o,ai.o,[]),o.Bb(1073742336,Ii.b,Ii.b,[]),o.Bb(1073742336,Ji.a,Ji.a,[]),o.Bb(1073742336,hi.c,hi.c,[]),o.Bb(1073742336,Vi.a,Vi.a,[]),o.Bb(1073742336,zi.d,zi.d,[]),o.Bb(1073742336,qi.c,qi.c,[]),o.Bb(1073742336,pi.h,pi.h,[]),o.Bb(1073742336,Gi.c,Gi.c,[]),o.Bb(1073742336,Mi.c,Mi.c,[]),o.Bb(1073742336,vi.b,vi.b,[]),o.Bb(1073742336,Ti.a,Ti.a,[]),o.Bb(1073742336,Ai.c,Ai.c,[]),o.Bb(1073742336,_.c,_.c,[]),o.Bb(1073742336,P.h,P.h,[]),o.Bb(1073742336,Ui.c,Ui.c,[]),o.Bb(1073742336,Hi.a,Hi.a,[]),o.Bb(1073742336,Yi.a,Yi.a,[[2,_.g],o.D]),o.Bb(1073742336,Ri.a,Ri.a,[]),o.Bb(1073742336,j.a,j.a,[]),o.Bb(1073742336,Wi.b,Wi.b,[]),o.Bb(1073742336,Xi.a,Xi.a,[]),o.Bb(1073742336,Zi.d,Zi.d,[]),o.Bb(1073742336,Ki.c,Ki.c,[]),o.Bb(1073742336,Qi.a,Qi.a,[]),o.Bb(1073742336,V.r,V.r,[[2,V.x],[2,V.n]]),o.Bb(1073742336,d,d,[]),o.Bb(256,ai.g,ai.k,[]),o.Bb(256,fi.a,fi.f,[]),o.Bb(256,fi.b,void 0,[]),o.Bb(1024,V.l,function(){return[[{path:"",component:c}]]},[])])})}}]);