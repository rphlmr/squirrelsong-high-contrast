(comment
  "Once upon a time...")

(ns clj-dracula)

(defstruct dracula :location :birth-date :death-date :weaknesses)

(defn age
  [vamp] (- (vamp :death-date) (vamp :birth-date)))

;;...there was a squirrel named Squeaky
(let [d (struct dracula "Hundred Acre Wood" 1924 1936 '("Hazelnuts", "Donuts"))]
  (println (age d)))
