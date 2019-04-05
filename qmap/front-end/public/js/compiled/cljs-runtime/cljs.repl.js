goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30970){
var map__30971 = p__30970;
var map__30971__$1 = (((((!((map__30971 == null))))?(((((map__30971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30971):map__30971);
var m = map__30971__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30971__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30971__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30973_31079 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30974_31080 = null;
var count__30975_31081 = (0);
var i__30976_31082 = (0);
while(true){
if((i__30976_31082 < count__30975_31081)){
var f_31083 = chunk__30974_31080.cljs$core$IIndexed$_nth$arity$2(null,i__30976_31082);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31083], 0));


var G__31084 = seq__30973_31079;
var G__31085 = chunk__30974_31080;
var G__31086 = count__30975_31081;
var G__31087 = (i__30976_31082 + (1));
seq__30973_31079 = G__31084;
chunk__30974_31080 = G__31085;
count__30975_31081 = G__31086;
i__30976_31082 = G__31087;
continue;
} else {
var temp__5720__auto___31088 = cljs.core.seq(seq__30973_31079);
if(temp__5720__auto___31088){
var seq__30973_31089__$1 = temp__5720__auto___31088;
if(cljs.core.chunked_seq_QMARK_(seq__30973_31089__$1)){
var c__4550__auto___31090 = cljs.core.chunk_first(seq__30973_31089__$1);
var G__31091 = cljs.core.chunk_rest(seq__30973_31089__$1);
var G__31092 = c__4550__auto___31090;
var G__31093 = cljs.core.count(c__4550__auto___31090);
var G__31094 = (0);
seq__30973_31079 = G__31091;
chunk__30974_31080 = G__31092;
count__30975_31081 = G__31093;
i__30976_31082 = G__31094;
continue;
} else {
var f_31095 = cljs.core.first(seq__30973_31089__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31095], 0));


var G__31096 = cljs.core.next(seq__30973_31089__$1);
var G__31097 = null;
var G__31098 = (0);
var G__31099 = (0);
seq__30973_31079 = G__31096;
chunk__30974_31080 = G__31097;
count__30975_31081 = G__31098;
i__30976_31082 = G__31099;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31100 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31100], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31100)))?cljs.core.second(arglists_31100):arglists_31100)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30977_31101 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30978_31102 = null;
var count__30979_31103 = (0);
var i__30980_31104 = (0);
while(true){
if((i__30980_31104 < count__30979_31103)){
var vec__30991_31105 = chunk__30978_31102.cljs$core$IIndexed$_nth$arity$2(null,i__30980_31104);
var name_31106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30991_31105,(0),null);
var map__30994_31107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30991_31105,(1),null);
var map__30994_31108__$1 = (((((!((map__30994_31107 == null))))?(((((map__30994_31107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30994_31107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30994_31107):map__30994_31107);
var doc_31109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30994_31108__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30994_31108__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31106], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31110], 0));

if(cljs.core.truth_(doc_31109)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31109], 0));
} else {
}


var G__31111 = seq__30977_31101;
var G__31112 = chunk__30978_31102;
var G__31113 = count__30979_31103;
var G__31114 = (i__30980_31104 + (1));
seq__30977_31101 = G__31111;
chunk__30978_31102 = G__31112;
count__30979_31103 = G__31113;
i__30980_31104 = G__31114;
continue;
} else {
var temp__5720__auto___31115 = cljs.core.seq(seq__30977_31101);
if(temp__5720__auto___31115){
var seq__30977_31116__$1 = temp__5720__auto___31115;
if(cljs.core.chunked_seq_QMARK_(seq__30977_31116__$1)){
var c__4550__auto___31117 = cljs.core.chunk_first(seq__30977_31116__$1);
var G__31118 = cljs.core.chunk_rest(seq__30977_31116__$1);
var G__31119 = c__4550__auto___31117;
var G__31120 = cljs.core.count(c__4550__auto___31117);
var G__31121 = (0);
seq__30977_31101 = G__31118;
chunk__30978_31102 = G__31119;
count__30979_31103 = G__31120;
i__30980_31104 = G__31121;
continue;
} else {
var vec__30996_31122 = cljs.core.first(seq__30977_31116__$1);
var name_31123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30996_31122,(0),null);
var map__30999_31124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30996_31122,(1),null);
var map__30999_31125__$1 = (((((!((map__30999_31124 == null))))?(((((map__30999_31124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30999_31124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30999_31124):map__30999_31124);
var doc_31126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30999_31125__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30999_31125__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31123], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31127], 0));

if(cljs.core.truth_(doc_31126)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31126], 0));
} else {
}


