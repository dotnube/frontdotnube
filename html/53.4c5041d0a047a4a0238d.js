(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{Kel3:function(l,n,a){"use strict";a.r(n);var t=a("CcnG"),i=a("tXlq"),o=a("H18U"),u=a("+0+z"),c=function(){function l(l,n,a){this.formdinamicservice=l,this.httpadit=n,this._route=a,this.valorestabla=[],this.mostrartabla=[],this.columnasgrupo=[],this.aclrow=[],this.grupousuarios=[],this.nombrecolumasgrupo=[],this.nombrecolumas=[],this.dataSource=[],this.columnas=[],this.suscribirruta()}return l.prototype.ngOnInit=function(){var l=this;this.suscripcion1=this._route.params.subscribe(function(n){l.tablaelegida(n.id)},function(l){window.EventManager.logerror(l)})},l.prototype.tablaelegida=function(l){var n=this;window.EventManager.setTitleEmpresa("Permisos en "+l),this.tablaactual=l,this.opciones={},this.suscripcion2=this.httpadit.get(this.tablaactual+"/permissionsperrowoptions").subscribe(function(l){n.cargarvalores(l)},function(l){n.httpadit.errorget(l)})},l.prototype.guardar=function(l){this.suscripcion3=this.httpadit.put("aclrow",l).subscribe(function(l){},function(l){window.EventManager.logerror(l)})},l.prototype.suscribirruta=function(){var l=this;this.suscripcion4=this.httpadit.get("grupousuarios/?filter[fields][id]=true&filter[fields][nombre]=true&filter[fields][icono]=true&filter[order]=nombre%20ASC").subscribe(function(n){l.grupousuarios=n,l.grupousuarios.forEach(function(n){l.columnasgrupo.push(new u.a(n.id.toString(),n.nombre,null,{type:"checkboxeditable"},null,null,null,"width:50px")),l.nombrecolumasgrupo.push(n.id.toString())})},function(n){l.httpadit.errorget(n)}),this.suscripcion7=this.formdinamicservice.cambioelementoevent.subscribe(function(n){l.updatepermiso(n)})},l.prototype.reset=function(){},l.prototype.ngOnDestroy=function(){this.suscripcion1&&this.suscripcion1.unsubscribe(),this.suscripcion2&&this.suscripcion2.unsubscribe(),this.suscripcion3&&this.suscripcion3.unsubscribe(),this.suscripcion4&&this.suscripcion4.unsubscribe(),this.suscripcion5&&this.suscripcion5.unsubscribe(),this.suscripcion6&&this.suscripcion6.unsubscribe(),this.suscripcion7&&this.suscripcion7.unsubscribe()},l.prototype.cargarvalores=function(l){var n=this;if(this.valorestabla=[],this.aclrow=[],this.opciones=l,this.columnas=[],this.nombrecolumas=[],this.nombrecolumasgrupo.length?(this.nombrecolumasgrupo.forEach(function(l){n.nombrecolumas.push(l)}),this.columnasgrupo.forEach(function(l){n.columnas.push(l)})):setTimeout(function(){n.nombrecolumasgrupo.forEach(function(l){n.nombrecolumas.push(l)}),n.columnasgrupo.forEach(function(l){n.columnas.push(l)})},1e3),this.opciones){for(var a=this.opciones.fields.length-1;a>-1;a--)this.columnas.unshift(new u.a(this.opciones.fields[a],this.opciones.fields[a],null,{type:"vacia"},null,null,{sticky:!0},"width:200px")),this.nombrecolumas.unshift(this.opciones.fields[a].toString());this.suscripcion5=this.httpadit.get(this.tablaactual+"/getrowpermission").subscribe(function(l){n.valorestabla=l,n.suscripcion6=n.httpadit.get("aclrow?filter[where][modelname]="+n.opciones.model).subscribe(function(l){n.aclrow=l,n.armarpivot()},function(l){n.httpadit.errorget(l)})},function(l){n.httpadit.errorget(l)})}},l.prototype.armarpivot=function(){var l=this;this.mostrartabla=[],this.aclrow.forEach(function(n){l.valorestabla.forEach(function(a){var t;l.opciones.keys.forEach(function(l){t=a[l.id]===n[l.row]}),t&&(a[n.roleId]=n.permission)})}),this.dataSource=this.valorestabla},l.prototype.updatepermiso=function(l){var n={modelname:this.tablaactual,roleId:l.column,permission:l.value,modelId:""};this.opciones.keys.forEach(function(a){n.modelId+=l.data[a.id],n[a.row]=l.data[a.id]}),this.guardar(n)},l}(),s=function(){return function(){}}(),e=a("t68o"),b=a("zbXB"),r=a("NcP4"),p=a("PMZn"),m=a("JgYj"),B=a("Kx81"),h=a("iyiK"),d=a("QvFI"),f=a("v1Kq"),g=a("g1AD"),v=a("9AJC"),y=a("qvxj"),w=a("X1JL"),k=a("QdsT"),x=a("8PAr"),I=a("3UBs"),P=a("jSKb"),j=a("ak5B"),C=a("vBgn"),E=a("dlQD"),S=a("HlsH"),F=a("y67o"),L=a("FBeT"),D=a("VT8k"),N=a("FC8e"),M=a("dvM0"),O=a("XC1x"),Y=a("Yrro"),z=a("COUI"),J=a("LNmh"),$=a("y1/X"),T=a("suud"),Q=a("Pwzr"),V=a("EoH2"),G=a("Q/mU"),R=a("kYzL"),K=a("ZoVJ"),U=a("4xGo"),q=a("Q+vb"),A=a("ahi5"),X=a("2hhP"),Z=a("kE7o"),H=a("Bjzk"),_=a("5kGf"),W=a("PzPc"),ll=a("TMhE"),nl=a("Cwdc"),al=a("Ydls"),tl=a("27cX"),il=a("9nPZ"),ol=a("3ZCn"),ul=a("u7u0"),cl=a("/VaC"),sl=a("fMsc"),el=a("m+Q0"),bl=a("YLtC"),rl=a("yLmF"),pl=a("p6sX"),ml=a("Ple5"),Bl=a("/YMQ"),hl=a("hmRd"),dl=a("RczQ"),fl=a("J8k2"),gl=a("s2Gu"),vl=a("1TVO"),yl=a("cnGG"),wl=a("pxoN"),kl=a("IVa8"),xl=a("SrcE"),Il=a("F6Zm"),Pl=a("vBhP"),jl=a("eSxA"),Cl=a("OHgP"),El=a("S8cy"),Sl=a("3pWx"),Fl=a("jFS8"),Ll=a("gKf7"),Dl=a("tXvN"),Nl=a("WYm5"),Ml=a("IcEd"),Ol=a("IlwF"),Yl=a("BR4V"),zl=a("wvK7"),Jl=a("Uhbe"),$l=a("QVYP"),Tl=a("RVNe"),Ql=a("cusi"),Vl=a("9DLR"),Gl=a("GwOs"),Rl=a("cXNO"),Kl=a("IBCI"),Ul=a("3wkl"),ql=a("jFqG"),Al=a("9qzi"),Xl=a("Lzlt"),Zl=a("lUI/"),Hl=a("6FQY"),_l=a("jDGi"),Wl=a("lOF3"),ln=a("itDw"),nn=a("zAY1"),an=a("yduX"),tn=a("3KFo"),on=a("WNIU"),un=a("LRbl"),cn=a("rQUH"),sn=a("g86E"),en=a("V+mK"),bn=a("Li8s"),rn=a("Yqm3"),pn=a("VikO"),mn=a("T/ob"),Bn=a("t5NN"),hn=a("/0nd"),dn=a("ryCc"),fn=a("pMnS"),gn=a("BHnd"),vn=a("y4qS"),yn=a("0XY5"),wn=a("pIm3"),kn=a("Fzqc"),xn=a("Ip0R"),In=a("dWZg"),Pn=a("ZYCi"),jn=t.rb({encapsulation:0,styles:[[".mat-header-row[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;background-color:inherit;height:25px;min-height:25px!important}"]],data:{}});function Cn(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,3,"th",[["class","capitalizado mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],[[8,"style",2]],null,null,null,null)),t.sb(1,16384,null,0,gn.g,[vn.d,t.k],null,null),(l()(),t.tb(2,0,null,null,1,"span",[["style","font-size: 14px;"]],[[8,"title",0]],null,null,null,null)),(l()(),t.Lb(3,null,["",""]))],null,function(l,n){l(n,0,0,n.component.formdinamicservice.getstyle(n.parent.context.$implicit.css)),l(n,2,0,t.vb(1,"",n.parent.context.$implicit.columnsToDisplay,"")),l(n,3,0,n.parent.context.$implicit.columnsToDisplay)})}function En(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,4,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],[[8,"style",2],[8,"className",0]],null,null,null,null)),t.sb(1,16384,null,0,gn.a,[vn.d,t.k],null,null),(l()(),t.tb(2,0,null,null,2,"app-elementodinamico",[],null,null,null,O.c,O.b)),t.sb(3,49152,null,0,yn.a,[t.j],{componentData:[0,"componentData"]},null),t.Gb(4,{propiedad:0,row:1,column:2,datos:3,pipe:4,elemento:5})],function(l,n){var a=l(n,4,0,n.parent.context.$implicit.compdinamica,n.context.index,n.parent.context.$implicit.displayedColumns,n.context.$implicit[n.parent.context.$implicit.displayedColumns],n.parent.context.$implicit.pipedinamica,n.context.$implicit);l(n,3,0,a)},function(l,n){l(n,0,0,n.component.formdinamicservice.getstyle(n.parent.context.$implicit.css),t.vb(1,"celda-dinamica-",null!=n.parent.context.$implicit&&n.parent.context.$implicit.compdinamica?n.parent.context.$implicit.compdinamica.type:"",""))})}function Sn(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,12,null,null,null,null,null,null,null)),t.Ib(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[gn.c]),t.sb(2,16384,null,3,gn.c,[],{name:[0,"name"],stickyEnd:[1,"stickyEnd"]},null),t.Jb(335544320,5,{cell:0}),t.Jb(335544320,6,{headerCell:0}),t.Jb(335544320,7,{footerCell:0}),t.Ib(2048,[[1,4]],vn.d,null,[gn.c]),(l()(),t.kb(0,null,null,2,null,Cn)),t.sb(8,16384,null,0,gn.h,[t.P],null,null),t.Ib(2048,[[6,4]],vn.j,null,[gn.h]),(l()(),t.kb(0,null,null,2,null,En)),t.sb(11,16384,null,0,gn.b,[t.P],null,null),t.Ib(2048,[[5,4]],vn.b,null,[gn.b])],function(l,n){l(n,2,0,n.context.$implicit.displayedColumns,!(!n.context.$implicit||!n.context.$implicit.opciones)&&(null==n.context.$implicit?null:n.context.$implicit.opciones.sticky))},null)}function Fn(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,2,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,wn.f,wn.b)),t.Ib(6144,null,vn.k,null,[gn.i]),t.sb(2,49152,null,0,gn.i,[],null,null)],null,null)}function Ln(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,2,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,wn.g,wn.c)),t.Ib(6144,null,vn.m,null,[gn.k]),t.sb(2,49152,null,0,gn.k,[],null,null)],null,null)}function Dn(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,19,"div",[["class","main-content"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,18,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,17,"div",[["class","content"]],null,null,null,null,null)),(l()(),t.tb(3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(4,null,["Permisos en ",""])),(l()(),t.tb(5,0,null,null,14,"div",[["class"," tablaclass"]],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,13,"table",[["class","mat-table"],["id","mytable"],["mat-table",""]],null,null,null,wn.h,wn.d)),t.sb(7,2342912,[["mytable",4]],4,gn.m,[t.u,t.h,t.k,[8,null],[2,kn.b],xn.e,In.a],{dataSource:[0,"dataSource"]},null),t.Jb(603979776,1,{_contentColumnDefs:1}),t.Jb(603979776,2,{_contentRowDefs:1}),t.Jb(603979776,3,{_contentHeaderRowDefs:1}),t.Jb(603979776,4,{_contentFooterRowDefs:1}),(l()(),t.kb(16777216,null,null,1,null,Sn)),t.sb(13,278528,null,0,xn.o,[t.S,t.P,t.u],{ngForOf:[0,"ngForOf"]},null),(l()(),t.kb(0,null,null,2,null,Fn)),t.sb(15,540672,null,0,gn.j,[t.P,t.u],{columns:[0,"columns"]},null),t.Ib(2048,[[3,4]],vn.l,null,[gn.j]),(l()(),t.kb(0,null,null,2,null,Ln)),t.sb(18,540672,null,0,gn.l,[t.P,t.u],{columns:[0,"columns"]},null),t.Ib(2048,[[2,4]],vn.n,null,[gn.l])],function(l,n){var a=n.component;l(n,7,0,a.dataSource),l(n,13,0,a.columnas),l(n,15,0,a.nombrecolumas),l(n,18,0,a.nombrecolumas)},function(l,n){l(n,4,0,n.component.tablaactual)})}function Nn(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"app-generarpermisos",[],null,null,null,Dn,jn)),t.sb(1,245760,null,0,c,[o.a,i.a,Pn.a],null,null)],function(l,n){l(n,1,0)},null)}var Mn=t.pb("app-generarpermisos",c,Nn,{},{},[]),On=a("sE5F"),Yn=a("gIcY"),zn=a("eDkP"),Jn=a("mVsa"),$n=a("M2Lx"),Tn=a("uGex"),Qn=a("o3x0"),Vn=a("jQLj"),Gn=a("ZYjt"),Rn=a("Wf4p"),Kn=a("4tE/"),Un=a("v9Dh"),qn=a("4epT"),An=a("OkvK"),Xn=a("6uYy"),Zn=a("lLAP"),Hn=a("OBdK"),_n=a("wmQ5"),Wn=a("a1DB"),la=a("OzfB"),na=a("xtb/"),aa=a("4GxJ"),ta=a("jsSp"),ia=a("sIpu"),oa=a("rdWi"),ua=a("liTi"),ca=a("2L9D"),sa=a("4c35"),ea=a("qAlS"),ba=a("Z+uX"),ra=a("6Wmm"),pa=a("jVYb"),ma=a("seP3"),Ba=a("UodH"),ha=a("de3e"),da=a("dEvt"),fa=a("pOPN"),ga=a("w+lc"),va=a("9It4"),ya=a("Blfk"),wa=a("9Bt9"),ka=a("8mMr"),xa=a("La40"),Ia=a("r43C"),Pa=a("LC5p"),ja=a("J12g"),Ca=a("Lwpp"),Ea=a("SMsm"),Sa=a("YhbO"),Fa=a("jlZm"),La=a("9Ul1"),Da=a("/VYK"),Na=a("21Lb"),Ma=a("hUWP"),Oa=a("3pJQ"),Ya=a("V9q+"),za=a("cI9U"),Ja=a("HF1C"),$a=a("Zseb"),Ta=a("kWGw"),Qa=a("FVSy"),Va=a("b716"),Ga=a("Foo5"),Ra=a("wKhA"),Ka=a("Z+Mw"),Ua=a("o6Sk"),qa=a("yRyQ");a.d(n,"LazyModuleNgFactory",function(){return Aa});var Aa=t.qb(s,[],function(l){return t.Ab([t.Bb(512,t.j,t.fb,[[8,[e.a,b.b,b.a,r.a,p.a,m.a,B.a,h.a,d.a,f.a,g.a,v.a,v.b,v.e,v.f,v.g,v.h,v.i,y.c,w.a,k.a,x.a,I.a,P.a,j.a,C.a,E.a,S.a,F.a,L.a,D.a,N.a,M.a,O.a,Y.a,z.a,J.a,$.a,T.a,Q.a,V.a,G.a,R.a,K.a,U.a,q.a,A.a,X.a,Z.a,H.a,_.a,W.a,ll.a,nl.a,al.a,tl.a,il.a,ol.a,ul.a,cl.a,sl.a,el.a,bl.a,rl.a,pl.a,ml.a,Bl.a,hl.a,dl.a,fl.a,gl.a,vl.a,yl.a,wl.a,kl.a,xl.a,Il.a,Pl.a,jl.a,Cl.a,El.a,Sl.a,Fl.a,Ll.a,Dl.a,Nl.a,Ml.a,Ol.a,Yl.a,zl.a,Jl.a,$l.a,Tl.a,Ql.a,Vl.a,Gl.a,Rl.a,Kl.a,Ul.a,ql.a,Al.a,Xl.a,Zl.a,Hl.a,_l.a,Wl.a,ln.a,nn.a,an.a,tn.a,on.a,un.a,cn.a,sn.a,en.a,bn.a,rn.a,pn.a,mn.a,Bn.a,hn.a,dn.a,fn.a,Mn]],[3,t.j],t.z]),t.Bb(4608,On.c,On.c,[]),t.Bb(4608,On.g,On.b,[]),t.Bb(5120,On.i,On.j,[]),t.Bb(4608,On.h,On.h,[On.c,On.g,On.i]),t.Bb(4608,On.f,On.a,[]),t.Bb(5120,On.d,On.k,[On.h,On.f]),t.Bb(4608,Yn.B,Yn.B,[]),t.Bb(4608,xn.r,xn.q,[t.w,[2,xn.J]]),t.Bb(4608,Yn.f,Yn.f,[]),t.Bb(4608,zn.c,zn.c,[zn.i,zn.e,t.j,zn.h,zn.f,t.s,t.B,xn.e,kn.b,[2,xn.l]]),t.Bb(5120,zn.j,zn.k,[zn.c]),t.Bb(5120,Jn.b,Jn.g,[zn.c]),t.Bb(4608,$n.c,$n.c,[]),t.Bb(5120,Tn.a,Tn.b,[zn.c]),t.Bb(5120,Qn.b,Qn.c,[zn.c]),t.Bb(135680,Qn.d,Qn.d,[zn.c,t.s,[2,xn.l],[2,Qn.a],Qn.b,[3,Qn.d],zn.e]),t.Bb(4608,Vn.i,Vn.i,[]),t.Bb(5120,Vn.a,Vn.b,[zn.c]),t.Bb(4608,Gn.f,Rn.e,[[2,Rn.i],[2,Rn.n]]),t.Bb(5120,Kn.b,Kn.c,[zn.c]),t.Bb(5120,Un.b,Un.c,[zn.c]),t.Bb(5120,qn.c,qn.a,[[3,qn.c]]),t.Bb(4608,Rn.c,Rn.y,[[2,Rn.h],In.a]),t.Bb(5120,An.d,An.a,[[3,An.d]]),t.Bb(5120,Xn.e,Xn.d,[Xn.a,Xn.b]),t.Bb(4608,Xn.g,Xn.g,[Xn.e]),t.Bb(135680,Zn.h,Zn.h,[t.B,In.a]),t.Bb(4608,Hn.e,Hn.e,[t.P]),t.Bb(5120,_n.g,_n.a,[[3,_n.g]]),t.Bb(4608,Rn.d,Rn.d,[]),t.Bb(4608,Wn.a,Wn.a,[[2,"PapaParseGlobalConfig"]]),t.Bb(5120,t.b,function(l,n){return[la.j(l,n)]},[xn.e,t.D]),t.Bb(4608,na.a,na.a,[]),t.Bb(4608,aa.v,aa.v,[t.j,t.s,aa.W,aa.w]),t.Bb(4608,ta.a,ta.a,[xn.e]),t.Bb(4608,ia.a,ia.a,[]),t.Bb(4608,oa.a,oa.a,[]),t.Bb(4608,ua.c,ua.c,[zn.c,zn.i]),t.Bb(1073742336,On.e,On.e,[]),t.Bb(1073742336,Yn.y,Yn.y,[]),t.Bb(1073742336,Yn.k,Yn.k,[]),t.Bb(1073742336,xn.c,xn.c,[]),t.Bb(1073742336,Yn.v,Yn.v,[]),t.Bb(1073742336,ca.b,ca.b,[]),t.Bb(1073742336,kn.a,kn.a,[]),t.Bb(1073742336,Rn.n,Rn.n,[[2,Rn.f],[2,Gn.g]]),t.Bb(1073742336,In.b,In.b,[]),t.Bb(1073742336,Rn.x,Rn.x,[]),t.Bb(1073742336,sa.g,sa.g,[]),t.Bb(1073742336,ea.b,ea.b,[]),t.Bb(1073742336,zn.g,zn.g,[]),t.Bb(1073742336,Jn.e,Jn.e,[]),t.Bb(1073742336,ba.c,ba.c,[]),t.Bb(1073742336,$n.d,$n.d,[]),t.Bb(1073742336,Zn.a,Zn.a,[]),t.Bb(1073742336,ra.b,ra.b,[]),t.Bb(1073742336,pa.b,pa.b,[]),t.Bb(1073742336,Rn.v,Rn.v,[]),t.Bb(1073742336,Rn.s,Rn.s,[]),t.Bb(1073742336,ma.e,ma.e,[]),t.Bb(1073742336,Tn.d,Tn.d,[]),t.Bb(1073742336,Ba.c,Ba.c,[]),t.Bb(1073742336,Qn.g,Qn.g,[]),t.Bb(1073742336,Vn.j,Vn.j,[]),t.Bb(1073742336,ha.c,ha.c,[]),t.Bb(1073742336,da.b,da.b,[]),t.Bb(1073742336,fa.a,fa.a,[]),t.Bb(1073742336,ga.b,ga.b,[]),t.Bb(1073742336,Kn.e,Kn.e,[]),t.Bb(1073742336,Un.e,Un.e,[]),t.Bb(1073742336,qn.d,qn.d,[]),t.Bb(1073742336,vn.p,vn.p,[]),t.Bb(1073742336,gn.o,gn.o,[]),t.Bb(1073742336,va.a,va.a,[]),t.Bb(1073742336,Rn.z,Rn.z,[]),t.Bb(1073742336,Rn.p,Rn.p,[]),t.Bb(1073742336,ya.c,ya.c,[]),t.Bb(1073742336,An.e,An.e,[]),t.Bb(1073742336,Xn.c,Xn.c,[]),t.Bb(1073742336,wa.f,wa.f,[]),t.Bb(1073742336,ka.b,ka.b,[]),t.Bb(1073742336,xa.j,xa.j,[]),t.Bb(1073742336,Rn.o,Rn.o,[]),t.Bb(1073742336,Ia.b,Ia.b,[]),t.Bb(1073742336,Pa.a,Pa.a,[]),t.Bb(1073742336,Hn.c,Hn.c,[]),t.Bb(1073742336,ja.a,ja.a,[]),t.Bb(1073742336,Ca.d,Ca.d,[]),t.Bb(1073742336,Ea.c,Ea.c,[]),t.Bb(1073742336,_n.h,_n.h,[]),t.Bb(1073742336,Sa.c,Sa.c,[]),t.Bb(1073742336,Fa.c,Fa.c,[]),t.Bb(1073742336,Wn.b,Wn.b,[]),t.Bb(1073742336,La.a,La.a,[]),t.Bb(1073742336,Da.c,Da.c,[]),t.Bb(1073742336,la.c,la.c,[]),t.Bb(1073742336,Na.h,Na.h,[]),t.Bb(1073742336,Ma.c,Ma.c,[]),t.Bb(1073742336,Oa.a,Oa.a,[]),t.Bb(1073742336,Ya.a,Ya.a,[[2,la.g],t.D]),t.Bb(1073742336,za.a,za.a,[]),t.Bb(1073742336,Ja.a,Ja.a,[]),t.Bb(1073742336,$a.b,$a.b,[]),t.Bb(1073742336,Ta.a,Ta.a,[]),t.Bb(1073742336,Qa.d,Qa.d,[]),t.Bb(1073742336,Va.c,Va.c,[]),t.Bb(1073742336,Ga.a,Ga.a,[]),t.Bb(1073742336,aa.d,aa.d,[]),t.Bb(1073742336,aa.g,aa.g,[]),t.Bb(1073742336,aa.h,aa.h,[]),t.Bb(1073742336,aa.l,aa.l,[]),t.Bb(1073742336,aa.m,aa.m,[]),t.Bb(1073742336,aa.s,aa.s,[]),t.Bb(1073742336,aa.t,aa.t,[]),t.Bb(1073742336,aa.x,aa.x,[]),t.Bb(1073742336,aa.B,aa.B,[]),t.Bb(1073742336,aa.C,aa.C,[]),t.Bb(1073742336,aa.F,aa.F,[]),t.Bb(1073742336,aa.I,aa.I,[]),t.Bb(1073742336,aa.L,aa.L,[]),t.Bb(1073742336,aa.P,aa.P,[]),t.Bb(1073742336,aa.S,aa.S,[]),t.Bb(1073742336,aa.T,aa.T,[]),t.Bb(1073742336,aa.y,aa.y,[]),t.Bb(1073742336,ua.b,ua.b,[]),t.Bb(1073742336,Ra.a,Ra.a,[]),t.Bb(1073742336,Ka.c,Ka.c,[]),t.Bb(1073742336,Ua.a,Ua.a,[]),t.Bb(1073742336,qa.a,qa.a,[]),t.Bb(1073742336,Pn.r,Pn.r,[[2,Pn.x],[2,Pn.n]]),t.Bb(1073742336,s,s,[]),t.Bb(256,Rn.g,Rn.k,[]),t.Bb(256,Xn.a,Xn.f,[]),t.Bb(256,Xn.b,void 0,[]),t.Bb(256,ua.e,{autoFocus:!0,useBootstrap4:!0},[]),t.Bb(256,"configuration",{messages:{emptyMessage:"No hay Resultados",totalMessage:"Total",selectedMessage:"Seleccionado"}},[]),t.Bb(256,Ka.a,{modules:Ka.d},[]),t.Bb(1024,Pn.l,function(){return[[{path:":id",component:c}]]},[])])})}}]);