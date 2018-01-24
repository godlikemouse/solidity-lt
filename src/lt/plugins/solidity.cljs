(ns lt.plugins.solidity
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.object :as object]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.console :as console]
            )
  (:require-macros [lt.macros :refer [defui behavior]]))

(object/object* ::solidity-lang
                :tags #{:solidity.lang})

(def solidity (object/create ::solidity-lang))

(defui script [src]
  [:script {:src src :type "text/x-solidity"}])
