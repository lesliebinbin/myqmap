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
return cljs.core.cons((coll[idx]),(function (){var G__34878 = coll;
var G__34879 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34878,G__34879) : shadow.dom.lazy_native_coll_seq.call(null,G__34878,G__34879));
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
var G__34905 = arguments.length;
switch (G__34905) {
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
var G__34908 = arguments.length;
switch (G__34908) {
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
var G__34915 = arguments.length;
switch (G__34915) {
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
var G__34919 = arguments.length;
switch (G__34919) {
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
var G__34921 = arguments.length;
switch (G__34921) {
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
var G__34922 = document;
var G__34923 = shadow.dom.dom_node(el);
return goog.dom.contains(G__34922,G__34923);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__34926 = shadow.dom.dom_node(parent);
var G__34927 = shadow.dom.dom_node(el);
return goog.dom.contains(G__34926,G__34927);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__34928 = shadow.dom.dom_node(el);
var G__34929 = cls;
return goog.dom.classlist.add(G__34928,G__34929);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__34930 = shadow.dom.dom_node(el);
var G__34931 = cls;
return goog.dom.classlist.remove(G__34930,G__34931);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34933 = arguments.length;
switch (G__34933) {
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
var G__34934 = shadow.dom.dom_node(el);
var G__34935 = cls;
return goog.dom.classlist.toggle(G__34934,G__34935);
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
}catch (e34940){if((e34940 instanceof Object)){
var e = e34940;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34940;

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
var seq__34943 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34944 = null;
var count__34945 = (0);
var i__34946 = (0);
while(true){
if((i__34946 < count__34945)){
var el = chunk__34944.cljs$core$IIndexed$_nth$arity$2(null,i__34946);
var handler_35507__$1 = ((function (seq__34943,chunk__34944,count__34945,i__34946,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34943,chunk__34944,count__34945,i__34946,el))
;
var G__34959_35508 = el;
var G__34961_35509 = cljs.core.name(ev);
var G__34962_35510 = handler_35507__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34959_35508,G__34961_35509,G__34962_35510) : shadow.dom.dom_listen.call(null,G__34959_35508,G__34961_35509,G__34962_35510));


var G__35511 = seq__34943;
var G__35512 = chunk__34944;
var G__35513 = count__34945;
var G__35514 = (i__34946 + (1));
seq__34943 = G__35511;
chunk__34944 = G__35512;
count__34945 = G__35513;
i__34946 = G__35514;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34943);
if(temp__5720__auto__){
var seq__34943__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34943__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34943__$1);
var G__35515 = cljs.core.chunk_rest(seq__34943__$1);
var G__35516 = c__4550__auto__;
var G__35517 = cljs.core.count(c__4550__auto__);
var G__35518 = (0);
seq__34943 = G__35515;
chunk__34944 = G__35516;
count__34945 = G__35517;
i__34946 = G__35518;
continue;
} else {
var el = cljs.core.first(seq__34943__$1);
var handler_35519__$1 = ((function (seq__34943,chunk__34944,count__34945,i__34946,el,seq__34943__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34943,chunk__34944,count__34945,i__34946,el,seq__34943__$1,temp__5720__auto__))
;
var G__34965_35520 = el;
var G__34966_35521 = cljs.core.name(ev);
var G__34967_35522 = handler_35519__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34965_35520,G__34966_35521,G__34967_35522) : shadow.dom.dom_listen.call(null,G__34965_35520,G__34966_35521,G__34967_35522));


var G__35523 = cljs.core.next(seq__34943__$1);
var G__35524 = null;
var G__35525 = (0);
var G__35526 = (0);
seq__34943 = G__35523;
chunk__34944 = G__35524;
count__34945 = G__35525;
i__34946 = G__35526;
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
var G__34971 = arguments.length;
switch (G__34971) {
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
var G__34977 = shadow.dom.dom_node(el);
var G__34978 = cljs.core.name(ev);
var G__34979 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34977,G__34978,G__34979) : shadow.dom.dom_listen.call(null,G__34977,G__34978,G__34979));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__34982 = shadow.dom.dom_node(el);
var G__34983 = cljs.core.name(ev);
var G__34984 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__34982,G__34983,G__34984) : shadow.dom.dom_listen_remove.call(null,G__34982,G__34983,G__34984));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34987 = cljs.core.seq(events);
var chunk__34988 = null;
var count__34989 = (0);
var i__34990 = (0);
while(true){
if((i__34990 < count__34989)){
var vec__35002 = chunk__34988.cljs$core$IIndexed$_nth$arity$2(null,i__34990);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35002,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35534 = seq__34987;
var G__35535 = chunk__34988;
var G__35536 = count__34989;
var G__35537 = (i__34990 + (1));
seq__34987 = G__35534;
chunk__34988 = G__35535;
count__34989 = G__35536;
i__34990 = G__35537;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34987);
if(temp__5720__auto__){
var seq__34987__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34987__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34987__$1);
var G__35538 = cljs.core.chunk_rest(seq__34987__$1);
var G__35539 = c__4550__auto__;
var G__35540 = cljs.core.count(c__4550__auto__);
var G__35541 = (0);
seq__34987 = G__35538;
chunk__34988 = G__35539;
count__34989 = G__35540;
i__34990 = G__35541;
continue;
} else {
var vec__35005 = cljs.core.first(seq__34987__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35542 = cljs.core.next(seq__34987__$1);
var G__35543 = null;
var G__35544 = (0);
var G__35545 = (0);
seq__34987 = G__35542;
chunk__34988 = G__35543;
count__34989 = G__35544;
i__34990 = G__35545;
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
var seq__35009 = cljs.core.seq(styles);
var chunk__35010 = null;
var count__35011 = (0);
var i__35012 = (0);
while(true){
if((i__35012 < count__35011)){
var vec__35026 = chunk__35010.cljs$core$IIndexed$_nth$arity$2(null,i__35012);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35026,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35026,(1),null);
var G__35029_35546 = dom;
var G__35030_35547 = cljs.core.name(k);
var G__35031_35548 = (((v == null))?"":v);
goog.style.setStyle(G__35029_35546,G__35030_35547,G__35031_35548);


var G__35549 = seq__35009;
var G__35550 = chunk__35010;
var G__35551 = count__35011;
var G__35552 = (i__35012 + (1));
seq__35009 = G__35549;
chunk__35010 = G__35550;
count__35011 = G__35551;
i__35012 = G__35552;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35009);
if(temp__5720__auto__){
var seq__35009__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35009__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35009__$1);
var G__35553 = cljs.core.chunk_rest(seq__35009__$1);
var G__35554 = c__4550__auto__;
var G__35555 = cljs.core.count(c__4550__auto__);
var G__35556 = (0);
seq__35009 = G__35553;
chunk__35010 = G__35554;
count__35011 = G__35555;
i__35012 = G__35556;
continue;
} else {
var vec__35034 = cljs.core.first(seq__35009__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034,(1),null);
var G__35038_35558 = dom;
var G__35039_35559 = cljs.core.name(k);
var G__35040_35560 = (((v == null))?"":v);
goog.style.setStyle(G__35038_35558,G__35039_35559,G__35040_35560);


var G__35562 = cljs.core.next(seq__35009__$1);
var G__35563 = null;
var G__35564 = (0);
var G__35565 = (0);
seq__35009 = G__35562;
chunk__35010 = G__35563;
count__35011 = G__35564;
i__35012 = G__35565;
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
var G__35046_35566 = key;
var G__35046_35567__$1 = (((G__35046_35566 instanceof cljs.core.Keyword))?G__35046_35566.fqn:null);
switch (G__35046_35567__$1) {
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
var ks_35570 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_35570,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_35570,"aria-");
}
})())){
el.setAttribute(ks_35570,value);
} else {
(el[ks_35570] = value);
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
var G__35054 = shadow.dom.dom_node(el);
var G__35055 = cls;
return goog.dom.classlist.contains(G__35054,G__35055);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35063){
var map__35065 = p__35063;
var map__35065__$1 = (((((!((map__35065 == null))))?(((((map__35065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35065):map__35065);
var props = map__35065__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35065__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35068 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35072 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35072,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35072;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35076 = arguments.length;
switch (G__35076) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35079){
var vec__35080 = p__35079;
var seq__35081 = cljs.core.seq(vec__35080);
var first__35082 = cljs.core.first(seq__35081);
var seq__35081__$1 = cljs.core.next(seq__35081);
var nn = first__35082;
var first__35082__$1 = cljs.core.first(seq__35081__$1);
var seq__35081__$2 = cljs.core.next(seq__35081__$1);
var np = first__35082__$1;
var nc = seq__35081__$2;
var node = vec__35080;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35084 = nn;
var G__35085 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35084,G__35085) : create_fn.call(null,G__35084,G__35085));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35087 = nn;
var G__35088 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35087,G__35088) : create_fn.call(null,G__35087,G__35088));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35091 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35091,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35091,(1),null);
var seq__35094_35581 = cljs.core.seq(node_children);
var chunk__35095_35582 = null;
var count__35096_35583 = (0);
var i__35097_35584 = (0);
while(true){
if((i__35097_35584 < count__35096_35583)){
var child_struct_35586 = chunk__35095_35582.cljs$core$IIndexed$_nth$arity$2(null,i__35097_35584);
var children_35587 = shadow.dom.dom_node(child_struct_35586);
if(cljs.core.seq_QMARK_(children_35587)){
var seq__35125_35589 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35587));
var chunk__35127_35590 = null;
var count__35128_35591 = (0);
var i__35129_35592 = (0);
while(true){
if((i__35129_35592 < count__35128_35591)){
var child_35594 = chunk__35127_35590.cljs$core$IIndexed$_nth$arity$2(null,i__35129_35592);
if(cljs.core.truth_(child_35594)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35594);


var G__35595 = seq__35125_35589;
var G__35596 = chunk__35127_35590;
var G__35597 = count__35128_35591;
var G__35598 = (i__35129_35592 + (1));
seq__35125_35589 = G__35595;
chunk__35127_35590 = G__35596;
count__35128_35591 = G__35597;
i__35129_35592 = G__35598;
continue;
} else {
var G__35600 = seq__35125_35589;
var G__35601 = chunk__35127_35590;
var G__35602 = count__35128_35591;
var G__35603 = (i__35129_35592 + (1));
seq__35125_35589 = G__35600;
chunk__35127_35590 = G__35601;
count__35128_35591 = G__35602;
i__35129_35592 = G__35603;
continue;
}
} else {
var temp__5720__auto___35604 = cljs.core.seq(seq__35125_35589);
if(temp__5720__auto___35604){
var seq__35125_35605__$1 = temp__5720__auto___35604;
if(cljs.core.chunked_seq_QMARK_(seq__35125_35605__$1)){
var c__4550__auto___35606 = cljs.core.chunk_first(seq__35125_35605__$1);
var G__35607 = cljs.core.chunk_rest(seq__35125_35605__$1);
var G__35608 = c__4550__auto___35606;
var G__35609 = cljs.core.count(c__4550__auto___35606);
var G__35610 = (0);
seq__35125_35589 = G__35607;
chunk__35127_35590 = G__35608;
count__35128_35591 = G__35609;
i__35129_35592 = G__35610;
continue;
} else {
var child_35611 = cljs.core.first(seq__35125_35605__$1);
if(cljs.core.truth_(child_35611)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35611);


var G__35612 = cljs.core.next(seq__35125_35605__$1);
var G__35613 = null;
var G__35614 = (0);
var G__35615 = (0);
seq__35125_35589 = G__35612;
chunk__35127_35590 = G__35613;
count__35128_35591 = G__35614;
i__35129_35592 = G__35615;
continue;
} else {
var G__35616 = cljs.core.next(seq__35125_35605__$1);
var G__35617 = null;
var G__35618 = (0);
var G__35619 = (0);
seq__35125_35589 = G__35616;
chunk__35127_35590 = G__35617;
count__35128_35591 = G__35618;
i__35129_35592 = G__35619;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35587);
}


var G__35620 = seq__35094_35581;
var G__35621 = chunk__35095_35582;
var G__35622 = count__35096_35583;
var G__35623 = (i__35097_35584 + (1));
seq__35094_35581 = G__35620;
chunk__35095_35582 = G__35621;
count__35096_35583 = G__35622;
i__35097_35584 = G__35623;
continue;
} else {
var temp__5720__auto___35624 = cljs.core.seq(seq__35094_35581);
if(temp__5720__auto___35624){
var seq__35094_35625__$1 = temp__5720__auto___35624;
if(cljs.core.chunked_seq_QMARK_(seq__35094_35625__$1)){
var c__4550__auto___35626 = cljs.core.chunk_first(seq__35094_35625__$1);
var G__35627 = cljs.core.chunk_rest(seq__35094_35625__$1);
var G__35628 = c__4550__auto___35626;
var G__35629 = cljs.core.count(c__4550__auto___35626);
var G__35630 = (0);
seq__35094_35581 = G__35627;
chunk__35095_35582 = G__35628;
count__35096_35583 = G__35629;
i__35097_35584 = G__35630;
continue;
} else {
var child_struct_35631 = cljs.core.first(seq__35094_35625__$1);
var children_35632 = shadow.dom.dom_node(child_struct_35631);
if(cljs.core.seq_QMARK_(children_35632)){
var seq__35131_35633 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35632));
var chunk__35133_35634 = null;
var count__35134_35635 = (0);
var i__35135_35636 = (0);
while(true){
if((i__35135_35636 < count__35134_35635)){
var child_35637 = chunk__35133_35634.cljs$core$IIndexed$_nth$arity$2(null,i__35135_35636);
if(cljs.core.truth_(child_35637)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35637);


var G__35638 = seq__35131_35633;
var G__35639 = chunk__35133_35634;
var G__35640 = count__35134_35635;
var G__35641 = (i__35135_35636 + (1));
seq__35131_35633 = G__35638;
chunk__35133_35634 = G__35639;
count__35134_35635 = G__35640;
i__35135_35636 = G__35641;
continue;
} else {
var G__35642 = seq__35131_35633;
var G__35643 = chunk__35133_35634;
var G__35644 = count__35134_35635;
var G__35645 = (i__35135_35636 + (1));
seq__35131_35633 = G__35642;
chunk__35133_35634 = G__35643;
count__35134_35635 = G__35644;
i__35135_35636 = G__35645;
continue;
}
} else {
var temp__5720__auto___35646__$1 = cljs.core.seq(seq__35131_35633);
if(temp__5720__auto___35646__$1){
var seq__35131_35647__$1 = temp__5720__auto___35646__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35131_35647__$1)){
var c__4550__auto___35649 = cljs.core.chunk_first(seq__35131_35647__$1);
var G__35650 = cljs.core.chunk_rest(seq__35131_35647__$1);
var G__35651 = c__4550__auto___35649;
var G__35652 = cljs.core.count(c__4550__auto___35649);
var G__35653 = (0);
seq__35131_35633 = G__35650;
chunk__35133_35634 = G__35651;
count__35134_35635 = G__35652;
i__35135_35636 = G__35653;
continue;
} else {
var child_35655 = cljs.core.first(seq__35131_35647__$1);
if(cljs.core.truth_(child_35655)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35655);


var G__35656 = cljs.core.next(seq__35131_35647__$1);
var G__35657 = null;
var G__35658 = (0);
var G__35659 = (0);
seq__35131_35633 = G__35656;
chunk__35133_35634 = G__35657;
count__35134_35635 = G__35658;
i__35135_35636 = G__35659;
continue;
} else {
var G__35660 = cljs.core.next(seq__35131_35647__$1);
var G__35661 = null;
var G__35662 = (0);
var G__35663 = (0);
seq__35131_35633 = G__35660;
chunk__35133_35634 = G__35661;
count__35134_35635 = G__35662;
i__35135_35636 = G__35663;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35632);
}


var G__35664 = cljs.core.next(seq__35094_35625__$1);
var G__35665 = null;
var G__35666 = (0);
var G__35667 = (0);
seq__35094_35581 = G__35664;
chunk__35095_35582 = G__35665;
count__35096_35583 = G__35666;
i__35097_35584 = G__35667;
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
var G__35144 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35144);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35148 = cljs.core.seq(node);
var chunk__35149 = null;
var count__35150 = (0);
var i__35151 = (0);
while(true){
if((i__35151 < count__35150)){
var n = chunk__35149.cljs$core$IIndexed$_nth$arity$2(null,i__35151);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35669 = seq__35148;
var G__35670 = chunk__35149;
var G__35671 = count__35150;
var G__35672 = (i__35151 + (1));
seq__35148 = G__35669;
chunk__35149 = G__35670;
count__35150 = G__35671;
i__35151 = G__35672;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35148);
if(temp__5720__auto__){
var seq__35148__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35148__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35148__$1);
var G__35674 = cljs.core.chunk_rest(seq__35148__$1);
var G__35675 = c__4550__auto__;
var G__35676 = cljs.core.count(c__4550__auto__);
var G__35677 = (0);
seq__35148 = G__35674;
chunk__35149 = G__35675;
count__35150 = G__35676;
i__35151 = G__35677;
continue;
} else {
var n = cljs.core.first(seq__35148__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35678 = cljs.core.next(seq__35148__$1);
var G__35679 = null;
var G__35680 = (0);
var G__35681 = (0);
seq__35148 = G__35678;
chunk__35149 = G__35679;
count__35150 = G__35680;
i__35151 = G__35681;
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
var G__35156 = shadow.dom.dom_node(new$);
var G__35157 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35156,G__35157);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35160 = arguments.length;
switch (G__35160) {
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
var G__35164 = arguments.length;
switch (G__35164) {
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
var G__35174 = arguments.length;
switch (G__35174) {
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
var len__4730__auto___35687 = arguments.length;
var i__4731__auto___35688 = (0);
while(true){
if((i__4731__auto___35688 < len__4730__auto___35687)){
args__4736__auto__.push((arguments[i__4731__auto___35688]));

var G__35689 = (i__4731__auto___35688 + (1));
i__4731__auto___35688 = G__35689;
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
var seq__35189_35690 = cljs.core.seq(nodes);
var chunk__35190_35691 = null;
var count__35191_35692 = (0);
var i__35192_35693 = (0);
while(true){
if((i__35192_35693 < count__35191_35692)){
var node_35694 = chunk__35190_35691.cljs$core$IIndexed$_nth$arity$2(null,i__35192_35693);
fragment.appendChild(shadow.dom._to_dom(node_35694));


var G__35695 = seq__35189_35690;
var G__35696 = chunk__35190_35691;
var G__35697 = count__35191_35692;
var G__35698 = (i__35192_35693 + (1));
seq__35189_35690 = G__35695;
chunk__35190_35691 = G__35696;
count__35191_35692 = G__35697;
i__35192_35693 = G__35698;
continue;
} else {
var temp__5720__auto___35699 = cljs.core.seq(seq__35189_35690);
if(temp__5720__auto___35699){
var seq__35189_35700__$1 = temp__5720__auto___35699;
if(cljs.core.chunked_seq_QMARK_(seq__35189_35700__$1)){
var c__4550__auto___35701 = cljs.core.chunk_first(seq__35189_35700__$1);
var G__35702 = cljs.core.chunk_rest(seq__35189_35700__$1);
var G__35703 = c__4550__auto___35701;
var G__35704 = cljs.core.count(c__4550__auto___35701);
var G__35705 = (0);
seq__35189_35690 = G__35702;
chunk__35190_35691 = G__35703;
count__35191_35692 = G__35704;
i__35192_35693 = G__35705;
continue;
} else {
var node_35706 = cljs.core.first(seq__35189_35700__$1);
fragment.appendChild(shadow.dom._to_dom(node_35706));


var G__35707 = cljs.core.next(seq__35189_35700__$1);
var G__35708 = null;
var G__35709 = (0);
var G__35710 = (0);
seq__35189_35690 = G__35707;
chunk__35190_35691 = G__35708;
count__35191_35692 = G__35709;
i__35192_35693 = G__35710;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35186){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35186));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35202_35712 = cljs.core.seq(scripts);
var chunk__35203_35713 = null;
var count__35204_35714 = (0);
var i__35205_35715 = (0);
while(true){
if((i__35205_35715 < count__35204_35714)){
var vec__35216_35716 = chunk__35203_35713.cljs$core$IIndexed$_nth$arity$2(null,i__35205_35715);
var script_tag_35717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35216_35716,(0),null);
var script_body_35718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35216_35716,(1),null);
eval(script_body_35718);


var G__35719 = seq__35202_35712;
var G__35720 = chunk__35203_35713;
var G__35721 = count__35204_35714;
var G__35722 = (i__35205_35715 + (1));
seq__35202_35712 = G__35719;
chunk__35203_35713 = G__35720;
count__35204_35714 = G__35721;
i__35205_35715 = G__35722;
continue;
} else {
var temp__5720__auto___35723 = cljs.core.seq(seq__35202_35712);
if(temp__5720__auto___35723){
var seq__35202_35724__$1 = temp__5720__auto___35723;
if(cljs.core.chunked_seq_QMARK_(seq__35202_35724__$1)){
var c__4550__auto___35725 = cljs.core.chunk_first(seq__35202_35724__$1);
var G__35726 = cljs.core.chunk_rest(seq__35202_35724__$1);
var G__35727 = c__4550__auto___35725;
var G__35728 = cljs.core.count(c__4550__auto___35725);
var G__35729 = (0);
seq__35202_35712 = G__35726;
chunk__35203_35713 = G__35727;
count__35204_35714 = G__35728;
i__35205_35715 = G__35729;
continue;
} else {
var vec__35220_35730 = cljs.core.first(seq__35202_35724__$1);
var script_tag_35731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35220_35730,(0),null);
var script_body_35732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35220_35730,(1),null);
eval(script_body_35732);


var G__35733 = cljs.core.next(seq__35202_35724__$1);
var G__35734 = null;
var G__35735 = (0);
var G__35736 = (0);
seq__35202_35712 = G__35733;
chunk__35203_35713 = G__35734;
count__35204_35714 = G__35735;
i__35205_35715 = G__35736;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35225){
var vec__35226 = p__35225;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35226,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35226,(1),null);
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
var G__35233 = shadow.dom.dom_node(el);
var G__35234 = cls;
return goog.dom.getAncestorByClass(G__35233,G__35234);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35237 = arguments.length;
switch (G__35237) {
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
var G__35238 = shadow.dom.dom_node(el);
var G__35239 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35238,G__35239);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35240 = shadow.dom.dom_node(el);
var G__35241 = cljs.core.name(tag);
var G__35242 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35240,G__35241,G__35242);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35243 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35243);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35244 = shadow.dom.dom_node(dom);
var G__35245 = value;
return goog.dom.forms.setValue(G__35244,G__35245);
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
var seq__35246 = cljs.core.seq(style_keys);
var chunk__35247 = null;
var count__35248 = (0);
var i__35249 = (0);
while(true){
if((i__35249 < count__35248)){
var it = chunk__35247.cljs$core$IIndexed$_nth$arity$2(null,i__35249);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35740 = seq__35246;
var G__35741 = chunk__35247;
var G__35742 = count__35248;
var G__35743 = (i__35249 + (1));
seq__35246 = G__35740;
chunk__35247 = G__35741;
count__35248 = G__35742;
i__35249 = G__35743;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35246);
if(temp__5720__auto__){
var seq__35246__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35246__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35246__$1);
var G__35744 = cljs.core.chunk_rest(seq__35246__$1);
var G__35745 = c__4550__auto__;
var G__35746 = cljs.core.count(c__4550__auto__);
var G__35747 = (0);
seq__35246 = G__35744;
chunk__35247 = G__35745;
count__35248 = G__35746;
i__35249 = G__35747;
continue;
} else {
var it = cljs.core.first(seq__35246__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35748 = cljs.core.next(seq__35246__$1);
var G__35749 = null;
var G__35750 = (0);
var G__35751 = (0);
seq__35246 = G__35748;
chunk__35247 = G__35749;
count__35248 = G__35750;
i__35249 = G__35751;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35257,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35261 = k35257;
var G__35261__$1 = (((G__35261 instanceof cljs.core.Keyword))?G__35261.fqn:null);
switch (G__35261__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35257,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35262){
var vec__35263 = p__35262;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35263,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35263,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35256){
var self__ = this;
var G__35256__$1 = this;
return (new cljs.core.RecordIter((0),G__35256__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35266 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35266(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35258,other35259){
var self__ = this;
var this35258__$1 = this;
return (((!((other35259 == null)))) && ((this35258__$1.constructor === other35259.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35258__$1.x,other35259.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35258__$1.y,other35259.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35258__$1.__extmap,other35259.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35256){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35267 = cljs.core.keyword_identical_QMARK_;
var expr__35268 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35270 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35271 = expr__35268;
return (pred__35267.cljs$core$IFn$_invoke$arity$2 ? pred__35267.cljs$core$IFn$_invoke$arity$2(G__35270,G__35271) : pred__35267.call(null,G__35270,G__35271));
})())){
return (new shadow.dom.Coordinate(G__35256,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35272 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35273 = expr__35268;
return (pred__35267.cljs$core$IFn$_invoke$arity$2 ? pred__35267.cljs$core$IFn$_invoke$arity$2(G__35272,G__35273) : pred__35267.call(null,G__35272,G__35273));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35256,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35256),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35256){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35256,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35260){
var extmap__4424__auto__ = (function (){var G__35278 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35260,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35260)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35278);
} else {
return G__35278;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35260),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35260),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35281 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35281);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35284 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35284);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35289 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35289);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35291,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35298 = k35291;
var G__35298__$1 = (((G__35298 instanceof cljs.core.Keyword))?G__35298.fqn:null);
switch (G__35298__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35291,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35301){
var vec__35302 = p__35301;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35302,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35302,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35290){
var self__ = this;
var G__35290__$1 = this;
return (new cljs.core.RecordIter((0),G__35290__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35315 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35315(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35292,other35293){
var self__ = this;
var this35292__$1 = this;
return (((!((other35293 == null)))) && ((this35292__$1.constructor === other35293.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35292__$1.w,other35293.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35292__$1.h,other35293.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35292__$1.__extmap,other35293.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35290){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35323 = cljs.core.keyword_identical_QMARK_;
var expr__35324 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35326 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35327 = expr__35324;
return (pred__35323.cljs$core$IFn$_invoke$arity$2 ? pred__35323.cljs$core$IFn$_invoke$arity$2(G__35326,G__35327) : pred__35323.call(null,G__35326,G__35327));
})())){
return (new shadow.dom.Size(G__35290,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35330 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35331 = expr__35324;
return (pred__35323.cljs$core$IFn$_invoke$arity$2 ? pred__35323.cljs$core$IFn$_invoke$arity$2(G__35330,G__35331) : pred__35323.call(null,G__35330,G__35331));
})())){
return (new shadow.dom.Size(self__.w,G__35290,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35290),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35290){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35290,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35294){
var extmap__4424__auto__ = (function (){var G__35339 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35294,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35294)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35339);
} else {
return G__35339;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35294),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35294),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35344 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35344);
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
var G__35803 = (i + (1));
var G__35804 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35803;
ret = G__35804;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35351){
var vec__35352 = p__35351;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35352,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35352,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35357 = arguments.length;
switch (G__35357) {
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
var G__35358_35811 = new_node;
var G__35359_35812 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35358_35811,G__35359_35812);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35361_35813 = new_node;
var G__35362_35814 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35361_35813,G__35362_35814);

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
var G__35815 = ps;
var G__35816 = (i + (1));
el__$1 = G__35815;
i = G__35816;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35363 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35363);
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
var G__35364 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35364);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35365 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35365);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35366 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35366,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35366,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35366,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35369_35824 = cljs.core.seq(props);
var chunk__35370_35825 = null;
var count__35371_35826 = (0);
var i__35372_35827 = (0);
while(true){
if((i__35372_35827 < count__35371_35826)){
var vec__35384_35828 = chunk__35370_35825.cljs$core$IIndexed$_nth$arity$2(null,i__35372_35827);
var k_35829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35384_35828,(0),null);
var v_35830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35384_35828,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_35829);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35829),v_35830);


var G__35834 = seq__35369_35824;
var G__35835 = chunk__35370_35825;
var G__35836 = count__35371_35826;
var G__35837 = (i__35372_35827 + (1));
seq__35369_35824 = G__35834;
chunk__35370_35825 = G__35835;
count__35371_35826 = G__35836;
i__35372_35827 = G__35837;
continue;
} else {
var temp__5720__auto___35838 = cljs.core.seq(seq__35369_35824);
if(temp__5720__auto___35838){
var seq__35369_35839__$1 = temp__5720__auto___35838;
if(cljs.core.chunked_seq_QMARK_(seq__35369_35839__$1)){
var c__4550__auto___35840 = cljs.core.chunk_first(seq__35369_35839__$1);
var G__35841 = cljs.core.chunk_rest(seq__35369_35839__$1);
var G__35842 = c__4550__auto___35840;
var G__35843 = cljs.core.count(c__4550__auto___35840);
var G__35844 = (0);
seq__35369_35824 = G__35841;
chunk__35370_35825 = G__35842;
count__35371_35826 = G__35843;
i__35372_35827 = G__35844;
continue;
} else {
var vec__35390_35845 = cljs.core.first(seq__35369_35839__$1);
var k_35846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35390_35845,(0),null);
var v_35847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35390_35845,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_35846);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35846),v_35847);


var G__35848 = cljs.core.next(seq__35369_35839__$1);
var G__35849 = null;
var G__35850 = (0);
var G__35851 = (0);
seq__35369_35824 = G__35848;
chunk__35370_35825 = G__35849;
count__35371_35826 = G__35850;
i__35372_35827 = G__35851;
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
var vec__35399 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35399,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35399,(1),null);
var seq__35403_35854 = cljs.core.seq(node_children);
var chunk__35406_35855 = null;
var count__35407_35856 = (0);
var i__35408_35857 = (0);
while(true){
if((i__35408_35857 < count__35407_35856)){
var child_struct_35858 = chunk__35406_35855.cljs$core$IIndexed$_nth$arity$2(null,i__35408_35857);
if((!((child_struct_35858 == null)))){
if(typeof child_struct_35858 === 'string'){
var text_35860 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35860),child_struct_35858].join(''));
} else {
var children_35861 = shadow.dom.svg_node(child_struct_35858);
if(cljs.core.seq_QMARK_(children_35861)){
var seq__35432_35862 = cljs.core.seq(children_35861);
var chunk__35434_35863 = null;
var count__35435_35864 = (0);
var i__35436_35865 = (0);
while(true){
if((i__35436_35865 < count__35435_35864)){
var child_35867 = chunk__35434_35863.cljs$core$IIndexed$_nth$arity$2(null,i__35436_35865);
if(cljs.core.truth_(child_35867)){
node.appendChild(child_35867);


var G__35868 = seq__35432_35862;
var G__35869 = chunk__35434_35863;
var G__35870 = count__35435_35864;
var G__35871 = (i__35436_35865 + (1));
seq__35432_35862 = G__35868;
chunk__35434_35863 = G__35869;
count__35435_35864 = G__35870;
i__35436_35865 = G__35871;
continue;
} else {
var G__35872 = seq__35432_35862;
var G__35873 = chunk__35434_35863;
var G__35874 = count__35435_35864;
var G__35875 = (i__35436_35865 + (1));
seq__35432_35862 = G__35872;
chunk__35434_35863 = G__35873;
count__35435_35864 = G__35874;
i__35436_35865 = G__35875;
continue;
}
} else {
var temp__5720__auto___35876 = cljs.core.seq(seq__35432_35862);
if(temp__5720__auto___35876){
var seq__35432_35877__$1 = temp__5720__auto___35876;
if(cljs.core.chunked_seq_QMARK_(seq__35432_35877__$1)){
var c__4550__auto___35878 = cljs.core.chunk_first(seq__35432_35877__$1);
var G__35879 = cljs.core.chunk_rest(seq__35432_35877__$1);
var G__35880 = c__4550__auto___35878;
var G__35881 = cljs.core.count(c__4550__auto___35878);
var G__35882 = (0);
seq__35432_35862 = G__35879;
chunk__35434_35863 = G__35880;
count__35435_35864 = G__35881;
i__35436_35865 = G__35882;
continue;
} else {
var child_35883 = cljs.core.first(seq__35432_35877__$1);
if(cljs.core.truth_(child_35883)){
node.appendChild(child_35883);


var G__35884 = cljs.core.next(seq__35432_35877__$1);
var G__35885 = null;
var G__35886 = (0);
var G__35887 = (0);
seq__35432_35862 = G__35884;
chunk__35434_35863 = G__35885;
count__35435_35864 = G__35886;
i__35436_35865 = G__35887;
continue;
} else {
var G__35888 = cljs.core.next(seq__35432_35877__$1);
var G__35889 = null;
var G__35890 = (0);
var G__35891 = (0);
seq__35432_35862 = G__35888;
chunk__35434_35863 = G__35889;
count__35435_35864 = G__35890;
i__35436_35865 = G__35891;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35861);
}
}


var G__35892 = seq__35403_35854;
var G__35893 = chunk__35406_35855;
var G__35894 = count__35407_35856;
var G__35895 = (i__35408_35857 + (1));
seq__35403_35854 = G__35892;
chunk__35406_35855 = G__35893;
count__35407_35856 = G__35894;
i__35408_35857 = G__35895;
continue;
} else {
var G__35898 = seq__35403_35854;
var G__35899 = chunk__35406_35855;
var G__35900 = count__35407_35856;
var G__35901 = (i__35408_35857 + (1));
seq__35403_35854 = G__35898;
chunk__35406_35855 = G__35899;
count__35407_35856 = G__35900;
i__35408_35857 = G__35901;
continue;
}
} else {
var temp__5720__auto___35902 = cljs.core.seq(seq__35403_35854);
if(temp__5720__auto___35902){
var seq__35403_35903__$1 = temp__5720__auto___35902;
if(cljs.core.chunked_seq_QMARK_(seq__35403_35903__$1)){
var c__4550__auto___35904 = cljs.core.chunk_first(seq__35403_35903__$1);
var G__35905 = cljs.core.chunk_rest(seq__35403_35903__$1);
var G__35906 = c__4550__auto___35904;
var G__35907 = cljs.core.count(c__4550__auto___35904);
var G__35908 = (0);
seq__35403_35854 = G__35905;
chunk__35406_35855 = G__35906;
count__35407_35856 = G__35907;
i__35408_35857 = G__35908;
continue;
} else {
var child_struct_35910 = cljs.core.first(seq__35403_35903__$1);
if((!((child_struct_35910 == null)))){
if(typeof child_struct_35910 === 'string'){
var text_35912 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35912),child_struct_35910].join(''));
} else {
var children_35914 = shadow.dom.svg_node(child_struct_35910);
if(cljs.core.seq_QMARK_(children_35914)){
var seq__35444_35915 = cljs.core.seq(children_35914);
var chunk__35446_35916 = null;
var count__35447_35917 = (0);
var i__35448_35918 = (0);
while(true){
if((i__35448_35918 < count__35447_35917)){
var child_35919 = chunk__35446_35916.cljs$core$IIndexed$_nth$arity$2(null,i__35448_35918);
if(cljs.core.truth_(child_35919)){
node.appendChild(child_35919);


var G__35920 = seq__35444_35915;
var G__35921 = chunk__35446_35916;
var G__35922 = count__35447_35917;
var G__35923 = (i__35448_35918 + (1));
seq__35444_35915 = G__35920;
chunk__35446_35916 = G__35921;
count__35447_35917 = G__35922;
i__35448_35918 = G__35923;
continue;
} else {
var G__35924 = seq__35444_35915;
var G__35925 = chunk__35446_35916;
var G__35926 = count__35447_35917;
var G__35927 = (i__35448_35918 + (1));
seq__35444_35915 = G__35924;
chunk__35446_35916 = G__35925;
count__35447_35917 = G__35926;
i__35448_35918 = G__35927;
continue;
}
} else {
var temp__5720__auto___35928__$1 = cljs.core.seq(seq__35444_35915);
if(temp__5720__auto___35928__$1){
var seq__35444_35929__$1 = temp__5720__auto___35928__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35444_35929__$1)){
var c__4550__auto___35930 = cljs.core.chunk_first(seq__35444_35929__$1);
var G__35932 = cljs.core.chunk_rest(seq__35444_35929__$1);
var G__35933 = c__4550__auto___35930;
var G__35934 = cljs.core.count(c__4550__auto___35930);
var G__35935 = (0);
seq__35444_35915 = G__35932;
chunk__35446_35916 = G__35933;
count__35447_35917 = G__35934;
i__35448_35918 = G__35935;
continue;
} else {
var child_35936 = cljs.core.first(seq__35444_35929__$1);
if(cljs.core.truth_(child_35936)){
node.appendChild(child_35936);


var G__35937 = cljs.core.next(seq__35444_35929__$1);
var G__35938 = null;
var G__35939 = (0);
var G__35940 = (0);
seq__35444_35915 = G__35937;
chunk__35446_35916 = G__35938;
count__35447_35917 = G__35939;
i__35448_35918 = G__35940;
continue;
} else {
var G__35941 = cljs.core.next(seq__35444_35929__$1);
var G__35942 = null;
var G__35943 = (0);
var G__35944 = (0);
seq__35444_35915 = G__35941;
chunk__35446_35916 = G__35942;
count__35447_35917 = G__35943;
i__35448_35918 = G__35944;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35914);
}
}


var G__35949 = cljs.core.next(seq__35403_35903__$1);
var G__35950 = null;
var G__35951 = (0);
var G__35952 = (0);
seq__35403_35854 = G__35949;
chunk__35406_35855 = G__35950;
count__35407_35856 = G__35951;
i__35408_35857 = G__35952;
continue;
} else {
var G__35953 = cljs.core.next(seq__35403_35903__$1);
var G__35954 = null;
var G__35955 = (0);
var G__35956 = (0);
seq__35403_35854 = G__35953;
chunk__35406_35855 = G__35954;
count__35407_35856 = G__35955;
i__35408_35857 = G__35956;
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

var G__35452_35960 = shadow.dom._to_svg;
var G__35453_35961 = "string";
var G__35454_35962 = ((function (G__35452_35960,G__35453_35961){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35452_35960,G__35453_35961))
;
goog.object.set(G__35452_35960,G__35453_35961,G__35454_35962);

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

var G__35456_35963 = shadow.dom._to_svg;
var G__35457_35964 = "null";
var G__35458_35965 = ((function (G__35456_35963,G__35457_35964){
return (function (_){
return null;
});})(G__35456_35963,G__35457_35964))
;
goog.object.set(G__35456_35963,G__35457_35964,G__35458_35965);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35966 = arguments.length;
var i__4731__auto___35967 = (0);
while(true){
if((i__4731__auto___35967 < len__4730__auto___35966)){
args__4736__auto__.push((arguments[i__4731__auto___35967]));

var G__35968 = (i__4731__auto___35967 + (1));
i__4731__auto___35967 = G__35968;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq35460){
var G__35461 = cljs.core.first(seq35460);
var seq35460__$1 = cljs.core.next(seq35460);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35461,seq35460__$1);
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
var G__35470 = arguments.length;
switch (G__35470) {
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
var G__35474_35978 = shadow.dom.dom_node(el);
var G__35475_35979 = cljs.core.name(event);
var G__35476_35980 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35474_35978,G__35475_35979,G__35476_35980) : shadow.dom.dom_listen.call(null,G__35474_35978,G__35475_35979,G__35476_35980));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33256__auto___35981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33256__auto___35981,buf,chan,event_fn){
return (function (){
var f__33257__auto__ = (function (){var switch__33155__auto__ = ((function (c__33256__auto___35981,buf,chan,event_fn){
return (function (state_35482){
var state_val_35483 = (state_35482[(1)]);
if((state_val_35483 === (1))){
var state_35482__$1 = state_35482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35482__$1,(2),once_or_cleanup);
} else {
if((state_val_35483 === (2))){
var inst_35479 = (state_35482[(2)]);
var inst_35480 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35482__$1 = (function (){var statearr_35485 = state_35482;
(statearr_35485[(7)] = inst_35479);

return statearr_35485;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35482__$1,inst_35480);
} else {
return null;
}
}
});})(c__33256__auto___35981,buf,chan,event_fn))
;
return ((function (switch__33155__auto__,c__33256__auto___35981,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33156__auto__ = null;
var shadow$dom$state_machine__33156__auto____0 = (function (){
var statearr_35486 = [null,null,null,null,null,null,null,null];
(statearr_35486[(0)] = shadow$dom$state_machine__33156__auto__);

(statearr_35486[(1)] = (1));

return statearr_35486;
});
var shadow$dom$state_machine__33156__auto____1 = (function (state_35482){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_35482);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e35487){if((e35487 instanceof Object)){
var ex__33159__auto__ = e35487;
var statearr_35488_35989 = state_35482;
(statearr_35488_35989[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35487;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35991 = state_35482;
state_35482 = G__35991;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
shadow$dom$state_machine__33156__auto__ = function(state_35482){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33156__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33156__auto____1.call(this,state_35482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33156__auto____0;
shadow$dom$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33156__auto____1;
return shadow$dom$state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33256__auto___35981,buf,chan,event_fn))
})();
var state__33258__auto__ = (function (){var statearr_35490 = (f__33257__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33257__auto__.cljs$core$IFn$_invoke$arity$0() : f__33257__auto__.call(null));
(statearr_35490[(6)] = c__33256__auto___35981);

return statearr_35490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33258__auto__);
});})(c__33256__auto___35981,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
