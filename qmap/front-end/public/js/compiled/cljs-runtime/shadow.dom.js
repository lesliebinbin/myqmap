goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34884 = coll;
var G__34885 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34884,G__34885) : shadow.dom.lazy_native_coll_seq.call(null,G__34884,G__34885));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34922 = arguments.length;
switch (G__34922) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34928 = arguments.length;
switch (G__34928) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34950 = arguments.length;
switch (G__34950) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34954 = arguments.length;
switch (G__34954) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34971 = arguments.length;
switch (G__34971) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__34975 = document;
var G__34976 = shadow.dom.dom_node(el);
return goog.dom.contains(G__34975,G__34976);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__34978 = shadow.dom.dom_node(parent);
var G__34979 = shadow.dom.dom_node(el);
return goog.dom.contains(G__34978,G__34979);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__34990 = shadow.dom.dom_node(el);
var G__34991 = cls;
return goog.dom.classlist.add(G__34990,G__34991);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__34992 = shadow.dom.dom_node(el);
var G__34993 = cls;
return goog.dom.classlist.remove(G__34992,G__34993);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34998 = arguments.length;
switch (G__34998) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__35000 = shadow.dom.dom_node(el);
var G__35001 = cls;
return goog.dom.classlist.toggle(G__35000,G__35001);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35010){if((e35010 instanceof Object)){
var e = e35010;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35010;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35018 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35019 = null;
var count__35020 = (0);
var i__35021 = (0);
while(true){
if((i__35021 < count__35020)){
var el = chunk__35019.cljs$core$IIndexed$_nth$arity$2(null,i__35021);
var handler_35559__$1 = ((function (seq__35018,chunk__35019,count__35020,i__35021,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35018,chunk__35019,count__35020,i__35021,el))
;
var G__35028_35561 = el;
var G__35029_35562 = cljs.core.name(ev);
var G__35030_35563 = handler_35559__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35028_35561,G__35029_35562,G__35030_35563) : shadow.dom.dom_listen.call(null,G__35028_35561,G__35029_35562,G__35030_35563));


var G__35565 = seq__35018;
var G__35566 = chunk__35019;
var G__35567 = count__35020;
var G__35568 = (i__35021 + (1));
seq__35018 = G__35565;
chunk__35019 = G__35566;
count__35020 = G__35567;
i__35021 = G__35568;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35018);
if(temp__5720__auto__){
var seq__35018__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35018__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35018__$1);
var G__35571 = cljs.core.chunk_rest(seq__35018__$1);
var G__35572 = c__4550__auto__;
var G__35573 = cljs.core.count(c__4550__auto__);
var G__35574 = (0);
seq__35018 = G__35571;
chunk__35019 = G__35572;
count__35020 = G__35573;
i__35021 = G__35574;
continue;
} else {
var el = cljs.core.first(seq__35018__$1);
var handler_35575__$1 = ((function (seq__35018,chunk__35019,count__35020,i__35021,el,seq__35018__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35018,chunk__35019,count__35020,i__35021,el,seq__35018__$1,temp__5720__auto__))
;
var G__35031_35578 = el;
var G__35032_35579 = cljs.core.name(ev);
var G__35033_35580 = handler_35575__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35031_35578,G__35032_35579,G__35033_35580) : shadow.dom.dom_listen.call(null,G__35031_35578,G__35032_35579,G__35033_35580));


var G__35582 = cljs.core.next(seq__35018__$1);
var G__35583 = null;
var G__35584 = (0);
var G__35585 = (0);
seq__35018 = G__35582;
chunk__35019 = G__35583;
count__35020 = G__35584;
i__35021 = G__35585;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35035 = arguments.length;
switch (G__35035) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__35036 = shadow.dom.dom_node(el);
var G__35037 = cljs.core.name(ev);
var G__35038 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35036,G__35037,G__35038) : shadow.dom.dom_listen.call(null,G__35036,G__35037,G__35038));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35039 = shadow.dom.dom_node(el);
var G__35040 = cljs.core.name(ev);
var G__35041 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35039,G__35040,G__35041) : shadow.dom.dom_listen_remove.call(null,G__35039,G__35040,G__35041));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35042 = cljs.core.seq(events);
var chunk__35043 = null;
var count__35044 = (0);
var i__35045 = (0);
while(true){
if((i__35045 < count__35044)){
var vec__35052 = chunk__35043.cljs$core$IIndexed$_nth$arity$2(null,i__35045);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35052,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35052,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35595 = seq__35042;
var G__35596 = chunk__35043;
var G__35597 = count__35044;
var G__35598 = (i__35045 + (1));
seq__35042 = G__35595;
chunk__35043 = G__35596;
count__35044 = G__35597;
i__35045 = G__35598;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35042);
if(temp__5720__auto__){
var seq__35042__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35042__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35042__$1);
var G__35600 = cljs.core.chunk_rest(seq__35042__$1);
var G__35601 = c__4550__auto__;
var G__35602 = cljs.core.count(c__4550__auto__);
var G__35603 = (0);
seq__35042 = G__35600;
chunk__35043 = G__35601;
count__35044 = G__35602;
i__35045 = G__35603;
continue;
} else {
var vec__35056 = cljs.core.first(seq__35042__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35056,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35604 = cljs.core.next(seq__35042__$1);
var G__35605 = null;
var G__35606 = (0);
var G__35607 = (0);
seq__35042 = G__35604;
chunk__35043 = G__35605;
count__35044 = G__35606;
i__35045 = G__35607;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35060 = cljs.core.seq(styles);
var chunk__35061 = null;
var count__35062 = (0);
var i__35063 = (0);
while(true){
if((i__35063 < count__35062)){
var vec__35081 = chunk__35061.cljs$core$IIndexed$_nth$arity$2(null,i__35063);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35081,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35081,(1),null);
var G__35085_35610 = dom;
var G__35086_35611 = cljs.core.name(k);
var G__35087_35612 = (((v == null))?"":v);
goog.style.setStyle(G__35085_35610,G__35086_35611,G__35087_35612);


var G__35614 = seq__35060;
var G__35615 = chunk__35061;
var G__35616 = count__35062;
var G__35617 = (i__35063 + (1));
seq__35060 = G__35614;
chunk__35061 = G__35615;
count__35062 = G__35616;
i__35063 = G__35617;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35060);
if(temp__5720__auto__){
var seq__35060__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35060__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35060__$1);
var G__35618 = cljs.core.chunk_rest(seq__35060__$1);
var G__35619 = c__4550__auto__;
var G__35620 = cljs.core.count(c__4550__auto__);
var G__35621 = (0);
seq__35060 = G__35618;
chunk__35061 = G__35619;
count__35062 = G__35620;
i__35063 = G__35621;
continue;
} else {
var vec__35091 = cljs.core.first(seq__35060__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35091,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35091,(1),null);
var G__35094_35624 = dom;
var G__35095_35625 = cljs.core.name(k);
var G__35096_35626 = (((v == null))?"":v);
goog.style.setStyle(G__35094_35624,G__35095_35625,G__35096_35626);


var G__35640 = cljs.core.next(seq__35060__$1);
var G__35641 = null;
var G__35642 = (0);
var G__35643 = (0);
seq__35060 = G__35640;
chunk__35061 = G__35641;
count__35062 = G__35642;
i__35063 = G__35643;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35099_35644 = key;
var G__35099_35645__$1 = (((G__35099_35644 instanceof cljs.core.Keyword))?G__35099_35644.fqn:null);
switch (G__35099_35645__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35650 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_35650,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_35650,"aria-");
}
})())){
el.setAttribute(ks_35650,value);
} else {
(el[ks_35650] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__35107 = shadow.dom.dom_node(el);
var G__35108 = cls;
return goog.dom.classlist.contains(G__35107,G__35108);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35114){
var map__35115 = p__35114;
var map__35115__$1 = (((((!((map__35115 == null))))?(((((map__35115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35115):map__35115);
var props = map__35115__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35115__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35118 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35118,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35118,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35118,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35123 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35123,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35123;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35128 = arguments.length;
switch (G__35128) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35134){
var vec__35135 = p__35134;
var seq__35136 = cljs.core.seq(vec__35135);
var first__35137 = cljs.core.first(seq__35136);
var seq__35136__$1 = cljs.core.next(seq__35136);
var nn = first__35137;
var first__35137__$1 = cljs.core.first(seq__35136__$1);
var seq__35136__$2 = cljs.core.next(seq__35136__$1);
var np = first__35137__$1;
var nc = seq__35136__$2;
var node = vec__35135;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35140 = nn;
var G__35141 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35140,G__35141) : create_fn.call(null,G__35140,G__35141));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35143 = nn;
var G__35144 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35143,G__35144) : create_fn.call(null,G__35143,G__35144));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35147 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147,(1),null);
var seq__35150_35680 = cljs.core.seq(node_children);
var chunk__35152_35681 = null;
var count__35153_35682 = (0);
var i__35154_35683 = (0);
while(true){
if((i__35154_35683 < count__35153_35682)){
var child_struct_35684 = chunk__35152_35681.cljs$core$IIndexed$_nth$arity$2(null,i__35154_35683);
var children_35698 = shadow.dom.dom_node(child_struct_35684);
if(cljs.core.seq_QMARK_(children_35698)){
var seq__35183_35700 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35698));
var chunk__35185_35701 = null;
var count__35186_35702 = (0);
var i__35187_35703 = (0);
while(true){
if((i__35187_35703 < count__35186_35702)){
var child_35704 = chunk__35185_35701.cljs$core$IIndexed$_nth$arity$2(null,i__35187_35703);
if(cljs.core.truth_(child_35704)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35704);


var G__35705 = seq__35183_35700;
var G__35706 = chunk__35185_35701;
var G__35707 = count__35186_35702;
var G__35708 = (i__35187_35703 + (1));
seq__35183_35700 = G__35705;
chunk__35185_35701 = G__35706;
count__35186_35702 = G__35707;
i__35187_35703 = G__35708;
continue;
} else {
var G__35709 = seq__35183_35700;
var G__35710 = chunk__35185_35701;
var G__35711 = count__35186_35702;
var G__35712 = (i__35187_35703 + (1));
seq__35183_35700 = G__35709;
chunk__35185_35701 = G__35710;
count__35186_35702 = G__35711;
i__35187_35703 = G__35712;
continue;
}
} else {
var temp__5720__auto___35713 = cljs.core.seq(seq__35183_35700);
if(temp__5720__auto___35713){
var seq__35183_35714__$1 = temp__5720__auto___35713;
if(cljs.core.chunked_seq_QMARK_(seq__35183_35714__$1)){
var c__4550__auto___35715 = cljs.core.chunk_first(seq__35183_35714__$1);
var G__35716 = cljs.core.chunk_rest(seq__35183_35714__$1);
var G__35717 = c__4550__auto___35715;
var G__35718 = cljs.core.count(c__4550__auto___35715);
var G__35719 = (0);
seq__35183_35700 = G__35716;
chunk__35185_35701 = G__35717;
count__35186_35702 = G__35718;
i__35187_35703 = G__35719;
continue;
} else {
var child_35720 = cljs.core.first(seq__35183_35714__$1);
if(cljs.core.truth_(child_35720)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35720);


var G__35721 = cljs.core.next(seq__35183_35714__$1);
var G__35722 = null;
var G__35723 = (0);
var G__35724 = (0);
seq__35183_35700 = G__35721;
chunk__35185_35701 = G__35722;
count__35186_35702 = G__35723;
i__35187_35703 = G__35724;
continue;
} else {
var G__35725 = cljs.core.next(seq__35183_35714__$1);
var G__35726 = null;
var G__35727 = (0);
var G__35728 = (0);
seq__35183_35700 = G__35725;
chunk__35185_35701 = G__35726;
count__35186_35702 = G__35727;
i__35187_35703 = G__35728;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35698);
}


var G__35729 = seq__35150_35680;
var G__35730 = chunk__35152_35681;
var G__35731 = count__35153_35682;
var G__35732 = (i__35154_35683 + (1));
seq__35150_35680 = G__35729;
chunk__35152_35681 = G__35730;
count__35153_35682 = G__35731;
i__35154_35683 = G__35732;
continue;
} else {
var temp__5720__auto___35733 = cljs.core.seq(seq__35150_35680);
if(temp__5720__auto___35733){
var seq__35150_35734__$1 = temp__5720__auto___35733;
if(cljs.core.chunked_seq_QMARK_(seq__35150_35734__$1)){
var c__4550__auto___35735 = cljs.core.chunk_first(seq__35150_35734__$1);
var G__35736 = cljs.core.chunk_rest(seq__35150_35734__$1);
var G__35737 = c__4550__auto___35735;
var G__35738 = cljs.core.count(c__4550__auto___35735);
var G__35739 = (0);
seq__35150_35680 = G__35736;
chunk__35152_35681 = G__35737;
count__35153_35682 = G__35738;
i__35154_35683 = G__35739;
continue;
} else {
var child_struct_35740 = cljs.core.first(seq__35150_35734__$1);
var children_35741 = shadow.dom.dom_node(child_struct_35740);
if(cljs.core.seq_QMARK_(children_35741)){
var seq__35189_35742 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35741));
var chunk__35191_35743 = null;
var count__35192_35744 = (0);
var i__35193_35745 = (0);
while(true){
if((i__35193_35745 < count__35192_35744)){
var child_35746 = chunk__35191_35743.cljs$core$IIndexed$_nth$arity$2(null,i__35193_35745);
if(cljs.core.truth_(child_35746)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35746);


var G__35747 = seq__35189_35742;
var G__35748 = chunk__35191_35743;
var G__35749 = count__35192_35744;
var G__35750 = (i__35193_35745 + (1));
seq__35189_35742 = G__35747;
chunk__35191_35743 = G__35748;
count__35192_35744 = G__35749;
i__35193_35745 = G__35750;
continue;
} else {
var G__35751 = seq__35189_35742;
var G__35752 = chunk__35191_35743;
var G__35753 = count__35192_35744;
var G__35754 = (i__35193_35745 + (1));
seq__35189_35742 = G__35751;
chunk__35191_35743 = G__35752;
count__35192_35744 = G__35753;
i__35193_35745 = G__35754;
continue;
}
} else {
var temp__5720__auto___35755__$1 = cljs.core.seq(seq__35189_35742);
if(temp__5720__auto___35755__$1){
var seq__35189_35756__$1 = temp__5720__auto___35755__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35189_35756__$1)){
var c__4550__auto___35757 = cljs.core.chunk_first(seq__35189_35756__$1);
var G__35758 = cljs.core.chunk_rest(seq__35189_35756__$1);
var G__35759 = c__4550__auto___35757;
var G__35760 = cljs.core.count(c__4550__auto___35757);
var G__35761 = (0);
seq__35189_35742 = G__35758;
chunk__35191_35743 = G__35759;
count__35192_35744 = G__35760;
i__35193_35745 = G__35761;
continue;
} else {
var child_35762 = cljs.core.first(seq__35189_35756__$1);
if(cljs.core.truth_(child_35762)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35762);


var G__35763 = cljs.core.next(seq__35189_35756__$1);
var G__35764 = null;
var G__35765 = (0);
var G__35766 = (0);
seq__35189_35742 = G__35763;
chunk__35191_35743 = G__35764;
count__35192_35744 = G__35765;
i__35193_35745 = G__35766;
continue;
} else {
var G__35767 = cljs.core.next(seq__35189_35756__$1);
var G__35768 = null;
var G__35769 = (0);
var G__35770 = (0);
seq__35189_35742 = G__35767;
chunk__35191_35743 = G__35768;
count__35192_35744 = G__35769;
i__35193_35745 = G__35770;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35741);
}


var G__35778 = cljs.core.next(seq__35150_35734__$1);
var G__35779 = null;
var G__35780 = (0);
var G__35781 = (0);
seq__35150_35680 = G__35778;
chunk__35152_35681 = G__35779;
count__35153_35682 = G__35780;
i__35154_35683 = G__35781;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35201 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35201);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35203 = cljs.core.seq(node);
var chunk__35204 = null;
var count__35205 = (0);
var i__35206 = (0);
while(true){
if((i__35206 < count__35205)){
var n = chunk__35204.cljs$core$IIndexed$_nth$arity$2(null,i__35206);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35782 = seq__35203;
var G__35783 = chunk__35204;
var G__35784 = count__35205;
var G__35785 = (i__35206 + (1));
seq__35203 = G__35782;
chunk__35204 = G__35783;
count__35205 = G__35784;
i__35206 = G__35785;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35203);
if(temp__5720__auto__){
var seq__35203__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35203__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35203__$1);
var G__35786 = cljs.core.chunk_rest(seq__35203__$1);
var G__35787 = c__4550__auto__;
var G__35788 = cljs.core.count(c__4550__auto__);
var G__35789 = (0);
seq__35203 = G__35786;
chunk__35204 = G__35787;
count__35205 = G__35788;
i__35206 = G__35789;
continue;
} else {
var n = cljs.core.first(seq__35203__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35790 = cljs.core.next(seq__35203__$1);
var G__35791 = null;
var G__35792 = (0);
var G__35793 = (0);
seq__35203 = G__35790;
chunk__35204 = G__35791;
count__35205 = G__35792;
i__35206 = G__35793;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__35207 = shadow.dom.dom_node(new$);
var G__35208 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35207,G__35208);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35210 = arguments.length;
switch (G__35210) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35214 = arguments.length;
switch (G__35214) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35228 = arguments.length;
switch (G__35228) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35801 = arguments.length;
var i__4731__auto___35802 = (0);
while(true){
if((i__4731__auto___35802 < len__4730__auto___35801)){
args__4736__auto__.push((arguments[i__4731__auto___35802]));

var G__35803 = (i__4731__auto___35802 + (1));
i__4731__auto___35802 = G__35803;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35245_35807 = cljs.core.seq(nodes);
var chunk__35246_35808 = null;
var count__35247_35809 = (0);
var i__35248_35810 = (0);
while(true){
if((i__35248_35810 < count__35247_35809)){
var node_35811 = chunk__35246_35808.cljs$core$IIndexed$_nth$arity$2(null,i__35248_35810);
fragment.appendChild(shadow.dom._to_dom(node_35811));


var G__35812 = seq__35245_35807;
var G__35813 = chunk__35246_35808;
var G__35814 = count__35247_35809;
var G__35815 = (i__35248_35810 + (1));
seq__35245_35807 = G__35812;
chunk__35246_35808 = G__35813;
count__35247_35809 = G__35814;
i__35248_35810 = G__35815;
continue;
} else {
var temp__5720__auto___35816 = cljs.core.seq(seq__35245_35807);
if(temp__5720__auto___35816){
var seq__35245_35817__$1 = temp__5720__auto___35816;
if(cljs.core.chunked_seq_QMARK_(seq__35245_35817__$1)){
var c__4550__auto___35818 = cljs.core.chunk_first(seq__35245_35817__$1);
var G__35819 = cljs.core.chunk_rest(seq__35245_35817__$1);
var G__35820 = c__4550__auto___35818;
var G__35821 = cljs.core.count(c__4550__auto___35818);
var G__35822 = (0);
seq__35245_35807 = G__35819;
chunk__35246_35808 = G__35820;
count__35247_35809 = G__35821;
i__35248_35810 = G__35822;
continue;
} else {
var node_35823 = cljs.core.first(seq__35245_35817__$1);
fragment.appendChild(shadow.dom._to_dom(node_35823));


var G__35824 = cljs.core.next(seq__35245_35817__$1);
var G__35825 = null;
var G__35826 = (0);
var G__35827 = (0);
seq__35245_35807 = G__35824;
chunk__35246_35808 = G__35825;
count__35247_35809 = G__35826;
i__35248_35810 = G__35827;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35241){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35241));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35259_35828 = cljs.core.seq(scripts);
var chunk__35260_35829 = null;
var count__35261_35830 = (0);
var i__35262_35831 = (0);
while(true){
if((i__35262_35831 < count__35261_35830)){
var vec__35273_35832 = chunk__35260_35829.cljs$core$IIndexed$_nth$arity$2(null,i__35262_35831);
var script_tag_35833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35273_35832,(0),null);
var script_body_35834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35273_35832,(1),null);
eval(script_body_35834);


var G__35835 = seq__35259_35828;
var G__35836 = chunk__35260_35829;
var G__35837 = count__35261_35830;
var G__35838 = (i__35262_35831 + (1));
seq__35259_35828 = G__35835;
chunk__35260_35829 = G__35836;
count__35261_35830 = G__35837;
i__35262_35831 = G__35838;
continue;
} else {
var temp__5720__auto___35839 = cljs.core.seq(seq__35259_35828);
if(temp__5720__auto___35839){
var seq__35259_35840__$1 = temp__5720__auto___35839;
if(cljs.core.chunked_seq_QMARK_(seq__35259_35840__$1)){
var c__4550__auto___35841 = cljs.core.chunk_first(seq__35259_35840__$1);
var G__35842 = cljs.core.chunk_rest(seq__35259_35840__$1);
var G__35843 = c__4550__auto___35841;
var G__35844 = cljs.core.count(c__4550__auto___35841);
var G__35845 = (0);
seq__35259_35828 = G__35842;
chunk__35260_35829 = G__35843;
count__35261_35830 = G__35844;
i__35262_35831 = G__35845;
continue;
} else {
var vec__35277_35846 = cljs.core.first(seq__35259_35840__$1);
var script_tag_35847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35277_35846,(0),null);
var script_body_35848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35277_35846,(1),null);
eval(script_body_35848);


var G__35849 = cljs.core.next(seq__35259_35840__$1);
var G__35850 = null;
var G__35851 = (0);
var G__35852 = (0);
seq__35259_35828 = G__35849;
chunk__35260_35829 = G__35850;
count__35261_35830 = G__35851;
i__35262_35831 = G__35852;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35281){
var vec__35283 = p__35281;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35283,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35283,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__35289 = shadow.dom.dom_node(el);
var G__35290 = cls;
return goog.dom.getAncestorByClass(G__35289,G__35290);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35292 = arguments.length;
switch (G__35292) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__35293 = shadow.dom.dom_node(el);
var G__35294 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35293,G__35294);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35295 = shadow.dom.dom_node(el);
var G__35296 = cljs.core.name(tag);
var G__35297 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35295,G__35296,G__35297);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35298 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35298);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35299 = shadow.dom.dom_node(dom);
var G__35300 = value;
return goog.dom.forms.setValue(G__35299,G__35300);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35303 = cljs.core.seq(style_keys);
var chunk__35304 = null;
var count__35305 = (0);
var i__35306 = (0);
while(true){
if((i__35306 < count__35305)){
var it = chunk__35304.cljs$core$IIndexed$_nth$arity$2(null,i__35306);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35854 = seq__35303;
var G__35855 = chunk__35304;
var G__35856 = count__35305;
var G__35857 = (i__35306 + (1));
seq__35303 = G__35854;
chunk__35304 = G__35855;
count__35305 = G__35856;
i__35306 = G__35857;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35303);
if(temp__5720__auto__){
var seq__35303__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35303__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35303__$1);
var G__35858 = cljs.core.chunk_rest(seq__35303__$1);
var G__35859 = c__4550__auto__;
var G__35860 = cljs.core.count(c__4550__auto__);
var G__35861 = (0);
seq__35303 = G__35858;
chunk__35304 = G__35859;
count__35305 = G__35860;
i__35306 = G__35861;
continue;
} else {
var it = cljs.core.first(seq__35303__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35862 = cljs.core.next(seq__35303__$1);
var G__35863 = null;
var G__35864 = (0);
var G__35865 = (0);
seq__35303 = G__35862;
chunk__35304 = G__35863;
count__35305 = G__35864;
i__35306 = G__35865;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35308,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35314 = k35308;
var G__35314__$1 = (((G__35314 instanceof cljs.core.Keyword))?G__35314.fqn:null);
switch (G__35314__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35308,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35317){
var vec__35319 = p__35317;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35319,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35319,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35307){
var self__ = this;
var G__35307__$1 = this;
return (new cljs.core.RecordIter((0),G__35307__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35332 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35332(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35309,other35310){
var self__ = this;
var this35309__$1 = this;
return (((!((other35310 == null)))) && ((this35309__$1.constructor === other35310.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35309__$1.x,other35310.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35309__$1.y,other35310.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35309__$1.__extmap,other35310.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35307){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35337 = cljs.core.keyword_identical_QMARK_;
var expr__35338 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35340 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35341 = expr__35338;
return (pred__35337.cljs$core$IFn$_invoke$arity$2 ? pred__35337.cljs$core$IFn$_invoke$arity$2(G__35340,G__35341) : pred__35337.call(null,G__35340,G__35341));
})())){
return (new shadow.dom.Coordinate(G__35307,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35342 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35343 = expr__35338;
return (pred__35337.cljs$core$IFn$_invoke$arity$2 ? pred__35337.cljs$core$IFn$_invoke$arity$2(G__35342,G__35343) : pred__35337.call(null,G__35342,G__35343));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35307,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35307),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35307){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35307,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35311){
var extmap__4424__auto__ = (function (){var G__35350 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35311,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35311)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35350);
} else {
return G__35350;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35311),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35311),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35352 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35352);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35356 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35356);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35357 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35357);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35360,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35366 = k35360;
var G__35366__$1 = (((G__35366 instanceof cljs.core.Keyword))?G__35366.fqn:null);
switch (G__35366__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35360,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35368){
var vec__35369 = p__35368;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35369,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35369,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35359){
var self__ = this;
var G__35359__$1 = this;
return (new cljs.core.RecordIter((0),G__35359__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35379 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35379(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35361,other35362){
var self__ = this;
var this35361__$1 = this;
return (((!((other35362 == null)))) && ((this35361__$1.constructor === other35362.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35361__$1.w,other35362.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35361__$1.h,other35362.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35361__$1.__extmap,other35362.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35359){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35385 = cljs.core.keyword_identical_QMARK_;
var expr__35386 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35388 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35389 = expr__35386;
return (pred__35385.cljs$core$IFn$_invoke$arity$2 ? pred__35385.cljs$core$IFn$_invoke$arity$2(G__35388,G__35389) : pred__35385.call(null,G__35388,G__35389));
})())){
return (new shadow.dom.Size(G__35359,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35390 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35391 = expr__35386;
return (pred__35385.cljs$core$IFn$_invoke$arity$2 ? pred__35385.cljs$core$IFn$_invoke$arity$2(G__35390,G__35391) : pred__35385.call(null,G__35390,G__35391));
})())){
return (new shadow.dom.Size(self__.w,G__35359,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35359),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35359){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35359,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35364){
var extmap__4424__auto__ = (function (){var G__35397 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35364,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35364)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35397);
} else {
return G__35397;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35364),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35364),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35400 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35400);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__35888 = (i + (1));
var G__35889 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35888;
ret = G__35889;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35413){
var vec__35414 = p__35413;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35414,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35420 = arguments.length;
switch (G__35420) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35425_35894 = new_node;
var G__35426_35895 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35425_35894,G__35426_35895);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35428_35896 = new_node;
var G__35429_35897 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35428_35896,G__35429_35897);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35898 = ps;
var G__35899 = (i + (1));
el__$1 = G__35898;
i = G__35899;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35434 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35434);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__35439 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35439);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35442 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35442);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35444 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35444,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35444,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35444,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35447_35900 = cljs.core.seq(props);
var chunk__35448_35901 = null;
var count__35449_35902 = (0);
var i__35450_35903 = (0);
while(true){
if((i__35450_35903 < count__35449_35902)){
var vec__35459_35904 = chunk__35448_35901.cljs$core$IIndexed$_nth$arity$2(null,i__35450_35903);
var k_35905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35459_35904,(0),null);
var v_35906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35459_35904,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_35905);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35905),v_35906);


var G__35907 = seq__35447_35900;
var G__35908 = chunk__35448_35901;
var G__35909 = count__35449_35902;
var G__35910 = (i__35450_35903 + (1));
seq__35447_35900 = G__35907;
chunk__35448_35901 = G__35908;
count__35449_35902 = G__35909;
i__35450_35903 = G__35910;
continue;
} else {
var temp__5720__auto___35911 = cljs.core.seq(seq__35447_35900);
if(temp__5720__auto___35911){
var seq__35447_35912__$1 = temp__5720__auto___35911;
if(cljs.core.chunked_seq_QMARK_(seq__35447_35912__$1)){
var c__4550__auto___35913 = cljs.core.chunk_first(seq__35447_35912__$1);
var G__35914 = cljs.core.chunk_rest(seq__35447_35912__$1);
var G__35915 = c__4550__auto___35913;
var G__35916 = cljs.core.count(c__4550__auto___35913);
var G__35917 = (0);
seq__35447_35900 = G__35914;
chunk__35448_35901 = G__35915;
count__35449_35902 = G__35916;
i__35450_35903 = G__35917;
continue;
} else {
var vec__35462_35918 = cljs.core.first(seq__35447_35912__$1);
var k_35919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35462_35918,(0),null);
var v_35920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35462_35918,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_35919);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35919),v_35920);


