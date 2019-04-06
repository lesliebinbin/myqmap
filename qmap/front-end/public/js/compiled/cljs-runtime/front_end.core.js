goog.provide('front_end.core');
goog.require('cljs.core');
goog.require('reagent.core');
front_end.core.display_map = (function front_end$core$display_map(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"div#image-map","div#image-map",-1631322543)],null));
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return module$front_end$mymap.default();
})], null));
});
front_end.core.start = (function front_end$core$start(){
var G__25890 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [front_end.core.display_map], null);
var G__25891 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__25890,G__25891) : reagent.core.render_component.call(null,G__25890,G__25891));
});
front_end.core.init = (function front_end$core$init(){
return front_end.core.start();
});
goog.exportSymbol('front_end.core.init', front_end.core.init);
front_end.core.stop = (function front_end$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=front_end.core.js.map
