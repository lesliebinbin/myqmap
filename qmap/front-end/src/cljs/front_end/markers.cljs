(ns front-end.markers
  (:require ["antd" :refer [DatePicker]]
            ["./bundle" :default index]
            [reagent.core :as reagent]))



(def input-form [:div
                 [:h1 "This is the input form"]
                 [:div
                  [:> index]]
                 [:h2 "Please input something"]])
