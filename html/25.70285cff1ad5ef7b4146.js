(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Vyka:function(a,i,n){"use strict";n.r(i);var e=n("CcnG"),l=n("Q6jE"),t=n("n90K"),b=n("dwco"),c=n.n(b),o=n("H18U"),s=n("bHpV"),r=function(){function a(a,i,n,e,l){this._route=a,this.storage=i,this.creafavoritos=n,this.ref=e,this.formservice=l,this.maximizar=!1,this.nombretabladinamica="",this.colorfondo="#ffab30",this.coloricono="white",this.funcion={},c.a.polyfill()}return a.prototype.ngOnInit=function(){var a=this;this.suscripcion1=this._route.params.subscribe(function(i){a.nombretabladinamica=i.id,a.maximizar=!1,window.EventManager.setTitleEmpresa(a.nombretabladinamica),a.detectChanges()},function(a){window.EventManager.logerror(a)})},a.prototype.detectChanges=function(){this.ref&&!this.ref.destroyed&&this.ref.detectChanges()},a.prototype.setEnviarEscritorio=function(a,i){this.enviaraescritorio=a,a?this.creafavoritos.creofavorito(this.nombretabladinamica,this.icono,this.queryparams,i,this.colorfondo,this.coloricono):this.creafavoritos.quitarfavoritos(this.nombretabladinamica,this.icono)},a.prototype.ngOnDestroy=function(){this.suscripcion1&&this.suscripcion1.unsubscribe()},a.prototype.sidebarCloselateral=function(){var a=document.getElementsByTagName("body")[0];document.getElementsByClassName("navbar-toggler")[0].classList.remove("toggled"),a.classList.remove("nav-open");var i=document.getElementsByClassName("close-layer")[0];i&&i.remove()},a.prototype.sidebarOpen=function(){"true"===this.storage.getSidebarVisible()&&document.getElementsByTagName("body")[0].classList.remove("sidebar-close")},a.prototype.sidebarClose=function(){document.getElementsByTagName("body")[0].classList.add("sidebar-close")},a.prototype.maximizartabla=function(){this.recalcular=!this.recalcular,this.maximizar=!this.maximizar,this.maximizar?this.sidebarClose():this.sidebarOpen()},a.prototype.clickmio=function(a,i){var n="";switch(1===i&&this.funcion.click&&(n=this.funcion.click),2===i&&(n=this.funcion.dblclick?this.funcion.dblclick:"open"),4===i&&this.funcion.derclick&&(n=this.funcion.derclick),3===i&&(n=this.funcion.ruedita?this.funcion.ruedita:"opentab"),n){case"open":a&&this.ir(a[this.tabladinamica.idform]);break;case"log":window.EventManager.log(a);break;case"opentab":this.irtab(a[this.tabladinamica.idform])}},a.prototype.ir=function(a){var i='{"'+this.tabladinamica.idform+'":"'+a+'"}',n=this._route.toString(),e=n.indexOf("'")+1;n=n.slice(e,n.indexOf("'",e)),this.formservice.ir(this._route,this.tabladinamica.rutadestino,i)},a.prototype.irtab=function(a){var i='{"'+this.tabladinamica.idform+'":"'+a+'"}',n=this._route.toString(),e=n.indexOf("'")+1;n=n.slice(e,n.indexOf("'",e)),this.formservice.irtab(this.tabladinamica.rutadestino,i)},a}(),u=function(){return function(){}}(),B=n("t68o"),d=n("zbXB"),m=n("NcP4"),h=n("PMZn"),f=n("JgYj"),p=n("Kx81"),g=n("iyiK"),v=n("QvFI"),k=n("v1Kq"),y=n("g1AD"),x=n("9AJC"),w=n("qvxj"),z=n("X1JL"),C=n("QdsT"),L=n("8PAr"),j=n("3UBs"),N=n("jSKb"),P=n("ak5B"),E=n("vBgn"),F=n("dlQD"),O=n("HlsH"),Y=n("y67o"),I=n("FBeT"),S=n("VT8k"),V=n("FC8e"),M=n("dvM0"),Q=n("XC1x"),D=n("Yrro"),T=n("COUI"),q=n("LNmh"),G=n("y1/X"),J=n("suud"),K=n("Pwzr"),Z=n("EoH2"),H=n("Q/mU"),U=n("kYzL"),X=n("ZoVJ"),A=n("4xGo"),R=n("Q+vb"),W=n("ahi5"),_=n("2hhP"),$=n("kE7o"),aa=n("Bjzk"),ia=n("5kGf"),na=n("PzPc"),ea=n("TMhE"),la=n("Cwdc"),ta=n("Ydls"),ba=n("27cX"),ca=n("9nPZ"),oa=n("3ZCn"),sa=n("u7u0"),ra=n("/VaC"),ua=n("fMsc"),Ba=n("m+Q0"),da=n("YLtC"),ma=n("yLmF"),ha=n("p6sX"),fa=n("Ple5"),pa=n("/YMQ"),ga=n("hmRd"),va=n("RczQ"),ka=n("J8k2"),ya=n("s2Gu"),xa=n("1TVO"),wa=n("cnGG"),za=n("pxoN"),Ca=n("IVa8"),La=n("SrcE"),ja=n("F6Zm"),Na=n("vBhP"),Pa=n("eSxA"),Ea=n("OHgP"),Fa=n("S8cy"),Oa=n("3pWx"),Ya=n("jFS8"),Ia=n("gKf7"),Sa=n("tXvN"),Va=n("WYm5"),Ma=n("IcEd"),Qa=n("IlwF"),Da=n("BR4V"),Ta=n("wvK7"),qa=n("Uhbe"),Ga=n("QVYP"),Ja=n("RVNe"),Ka=n("cusi"),Za=n("9DLR"),Ha=n("GwOs"),Ua=n("cXNO"),Xa=n("IBCI"),Aa=n("3wkl"),Ra=n("jFqG"),Wa=n("9qzi"),_a=n("Lzlt"),$a=n("lUI/"),ai=n("6FQY"),ii=n("jDGi"),ni=n("lOF3"),ei=n("itDw"),li=n("zAY1"),ti=n("yduX"),bi=n("3KFo"),ci=n("WNIU"),oi=n("LRbl"),si=n("rQUH"),ri=n("g86E"),ui=n("V+mK"),Bi=n("Li8s"),di=n("Yqm3"),mi=n("VikO"),hi=n("T/ob"),fi=n("t5NN"),pi=n("/0nd"),gi=n("ryCc"),vi=n("pMnS"),ki=n("zYs3"),yi=n("tXlq"),xi=n("xtb/"),wi=n("h/uZ"),zi=n("20mB"),Ci=n("a51N"),Li=n("HFue"),ji=n("DJpA"),Ni=n("qAlS"),Pi=n("xyLg"),Ei=n("/YwC"),Fi=n("DNio"),Oi=n("Ip0R"),Yi=n("ZYCi"),Ii=e.rb({encapsulation:0,styles:[[""]],data:{}});function Si(a){return e.Nb(0,[(a()(),e.tb(0,0,null,null,1,"app-tabladinamicaadit",[],null,[[null,"medioclickelemento"],[null,"derclickelemento"],[null,"clickelemento"],[null,"dblclickelemento"],["window","resize"]],function(a,i,n){var l=!0,t=a.component;return"window:resize"===i&&(l=!1!==e.Db(a,1).onResize(n)&&l),"medioclickelemento"===i&&(l=!1!==t.clickmio(n,3)&&l),"derclickelemento"===i&&(l=!1!==t.clickmio(n,4)&&l),"clickelemento"===i&&(l=!1!==t.clickmio(n,1)&&l),"dblclickelemento"===i&&(l=!1!==t.clickmio(n,2)&&l),l},ki.b,ki.a)),e.sb(1,4440064,[[1,4],["tabladin",4]],0,s.a,[yi.a,xi.a,wi.a,e.H,e.h,zi.a,Ci.a,t.a,Li.a,ji.a,Ni.a,Pi.a,Ei.a],{recalcular:[0,"recalcular"],maximizar:[1,"maximizar"],nombre:[2,"nombre"]},{clickelemento:"clickelemento",dblclickelemento:"dblclickelemento",medioclickelemento:"medioclickelemento",derclickelemento:"derclickelemento"})],function(a,i){var n=i.component;a(i,1,0,n.recalcular,n.maximizar,n.nombretabladinamica)},null)}function Vi(a){return e.Nb(0,[e.Jb(671088640,1,{tabladinamica:0}),(a()(),e.tb(1,0,null,null,1,"app-botonesopciones",[],null,null,null,ti.c,ti.b)),e.sb(2,245760,null,0,Fi.a,[wi.a,t.a,Ei.a,Pi.a,yi.a],{ocultar:[0,"ocultar"],titulo:[1,"titulo"],componenteform:[2,"componenteform"]},null),(a()(),e.tb(3,0,null,null,8,"div",[["class","container-fluid"]],null,null,null,null,null)),(a()(),e.tb(4,0,null,null,7,"div",[["class","main-content"],["style","padding-bottom: 0px;"]],null,null,null,null,null)),(a()(),e.tb(5,0,null,null,6,"div",[["class","content"]],null,null,null,null,null)),(a()(),e.tb(6,0,null,null,5,"div",[["class","card"]],[[8,"className",0]],null,null,null,null)),(a()(),e.tb(7,0,null,null,2,"div",[["class","click no-seleccionable doNotPrint expandirtabla"]],null,[[null,"click"]],function(a,i,n){var e=!0;return"click"===i&&(e=!1!==a.component.maximizartabla()&&e),e},null,null)),(a()(),e.tb(8,0,null,null,1,"i",[["class","material-icons listado aspect_ratio"]],null,null,null,null,null)),(a()(),e.Lb(-1,null,["aspect_ratio"])),(a()(),e.kb(16777216,null,null,1,null,Si)),e.sb(11,16384,null,0,Oi.p,[e.S,e.P],{ngIf:[0,"ngIf"]},null)],function(a,i){var n=i.component;a(i,2,0,!0,n.nombretabladinamica,n.nombretabladinamica),a(i,11,0,n.nombretabladinamica)},function(a,i){a(i,6,0,i.component.maximizar?"maximizar":"")})}function Mi(a){return e.Nb(0,[(a()(),e.tb(0,0,null,null,1,"app-listado",[],null,null,null,Vi,Ii)),e.sb(1,245760,null,0,r,[Yi.a,t.a,l.a,e.h,o.a],null,null)],function(a,i){a(i,1,0)},null)}var Qi=e.pb("app-listado",r,Mi,{nombretabladinamica:"nombretabladinamica"},{},[]),Di=n("sE5F"),Ti=n("gIcY"),qi=n("eDkP"),Gi=n("Fzqc"),Ji=n("mVsa"),Ki=n("M2Lx"),Zi=n("uGex"),Hi=n("o3x0"),Ui=n("jQLj"),Xi=n("ZYjt"),Ai=n("Wf4p"),Ri=n("4tE/"),Wi=n("v9Dh"),_i=n("4epT"),$i=n("dWZg"),an=n("OkvK"),nn=n("6uYy"),en=n("lLAP"),ln=n("OBdK"),tn=n("wmQ5"),bn=n("a1DB"),cn=n("OzfB"),on=n("4GxJ"),sn=n("jsSp"),rn=n("sIpu"),un=n("rdWi"),Bn=n("liTi"),dn=n("2L9D"),mn=n("4c35"),hn=n("Z+uX"),fn=n("6Wmm"),pn=n("jVYb"),gn=n("seP3"),vn=n("UodH"),kn=n("de3e"),yn=n("dEvt"),xn=n("pOPN"),wn=n("w+lc"),zn=n("y4qS"),Cn=n("BHnd"),Ln=n("9It4"),jn=n("Blfk"),Nn=n("9Bt9"),Pn=n("8mMr"),En=n("La40"),Fn=n("r43C"),On=n("LC5p"),Yn=n("J12g"),In=n("Lwpp"),Sn=n("SMsm"),Vn=n("YhbO"),Mn=n("jlZm"),Qn=n("9Ul1"),Dn=n("/VYK"),Tn=n("21Lb"),qn=n("hUWP"),Gn=n("3pJQ"),Jn=n("V9q+"),Kn=n("cI9U"),Zn=n("HF1C"),Hn=n("Zseb"),Un=n("kWGw"),Xn=n("FVSy"),An=n("b716"),Rn=n("Foo5"),Wn=n("wKhA"),_n=n("Z+Mw"),$n=n("o6Sk"),ae=n("yRyQ");n.d(i,"LazyModuleNgFactory",function(){return ie});var ie=e.qb(u,[],function(a){return e.Ab([e.Bb(512,e.j,e.fb,[[8,[B.a,d.b,d.a,m.a,h.a,f.a,p.a,g.a,v.a,k.a,y.a,x.a,x.b,x.e,x.f,x.g,x.h,x.i,w.c,z.a,C.a,L.a,j.a,N.a,P.a,E.a,F.a,O.a,Y.a,I.a,S.a,V.a,M.a,Q.a,D.a,T.a,q.a,G.a,J.a,K.a,Z.a,H.a,U.a,X.a,A.a,R.a,W.a,_.a,$.a,aa.a,ia.a,na.a,ea.a,la.a,ta.a,ba.a,ca.a,oa.a,sa.a,ra.a,ua.a,Ba.a,da.a,ma.a,ha.a,fa.a,pa.a,ga.a,va.a,ka.a,ya.a,xa.a,wa.a,za.a,Ca.a,La.a,ja.a,Na.a,Pa.a,Ea.a,Fa.a,Oa.a,Ya.a,Ia.a,Sa.a,Va.a,Ma.a,Qa.a,Da.a,Ta.a,qa.a,Ga.a,Ja.a,Ka.a,Za.a,Ha.a,Ua.a,Xa.a,Aa.a,Ra.a,Wa.a,_a.a,$a.a,ai.a,ii.a,ni.a,ei.a,li.a,ti.a,bi.a,ci.a,oi.a,si.a,ri.a,ui.a,Bi.a,di.a,mi.a,hi.a,fi.a,pi.a,gi.a,vi.a,Qi]],[3,e.j],e.z]),e.Bb(4608,Di.c,Di.c,[]),e.Bb(4608,Di.g,Di.b,[]),e.Bb(5120,Di.i,Di.j,[]),e.Bb(4608,Di.h,Di.h,[Di.c,Di.g,Di.i]),e.Bb(4608,Di.f,Di.a,[]),e.Bb(5120,Di.d,Di.k,[Di.h,Di.f]),e.Bb(4608,Ti.B,Ti.B,[]),e.Bb(4608,Oi.r,Oi.q,[e.w,[2,Oi.J]]),e.Bb(4608,Ti.f,Ti.f,[]),e.Bb(4608,qi.c,qi.c,[qi.i,qi.e,e.j,qi.h,qi.f,e.s,e.B,Oi.e,Gi.b,[2,Oi.l]]),e.Bb(5120,qi.j,qi.k,[qi.c]),e.Bb(5120,Ji.b,Ji.g,[qi.c]),e.Bb(4608,Ki.c,Ki.c,[]),e.Bb(5120,Zi.a,Zi.b,[qi.c]),e.Bb(5120,Hi.b,Hi.c,[qi.c]),e.Bb(135680,Hi.d,Hi.d,[qi.c,e.s,[2,Oi.l],[2,Hi.a],Hi.b,[3,Hi.d],qi.e]),e.Bb(4608,Ui.i,Ui.i,[]),e.Bb(5120,Ui.a,Ui.b,[qi.c]),e.Bb(4608,Xi.f,Ai.e,[[2,Ai.i],[2,Ai.n]]),e.Bb(5120,Ri.b,Ri.c,[qi.c]),e.Bb(5120,Wi.b,Wi.c,[qi.c]),e.Bb(5120,_i.c,_i.a,[[3,_i.c]]),e.Bb(4608,Ai.c,Ai.y,[[2,Ai.h],$i.a]),e.Bb(5120,an.d,an.a,[[3,an.d]]),e.Bb(5120,nn.e,nn.d,[nn.a,nn.b]),e.Bb(4608,nn.g,nn.g,[nn.e]),e.Bb(135680,en.h,en.h,[e.B,$i.a]),e.Bb(4608,ln.e,ln.e,[e.P]),e.Bb(5120,tn.g,tn.a,[[3,tn.g]]),e.Bb(4608,Ai.d,Ai.d,[]),e.Bb(4608,bn.a,bn.a,[[2,"PapaParseGlobalConfig"]]),e.Bb(5120,e.b,function(a,i){return[cn.j(a,i)]},[Oi.e,e.D]),e.Bb(4608,xi.a,xi.a,[]),e.Bb(4608,on.v,on.v,[e.j,e.s,on.W,on.w]),e.Bb(4608,sn.a,sn.a,[Oi.e]),e.Bb(4608,rn.a,rn.a,[]),e.Bb(4608,un.a,un.a,[]),e.Bb(4608,Bn.c,Bn.c,[qi.c,qi.i]),e.Bb(1073742336,Di.e,Di.e,[]),e.Bb(1073742336,Ti.y,Ti.y,[]),e.Bb(1073742336,Ti.k,Ti.k,[]),e.Bb(1073742336,Oi.c,Oi.c,[]),e.Bb(1073742336,Ti.v,Ti.v,[]),e.Bb(1073742336,dn.b,dn.b,[]),e.Bb(1073742336,Gi.a,Gi.a,[]),e.Bb(1073742336,Ai.n,Ai.n,[[2,Ai.f],[2,Xi.g]]),e.Bb(1073742336,$i.b,$i.b,[]),e.Bb(1073742336,Ai.x,Ai.x,[]),e.Bb(1073742336,mn.g,mn.g,[]),e.Bb(1073742336,Ni.b,Ni.b,[]),e.Bb(1073742336,qi.g,qi.g,[]),e.Bb(1073742336,Ji.e,Ji.e,[]),e.Bb(1073742336,hn.c,hn.c,[]),e.Bb(1073742336,Ki.d,Ki.d,[]),e.Bb(1073742336,en.a,en.a,[]),e.Bb(1073742336,fn.b,fn.b,[]),e.Bb(1073742336,pn.b,pn.b,[]),e.Bb(1073742336,Ai.v,Ai.v,[]),e.Bb(1073742336,Ai.s,Ai.s,[]),e.Bb(1073742336,gn.e,gn.e,[]),e.Bb(1073742336,Zi.d,Zi.d,[]),e.Bb(1073742336,vn.c,vn.c,[]),e.Bb(1073742336,Hi.g,Hi.g,[]),e.Bb(1073742336,Ui.j,Ui.j,[]),e.Bb(1073742336,kn.c,kn.c,[]),e.Bb(1073742336,yn.b,yn.b,[]),e.Bb(1073742336,xn.a,xn.a,[]),e.Bb(1073742336,wn.b,wn.b,[]),e.Bb(1073742336,Ri.e,Ri.e,[]),e.Bb(1073742336,Wi.e,Wi.e,[]),e.Bb(1073742336,_i.d,_i.d,[]),e.Bb(1073742336,zn.p,zn.p,[]),e.Bb(1073742336,Cn.o,Cn.o,[]),e.Bb(1073742336,Ln.a,Ln.a,[]),e.Bb(1073742336,Ai.z,Ai.z,[]),e.Bb(1073742336,Ai.p,Ai.p,[]),e.Bb(1073742336,jn.c,jn.c,[]),e.Bb(1073742336,an.e,an.e,[]),e.Bb(1073742336,nn.c,nn.c,[]),e.Bb(1073742336,Nn.f,Nn.f,[]),e.Bb(1073742336,Pn.b,Pn.b,[]),e.Bb(1073742336,En.j,En.j,[]),e.Bb(1073742336,Ai.o,Ai.o,[]),e.Bb(1073742336,Fn.b,Fn.b,[]),e.Bb(1073742336,On.a,On.a,[]),e.Bb(1073742336,ln.c,ln.c,[]),e.Bb(1073742336,Yn.a,Yn.a,[]),e.Bb(1073742336,In.d,In.d,[]),e.Bb(1073742336,Sn.c,Sn.c,[]),e.Bb(1073742336,tn.h,tn.h,[]),e.Bb(1073742336,Vn.c,Vn.c,[]),e.Bb(1073742336,Mn.c,Mn.c,[]),e.Bb(1073742336,bn.b,bn.b,[]),e.Bb(1073742336,Qn.a,Qn.a,[]),e.Bb(1073742336,Dn.c,Dn.c,[]),e.Bb(1073742336,cn.c,cn.c,[]),e.Bb(1073742336,Tn.h,Tn.h,[]),e.Bb(1073742336,qn.c,qn.c,[]),e.Bb(1073742336,Gn.a,Gn.a,[]),e.Bb(1073742336,Jn.a,Jn.a,[[2,cn.g],e.D]),e.Bb(1073742336,Kn.a,Kn.a,[]),e.Bb(1073742336,Zn.a,Zn.a,[]),e.Bb(1073742336,Hn.b,Hn.b,[]),e.Bb(1073742336,Un.a,Un.a,[]),e.Bb(1073742336,Xn.d,Xn.d,[]),e.Bb(1073742336,An.c,An.c,[]),e.Bb(1073742336,Rn.a,Rn.a,[]),e.Bb(1073742336,on.d,on.d,[]),e.Bb(1073742336,on.g,on.g,[]),e.Bb(1073742336,on.h,on.h,[]),e.Bb(1073742336,on.l,on.l,[]),e.Bb(1073742336,on.m,on.m,[]),e.Bb(1073742336,on.s,on.s,[]),e.Bb(1073742336,on.t,on.t,[]),e.Bb(1073742336,on.x,on.x,[]),e.Bb(1073742336,on.B,on.B,[]),e.Bb(1073742336,on.C,on.C,[]),e.Bb(1073742336,on.F,on.F,[]),e.Bb(1073742336,on.I,on.I,[]),e.Bb(1073742336,on.L,on.L,[]),e.Bb(1073742336,on.P,on.P,[]),e.Bb(1073742336,on.S,on.S,[]),e.Bb(1073742336,on.T,on.T,[]),e.Bb(1073742336,on.y,on.y,[]),e.Bb(1073742336,Bn.b,Bn.b,[]),e.Bb(1073742336,Wn.a,Wn.a,[]),e.Bb(1073742336,_n.c,_n.c,[]),e.Bb(1073742336,$n.a,$n.a,[]),e.Bb(1073742336,ae.a,ae.a,[]),e.Bb(1073742336,Yi.r,Yi.r,[[2,Yi.x],[2,Yi.n]]),e.Bb(1073742336,u,u,[]),e.Bb(256,Ai.g,Ai.k,[]),e.Bb(256,nn.a,nn.f,[]),e.Bb(256,nn.b,void 0,[]),e.Bb(256,Bn.e,{autoFocus:!0,useBootstrap4:!0},[]),e.Bb(256,"configuration",{messages:{emptyMessage:"No hay Resultados",totalMessage:"Total",selectedMessage:"Seleccionado"}},[]),e.Bb(256,_n.a,{modules:_n.d},[]),e.Bb(1024,Yi.l,function(){return[[{path:":id",component:r}]]},[])])})}}]);