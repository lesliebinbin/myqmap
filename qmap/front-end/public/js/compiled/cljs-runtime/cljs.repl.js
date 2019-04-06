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
var seq__30978_31115 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30979_31116 = null;
var count__30980_31117 = (0);
var i__30981_31118 = (0);
while(true){
if((i__30981_31118 < count__30980_31117)){
var f_31119 = chunk__30979_31116.cljs$core$IIndexed$_nth$arity$2(null,i__30981_31118);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31119], 0));


var G__31120 = seq__30978_31115;
var G__31121 = chunk__30979_31116;
var G__31122 = count__30980_31117;
var G__31123 = (i__30981_31118 + (1));
seq__30978_31115 = G__31120;
chunk__30979_31116 = G__31121;
count__30980_31117 = G__31122;
i__30981_31118 = G__31123;
continue;
} else {
var temp__5720__auto___31124 = cljs.core.seq(seq__30978_31115);
if(temp__5720__auto___31124){
var seq__30978_31125__$1 = temp__5720__auto___31124;
if(cljs.core.chunked_seq_QMARK_(seq__30978_31125__$1)){
var c__4550__auto___31126 = cljs.core.chunk_first(seq__30978_31125__$1);
var G__31127 = cljs.core.chunk_rest(seq__30978_31125__$1);
var G__31128 = c__4550__auto___31126;
var G__31129 = cljs.core.count(c__4550__auto___31126);
var G__31130 = (0);
seq__30978_31115 = G__31127;
chunk__30979_31116 = G__31128;
count__30980_31117 = G__31129;
i__30981_31118 = G__31130;
continue;
} else {
var f_31131 = cljs.core.first(seq__30978_31125__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31131], 0));


var G__31132 = cljs.core.next(seq__30978_31125__$1);
var G__31133 = null;
var G__31134 = (0);
var G__31135 = (0);
seq__30978_31115 = G__31132;
chunk__30979_31116 = G__31133;
count__30980_31117 = G__31134;
i__30981_31118 = G__31135;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31136 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31136], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31136)))?cljs.core.second(arglists_31136):arglists_31136)], 0));
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
var seq__30983_31137 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30984_31138 = null;
var count__30985_31139 = (0);
var i__30986_31140 = (0);
while(true){
if((i__30986_31140 < count__30985_31139)){
var vec__31001_31141 = chunk__30984_31138.cljs$core$IIndexed$_nth$arity$2(null,i__30986_31140);
var name_31142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31001_31141,(0),null);
var map__31004_31143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31001_31141,(1),null);
var map__31004_31144__$1 = (((((!((map__31004_31143 == null))))?(((((map__31004_31143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31004_31143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31004_31143):map__31004_31143);
var doc_31145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31004_31144__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31004_31144__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31142], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31146], 0));

if(cljs.core.truth_(doc_31145)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31145], 0));
} else {
}


var G__31147 = seq__30983_31137;
var G__31148 = chunk__30984_31138;
var G__31149 = count__30985_31139;
var G__31150 = (i__30986_31140 + (1));
seq__30983_31137 = G__31147;
chunk__30984_31138 = G__31148;
count__30985_31139 = G__31149;
i__30986_31140 = G__31150;
continue;
} else {
var temp__5720__auto___31151 = cljs.core.seq(seq__30983_31137);
if(temp__5720__auto___31151){
var seq__30983_31152__$1 = temp__5720__auto___31151;
if(cljs.core.chunked_seq_QMARK_(seq__30983_31152__$1)){
var c__4550__auto___31153 = cljs.core.chunk_first(seq__30983_31152__$1);
var G__31154 = cljs.core.chunk_rest(seq__30983_31152__$1);
var G__31155 = c__4550__auto___31153;
var G__31156 = cljs.core.count(c__4550__auto___31153);
var G__31157 = (0);
seq__30983_31137 = G__31154;
chunk__30984_31138 = G__31155;
count__30985_31139 = G__31156;
i__30986_31140 = G__31157;
continue;
} else {
var vec__31006_31158 = cljs.core.first(seq__30983_31152__$1);
var name_31159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31006_31158,(0),null);
var map__31009_31160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31006_31158,(1),null);
var map__31009_31161__$1 = (((((!((map__31009_31160 == null))))?(((((map__31009_31160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31009_31160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31009_31160):map__31009_31160);
var doc_31162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31009_31161__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31009_31161__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31159], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31163], 0));

if(cljs.core.truth_(doc_31162)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31162], 0));
} else {
}


