(ns qmap.core
  (:gen-class)
  (:import (qmap App)))

(defn -main [& args]
  (-> (new App)
      .getGreeting
      println))
