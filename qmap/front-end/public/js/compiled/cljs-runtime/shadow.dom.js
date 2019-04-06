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
return cljs.core.cons((coll[idx]),(function (){var G__34863 = coll;
var G__34864 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34863,G__34864) : shadow.dom.lazy_native_coll_seq.call(null,G__34863,G__34864));
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
var G__34903 = arguments.length;
switch (G__34903) {
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
var G__34924 = arguments.length;
switch (G__34924) {
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
var G__34930 = arguments.length;
switch (G__34930) {
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
var G__34944 = arguments.length;
switch (G__34944) {
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
var G__34952 = arguments.length;
switch (G__34952) {
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
var G__34956 = document;
var G__34957 = shadow.dom.dom_node(el);
return goog.dom.contains(G__34956,G__34957);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__34958 = shadow.dom.dom_node(parent);
var G__34959 = shadow.dom.dom_node(el);
return goog.dom.contains(G__34958,G__34959);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__34960 = shadow.dom.dom_node(el);
var G__34961 = cls;
return goog.dom.classlist.add(G__34960,G__34961);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__34962 = shadow.dom.dom_node(el);
var G__34963 = cls;
return goog.dom.classlist.remove(G__34962,G__34963);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34966 = arguments.length;
switch (G__34966) {
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
var G__34967 = shadow.dom.dom_node(el);
var G__34968 = cls;
return goog.dom.classlist.toggle(G__34967,G__34968);
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
}catch (e34975){if((e34975 instanceof Object)){
var e = e34975;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34975;

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
var seq__34982 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34983 = null;
var count__34984 = (0);
var i__34985 = (0);
while(true){
if((i__34985 < count__34984)){
var el = chunk__34983.cljs$core$IIndexed$_nth$arity$2(null,i__34985);
var handler_35622__$1 = ((function (seq__34982,chunk__34983,count__34984,i__34985,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34982,chunk__34983,count__34984,i__34985,el))
;
var G__34997_35623 = el;
var G__34998_35624 = cljs.core.name(ev);
var G__34999_35625 = handler_35622__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34997_35623,G__34998_35624,G__34999_35625) : shadow.dom.dom_listen.call(null,G__34997_35623,G__34998_35624,G__34999_35625));


var G__35626 = seq__34982;
var G__35627 = chunk__34983;
var G__35628 = count__34984;
var G__35629 = (i__34985 + (1));
seq__34982 = G__35626;
chunk__34983 = G__35627;
count__34984 = G__35628;
i__34985 = G__35629;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34982);
if(temp__5720__auto__){
var seq__34982__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34982__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34982__$1);
var G__35630 = cljs.core.chunk_rest(seq__34982__$1);
var G__35631 = c__4550__auto__;
var G__35632 = cljs.core.count(c__4550__auto__);
var G__35633 = (0);
seq__34982 = G__35630;
chunk__34983 = G__35631;
count__34984 = G__35632;
i__34985 = G__35633;
continue;
} else {
var el = cljs.core.first(seq__34982__$1);
var handler_35634__$1 = ((function (seq__34982,chunk__34983,count__34984,i__34985,el,seq__34982__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34982,chunk__34983,count__34984,i__34985,el,seq__34982__$1,temp__5720__auto__))
;
var G__35003_35635 = el;
var G__35004_35636 = cljs.core.name(ev);
var G__35005_35637 = handler_35634__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35003_35635,G__35004_35636,G__35005_35637) : shadow.dom.dom_listen.call(null,G__35003_35635,G__35004_35636,G__35005_35637));


var G__35638 = cljs.core.next(seq__34982__$1);
var G__35639 = null;
var G__35640 = (0);
var G__35641 = (0);
seq__34982 = G__35638;
chunk__34983 = G__35639;
count__34984 = G__35640;
i__34985 = G__35641;
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
var G__35010 = arguments.length;
switch (G__35010) {
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
var G__35015 = shadow.dom.dom_node(el);
var G__35016 = cljs.core.name(ev);
var G__35017 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35015,G__35016,G__35017) : shadow.dom.dom_listen.call(null,G__35015,G__35016,G__35017));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35019 = shadow.dom.dom_node(el);
var G__35020 = cljs.core.name(ev);
var G__35021 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35019,G__35020,G__35021) : shadow.dom.dom_listen_remove.call(null,G__35019,G__35020,G__35021));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35023 = cljs.core.seq(events);
var chunk__35024 = null;
var count__35025 = (0);
var i__35026 = (0);
while(true){
if((i__35026 < count__35025)){
var vec__35044 = chunk__35024.cljs$core$IIndexed$_nth$arity$2(null,i__35026);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35044,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35044,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35647 = seq__35023;
var G__35648 = chunk__35024;
var G__35649 = count__35025;
var G__35650 = (i__35026 + (1));
seq__35023 = G__35647;
chunk__35024 = G__35648;
count__35025 = G__35649;
i__35026 = G__35650;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35023);
if(temp__5720__auto__){
var seq__35023__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35023__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35023__$1);
var G__35652 = cljs.core.chunk_rest(seq__35023__$1);
var G__35653 = c__4550__auto__;
var G__35654 = cljs.core.count(c__4550__auto__);
var G__35655 = (0);
seq__35023 = G__35652;
chunk__35024 = G__35653;
count__35025 = G__35654;
i__35026 = G__35655;
continue;
} else {
var vec__35053 = cljs.core.first(seq__35023__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35053,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35053,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35657 = cljs.core.next(seq__35023__$1);
var G__35658 = null;
var G__35659 = (0);
var G__35660 = (0);
seq__35023 = G__35657;
chunk__35024 = G__35658;
count__35025 = G__35659;
i__35026 = G__35660;
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
var seq__35058 = cljs.core.seq(styles);
var chunk__35059 = null;
var count__35060 = (0);
var i__35061 = (0);
while(true){
if((i__35061 < count__35060)){
var vec__35076 = chunk__35059.cljs$core$IIndexed$_nth$arity$2(null,i__35061);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076,(1),null);
var G__35079_35661 = dom;
var G__35080_35662 = cljs.core.name(k);
var G__35081_35663 = (((v == null))?"":v);
goog.style.setStyle(G__35079_35661,G__35080_35662,G__35081_35663);


var G__35664 = seq__35058;
var G__35665 = chunk__35059;
var G__35666 = count__35060;
var G__35667 = (i__35061 + (1));
seq__35058 = G__35664;
chunk__35059 = G__35665;
count__35060 = G__35666;
i__35061 = G__35667;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35058);
if(temp__5720__auto__){
var seq__35058__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35058__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35058__$1);
var G__35669 = cljs.core.chunk_rest(seq__35058__$1);
var G__35670 = c__4550__auto__;
var G__35671 = cljs.core.count(c__4550__auto__);
var G__35672 = (0);
seq__35058 = G__35669;
chunk__35059 = G__35670;
count__35060 = G__35671;
i__35061 = G__35672;
continue;
} else {
var vec__35085 = cljs.core.first(seq__35058__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35085,(1),null);
var G__35089_35673 = dom;
var G__35090_35674 = cljs.core.name(k);
var G__35091_35675 = (((v == null))?"":v);
goog.style.setStyle(G__35089_35673,G__35090_35674,G__35091_35675);


var G__35676 = cljs.core.next(seq__35058__$1);
var G__35677 = null;
var G__35678 = (0);
var G__35679 = (0);
seq__35058 = G__35676;
chunk__35059 = G__35677;
count__35060 = G__35678;
i__35061 = G__35679;
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
var G__35099_35680 = key;
var G__35099_35681__$1 = (((G__35099_35680 instanceof cljs.core.Keyword))?G__35099_35680.fqn:null);
switch (G__35099_35681__$1) {
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
var ks_35685 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_35685,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_35685,"aria-");
}
})())){
el.setAttribute(ks_35685,value);
} else {
(el[ks_35685] = value);
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
var G__35129 = shadow.dom.dom_node(el);
var G__35130 = cls;
return goog.dom.classlist.contains(G__35129,G__35130);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35147){
var map__35148 = p__35147;
var map__35148__$1 = (((((!((map__35148 == null))))?(((((map__35148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35148):map__35148);
var props = map__35148__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35148__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35156 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35156,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35156,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35156,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35159 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35159,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35159;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35161 = arguments.length;
switch (G__35161) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35162){
var vec__35163 = p__35162;
var seq__35164 = cljs.core.seq(vec__35163);
var first__35165 = cljs.core.first(seq__35164);
var seq__35164__$1 = cljs.core.next(seq__35164);
var nn = first__35165;
var first__35165__$1 = cljs.core.first(seq__35164__$1);
var seq__35164__$2 = cljs.core.next(seq__35164__$1);
var np = first__35165__$1;
var nc = seq__35164__$2;
var node = vec__35163;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35178 = nn;
var G__35179 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35178,G__35179) : create_fn.call(null,G__35178,G__35179));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35182 = nn;
var G__35183 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35182,G__35183) : create_fn.call(null,G__35182,G__35183));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35185 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35185,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35185,(1),null);
var seq__35190_35701 = cljs.core.seq(node_children);
var chunk__35191_35702 = null;
var count__35192_35703 = (0);
var i__35193_35704 = (0);
while(true){
if((i__35193_35704 < count__35192_35703)){
var child_struct_35705 = chunk__35191_35702.cljs$core$IIndexed$_nth$arity$2(null,i__35193_35704);
var children_35706 = shadow.dom.dom_node(child_struct_35705);
if(cljs.core.seq_QMARK_(children_35706)){
var seq__35238_35707 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35706));
var chunk__35240_35708 = null;
var count__35241_35709 = (0);
var i__35242_35710 = (0);
while(true){
if((i__35242_35710 < count__35241_35709)){
var child_35711 = chunk__35240_35708.cljs$core$IIndexed$_nth$arity$2(null,i__35242_35710);
if(cljs.core.truth_(child_35711)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35711);


var G__35712 = seq__35238_35707;
var G__35713 = chunk__35240_35708;
var G__35714 = count__35241_35709;
var G__35715 = (i__35242_35710 + (1));
seq__35238_35707 = G__35712;
chunk__35240_35708 = G__35713;
count__35241_35709 = G__35714;
i__35242_35710 = G__35715;
continue;
} else {
var G__35716 = seq__35238_35707;
var G__35717 = chunk__35240_35708;
var G__35718 = count__35241_35709;
var G__35719 = (i__35242_35710 + (1));
seq__35238_35707 = G__35716;
chunk__35240_35708 = G__35717;
count__35241_35709 = G__35718;
i__35242_35710 = G__35719;
continue;
}
} else {
var temp__5720__auto___35720 = cljs.core.seq(seq__35238_35707);
if(temp__5720__auto___35720){
var seq__35238_35721__$1 = temp__5720__auto___35720;
if(cljs.core.chunked_seq_QMARK_(seq__35238_35721__$1)){
var c__4550__auto___35722 = cljs.core.chunk_first(seq__35238_35721__$1);
var G__35723 = cljs.core.chunk_rest(seq__35238_35721__$1);
var G__35724 = c__4550__auto___35722;
var G__35725 = cljs.core.count(c__4550__auto___35722);
var G__35726 = (0);
seq__35238_35707 = G__35723;
chunk__35240_35708 = G__35724;
count__35241_35709 = G__35725;
i__35242_35710 = G__35726;
continue;
} else {
var child_35727 = cljs.core.first(seq__35238_35721__$1);
if(cljs.core.truth_(child_35727)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35727);


var G__35728 = cljs.core.next(seq__35238_35721__$1);
var G__35729 = null;
var G__35730 = (0);
var G__35731 = (0);
seq__35238_35707 = G__35728;
chunk__35240_35708 = G__35729;
count__35241_35709 = G__35730;
i__35242_35710 = G__35731;
continue;
} else {
var G__35732 = cljs.core.next(seq__35238_35721__$1);
var G__35733 = null;
var G__35734 = (0);
var G__35735 = (0);
seq__35238_35707 = G__35732;
chunk__35240_35708 = G__35733;
count__35241_35709 = G__35734;
i__35242_35710 = G__35735;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35706);
}


var G__35736 = seq__35190_35701;
var G__35737 = chunk__35191_35702;
var G__35738 = count__35192_35703;
var G__35739 = (i__35193_35704 + (1));
seq__35190_35701 = G__35736;
chunk__35191_35702 = G__35737;
count__35192_35703 = G__35738;
i__35193_35704 = G__35739;
continue;
} else {
var temp__5720__auto___35744 = cljs.core.seq(seq__35190_35701);
if(temp__5720__auto___35744){
var seq__35190_35745__$1 = temp__5720__auto___35744;
if(cljs.core.chunked_seq_QMARK_(seq__35190_35745__$1)){
var c__4550__auto___35746 = cljs.core.chunk_first(seq__35190_35745__$1);
var G__35747 = cljs.core.chunk_rest(seq__35190_35745__$1);
var G__35748 = c__4550__auto___35746;
var G__35749 = cljs.core.count(c__4550__auto___35746);
var G__35750 = (0);
seq__35190_35701 = G__35747;
chunk__35191_35702 = G__35748;
count__35192_35703 = G__35749;
i__35193_35704 = G__35750;
continue;
} else {
var child_struct_35751 = cljs.core.first(seq__35190_35745__$1);
var children_35752 = shadow.dom.dom_node(child_struct_35751);
if(cljs.core.seq_QMARK_(children_35752)){
var seq__35244_35753 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35752));
var chunk__35246_35754 = null;
var count__35247_35755 = (0);
var i__35248_35756 = (0);
while(true){
if((i__35248_35756 < count__35247_35755)){
var child_35757 = chunk__35246_35754.cljs$core$IIndexed$_nth$arity$2(null,i__35248_35756);
if(cljs.core.truth_(child_35757)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35757);


var G__35758 = seq__35244_35753;
var G__35759 = chunk__35246_35754;
var G__35760 = count__35247_35755;
var G__35761 = (i__35248_35756 + (1));
seq__35244_35753 = G__35758;
chunk__35246_35754 = G__35759;
count__35247_35755 = G__35760;
i__35248_35756 = G__35761;
continue;
} else {
var G__35762 = seq__35244_35753;
var G__35763 = chunk__35246_35754;
var G__35764 = count__35247_35755;
var G__35765 = (i__35248_35756 + (1));
seq__35244_35753 = G__35762;
chunk__35246_35754 = G__35763;
count__35247_35755 = G__35764;
i__35248_35756 = G__35765;
continue;
}
} else {
var temp__5720__auto___35766__$1 = cljs.core.seq(seq__35244_35753);
if(temp__5720__auto___35766__$1){
var seq__35244_35767__$1 = temp__5720__auto___35766__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35244_35767__$1)){
var c__4550__auto___35768 = cljs.core.chunk_first(seq__35244_35767__$1);
var G__35769 = cljs.core.chunk_rest(seq__35244_35767__$1);
var G__35770 = c__4550__auto___35768;
var G__35771 = cljs.core.count(c__4550__auto___35768);
var G__35772 = (0);
seq__35244_35753 = G__35769;
chunk__35246_35754 = G__35770;
count__35247_35755 = G__35771;
i__35248_35756 = G__35772;
continue;
} else {
var child_35773 = cljs.core.first(seq__35244_35767__$1);
if(cljs.core.truth_(child_35773)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35773);


var G__35774 = cljs.core.next(seq__35244_35767__$1);
var G__35775 = null;
var G__35776 = (0);
var G__35777 = (0);
seq__35244_35753 = G__35774;
chunk__35246_35754 = G__35775;
count__35247_35755 = G__35776;
i__35248_35756 = G__35777;
continue;
} else {
var G__35778 = cljs.core.next(seq__35244_35767__$1);
var G__35779 = null;
var G__35780 = (0);
var G__35781 = (0);
seq__35244_35753 = G__35778;
chunk__35246_35754 = G__35779;
count__35247_35755 = G__35780;
i__35248_35756 = G__35781;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35752);
}


var G__35782 = cljs.core.next(seq__35190_35745__$1);
var G__35783 = null;
var G__35784 = (0);
var G__35785 = (0);
seq__35190_35701 = G__35782;
chunk__35191_35702 = G__35783;
count__35192_35703 = G__35784;
i__35193_35704 = G__35785;
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
var G__35251 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35251);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35254 = cljs.core.seq(node);
var chunk__35255 = null;
var count__35256 = (0);
var i__35257 = (0);
while(true){
if((i__35257 < count__35256)){
var n = chunk__35255.cljs$core$IIndexed$_nth$arity$2(null,i__35257);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35789 = seq__35254;
var G__35790 = chunk__35255;
var G__35791 = count__35256;
var G__35792 = (i__35257 + (1));
seq__35254 = G__35789;
chunk__35255 = G__35790;
count__35256 = G__35791;
i__35257 = G__35792;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35254);
if(temp__5720__auto__){
var seq__35254__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35254__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35254__$1);
var G__35793 = cljs.core.chunk_rest(seq__35254__$1);
var G__35794 = c__4550__auto__;
var G__35795 = cljs.core.count(c__4550__auto__);
var G__35796 = (0);
seq__35254 = G__35793;
chunk__35255 = G__35794;
count__35256 = G__35795;
i__35257 = G__35796;
continue;
} else {
var n = cljs.core.first(seq__35254__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35797 = cljs.core.next(seq__35254__$1);
var G__35798 = null;
var G__35799 = (0);
var G__35800 = (0);
seq__35254 = G__35797;
chunk__35255 = G__35798;
count__35256 = G__35799;
i__35257 = G__35800;
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
var G__35258 = shadow.dom.dom_node(new$);
var G__35259 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35258,G__35259);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35261 = arguments.length;
switch (G__35261) {
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
var G__35263 = arguments.length;
switch (G__35263) {
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
var G__35273 = arguments.length;
switch (G__35273) {
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
var len__4730__auto___35814 = arguments.length;
var i__4731__auto___35815 = (0);
while(true){
if((i__4731__auto___35815 < len__4730__auto___35814)){
args__4736__auto__.push((arguments[i__4731__auto___35815]));

var G__35816 = (i__4731__auto___35815 + (1));
i__4731__auto___35815 = G__35816;
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
var seq__35286_35817 = cljs.core.seq(nodes);
var chunk__35287_35818 = null;
var count__35288_35819 = (0);
var i__35289_35820 = (0);
while(true){
if((i__35289_35820 < count__35288_35819)){
var node_35825 = chunk__35287_35818.cljs$core$IIndexed$_nth$arity$2(null,i__35289_35820);
fragment.appendChild(shadow.dom._to_dom(node_35825));


var G__35826 = seq__35286_35817;
var G__35827 = chunk__35287_35818;
var G__35828 = count__35288_35819;
var G__35829 = (i__35289_35820 + (1));
seq__35286_35817 = G__35826;
chunk__35287_35818 = G__35827;
count__35288_35819 = G__35828;
i__35289_35820 = G__35829;
continue;
} else {
var temp__5720__auto___35833 = cljs.core.seq(seq__35286_35817);
if(temp__5720__auto___35833){
var seq__35286_35834__$1 = temp__5720__auto___35833;
if(cljs.core.chunked_seq_QMARK_(seq__35286_35834__$1)){
var c__4550__auto___35835 = cljs.core.chunk_first(seq__35286_35834__$1);
var G__35836 = cljs.core.chunk_rest(seq__35286_35834__$1);
var G__35837 = c__4550__auto___35835;
var G__35838 = cljs.core.count(c__4550__auto___35835);
var G__35839 = (0);
seq__35286_35817 = G__35836;
chunk__35287_35818 = G__35837;
count__35288_35819 = G__35838;
i__35289_35820 = G__35839;
continue;
} else {
var node_35840 = cljs.core.first(seq__35286_35834__$1);
fragment.appendChild(shadow.dom._to_dom(node_35840));


var G__35841 = cljs.core.next(seq__35286_35834__$1);
var G__35842 = null;
var G__35843 = (0);
var G__35844 = (0);
seq__35286_35817 = G__35841;
chunk__35287_35818 = G__35842;
count__35288_35819 = G__35843;
i__35289_35820 = G__35844;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35284){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35284));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35293_35845 = cljs.core.seq(scripts);
var chunk__35294_35846 = null;
var count__35295_35847 = (0);
var i__35296_35848 = (0);
while(true){
if((i__35296_35848 < count__35295_35847)){
var vec__35305_35849 = chunk__35294_35846.cljs$core$IIndexed$_nth$arity$2(null,i__35296_35848);
var script_tag_35850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35305_35849,(0),null);
var script_body_35851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35305_35849,(1),null);
eval(script_body_35851);


var G__35855 = seq__35293_35845;
var G__35856 = chunk__35294_35846;
var G__35857 = count__35295_35847;
var G__35858 = (i__35296_35848 + (1));
seq__35293_35845 = G__35855;
chunk__35294_35846 = G__35856;
count__35295_35847 = G__35857;
i__35296_35848 = G__35858;
continue;
} else {
var temp__5720__auto___35859 = cljs.core.seq(seq__35293_35845);
if(temp__5720__auto___35859){
var seq__35293_35860__$1 = temp__5720__auto___35859;
if(cljs.core.chunked_seq_QMARK_(seq__35293_35860__$1)){
var c__4550__auto___35861 = cljs.core.chunk_first(seq__35293_35860__$1);
var G__35862 = cljs.core.chunk_rest(seq__35293_35860__$1);
var G__35863 = c__4550__auto___35861;
var G__35864 = cljs.core.count(c__4550__auto___35861);
var G__35865 = (0);
seq__35293_35845 = G__35862;
chunk__35294_35846 = G__35863;
count__35295_35847 = G__35864;
i__35296_35848 = G__35865;
continue;
} else {
var vec__35309_35866 = cljs.core.first(seq__35293_35860__$1);
var script_tag_35867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35309_35866,(0),null);
var script_body_35868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35309_35866,(1),null);
eval(script_body_35868);


var G__35869 = cljs.core.next(seq__35293_35860__$1);
var G__35870 = null;
var G__35871 = (0);
var G__35872 = (0);
seq__35293_35845 = G__35869;
chunk__35294_35846 = G__35870;
count__35295_35847 = G__35871;
i__35296_35848 = G__35872;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35312){
var vec__35313 = p__35312;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35313,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35313,(1),null);
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
var G__35320 = shadow.dom.dom_node(el);
var G__35321 = cls;
return goog.dom.getAncestorByClass(G__35320,G__35321);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35325 = arguments.length;
switch (G__35325) {
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
var G__35326 = shadow.dom.dom_node(el);
var G__35327 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35326,G__35327);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35329 = shadow.dom.dom_node(el);
var G__35330 = cljs.core.name(tag);
var G__35331 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35329,G__35330,G__35331);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35334 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35334);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35336 = shadow.dom.dom_node(dom);
var G__35337 = value;
return goog.dom.forms.setValue(G__35336,G__35337);
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
var seq__35349 = cljs.core.seq(style_keys);
var chunk__35350 = null;
var count__35351 = (0);
var i__35352 = (0);
while(true){
if((i__35352 < count__35351)){
var it = chunk__35350.cljs$core$IIndexed$_nth$arity$2(null,i__35352);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35874 = seq__35349;
var G__35875 = chunk__35350;
var G__35876 = count__35351;
var G__35877 = (i__35352 + (1));
seq__35349 = G__35874;
chunk__35350 = G__35875;
count__35351 = G__35876;
i__35352 = G__35877;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35349);
if(temp__5720__auto__){
var seq__35349__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35349__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35349__$1);
var G__35878 = cljs.core.chunk_rest(seq__35349__$1);
var G__35879 = c__4550__auto__;
var G__35880 = cljs.core.count(c__4550__auto__);
var G__35881 = (0);
seq__35349 = G__35878;
chunk__35350 = G__35879;
count__35351 = G__35880;
i__35352 = G__35881;
continue;
} else {
var it = cljs.core.first(seq__35349__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35882 = cljs.core.next(seq__35349__$1);
var G__35883 = null;
var G__35884 = (0);
var G__35885 = (0);
seq__35349 = G__35882;
chunk__35350 = G__35883;
count__35351 = G__35884;
i__35352 = G__35885;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35361,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35369 = k35361;
var G__35369__$1 = (((G__35369 instanceof cljs.core.Keyword))?G__35369.fqn:null);
switch (G__35369__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35361,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35371){
var vec__35373 = p__35371;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35373,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35373,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35360){
var self__ = this;
var G__35360__$1 = this;
return (new cljs.core.RecordIter((0),G__35360__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35381 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35381(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35362,other35363){
var self__ = this;
var this35362__$1 = this;
return (((!((other35363 == null)))) && ((this35362__$1.constructor === other35363.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35362__$1.x,other35363.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35362__$1.y,other35363.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35362__$1.__extmap,other35363.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35360){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35385 = cljs.core.keyword_identical_QMARK_;
var expr__35386 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35388 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35389 = expr__35386;
return (pred__35385.cljs$core$IFn$_invoke$arity$2 ? pred__35385.cljs$core$IFn$_invoke$arity$2(G__35388,G__35389) : pred__35385.call(null,G__35388,G__35389));
})())){
return (new shadow.dom.Coordinate(G__35360,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35390 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35391 = expr__35386;
return (pred__35385.cljs$core$IFn$_invoke$arity$2 ? pred__35385.cljs$core$IFn$_invoke$arity$2(G__35390,G__35391) : pred__35385.call(null,G__35390,G__35391));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35360,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35360),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35360){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35360,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35365){
var extmap__4424__auto__ = (function (){var G__35400 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35365,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35365)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35400);
} else {
return G__35400;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35365),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35365),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35404 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35404);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35405 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35405);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35407 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35407);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35410,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35414 = k35410;
var G__35414__$1 = (((G__35414 instanceof cljs.core.Keyword))?G__35414.fqn:null);
switch (G__35414__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35410,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35415){
var vec__35416 = p__35415;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35416,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35416,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35409){
var self__ = this;
var G__35409__$1 = this;
return (new cljs.core.RecordIter((0),G__35409__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35423 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35423(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35411,other35412){
var self__ = this;
var this35411__$1 = this;
return (((!((other35412 == null)))) && ((this35411__$1.constructor === other35412.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35411__$1.w,other35412.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35411__$1.h,other35412.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35411__$1.__extmap,other35412.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35409){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35428 = cljs.core.keyword_identical_QMARK_;
var expr__35429 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35431 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35432 = expr__35429;
return (pred__35428.cljs$core$IFn$_invoke$arity$2 ? pred__35428.cljs$core$IFn$_invoke$arity$2(G__35431,G__35432) : pred__35428.call(null,G__35431,G__35432));
})())){
return (new shadow.dom.Size(G__35409,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35434 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35435 = expr__35429;
return (pred__35428.cljs$core$IFn$_invoke$arity$2 ? pred__35428.cljs$core$IFn$_invoke$arity$2(G__35434,G__35435) : pred__35428.call(null,G__35434,G__35435));
})())){
return (new shadow.dom.Size(self__.w,G__35409,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35409),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35409){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35409,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35413){
var extmap__4424__auto__ = (function (){var G__35442 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35413,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35413)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35442);
} else {
return G__35442;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35413),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35413),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35443 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35443);
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
var G__35901 = (i + (1));
var G__35902 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35901;
ret = G__35902;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35454){
var vec__35455 = p__35454;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35455,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35455,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35459 = arguments.length;
switch (G__35459) {
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
var G__35460_35904 = new_node;
var G__35461_35905 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35460_35904,G__35461_35905);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35480_35906 = new_node;
var G__35481_35907 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35480_35906,G__35481_35907);

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
var G__35908 = ps;
var G__35909 = (i + (1));
el__$1 = G__35908;
i = G__35909;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35485 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35485);
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
var G__35494 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35494);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35496 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35496);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35499 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35499,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35499,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35499,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35502_35910 = cljs.core.seq(props);
var chunk__35503_35911 = null;
var count__35504_35912 = (0);
var i__35505_35913 = (0);
while(true){
if((i__35505_35913 < count__35504_35912)){
var vec__35516_35914 = chunk__35503_35911.cljs$core$IIndexed$_nth$arity$2(null,i__35505_35913);
var k_35915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516_35914,(0),null);
var v_35916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516_35914,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_35915);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35915),v_35916);


var G__35917 = seq__35502_35910;
var G__35918 = chunk__35503_35911;
var G__35919 = count__35504_35912;
var G__35920 = (i__35505_35913 + (1));
seq__35502_35910 = G__35917;
chunk__35503_35911 = G__35918;
count__35504_35912 = G__35919;
i__35505_35913 = G__35920;
continue;
} else {
var temp__5720__auto___35921 = cljs.core.seq(seq__35502_35910);
if(temp__5720__auto___35921){
var seq__35502_35922__$1 = temp__5720__auto___35921;
if(cljs.core.chunked_seq_QMARK_(seq__35502_35922__$1)){
var c__4550__auto___35923 = cljs.core.chunk_first(seq__35502_35922__$1);
var G__35924 = cljs.core.chunk_rest(seq__35502_35922__$1);
var G__35925 = c__4550__auto___35923;
var G__35926 = cljs.core.count(c__4550__auto___35923);
var G__35927 = (0);
seq__35502_35910 = G__35924;
chunk__35503_35911 = G__35925;
count__35504_35912 = G__35926;
i__35505_35913 = G__35927;
continue;
} else {
var vec__35519_35928 = cljs.core.first(seq__35502_35922__$1);
var k_35929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35519_35928,(0),null);
var v_35930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35519_35928,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_35929);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35929),v_35930);


var G__35931 = cljs.core.next(seq__35502_35922__$1);
var G__35932 = null;
var G__35933 = (0);
var G__35934 = (0);
seq__35502_35910 = G__35931;
chunk__35503_35911 = G__35932;
count__35504_35912 = G__35933;
i__35505_35913 = G__35934;
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
var vec__35529 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35529,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35529,(1),null);
var seq__35532_35935 = cljs.core.seq(node_children);
var chunk__35534_35936 = null;
var count__35535_35937 = (0);
var i__35536_35938 = (0);
while(true){
if((i__35536_35938 < count__35535_35937)){
var child_struct_35939 = chunk__35534_35936.cljs$core$IIndexed$_nth$arity$2(null,i__35536_35938);
if((!((child_struct_35939 == null)))){
if(typeof child_struct_35939 === 'string'){
var text_35940 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35940),child_struct_35939].join(''));
} else {
var children_35941 = shadow.dom.svg_node(child_struct_35939);
if(cljs.core.seq_QMARK_(children_35941)){
var seq__35563_35942 = cljs.core.seq(children_35941);
var chunk__35565_35943 = null;
var count__35566_35944 = (0);
var i__35567_35945 = (0);
while(true){
if((i__35567_35945 < count__35566_35944)){
var child_35946 = chunk__35565_35943.cljs$core$IIndexed$_nth$arity$2(null,i__35567_35945);
if(cljs.core.truth_(child_35946)){
node.appendChild(child_35946);


var G__35947 = seq__35563_35942;
var G__35948 = chunk__35565_35943;
var G__35949 = count__35566_35944;
var G__35950 = (i__35567_35945 + (1));
seq__35563_35942 = G__35947;
chunk__35565_35943 = G__35948;
count__35566_35944 = G__35949;
i__35567_35945 = G__35950;
continue;
} else {
var G__35951 = seq__35563_35942;
var G__35952 = chunk__35565_35943;
var G__35953 = count__35566_35944;
var G__35954 = (i__35567_35945 + (1));
seq__35563_35942 = G__35951;
chunk__35565_35943 = G__35952;
count__35566_35944 = G__35953;
i__35567_35945 = G__35954;
continue;
}
} else {
var temp__5720__auto___35955 = cljs.core.seq(seq__35563_35942);
if(temp__5720__auto___35955){
var seq__35563_35956__$1 = temp__5720__auto___35955;
if(cljs.core.chunked_seq_QMARK_(seq__35563_35956__$1)){
var c__4550__auto___35957 = cljs.core.chunk_first(seq__35563_35956__$1);
var G__35958 = cljs.core.chunk_rest(seq__35563_35956__$1);
var G__35959 = c__4550__auto___35957;
var G__35960 = cljs.core.count(c__4550__auto___35957);
var G__35961 = (0);
seq__35563_35942 = G__35958;
chunk__35565_35943 = G__35959;
count__35566_35944 = G__35960;
i__35567_35945 = G__35961;
continue;
} else {
var child_35962 = cljs.core.first(seq__35563_35956__$1);
if(cljs.core.truth_(child_35962)){
node.appendChild(child_35962);


var G__35963 = cljs.core.next(seq__35563_35956__$1);
var G__35964 = null;
var G__35965 = (0);
var G__35966 = (0);
seq__35563_35942 = G__35963;
chunk__35565_35943 = G__35964;
count__35566_35944 = G__35965;
i__35567_35945 = G__35966;
continue;
} else {
var G__35967 = cljs.core.next(seq__35563_35956__$1);
var G__35968 = null;
var G__35969 = (0);
var G__35970 = (0);
seq__35563_35942 = G__35967;
chunk__35565_35943 = G__35968;
count__35566_35944 = G__35969;
i__35567_35945 = G__35970;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35941);
}
}


var G__35971 = seq__35532_35935;
var G__35972 = chunk__35534_35936;
var G__35973 = count__35535_35937;
var G__35974 = (i__35536_35938 + (1));
seq__35532_35935 = G__35971;
chunk__35534_35936 = G__35972;
count__35535_35937 = G__35973;
i__35536_35938 = G__35974;
continue;
} else {
var G__35977 = seq__35532_35935;
var G__35978 = chunk__35534_35936;
var G__35979 = count__35535_35937;
var G__35980 = (i__35536_35938 + (1));
seq__35532_35935 = G__35977;
chunk__35534_35936 = G__35978;
count__35535_35937 = G__35979;
i__35536_35938 = G__35980;
continue;
}
} else {
var temp__5720__auto___35981 = cljs.core.seq(seq__35532_35935);
if(temp__5720__auto___35981){
var seq__35532_35982__$1 = temp__5720__auto___35981;
if(cljs.core.chunked_seq_QMARK_(seq__35532_35982__$1)){
var c__4550__auto___35983 = cljs.core.chunk_first(seq__35532_35982__$1);
var G__35984 = cljs.core.chunk_rest(seq__35532_35982__$1);
var G__35985 = c__4550__auto___35983;
var G__35986 = cljs.core.count(c__4550__auto___35983);
var G__35987 = (0);
seq__35532_35935 = G__35984;
chunk__35534_35936 = G__35985;
count__35535_35937 = G__35986;
i__35536_35938 = G__35987;
continue;
} else {
var child_struct_35988 = cljs.core.first(seq__35532_35982__$1);
if((!((child_struct_35988 == null)))){
if(typeof child_struct_35988 === 'string'){
var text_35989 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35989),child_struct_35988].join(''));
} else {
var children_35990 = shadow.dom.svg_node(child_struct_35988);
if(cljs.core.seq_QMARK_(children_35990)){
var seq__35571_35991 = cljs.core.seq(children_35990);
var chunk__35573_35992 = null;
var count__35574_35993 = (0);
var i__35575_35994 = (0);
while(true){
if((i__35575_35994 < count__35574_35993)){
var child_35995 = chunk__35573_35992.cljs$core$IIndexed$_nth$arity$2(null,i__35575_35994);
if(cljs.core.truth_(child_35995)){
node.appendChild(child_35995);


var G__35996 = seq__35571_35991;
var G__35997 = chunk__35573_35992;
var G__35998 = count__35574_35993;
var G__35999 = (i__35575_35994 + (1));
seq__35571_35991 = G__35996;
chunk__35573_35992 = G__35997;
count__35574_35993 = G__35998;
i__35575_35994 = G__35999;
continue;
} else {
var G__36001 = seq__35571_35991;
var G__36002 = chunk__35573_35992;
var G__36003 = count__35574_35993;
var G__36004 = (i__35575_35994 + (1));
seq__35571_35991 = G__36001;
chunk__35573_35992 = G__36002;
count__35574_35993 = G__36003;
i__35575_35994 = G__36004;
continue;
}
} else {
var temp__5720__auto___36005__$1 = cljs.core.seq(seq__35571_35991);
if(temp__5720__auto___36005__$1){
var seq__35571_36006__$1 = temp__5720__auto___36005__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35571_36006__$1)){
var c__4550__auto___36007 = cljs.core.chunk_first(seq__35571_36006__$1);
var G__36008 = cljs.core.chunk_rest(seq__35571_36006__$1);
var G__36009 = c__4550__auto___36007;
var G__36010 = cljs.core.count(c__4550__auto___36007);
var G__36011 = (0);
seq__35571_35991 = G__36008;
chunk__35573_35992 = G__36009;
count__35574_35993 = G__36010;
i__35575_35994 = G__36011;
continue;
} else {
var child_36012 = cljs.core.first(seq__35571_36006__$1);
if(cljs.core.truth_(child_36012)){
node.appendChild(child_36012);


var G__36017 = cljs.core.next(seq__35571_36006__$1);
var G__36018 = null;
var G__36019 = (0);
var G__36020 = (0);
seq__35571_35991 = G__36017;
chunk__35573_35992 = G__36018;
count__35574_35993 = G__36019;
i__35575_35994 = G__36020;
continue;
} else {
var G__36021 = cljs.core.next(seq__35571_36006__$1);
var G__36022 = null;
var G__36023 = (0);
var G__36024 = (0);
seq__35571_35991 = G__36021;
chunk__35573_35992 = G__36022;
count__35574_35993 = G__36023;
i__35575_35994 = G__36024;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35990);
}
}


var G__36025 = cljs.core.next(seq__35532_35982__$1);
var G__36026 = null;
var G__36027 = (0);
var G__36028 = (0);
seq__35532_35935 = G__36025;
chunk__35534_35936 = G__36026;
count__35535_35937 = G__36027;
i__35536_35938 = G__36028;
continue;
} else {
var G__36029 = cljs.core.next(seq__35532_35982__$1);
var G__36030 = null;
var G__36031 = (0);
var G__36032 = (0);
seq__35532_35935 = G__36029;
chunk__35534_35936 = G__36030;
count__35535_35937 = G__36031;
i__35536_35938 = G__36032;
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

var G__35592_36033 = shadow.dom._to_svg;
var G__35593_36034 = "string";
var G__35594_36035 = ((function (G__35592_36033,G__35593_36034){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35592_36033,G__35593_36034))
;
goog.object.set(G__35592_36033,G__35593_36034,G__35594_36035);

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

var G__35595_36036 = shadow.dom._to_svg;
var G__35596_36037 = "null";
var G__35597_36038 = ((function (G__35595_36036,G__35596_36037){
return (function (_){
return null;
});})(G__35595_36036,G__35596_36037))
;
goog.object.set(G__35595_36036,G__35596_36037,G__35597_36038);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36039 = arguments.length;
var i__4731__auto___36040 = (0);
while(true){
if((i__4731__auto___36040 < len__4730__auto___36039)){
args__4736__auto__.push((arguments[i__4731__auto___36040]));

var G__36041 = (i__4731__auto___36040 + (1));
i__4731__auto___36040 = G__36041;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq35598){
var G__35599 = cljs.core.first(seq35598);
var seq35598__$1 = cljs.core.next(seq35598);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35599,seq35598__$1);
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
var G__35601 = arguments.length;
switch (G__35601) {
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
var G__35602_36045 = shadow.dom.dom_node(el);
var G__35603_36046 = cljs.core.name(event);
var G__35604_36047 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35602_36045,G__35603_36046,G__35604_36047) : shadow.dom.dom_listen.call(null,G__35602_36045,G__35603_36046,G__35604_36047));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33254__auto___36048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33254__auto___36048,buf,chan,event_fn){
return (function (){
var f__33255__auto__ = (function (){var switch__33155__auto__ = ((function (c__33254__auto___36048,buf,chan,event_fn){
return (function (state_35609){
var state_val_35610 = (state_35609[(1)]);
if((state_val_35610 === (1))){
var state_35609__$1 = state_35609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35609__$1,(2),once_or_cleanup);
} else {
if((state_val_35610 === (2))){
var inst_35606 = (state_35609[(2)]);
var inst_35607 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35609__$1 = (function (){var statearr_35611 = state_35609;
(statearr_35611[(7)] = inst_35606);

return statearr_35611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35609__$1,inst_35607);
} else {
return null;
}
}
});})(c__33254__auto___36048,buf,chan,event_fn))
;
return ((function (switch__33155__auto__,c__33254__auto___36048,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33156__auto__ = null;
var shadow$dom$state_machine__33156__auto____0 = (function (){
var statearr_35612 = [null,null,null,null,null,null,null,null];
(statearr_35612[(0)] = shadow$dom$state_machine__33156__auto__);

(statearr_35612[(1)] = (1));

return statearr_35612;
});
var shadow$dom$state_machine__33156__auto____1 = (function (state_35609){
while(true){
var ret_value__33157__auto__ = (function (){try{while(true){
var result__33158__auto__ = switch__33155__auto__(state_35609);
if(cljs.core.keyword_identical_QMARK_(result__33158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33158__auto__;
}
break;
}
}catch (e35613){if((e35613 instanceof Object)){
var ex__33159__auto__ = e35613;
var statearr_35614_36054 = state_35609;
(statearr_35614_36054[(5)] = ex__33159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36055 = state_35609;
state_35609 = G__36055;
continue;
} else {
return ret_value__33157__auto__;
}
break;
}
});
shadow$dom$state_machine__33156__auto__ = function(state_35609){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33156__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33156__auto____1.call(this,state_35609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33156__auto____0;
shadow$dom$state_machine__33156__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33156__auto____1;
return shadow$dom$state_machine__33156__auto__;
})()
;})(switch__33155__auto__,c__33254__auto___36048,buf,chan,event_fn))
})();
var state__33256__auto__ = (function (){var statearr_35615 = (f__33255__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33255__auto__.cljs$core$IFn$_invoke$arity$0() : f__33255__auto__.call(null));
(statearr_35615[(6)] = c__33254__auto___36048);

return statearr_35615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33256__auto__);
});})(c__33254__auto___36048,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