var G__31164 = cljs.core.next(seq__30983_31152__$1);
var G__31165 = null;
var G__31166 = (0);
var G__31167 = (0);
seq__30983_31137 = G__31164;
chunk__30984_31138 = G__31165;
count__30985_31139 = G__31166;
i__30986_31140 = G__31167;
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

var seq__31011 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31012 = null;
var count__31013 = (0);
var i__31014 = (0);
while(true){
if((i__31014 < count__31013)){
var role = chunk__31012.cljs$core$IIndexed$_nth$arity$2(null,i__31014);
var temp__5720__auto___31168__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31168__$1)){
var spec_31169 = temp__5720__auto___31168__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31169)], 0));
} else {
}


var G__31170 = seq__31011;
var G__31171 = chunk__31012;
var G__31172 = count__31013;
var G__31173 = (i__31014 + (1));
seq__31011 = G__31170;
chunk__31012 = G__31171;
count__31013 = G__31172;
i__31014 = G__31173;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__31011);
if(temp__5720__auto____$1){
var seq__31011__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31011__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31011__$1);
var G__31174 = cljs.core.chunk_rest(seq__31011__$1);
var G__31175 = c__4550__auto__;
var G__31176 = cljs.core.count(c__4550__auto__);
var G__31177 = (0);
seq__31011 = G__31174;
chunk__31012 = G__31175;
count__31013 = G__31176;
i__31014 = G__31177;
continue;
} else {
var role = cljs.core.first(seq__31011__$1);
var temp__5720__auto___31178__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31178__$2)){
var spec_31179 = temp__5720__auto___31178__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31179)], 0));
} else {
}


