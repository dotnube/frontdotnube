(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Y+Oc":function(t,n,e){"use strict";e.d(n,"a",function(){return l}),e.d(n,"b",function(){return d});var i=e("CcnG"),r=e("KVAQ"),o=e("gIcY"),a=e("Ip0R"),l=(e("/YwC"),e("kiPX"),e("20mB"),e("H18U"),e("tXlq"),i.rb({encapsulation:2,styles:[],data:{}}));function s(t){return i.Nb(0,[(t()(),i.tb(0,16777216,null,null,1,null,null,null,null,null,null,null)),i.sb(1,4407296,null,0,r.a,[i.j,i.S],{field:[0,"field"],detectChanges:[1,"detectChanges"],forminvalido:[2,"forminvalido"],group:[3,"group"],index:[4,"index"],idform:[5,"idform"],idelemento:[6,"idelemento"],formname:[7,"formname"],soynuevo:[8,"soynuevo"]},null),(t()(),i.kb(0,null,null,0))],function(t,n){var e=n.component;t(n,1,0,n.parent.parent.context.$implicit,e.detectchanges,e.forminvalido,e.form,n.parent.parent.context.index,e.idform,e.idelemento,e.formname,e.dato)},null)}function u(t){return i.Nb(0,[(t()(),i.tb(0,16777216,null,null,1,null,null,null,null,null,null,null)),i.sb(1,4407296,null,0,r.a,[i.j,i.S],{field:[0,"field"],detectChanges:[1,"detectChanges"],group:[2,"group"],fields:[3,"fields"],index:[4,"index"],idform:[5,"idform"],idelemento:[6,"idelemento"],formname:[7,"formname"],soynuevo:[8,"soynuevo"]},null),(t()(),i.kb(0,null,null,0))],function(t,n){var e=n.component;t(n,1,0,n.parent.parent.context.$implicit,e.detectchanges,e.form,e.fields,n.parent.parent.context.index,e.idform,e.idelemento,e.formname,e.dato)},null)}function f(t){return i.Nb(0,[(t()(),i.tb(0,0,null,null,8,"form",[["class","dynamic-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(t,n,e){var r=!0;return"submit"===n&&(r=!1!==i.Db(t,2).onSubmit(e)&&r),"reset"===n&&(r=!1!==i.Db(t,2).onReset()&&r),r},null,null)),i.sb(1,16384,null,0,o.A,[],null,null),i.sb(2,540672,null,0,o.j,[[8,null],[8,null]],{form:[0,"form"]},null),i.Ib(2048,null,o.d,null,[o.j]),i.sb(4,16384,null,0,o.p,[[4,o.d]],null,null),(t()(),i.kb(16777216,null,null,1,null,s)),i.sb(6,16384,null,0,a.p,[i.S,i.P],{ngIf:[0,"ngIf"]},null),(t()(),i.kb(16777216,null,null,1,null,u)),i.sb(8,16384,null,0,a.p,[i.S,i.P],{ngIf:[0,"ngIf"]},null)],function(t,n){t(n,2,0,n.component.form),t(n,6,0,!("grupo"===n.parent.context.$implicit.options.type||n.parent.context.$implicit.options.grupo)),t(n,8,0,"grupo"===n.parent.context.$implicit.options.type&&!n.parent.context.$implicit.options.grupo)},function(t,n){t(n,0,0,i.Db(n,4).ngClassUntouched,i.Db(n,4).ngClassTouched,i.Db(n,4).ngClassPristine,i.Db(n,4).ngClassDirty,i.Db(n,4).ngClassValid,i.Db(n,4).ngClassInvalid,i.Db(n,4).ngClassPending)})}function m(t){return i.Nb(0,[(t()(),i.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(t()(),i.kb(16777216,null,null,1,null,f)),i.sb(2,16384,null,0,a.p,[i.S,i.P],{ngIf:[0,"ngIf"]},null),(t()(),i.kb(0,null,null,0))],function(t,n){t(n,2,0,void 0!==n.component.form)},null)}function d(t){return i.Nb(0,[(t()(),i.kb(16777216,null,null,1,null,m)),i.sb(1,278528,null,0,a.o,[i.S,i.P,i.u],{ngForOf:[0,"ngForOf"]},null)],function(t,n){t(n,1,0,n.component.fields)},null)}},kiPX:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var i=e("CcnG"),r=e("gIcY"),o=e("6blF"),a=(e("H18U"),e("tXlq"),e("/YwC"),e("20mB"),function(){function t(t,n,e,r,o){var a=this;this.fb=t,this.alert=n,this.eventmanager=e,this.formdinamicoservice=r,this.httpadit=o,this.fields=[],this.submit=new i.n,this.actualizar=new i.n,this.detectchanges=0,this.forminvalido=0,this.ruta="informes",this.idform="id",this.elemento="id",this.updateOn="change",this.valorestemporales={},this.mododesarrollador=this.getcookie("mododesarrollador");try{this.suscripcion20=this.eventmanager.eventGlobal("getinfodesarrollador").subscribe(function(t){if(a.mododesarrollador=a.eventmanager.getcookie("mododesarrollador"),a.mododesarrollador){var n={};n.dato=a.dato,n.elemento=a.elemento,n.fields=a.fields,n.form=a.form,n.forminvalido=a.forminvalido,n.formname=a.formname,n.idform=a.idform,n.informe=a.informe,n.ruta=a.ruta,n.tipoinforme=a.tipoinforme,n.updateOn=a.updateOn,n.valorestemporales=a.valorestemporales,n.valornulo=a.valornulo,n.value=a.value,console.log("Form Dinamic",n)}},function(t){})}catch(l){}}return t.prototype.ngOnDestroy=function(){this.suscripcion20&&this.suscripcion20.unsubscribe()},Object.defineProperty(t.prototype,"value",{get:function(){return this.form.value},enumerable:!0,configurable:!0}),t.prototype.setTipoForm=function(t){this.tipoinforme=t},t.prototype.resetform=function(){this.form.reset(),this.valorestemporales={},this.dato=this.randomId()},t.prototype.randomId=function(){return Math.floor(999999*Math.random())+1},t.prototype.pasarvalor=function(t,n,e,i){var r=this;if(this.ruta&&(this.ruta=n),this.idform&&(this.idform=e),i||(i={}),i.where||(i.where={}),"object"==typeof this.idform)for(var o=t.split(","),a=0;a<this.idform.length;a++)i.where[this.idform[a]]=o[a];else i.where[this.idform]=t;this.renovarValores(),this.dato&&this.resetform();var l="?filter="+JSON.stringify(i);this.httpadit.get(this.ruta+l).subscribe(function(e){Object.keys(e).forEach(function(n){if(r.informe=new Object(e[n]),"informes"===r.ruta){r.informe[r.idform]=r.informe.id,r.informe.tipo=r.tipoinforme;try{r.form.patchValue(JSON.parse(r.informe.datos))}catch(i){window.EventManager.logerror(i)}}else r.form.patchValue(r.informe);r.dato=t}),r.formdinamicoservice.seteditando(!1),r.formdinamicoservice.fincambiarform({idform:r.idform,dato:t,ruta:n})})},t.prototype.pasarvalorActualizado=function(t){if(this.informe=new Object(t),"informes"===this.ruta){this.informe[this.idform]=this.informe.id,this.informe.tipo=this.tipoinforme;try{this.form.patchValue(JSON.parse(this.informe.datos))}catch(n){window.EventManager.logerror(n)}}else this.form.patchValue(this.informe);this.dato=t,this.formdinamicoservice.seteditando(!1),this.formdinamicoservice.fincambiarform({idform:this.idform,dato:t,ruta:this.ruta})},t.prototype.ngOnInit=function(){var t=this;this.formdinamicoservice.field&&(this.fields=this.formdinamicoservice.field),this.form=this.createControl(),"informes"===this.ruta&&(this.formdinamicoservice.nombreform&&(this.tipoinforme=this.formdinamicoservice.nombreform),this.eventmanager.eventGlobal("changetipoform").subscribe(function(n){t.tipoinforme=n}))},t.prototype.onSubmit=function(t){t.preventDefault(),t.stopPropagation()},t.prototype.guardar=function(t,n,e){var i=this;if(this.form.valid){var r;if("object"==typeof this.idform){r={};for(var a=0;a<this.idform.length;a++)r[this.idform[a]]=this.informe[this.idform[a]]}else r=this.informe[this.idform];"informes"===this.ruta&&(this.informe.datos=JSON.stringify(this.form.value),this.informe.tipo=this.tipoinforme,this.informe.user=1,this.informe.fecha=new Date);var l=!0;if("object"==typeof this.idform)for(a=0;a<this.idform.length;a++)null==this.informe[this.idform[a]]&&(l=!1);else l=void 0!==this.informe[this.idform];var s=Object.assign({},this.informe),u=this.compareJSONactualizar(s,this.form.value);return l?u?new o.a(function(o){i.updateinforme(u,r).subscribe(function(r){return r&&(i.informe=r,i.respuesta=r),i.formdinamicoservice.cambiarTabla(!0),i.formdinamicoservice.seteditando(!1),i.alert.bien("Guardado"),n&&i.formdinamicoservice.ir(t,n,e),o.next(!0)},function(t){return i.alert.error("Error al Guardar"),window.EventManager.logerror(t),o.next(!1)})}):(this.alert.advertencia("No hay cambios para Guardar"),new o.a(function(t){return t.next(!1)})):((s=u)[this.idform]||(s[this.idform]=0,this.valornulo&&(s[this.idform]=null)),new o.a(function(r){i.saveinforme(s).subscribe(function(o){if(o)return i.informe=o,i.formdinamicoservice.cambiarTabla(!0),i.formdinamicoservice.seteditando(!1),i.alert.bien("Creado"),n?(i.formdinamicoservice.ir(t,n,e),r.next(!0)):r.next(o)},function(t){return i.alert.error("Error al Guardar"),window.EventManager.logerror(t),r.next(!1)})}))}return this.validateAllFormFields(this.form),this.alert.advertencia("Formulario Invalido"),this.forminvalido++,this.actualizar.emit(!0),new o.a(function(t){return t.next(!1)})},t.prototype.getalert=function(){return this.alert},t.prototype.compareJSONactualizar=function(t,n){var e=!1,i={};if("object"==typeof this.idform)for(var r=0;r<this.idform.length;r++)t[this.idform[r]]&&(i[this.idform[r]]=t[this.idform[r]]);else t[this.idform]&&(i[this.idform]=t[this.idform]);for(var o in this.valorestemporales)n.hasOwnProperty(o)||(i[o]=this.valorestemporales[o],t[o]=this.valorestemporales[o],e=!0);for(var a in n)t.hasOwnProperty(a)?t[a]!==n[a]&&(i[a]=n[a],t[a]=n[a],e=!0):n[a]&&(i[a]=n[a],t[a]=n[a],e=!0);return!!e&&i},t.prototype.compareJSON=function(t,n){for(var e in n)t.hasOwnProperty(e)?t[e]!==n[e]&&(t[e]=n[e]):t[e]=n[e];return t},t.prototype.compareJSONtemporales=function(t){for(var n in this.valorestemporales)t.hasOwnProperty(n)||(t[n]=this.valorestemporales[n]);return t},t.prototype.createControl=function(){var t=this,n=this.fb.group({});return this.renovarValores(),this.fields.forEach(function(e){if(e.options||(e.options={}),e.options.validations||(e.options.validations=[]),e.validations=e.options.validations,"button"===e.type);else{var i={validators:t.bindValidations(e.validations||[]),asyncValidators:t.bindValidationsAsync(e.validations||[]),updateOn:t.bindValidationsAsynctrue(e.validations||[])},o=new r.g(e.value,i);n.addControl(e.name,o)}}),n},t.prototype.recargarControl=function(){this.form=null,this.form=this.createControl()},t.prototype.bindValidations=function(t){if(t.length>0){var n=[];return t.forEach(function(t){if(!t.async){switch(t.name){case"required":t.validator=r.x.required;break;case"min":var e=Number.parseInt(t.params);Number.isNaN(e)||(t.validator=r.x.min(e));break;case"max":e=Number.parseInt(t.params),Number.isNaN(e)||(t.validator=r.x.max(e));break;case"requiredTrue":t.validator=r.x.requiredTrue;break;case"email":t.validator=r.x.email;break;case"minLength":e=Number.parseInt(t.params),Number.isNaN(e)||(t.validator=r.x.minLength(e));break;case"maxLength":e=Number.parseInt(t.params),Number.isNaN(e)||(t.validator=r.x.maxLength(e));break;case"pattern":t.validator=r.x.pattern(t.params);break;case"nullValidator":t.validator=r.x.nullValidator;break;default:try{window[t.name]?t.validator=window[t.name]:console.log("no existe la funcion para validar: "+t.name)}catch(i){console.log(i)}}t.validator&&n.push(t.validator)}}),r.x.compose(n)}return null},t.prototype.bindValidationsAsynctrue=function(t){var n="change";if(t.length>0)for(var e=0;e<t.length;e++)t[e].async&&(n=!t[e].updateOn||"submit"!==t[e].updateOn&&"blur"!==t[e].updateOn&&"change"!==t[e].updateOn?"blur":t[e].updateOn);return n},t.prototype.bindValidationsAsync=function(t){if(t.length>0){var n=[];return t.forEach(function(t){if(t.async)switch(t.name){case"required":case"min":case"max":case"requiredTrue":case"email":case"minLength":case"maxLength":case"pattern":case"nullValidator":break;default:try{window[t.name]?(t.validator=window[t.name],n.push(t.validator)):console.log("no existe la funcion para validar: "+t.name)}catch(e){console.log("error en funcion para validar: "+t.name),console.log(e)}}}),r.x.composeAsync(n)}return null},t.prototype.validateAllFormFields=function(t){var n=this;Object.keys(t.controls).forEach(function(e){var i=t.get(e);i instanceof r.g?i.markAsTouched({onlySelf:!0}):i instanceof r.i&&n.validateAllFormFields(i)})},t.prototype.renovarValores=function(){this.informe=new Object,"informes"===this.ruta&&(this.informe.tipo=this.tipoinforme,this.informe.user=1,this.informe.fecha=new Date)},t.prototype.updateinforme=function(t,n){if("object"==typeof this.idform){var e=!1,i={};return Object.keys(n).forEach(function(r){i[r]=t[r],n[r]!==t[r]&&(e=!0)}),e?this.httpadit.patch(this.ruta+"/changeids",{exid:n,newid:i,data:t}):this.httpadit.patch(this.ruta+"/",t)}return this.httpadit.patch(n!==t[this.idform]?this.ruta+"/changeid/"+n+"/"+t[this.idform]:this.ruta+"/"+t[this.idform],t)},t.prototype.saveinforme=function(t){return this.httpadit.post(this.ruta+"/",t)},t.prototype.patchvalue=function(t){this.form.patchValue(t),this.patchtemporales(t)},t.prototype.patchtemporales=function(t){var n=this;t&&"object"==typeof t&&Object.keys(t).forEach(function(e){n.valorestemporales[e]=t[e]})},t.prototype.getcookie=function(t){for(var n=t+"=",e=document.cookie.split(";"),i=0;i<e.length;i++){for(var r=e[i];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(n))return decodeURIComponent(r.substring(n.length,r.length))}return""},t}())}}]);