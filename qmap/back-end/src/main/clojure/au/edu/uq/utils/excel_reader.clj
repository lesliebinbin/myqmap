(ns au.edu.uq.utils.excel-reader
  (:require [dk.ative.docjure.spreadsheet :as ss]
            [cheshire.core :as json]))
(declare process-sheet)

(defn read-excel [filename]
  (->>
    (ss/load-workbook-from-resource filename)
    ss/sheet-seq
    (mapv process-sheet)
    json/generate-string
    ))

(defn process-sheet [sheet]
  (let [name (.getSheetName sheet)]
    (->> sheet
         (ss/select-columns {:A :category :B :seat :C :name :D :project :E :supervisor :F :role :G :end-date :H :email})
         (remove nil?)
         (drop 1)
         (assoc {} name)
         )))