var G__31138 = cljs.core.next(seq__30977_31116__$1);
var G__31139 = null;
var G__31140 = (0);
var G__31141 = (0);
seq__30977_31101 = G__31138;
chunk__30978_31102 = G__31139;
count__30979_31103 = G__31140;
i__30980_31104 = G__31141;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31001 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31002 = null;
var count__31003 = (0);
var i__31004 = (0);
while(true){
if((i__31004 < count__31003)){
var role = chunk__31002.cljs$core$IIndexed$_nth$arity$2(null,i__31004);
var temp__5720__auto___31142__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31142__$1)){
var spec_31143 = temp__5720__auto___31142__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31143)], 0));
} else {
}


var G__31144 = seq__31001;
var G__31145 = chunk__31002;
var G__31146 = count__31003;
var G__31147 = (i__31004 + (1));
seq__31001 = G__31144;
chunk__31002 = G__31145;
count__31003 = G__31146;
i__31004 = G__31147;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__31001);
if(temp__5720__auto____$1){
var seq__31001__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31001__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31001__$1);
var G__31148 = cljs.core.chunk_rest(seq__31001__$1);
var G__31149 = c__4550__auto__;
var G__31150 = cljs.core.count(c__4550__auto__);
var G__31151 = (0);
seq__31001 = G__31148;
chunk__31002 = G__31149;
count__31003 = G__31150;
i__31004 = G__31151;
continue;
} else {
var role = cljs.core.first(seq__31001__$1);
var temp__5720__auto___31153__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31153__$2)){
var spec_31154 = temp__5720__auto___31153__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31154)], 0));
} else {
}


