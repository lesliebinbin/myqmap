(ns front-end.core
  (:require 
            [reagent.core :as reagent :refer [atom]]
             [reagent.dom.server :refer [render-to-string]]
            [front-end.markers :refer [input-form]]
            ["./mymap" :default show-map]
            ["./bundle" :as index]
            ["./bundle" :default bundle]))

;; define your app data so that it doesn't get over-written on reload


(defn display-map []
  (reagent/create-class {:reagent-render #(vector :div#image-map)
                         :component-did-mount #(show-map (render-to-string input-form))}))

(defn start []
  (reagent/render-component [display-map]
                            (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
