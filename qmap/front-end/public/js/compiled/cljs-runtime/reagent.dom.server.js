goog.provide('reagent.dom.server');
goog.require('cljs.core');
var module$node_modules$react_dom$server_browser=shadow.js.require("module$node_modules$react_dom$server_browser", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.ratom');
goog.require('reagent.interop');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.server !== 'undefined') && (typeof reagent.dom.server.imported !== 'undefined')){
} else {
reagent.dom.server.imported = null;
}
/**
 * Turns a component into an HTML string.
 */
reagent.dom.server.render_to_string = (function reagent$dom$server$render_to_string(component){
reagent.ratom.flush_BANG_();

var _STAR_non_reactive_STAR__orig_val__37558 = reagent.impl.util._STAR_non_reactive_STAR_;
var _STAR_non_reactive_STAR__temp_val__37560 = true;
reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__temp_val__37560;

try{var G__37561 = reagent.impl.template.as_element(component);
return module$node_modules$react_dom$server_browser.renderToString(G__37561);
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__orig_val__37558;
}});
/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
reagent.dom.server.render_to_static_markup = (function reagent$dom$server$render_to_static_markup(component){
reagent.ratom.flush_BANG_();

var _STAR_non_reactive_STAR__orig_val__37567 = reagent.impl.util._STAR_non_reactive_STAR_;
var _STAR_non_reactive_STAR__temp_val__37568 = true;
reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__temp_val__37568;

try{var G__37569 = reagent.impl.template.as_element(component);
return module$node_modules$react_dom$server_browser.renderToStaticMarkup(G__37569);
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__orig_val__37567;
}});

//# sourceMappingURL=reagent.dom.server.js.map