var G__31159 = cljs.core.next(seq__31001__$1);
var G__31160 = null;
var G__31161 = (0);
var G__31162 = (0);
seq__31001 = G__31159;
chunk__31002 = G__31160;
count__31003 = G__31161;
i__31004 = G__31162;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31165 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31166 = cljs.core.ex_cause(t);
via = G__31165;
t = G__31166;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31007 = datafied_throwable;
var map__31007__$1 = (((((!((map__31007 == null))))?(((((map__31007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31007):map__31007);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31007__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31007__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31007__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31008 = cljs.core.last(via);
var map__31008__$1 = (((((!((map__31008 == null))))?(((((map__31008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31008):map__31008);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31008__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31008__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31008__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31009 = data;
var map__31009__$1 = (((((!((map__31009 == null))))?(((((map__31009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31009):map__31009);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31009__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31009__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31009__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31010 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31010__$1 = (((((!((map__31010 == null))))?(((((map__31010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31010):map__31010);
var top_data = map__31010__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31010__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31015 = phase;
var G__31015__$1 = (((G__31015 instanceof cljs.core.Keyword))?G__31015.fqn:null);
switch (G__31015__$1) {
case "read-source":
var map__31016 = data;
var map__31016__$1 = (((((!((map__31016 == null))))?(((((map__31016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31016):map__31016);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31016__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31016__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31018 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31018__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31018,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31018);
var G__31018__$2 = (cljs.core.truth_((function (){var fexpr__31019 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31019.cljs$core$IFn$_invoke$arity$1 ? fexpr__31019.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31019.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31018__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31018__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31018__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31018__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31020 = top_data;
var G__31020__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31020,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31020);
var G__31020__$2 = (cljs.core.truth_((function (){var fexpr__31021 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31021.cljs$core$IFn$_invoke$arity$1 ? fexpr__31021.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31021.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31020__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31020__$1);
var G__31020__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31020__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31020__$2);
var G__31020__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31020__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31020__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31020__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31020__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31022 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31022,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31022,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31022,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31022,(3),null);
var G__31025 = top_data;
var G__31025__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31025,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31025);
var G__31025__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31025__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31025__$1);
var G__31025__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31025__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31025__$2);
var G__31025__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31025__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31025__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31025__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31025__$4;
}

break;
case "execution":
var vec__31026 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31026,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31026,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31026,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31026,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__31026,source__$1,method,file,line,G__31015,G__31015__$1,map__31007,map__31007__$1,via,trace,phase,map__31008,map__31008__$1,type,message,data,map__31009,map__31009__$1,problems,fn,caller,map__31010,map__31010__$1,top_data,source){
return (function (p1__31006_SHARP_){
var or__4131__auto__ = (p1__31006_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__31030 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31030.cljs$core$IFn$_invoke$arity$1 ? fexpr__31030.cljs$core$IFn$_invoke$arity$1(p1__31006_SHARP_) : fexpr__31030.call(null,p1__31006_SHARP_));
}
});})(vec__31026,source__$1,method,file,line,G__31015,G__31015__$1,map__31007,map__31007__$1,via,trace,phase,map__31008,map__31008__$1,type,message,data,map__31009,map__31009__$1,problems,fn,caller,map__31010,map__31010__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31031 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31031__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31031,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31031);
var G__31031__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31031__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31031__$1);
var G__31031__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31031__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31031__$2);
var G__31031__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31031__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31031__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31031__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31031__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31015__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31034){
var map__31035 = p__31034;
var map__31035__$1 = (((((!((map__31035 == null))))?(((((map__31035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31035):map__31035);
var triage_data = map__31035__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31035__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31035__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31035__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31035__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31035__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31035__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31035__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31035__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31037 = phase;
var G__31037__$1 = (((G__31037 instanceof cljs.core.Keyword))?G__31037.fqn:null);
switch (G__31037__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31040 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31041 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31042 = loc;
var G__31043 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31044_31179 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31045_31180 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31046_31181 = true;
var _STAR_print_fn_STAR__temp_val__31047_31182 = ((function (_STAR_print_newline_STAR__orig_val__31044_31179,_STAR_print_fn_STAR__orig_val__31045_31180,_STAR_print_newline_STAR__temp_val__31046_31181,sb__4661__auto__,G__31040,G__31041,G__31042,G__31037,G__31037__$1,loc,class_name,simple_class,cause_type,format,map__31035,map__31035__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31044_31179,_STAR_print_fn_STAR__orig_val__31045_31180,_STAR_print_newline_STAR__temp_val__31046_31181,sb__4661__auto__,G__31040,G__31041,G__31042,G__31037,G__31037__$1,loc,class_name,simple_class,cause_type,format,map__31035,map__31035__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31046_31181;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31047_31182;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31044_31179,_STAR_print_fn_STAR__orig_val__31045_31180,_STAR_print_newline_STAR__temp_val__31046_31181,_STAR_print_fn_STAR__temp_val__31047_31182,sb__4661__auto__,G__31040,G__31041,G__31042,G__31037,G__31037__$1,loc,class_name,simple_class,cause_type,format,map__31035,map__31035__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31044_31179,_STAR_print_fn_STAR__orig_val__31045_31180,_STAR_print_newline_STAR__temp_val__31046_31181,_STAR_print_fn_STAR__temp_val__31047_31182,sb__4661__auto__,G__31040,G__31041,G__31042,G__31037,G__31037__$1,loc,class_name,simple_class,cause_type,format,map__31035,map__31035__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31032_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31032_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31044_31179,_STAR_print_fn_STAR__orig_val__31045_31180,_STAR_print_newline_STAR__temp_val__31046_31181,_STAR_print_fn_STAR__temp_val__31047_31182,sb__4661__auto__,G__31040,G__31041,G__31042,G__31037,G__31037__$1,loc,class_name,simple_class,cause_type,format,map__31035,map__31035__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31044_31179,_STAR_print_fn_STAR__orig_val__31045_31180,_STAR_print_newline_STAR__temp_val__31046_31181,_STAR_print_fn_STAR__temp_val__31047_31182,sb__4661__auto__,G__31040,G__31041,G__31042,G__31037,G__31037__$1,loc,class_name,simple_class,cause_type,format,map__31035,map__31035__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31045_31180;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31044_31179;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31040,G__31041,G__31042,G__31043) : format.call(null,G__31040,G__31041,G__31042,G__31043));

break;
case "macroexpansion":
var G__31048 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31049 = cause_type;
var G__31050 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31051 = loc;
var G__31052 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31048,G__31049,G__31050,G__31051,G__31052) : format.call(null,G__31048,G__31049,G__31050,G__31051,G__31052));

break;
case "compile-syntax-check":
var G__31056 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31057 = cause_type;
var G__31058 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31059 = loc;
var G__31060 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31056,G__31057,G__31058,G__31059,G__31060) : format.call(null,G__31056,G__31057,G__31058,G__31059,G__31060));

break;
case "compilation":
var G__31061 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31062 = cause_type;
var G__31063 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31064 = loc;
var G__31065 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31061,G__31062,G__31063,G__31064,G__31065) : format.call(null,G__31061,G__31062,G__31063,G__31064,G__31065));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31066 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31067 = symbol;
var G__31068 = loc;
var G__31069 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31070_31195 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31071_31196 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31072_31197 = true;
var _STAR_print_fn_STAR__temp_val__31073_31198 = ((function (_STAR_print_newline_STAR__orig_val__31070_31195,_STAR_print_fn_STAR__orig_val__31071_31196,_STAR_print_newline_STAR__temp_val__31072_31197,sb__4661__auto__,G__31066,G__31067,G__31068,G__31037,G__31037__$1,loc,class_name,simple_class,cause_type,format,map__31035,map__31035__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31070_31195,_STAR_print_fn_STAR__orig_val__31071_31196,_STAR_print_newline_STAR__temp_val__31072_31197,sb__4661__auto__,G__31066,G__31067,G__31068,G__31037,G__31037__$1,loc,class_name,simple_class,cause_type,format,map__31035,map__31035__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31072_31197;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31073_31198;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31070_31195,_STAR_print_fn_STAR__orig_val__31071_31196,_STAR_print_newline_STAR__temp_val__31072_31197,_STAR_print_fn_STAR__temp_val__31073_31198,sb__4661__auto__,G__31066,G__31067,G__31068,G__31037,G__31037__$1,loc,class_name,simple_class,cause_type,format,map__31035,map__31035__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31070_31195,_STAR_print_fn_STAR__orig_val__31071_31196,_STAR_print_newline_STAR__temp_val__31072_31197,_STAR_print_fn_STAR__temp_val__31073_31198,sb__4661__auto__,G__31066,G__31067,G__31068,G__31037,G__31037__$1,loc,class_name,simple_class,cause_type,format,map__31035,map__31035__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31033_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31033_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31070_31195,_STAR_print_fn_STAR__orig_val__31071_31196,_STAR_print_newline_STAR__temp_val__31072_31197,_STAR_print_fn_STAR__temp_val__31073_31198,sb__4661__auto__,G__31066,G__31067,G__31068,G__31037,G__31037__$1,loc,class_name,simple_class,cause_type,format,map__31035,map__31035__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31070_31195,_STAR_print_fn_STAR__orig_val__31071_31196,_STAR_print_newline_STAR__temp_val__31072_31197,_STAR_print_fn_STAR__temp_val__31073_31198,sb__4661__auto__,G__31066,G__31067,G__31068,G__31037,G__31037__$1,loc,class_name,simple_class,cause_type,format,map__31035,map__31035__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31071_31196;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31070_31195;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31066,G__31067,G__31068,G__31069) : format.call(null,G__31066,G__31067,G__31068,G__31069));
} else {
var G__31074 = "Execution error%s at %s(%s).\n%s\n";
var G__31075 = cause_type;
var G__31076 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31077 = loc;
var G__31078 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31074,G__31075,G__31076,G__31077,G__31078) : format.call(null,G__31074,G__31075,G__31076,G__31077,G__31078));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31037__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
