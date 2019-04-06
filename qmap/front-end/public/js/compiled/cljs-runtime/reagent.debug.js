goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__37019__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37021__i = 0, G__37021__a = new Array(arguments.length -  0);
while (G__37021__i < G__37021__a.length) {G__37021__a[G__37021__i] = arguments[G__37021__i + 0]; ++G__37021__i;}
  args = new cljs.core.IndexedSeq(G__37021__a,0,null);
} 
return G__37019__delegate.call(this,args);};
G__37019.cljs$lang$maxFixedArity = 0;
G__37019.cljs$lang$applyTo = (function (arglist__37022){
var args = cljs.core.seq(arglist__37022);
return G__37019__delegate(args);
});
G__37019.cljs$core$IFn$_invoke$arity$variadic = G__37019__delegate;
return G__37019;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__37024__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37054__i = 0, G__37054__a = new Array(arguments.length -  0);
while (G__37054__i < G__37054__a.length) {G__37054__a[G__37054__i] = arguments[G__37054__i + 0]; ++G__37054__i;}
  args = new cljs.core.IndexedSeq(G__37054__a,0,null);
} 
return G__37024__delegate.call(this,args);};
G__37024.cljs$lang$maxFixedArity = 0;
G__37024.cljs$lang$applyTo = (function (arglist__37055){
var args = cljs.core.seq(arglist__37055);
return G__37024__delegate(args);
});
G__37024.cljs$core$IFn$_invoke$arity$variadic = G__37024__delegate;
return G__37024;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
