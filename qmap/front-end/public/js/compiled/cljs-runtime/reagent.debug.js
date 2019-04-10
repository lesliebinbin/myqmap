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
var G__36895__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36896__i = 0, G__36896__a = new Array(arguments.length -  0);
while (G__36896__i < G__36896__a.length) {G__36896__a[G__36896__i] = arguments[G__36896__i + 0]; ++G__36896__i;}
  args = new cljs.core.IndexedSeq(G__36896__a,0,null);
} 
return G__36895__delegate.call(this,args);};
G__36895.cljs$lang$maxFixedArity = 0;
G__36895.cljs$lang$applyTo = (function (arglist__36897){
var args = cljs.core.seq(arglist__36897);
return G__36895__delegate(args);
});
G__36895.cljs$core$IFn$_invoke$arity$variadic = G__36895__delegate;
return G__36895;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__36898__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36899__i = 0, G__36899__a = new Array(arguments.length -  0);
while (G__36899__i < G__36899__a.length) {G__36899__a[G__36899__i] = arguments[G__36899__i + 0]; ++G__36899__i;}
  args = new cljs.core.IndexedSeq(G__36899__a,0,null);
} 
return G__36898__delegate.call(this,args);};
G__36898.cljs$lang$maxFixedArity = 0;
G__36898.cljs$lang$applyTo = (function (arglist__36900){
var args = cljs.core.seq(arglist__36900);
return G__36898__delegate(args);
});
G__36898.cljs$core$IFn$_invoke$arity$variadic = G__36898__delegate;
return G__36898;
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
