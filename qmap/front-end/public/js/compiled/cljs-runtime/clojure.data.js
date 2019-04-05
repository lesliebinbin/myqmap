goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__26332){
var vec__26333 = p__26332;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26333,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26333,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__26344 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26344,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26344,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26344,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__26357 = arguments.length;
switch (G__26357) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__26359_26438 = clojure.data.equality_partition;
var G__26360_26439 = "null";
var G__26361_26440 = ((function (G__26359_26438,G__26360_26439){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26359_26438,G__26360_26439))
;
goog.object.set(G__26359_26438,G__26360_26439,G__26361_26440);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__26362_26442 = clojure.data.equality_partition;
var G__26363_26443 = "string";
var G__26364_26444 = ((function (G__26362_26442,G__26363_26443){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26362_26442,G__26363_26443))
;
goog.object.set(G__26362_26442,G__26363_26443,G__26364_26444);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__26365_26449 = clojure.data.equality_partition;
var G__26366_26450 = "number";
var G__26367_26451 = ((function (G__26365_26449,G__26366_26450){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26365_26449,G__26366_26450))
;
goog.object.set(G__26365_26449,G__26366_26450,G__26367_26451);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__26370_26452 = clojure.data.equality_partition;
var G__26371_26453 = "array";
var G__26372_26454 = ((function (G__26370_26452,G__26371_26453){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__26370_26452,G__26371_26453))
;
goog.object.set(G__26370_26452,G__26371_26453,G__26372_26454);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__26375_26457 = clojure.data.equality_partition;
var G__26376_26458 = "function";
var G__26377_26459 = ((function (G__26375_26457,G__26376_26458){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26375_26457,G__26376_26458))
;
goog.object.set(G__26375_26457,G__26376_26458,G__26377_26459);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__26378_26462 = clojure.data.equality_partition;
var G__26379_26463 = "boolean";
var G__26380_26464 = ((function (G__26378_26462,G__26379_26463){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26378_26462,G__26379_26463))
;
goog.object.set(G__26378_26462,G__26379_26463,G__26380_26464);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__26381_26467 = clojure.data.equality_partition;
var G__26382_26468 = "_";
var G__26383_26469 = ((function (G__26381_26467,G__26382_26468){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__26381_26467,G__26382_26468))
;
goog.object.set(G__26381_26467,G__26382_26468,G__26383_26469);
goog.object.set(clojure.data.Diff,"null",true);

var G__26387_26485 = clojure.data.diff_similar;
var G__26388_26486 = "null";
var G__26389_26487 = ((function (G__26387_26485,G__26388_26486){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26387_26485,G__26388_26486))
;
goog.object.set(G__26387_26485,G__26388_26486,G__26389_26487);

goog.object.set(clojure.data.Diff,"string",true);

var G__26390_26489 = clojure.data.diff_similar;
var G__26391_26490 = "string";
var G__26392_26491 = ((function (G__26390_26489,G__26391_26490){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26390_26489,G__26391_26490))
;
goog.object.set(G__26390_26489,G__26391_26490,G__26392_26491);

goog.object.set(clojure.data.Diff,"number",true);

var G__26393_26494 = clojure.data.diff_similar;
var G__26394_26495 = "number";
var G__26395_26496 = ((function (G__26393_26494,G__26394_26495){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26393_26494,G__26394_26495))
;
goog.object.set(G__26393_26494,G__26394_26495,G__26395_26496);

goog.object.set(clojure.data.Diff,"array",true);

var G__26396_26499 = clojure.data.diff_similar;
var G__26397_26500 = "array";
var G__26398_26501 = ((function (G__26396_26499,G__26397_26500){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__26396_26499,G__26397_26500))
;
goog.object.set(G__26396_26499,G__26397_26500,G__26398_26501);

goog.object.set(clojure.data.Diff,"function",true);

var G__26399_26503 = clojure.data.diff_similar;
var G__26400_26504 = "function";
var G__26401_26505 = ((function (G__26399_26503,G__26400_26504){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26399_26503,G__26400_26504))
;
goog.object.set(G__26399_26503,G__26400_26504,G__26401_26505);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__26402_26511 = clojure.data.diff_similar;
var G__26403_26512 = "boolean";
var G__26404_26513 = ((function (G__26402_26511,G__26403_26512){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26402_26511,G__26403_26512))
;
goog.object.set(G__26402_26511,G__26403_26512,G__26404_26513);

goog.object.set(clojure.data.Diff,"_",true);

var G__26406_26514 = clojure.data.diff_similar;
var G__26407_26515 = "_";
var G__26408_26516 = ((function (G__26406_26514,G__26407_26515){
return (function (a,b){
var fexpr__26413 = (function (){var G__26414 = clojure.data.equality_partition(a);
var G__26414__$1 = (((G__26414 instanceof cljs.core.Keyword))?G__26414.fqn:null);
switch (G__26414__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26414__$1)].join('')));

}
})();
return (fexpr__26413.cljs$core$IFn$_invoke$arity$2 ? fexpr__26413.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__26413.call(null,a,b));
});})(G__26406_26514,G__26407_26515))
;
goog.object.set(G__26406_26514,G__26407_26515,G__26408_26516);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
