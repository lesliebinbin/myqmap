goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._header[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4434__auto__.call(null,value));
} else {
var m__4431__auto__ = (devtools.format._header["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4431__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._has_body[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4434__auto__.call(null,value));
} else {
var m__4431__auto__ = (devtools.format._has_body["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4431__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._body[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4434__auto__.call(null,value));
} else {
var m__4431__auto__ = (devtools.format._body["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4431__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o26745 = temp__5718__auto__;
var temp__5718__auto____$1 = (o26745["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o26746 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o26746["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o26747 = temp__5718__auto____$2;
return (o26747["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o26748 = temp__5718__auto__;
var temp__5718__auto____$1 = (o26748["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o26749 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o26749["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o26750 = temp__5718__auto____$2;
return (o26750["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o26751 = temp__5718__auto__;
var temp__5718__auto____$1 = (o26751["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o26752 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o26752["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o26753 = temp__5718__auto____$2;
return (o26753["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o26756 = temp__5718__auto__;
var temp__5718__auto____$1 = (o26756["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o26757 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o26757["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o26758 = temp__5718__auto____$2;
return (o26758["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o26760 = temp__5718__auto__;
var temp__5718__auto____$1 = (o26760["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o26761 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o26761["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o26762 = temp__5718__auto____$2;
return (o26762["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o26766 = temp__5718__auto__;
var temp__5718__auto____$1 = (o26766["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o26767 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o26767["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o26768 = temp__5718__auto____$2;
return (o26768["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o26769 = temp__5718__auto__;
var temp__5718__auto____$1 = (o26769["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o26770 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o26770["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o26771 = temp__5718__auto____$2;
return (o26771["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26886 = arguments.length;
var i__4731__auto___26887 = (0);
while(true){
if((i__4731__auto___26887 < len__4730__auto___26886)){
args__4736__auto__.push((arguments[i__4731__auto___26887]));

var G__26888 = (i__4731__auto___26887 + (1));
i__4731__auto___26887 = G__26888;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq26778){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26778));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26889 = arguments.length;
var i__4731__auto___26890 = (0);
while(true){
if((i__4731__auto___26890 < len__4730__auto___26889)){
args__4736__auto__.push((arguments[i__4731__auto___26890]));

var G__26891 = (i__4731__auto___26890 + (1));
i__4731__auto___26890 = G__26891;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq26779){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26779));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26892 = arguments.length;
var i__4731__auto___26893 = (0);
while(true){
if((i__4731__auto___26893 < len__4730__auto___26892)){
args__4736__auto__.push((arguments[i__4731__auto___26893]));

var G__26894 = (i__4731__auto___26893 + (1));
i__4731__auto___26893 = G__26894;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq26784){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26784));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26896 = arguments.length;
var i__4731__auto___26897 = (0);
while(true){
if((i__4731__auto___26897 < len__4730__auto___26896)){
args__4736__auto__.push((arguments[i__4731__auto___26897]));

var G__26898 = (i__4731__auto___26897 + (1));
i__4731__auto___26897 = G__26898;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq26789){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26789));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26899 = arguments.length;
var i__4731__auto___26900 = (0);
while(true){
if((i__4731__auto___26900 < len__4730__auto___26899)){
args__4736__auto__.push((arguments[i__4731__auto___26900]));

var G__26904 = (i__4731__auto___26900 + (1));
i__4731__auto___26900 = G__26904;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq26795){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26795));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26915 = arguments.length;
var i__4731__auto___26916 = (0);
while(true){
if((i__4731__auto___26916 < len__4730__auto___26915)){
args__4736__auto__.push((arguments[i__4731__auto___26916]));

var G__26917 = (i__4731__auto___26916 + (1));
i__4731__auto___26916 = G__26917;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq26801){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26801));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26918 = arguments.length;
var i__4731__auto___26919 = (0);
while(true){
if((i__4731__auto___26919 < len__4730__auto___26918)){
args__4736__auto__.push((arguments[i__4731__auto___26919]));

var G__26920 = (i__4731__auto___26919 + (1));
i__4731__auto___26919 = G__26920;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq26802){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26802));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26921 = arguments.length;
var i__4731__auto___26922 = (0);
while(true){
if((i__4731__auto___26922 < len__4730__auto___26921)){
args__4736__auto__.push((arguments[i__4731__auto___26922]));

var G__26924 = (i__4731__auto___26922 + (1));
i__4731__auto___26922 = G__26924;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__26809){
var vec__26810 = p__26809;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26810,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__26810,state_override){
return (function (p1__26806_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__26806_SHARP_,state_override], 0));
});})(vec__26810,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq26807){
var G__26808 = cljs.core.first(seq26807);
var seq26807__$1 = cljs.core.next(seq26807);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26808,seq26807__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__26832 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__26833 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__26834 = (function (){var G__26835 = new cljs.core.Keyword(null,"li","li",723558921);
var G__26836 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__26837 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__26835,G__26836,G__26837) : devtools.format.make_template_fn.call(null,G__26835,G__26836,G__26837));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__26832,G__26833,G__26834) : devtools.format.make_template_fn.call(null,G__26832,G__26833,G__26834));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26930 = arguments.length;
var i__4731__auto___26931 = (0);
while(true){
if((i__4731__auto___26931 < len__4730__auto___26930)){
args__4736__auto__.push((arguments[i__4731__auto___26931]));

var G__26932 = (i__4731__auto___26931 + (1));
i__4731__auto___26931 = G__26932;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq26838){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26838));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26934 = arguments.length;
var i__4731__auto___26935 = (0);
while(true){
if((i__4731__auto___26935 < len__4730__auto___26934)){
args__4736__auto__.push((arguments[i__4731__auto___26935]));

var G__26936 = (i__4731__auto___26935 + (1));
i__4731__auto___26935 = G__26936;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq26842){
var G__26843 = cljs.core.first(seq26842);
var seq26842__$1 = cljs.core.next(seq26842);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26843,seq26842__$1);
});


//# sourceMappingURL=devtools.format.js.map