var G__31180 = cljs.core.next(seq__31011__$1);
var G__31181 = null;
var G__31182 = (0);
var G__31183 = (0);
seq__31011 = G__31180;
chunk__31012 = G__31181;
count__31013 = G__31182;
i__31014 = G__31183;
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
var G__31184 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31185 = cljs.core.ex_cause(t);
via = G__31184;
t = G__31185;
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
var map__31025 = datafied_throwable;
var map__31025__$1 = (((((!((map__31025 == null))))?(((((map__31025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31025):map__31025);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31025__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31025__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31025__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31026 = cljs.core.last(via);
var map__31026__$1 = (((((!((map__31026 == null))))?(((((map__31026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31026):map__31026);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31026__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31026__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31026__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31027 = data;
var map__31027__$1 = (((((!((map__31027 == null))))?(((((map__31027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31027):map__31027);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31027__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31027__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31027__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31028 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31028__$1 = (((((!((map__31028 == null))))?(((((map__31028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31028):map__31028);
var top_data = map__31028__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31028__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31033 = phase;
var G__31033__$1 = (((G__31033 instanceof cljs.core.Keyword))?G__31033.fqn:null);
switch (G__31033__$1) {
case "read-source":
var map__31034 = data;
var map__31034__$1 = (((((!((map__31034 == null))))?(((((map__31034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31034):map__31034);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31034__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31034__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31036 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31036__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31036,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31036);
var G__31036__$2 = (cljs.core.truth_((function (){var fexpr__31037 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31037.cljs$core$IFn$_invoke$arity$1 ? fexpr__31037.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31037.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31036__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31036__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31036__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31036__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31039 = top_data;
var G__31039__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31039,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31039);
var G__31039__$2 = (cljs.core.truth_((function (){var fexpr__31040 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31040.cljs$core$IFn$_invoke$arity$1 ? fexpr__31040.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31040.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31039__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31039__$1);
var G__31039__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31039__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31039__$2);
var G__31039__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31039__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31039__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31039__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31039__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31043 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31043,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31043,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31043,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31043,(3),null);
var G__31046 = top_data;
var G__31046__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31046,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31046);
var G__31046__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31046__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31046__$1);
var G__31046__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31046__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31046__$2);
var G__31046__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31046__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31046__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31046__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31046__$4;
}

break;
case "execution":
var vec__31047 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31047,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31047,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31047,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31047,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__31047,source__$1,method,file,line,G__31033,G__31033__$1,map__31025,map__31025__$1,via,trace,phase,map__31026,map__31026__$1,type,message,data,map__31027,map__31027__$1,problems,fn,caller,map__31028,map__31028__$1,top_data,source){
return (function (p1__31024_SHARP_){
var or__4131__auto__ = (p1__31024_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__31054 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31054.cljs$core$IFn$_invoke$arity$1 ? fexpr__31054.cljs$core$IFn$_invoke$arity$1(p1__31024_SHARP_) : fexpr__31054.call(null,p1__31024_SHARP_));
}
});})(vec__31047,source__$1,method,file,line,G__31033,G__31033__$1,map__31025,map__31025__$1,via,trace,phase,map__31026,map__31026__$1,type,message,data,map__31027,map__31027__$1,problems,fn,caller,map__31028,map__31028__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31055 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31055__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31055,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31055);
var G__31055__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31055__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31055__$1);
var G__31055__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31055__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31055__$2);
var G__31055__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31055__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31055__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31055__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31055__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31033__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31058){
var map__31059 = p__31058;
var map__31059__$1 = (((((!((map__31059 == null))))?(((((map__31059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31059):map__31059);
var triage_data = map__31059__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31059__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31059__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31059__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31059__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31059__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31059__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31059__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31059__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__31061 = phase;
var G__31061__$1 = (((G__31061 instanceof cljs.core.Keyword))?G__31061.fqn:null);
switch (G__31061__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31062 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31063 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31064 = loc;
var G__31065 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31066_31196 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31067_31197 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31068_31198 = true;
var _STAR_print_fn_STAR__temp_val__31069_31199 = ((function (_STAR_print_newline_STAR__orig_val__31066_31196,_STAR_print_fn_STAR__orig_val__31067_31197,_STAR_print_newline_STAR__temp_val__31068_31198,sb__4661__auto__,G__31062,G__31063,G__31064,G__31061,G__31061__$1,loc,class_name,simple_class,cause_type,format,map__31059,map__31059__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31066_31196,_STAR_print_fn_STAR__orig_val__31067_31197,_STAR_print_newline_STAR__temp_val__31068_31198,sb__4661__auto__,G__31062,G__31063,G__31064,G__31061,G__31061__$1,loc,class_name,simple_class,cause_type,format,map__31059,map__31059__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31068_31198;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31069_31199;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31066_31196,_STAR_print_fn_STAR__orig_val__31067_31197,_STAR_print_newline_STAR__temp_val__31068_31198,_STAR_print_fn_STAR__temp_val__31069_31199,sb__4661__auto__,G__31062,G__31063,G__31064,G__31061,G__31061__$1,loc,class_name,simple_class,cause_type,format,map__31059,map__31059__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31066_31196,_STAR_print_fn_STAR__orig_val__31067_31197,_STAR_print_newline_STAR__temp_val__31068_31198,_STAR_print_fn_STAR__temp_val__31069_31199,sb__4661__auto__,G__31062,G__31063,G__31064,G__31061,G__31061__$1,loc,class_name,simple_class,cause_type,format,map__31059,map__31059__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31056_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31056_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31066_31196,_STAR_print_fn_STAR__orig_val__31067_31197,_STAR_print_newline_STAR__temp_val__31068_31198,_STAR_print_fn_STAR__temp_val__31069_31199,sb__4661__auto__,G__31062,G__31063,G__31064,G__31061,G__31061__$1,loc,class_name,simple_class,cause_type,format,map__31059,map__31059__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31066_31196,_STAR_print_fn_STAR__orig_val__31067_31197,_STAR_print_newline_STAR__temp_val__31068_31198,_STAR_print_fn_STAR__temp_val__31069_31199,sb__4661__auto__,G__31062,G__31063,G__31064,G__31061,G__31061__$1,loc,class_name,simple_class,cause_type,format,map__31059,map__31059__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31067_31197;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31066_31196;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31062,G__31063,G__31064,G__31065) : format.call(null,G__31062,G__31063,G__31064,G__31065));

break;
case "macroexpansion":
var G__31070 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31071 = cause_type;
var G__31072 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31073 = loc;
var G__31074 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31070,G__31071,G__31072,G__31073,G__31074) : format.call(null,G__31070,G__31071,G__31072,G__31073,G__31074));

break;
case "compile-syntax-check":
var G__31075 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31076 = cause_type;
var G__31077 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31078 = loc;
var G__31079 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31075,G__31076,G__31077,G__31078,G__31079) : format.call(null,G__31075,G__31076,G__31077,G__31078,G__31079));

break;
case "compilation":
var G__31080 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31081 = cause_type;
var G__31082 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31083 = loc;
var G__31084 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31080,G__31081,G__31082,G__31083,G__31084) : format.call(null,G__31080,G__31081,G__31082,G__31083,G__31084));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31085 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31086 = symbol;
var G__31087 = loc;
var G__31088 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31089_31201 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31090_31202 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31091_31203 = true;
var _STAR_print_fn_STAR__temp_val__31092_31204 = ((function (_STAR_print_newline_STAR__orig_val__31089_31201,_STAR_print_fn_STAR__orig_val__31090_31202,_STAR_print_newline_STAR__temp_val__31091_31203,sb__4661__auto__,G__31085,G__31086,G__31087,G__31061,G__31061__$1,loc,class_name,simple_class,cause_type,format,map__31059,map__31059__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31089_31201,_STAR_print_fn_STAR__orig_val__31090_31202,_STAR_print_newline_STAR__temp_val__31091_31203,sb__4661__auto__,G__31085,G__31086,G__31087,G__31061,G__31061__$1,loc,class_name,simple_class,cause_type,format,map__31059,map__31059__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31091_31203;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31092_31204;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31089_31201,_STAR_print_fn_STAR__orig_val__31090_31202,_STAR_print_newline_STAR__temp_val__31091_31203,_STAR_print_fn_STAR__temp_val__31092_31204,sb__4661__auto__,G__31085,G__31086,G__31087,G__31061,G__31061__$1,loc,class_name,simple_class,cause_type,format,map__31059,map__31059__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31089_31201,_STAR_print_fn_STAR__orig_val__31090_31202,_STAR_print_newline_STAR__temp_val__31091_31203,_STAR_print_fn_STAR__temp_val__31092_31204,sb__4661__auto__,G__31085,G__31086,G__31087,G__31061,G__31061__$1,loc,class_name,simple_class,cause_type,format,map__31059,map__31059__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31057_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31057_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31089_31201,_STAR_print_fn_STAR__orig_val__31090_31202,_STAR_print_newline_STAR__temp_val__31091_31203,_STAR_print_fn_STAR__temp_val__31092_31204,sb__4661__auto__,G__31085,G__31086,G__31087,G__31061,G__31061__$1,loc,class_name,simple_class,cause_type,format,map__31059,map__31059__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31089_31201,_STAR_print_fn_STAR__orig_val__31090_31202,_STAR_print_newline_STAR__temp_val__31091_31203,_STAR_print_fn_STAR__temp_val__31092_31204,sb__4661__auto__,G__31085,G__31086,G__31087,G__31061,G__31061__$1,loc,class_name,simple_class,cause_type,format,map__31059,map__31059__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31090_31202;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31089_31201;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31085,G__31086,G__31087,G__31088) : format.call(null,G__31085,G__31086,G__31087,G__31088));
} else {
var G__31097 = "Execution error%s at %s(%s).\n%s\n";
var G__31098 = cause_type;
var G__31099 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31100 = loc;
var G__31101 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31097,G__31098,G__31099,G__31100,G__31101) : format.call(null,G__31097,G__31098,G__31099,G__31100,G__31101));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31061__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