var G__35924 = cljs.core.next(seq__35447_35912__$1);
var G__35925 = null;
var G__35926 = (0);
var G__35927 = (0);
seq__35447_35900 = G__35924;
chunk__35448_35901 = G__35925;
count__35449_35902 = G__35926;
i__35450_35903 = G__35927;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35466 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(1),null);
var seq__35469_35928 = cljs.core.seq(node_children);
var chunk__35471_35929 = null;
var count__35472_35930 = (0);
var i__35473_35931 = (0);
while(true){
if((i__35473_35931 < count__35472_35930)){
var child_struct_35932 = chunk__35471_35929.cljs$core$IIndexed$_nth$arity$2(null,i__35473_35931);
if((!((child_struct_35932 == null)))){
if(typeof child_struct_35932 === 'string'){
var text_35933 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35933),child_struct_35932].join(''));
} else {
var children_35938 = shadow.dom.svg_node(child_struct_35932);
if(cljs.core.seq_QMARK_(children_35938)){
var seq__35487_35939 = cljs.core.seq(children_35938);
var chunk__35489_35940 = null;
var count__35490_35941 = (0);
var i__35491_35942 = (0);
while(true){
if((i__35491_35942 < count__35490_35941)){
var child_35943 = chunk__35489_35940.cljs$core$IIndexed$_nth$arity$2(null,i__35491_35942);
if(cljs.core.truth_(child_35943)){
node.appendChild(child_35943);


var G__35944 = seq__35487_35939;
var G__35945 = chunk__35489_35940;
var G__35946 = count__35490_35941;
var G__35947 = (i__35491_35942 + (1));
seq__35487_35939 = G__35944;
chunk__35489_35940 = G__35945;
count__35490_35941 = G__35946;
i__35491_35942 = G__35947;
continue;
} else {
var G__35948 = seq__35487_35939;
var G__35949 = chunk__35489_35940;
var G__35950 = count__35490_35941;
var G__35951 = (i__35491_35942 + (1));
seq__35487_35939 = G__35948;
chunk__35489_35940 = G__35949;
count__35490_35941 = G__35950;
i__35491_35942 = G__35951;
continue;
}
} else {
var temp__5720__auto___35952 = cljs.core.seq(seq__35487_35939);
if(temp__5720__auto___35952){
var seq__35487_35953__$1 = temp__5720__auto___35952;
if(cljs.core.chunked_seq_QMARK_(seq__35487_35953__$1)){
var c__4550__auto___35954 = cljs.core.chunk_first(seq__35487_35953__$1);
var G__35955 = cljs.core.chunk_rest(seq__35487_35953__$1);
var G__35956 = c__4550__auto___35954;
var G__35957 = cljs.core.count(c__4550__auto___35954);
var G__35958 = (0);
seq__35487_35939 = G__35955;
chunk__35489_35940 = G__35956;
count__35490_35941 = G__35957;
i__35491_35942 = G__35958;
continue;
} else {
var child_35959 = cljs.core.first(seq__35487_35953__$1);
if(cljs.core.truth_(child_35959)){
node.appendChild(child_35959);


var G__35960 = cljs.core.next(seq__35487_35953__$1);
var G__35961 = null;
var G__35962 = (0);
var G__35963 = (0);
seq__35487_35939 = G__35960;
chunk__35489_35940 = G__35961;
count__35490_35941 = G__35962;
i__35491_35942 = G__35963;
continue;
} else {
var G__35964 = cljs.core.next(seq__35487_35953__$1);
var G__35965 = null;
var G__35966 = (0);
var G__35967 = (0);
seq__35487_35939 = G__35964;
chunk__35489_35940 = G__35965;
count__35490_35941 = G__35966;
i__35491_35942 = G__35967;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35938);
}
}


var G__35968 = seq__35469_35928;
var G__35969 = chunk__35471_35929;
var G__35970 = count__35472_35930;
var G__35971 = (i__35473_35931 + (1));
seq__35469_35928 = G__35968;
chunk__35471_35929 = G__35969;
count__35472_35930 = G__35970;
i__35473_35931 = G__35971;
continue;
} else {
var G__35972 = seq__35469_35928;
var G__35973 = chunk__35471_35929;
var G__35974 = count__35472_35930;
var G__35975 = (i__35473_35931 + (1));
seq__35469_35928 = G__35972;
chunk__35471_35929 = G__35973;
count__35472_35930 = G__35974;
i__35473_35931 = G__35975;
continue;
}
} else {
var temp__5720__auto___35976 = cljs.core.seq(seq__35469_35928);
if(temp__5720__auto___35976){
var seq__35469_35977__$1 = temp__5720__auto___35976;
if(cljs.core.chunked_seq_QMARK_(seq__35469_35977__$1)){
var c__4550__auto___35978 = cljs.core.chunk_first(seq__35469_35977__$1);
var G__35979 = cljs.core.chunk_rest(seq__35469_35977__$1);
var G__35980 = c__4550__auto___35978;
var G__35981 = cljs.core.count(c__4550__auto___35978);
var G__35982 = (0);
seq__35469_35928 = G__35979;
chunk__35471_35929 = G__35980;
count__35472_35930 = G__35981;
i__35473_35931 = G__35982;
continue;
} else {
var child_struct_35983 = cljs.core.first(seq__35469_35977__$1);
if((!((child_struct_35983 == null)))){
if(typeof child_struct_35983 === 'string'){
var text_35984 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35984),child_struct_35983].join(''));
} else {
var children_35985 = shadow.dom.svg_node(child_struct_35983);
if(cljs.core.seq_QMARK_(children_35985)){
var seq__35495_35986 = cljs.core.seq(children_35985);
var chunk__35497_35987 = null;
var count__35498_35988 = (0);
var i__35499_35989 = (0);
while(true){
if((i__35499_35989 < count__35498_35988)){
var child_35990 = chunk__35497_35987.cljs$core$IIndexed$_nth$arity$2(null,i__35499_35989);
if(cljs.core.truth_(child_35990)){
node.appendChild(child_35990);


var G__35991 = seq__35495_35986;
var G__35992 = chunk__35497_35987;
var G__35993 = count__35498_35988;
var G__35994 = (i__35499_35989 + (1));
seq__35495_35986 = G__35991;
chunk__35497_35987 = G__35992;
count__35498_35988 = G__35993;
i__35499_35989 = G__35994;
continue;
} else {
var G__35995 = seq__35495_35986;
var G__35996 = chunk__35497_35987;
var G__35997 = count__35498_35988;
var G__35998 = (i__35499_35989 + (1));
seq__35495_35986 = G__35995;
chunk__35497_35987 = G__35996;
count__35498_35988 = G__35997;
i__35499_35989 = G__35998;
continue;
}
} else {
var temp__5720__auto___35999__$1 = cljs.core.seq(seq__35495_35986);
if(temp__5720__auto___35999__$1){
var seq__35495_36000__$1 = temp__5720__auto___35999__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35495_36000__$1)){
var c__4550__auto___36001 = cljs.core.chunk_first(seq__35495_36000__$1);
var G__36002 = cljs.core.chunk_rest(seq__35495_36000__$1);
var G__36003 = c__4550__auto___36001;
var G__36004 = cljs.core.count(c__4550__auto___36001);
var G__36005 = (0);
seq__35495_35986 = G__36002;
chunk__35497_35987 = G__36003;
count__35498_35988 = G__36004;
i__35499_35989 = G__36005;
continue;
} else {
var child_36006 = cljs.core.first(seq__35495_36000__$1);
if(cljs.core.truth_(child_36006)){
node.appendChild(child_36006);


var G__36007 = cljs.core.next(seq__35495_36000__$1);
var G__36008 = null;
var G__36009 = (0);
var G__36010 = (0);
seq__35495_35986 = G__36007;
chunk__35497_35987 = G__36008;
count__35498_35988 = G__36009;
i__35499_35989 = G__36010;
continue;
} else {
var G__36011 = cljs.core.next(seq__35495_36000__$1);
var G__36012 = null;
var G__36013 = (0);
var G__36014 = (0);
seq__35495_35986 = G__36011;
chunk__35497_35987 = G__36012;
count__35498_35988 = G__36013;
i__35499_35989 = G__36014;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35985);
}
}


var G__36015 = cljs.core.next(seq__35469_35977__$1);
var G__36016 = null;
var G__36017 = (0);
var G__36018 = (0);
seq__35469_35928 = G__36015;
chunk__35471_35929 = G__36016;
count__35472_35930 = G__36017;
i__35473_35931 = G__36018;
continue;
} else {
var G__36019 = cljs.core.next(seq__35469_35977__$1);
var G__36020 = null;
var G__36021 = (0);
var G__36022 = (0);
seq__35469_35928 = G__36019;
chunk__35471_35929 = G__36020;
count__35472_35930 = G__36021;
i__35473_35931 = G__36022;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__35501_36023 = shadow.dom._to_svg;
var G__35502_36024 = "string";
var G__35503_36025 = ((function (G__35501_36023,G__35502_36024){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35501_36023,G__35502_36024))
;
goog.object.set(G__35501_36023,G__35502_36024,G__35503_36025);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__35504_36026 = shadow.dom._to_svg;
var G__35505_36027 = "null";
var G__35506_36028 = ((function (G__35504_36026,G__35505_36027){
return (function (_){
return null;
});})(G__35504_36026,G__35505_36027))
;
goog.object.set(G__35504_36026,G__35505_36027,G__35506_36028);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36029 = arguments.length;
var i__4731__auto___36030 = (0);
while(true){
if((i__4731__auto___36030 < len__4730__auto___36029)){
args__4736__auto__.push((arguments[i__4731__auto___36030]));

var G__36031 = (i__4731__auto___36030 + (1));
i__4731__auto___36030 = G__36031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq35509){
var G__35510 = cljs.core.first(seq35509);
var seq35509__$1 = cljs.core.next(seq35509);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35510,seq35509__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35514 = arguments.length;
switch (G__35514) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__35517_36035 = shadow.dom.dom_node(el);
var G__35518_36036 = cljs.core.name(event);
var G__35519_36037 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35517_36035,G__35518_36036,G__35519_36037) : shadow.dom.dom_listen.call(null,G__35517_36035,G__35518_36036,G__35519_36037));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33251__auto___36038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___36038,buf,chan,event_fn){
return (function (){
var f__33252__auto__ = (function (){var switch__33155__auto__ = ((function (c__33251__auto___36038,buf,chan,event_fn){
return (function (state_35524){
var state_val_35525 = (state_35524[(1)]);
if((state_val_35525 === (1))){
var state_35524__$1 = state_35524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35524__$1,(2),once_or_cleanup);
} else {
if((state_val_35525 === (2))){
var inst_35521 = (state_35524[(2)]);
var inst_35522 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35524__$1 = (function (){var statearr_35529 = state_35524;
(statearr_35529[(7)] = inst_35521);

return statearr_35529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35524__$1,inst_35522);
} else {
return null;
}
}
});})(c__33251__auto___36038,buf,chan,event_fn))
;
return ((function (switch__33155__auto__,c__33251__auto___36038,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33156__auto__ = null;
var shadow$dom$state_machine__33156__auto____0 = (function (){
var statearr_35537 = [null,null,null,null,null,null,null,null];
(statearr_35537[(0)] = shadow$dom$state_machine__33156__auto__);

(statearr_35537[(1)] = (1));

return statearr_35537;
});
var shadow$dom$state_machine__33156__auto____1 = (function (state_35524){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_35524);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e35540){if((e35540 instanceof Object)){
var ex__33159__auto__ = e35540;
var statearr_35541_36040 = state_35524;
(statearr_35541_36040[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35540;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36041 = state_35524;
state_35524 = G__36041;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
shadow$dom$state_machine__33156__auto__ = function(state_35524){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33156__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33156__auto____1.call(this,state_35524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33156__auto____0;
shadow$dom$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33156__auto____1;
return shadow$dom$state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33251__auto___36038,buf,chan,event_fn))
})();
var state__33253__auto__ = (function (){var statearr_35544 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_35544[(6)] = c__33251__auto___36038);

return statearr_35544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___36038,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
