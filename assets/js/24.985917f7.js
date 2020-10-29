(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{374:function(e,t,r){"use strict";r.r(t);var o=r(42),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"how-to-move-your-repositories-to-a-new-registry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-move-your-repositories-to-a-new-registry"}},[e._v("#")]),e._v(" How to move your repositories to a new registry?")]),e._v(" "),r("p",[e._v("When users create a container registry backed by a storage account, the repositories are pushed under a blob container that is named after the registry within that storage account.")]),e._v(" "),r("p",[e._v("In the example below we have two registries in a resource group associated with the same storage account.")]),e._v(" "),r("p",[r("img",{attrs:{src:"move-repositories-to-new-registry-sourceregistry.png",alt:"alt Registries"}})]),e._v(" "),r("p",[e._v("Here  using "),r("a",{attrs:{href:"http://storageexplorer.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage Explorer"),r("OutboundLink")],1),e._v(" we can see that each registry gets a container with the corresponding registry name.")]),e._v(" "),r("p",[r("img",{attrs:{src:"move-repositories-to-new-registry-sourceregistry-data.png",alt:"alt Registries container data"}})]),e._v(" "),r("p",[e._v("All you need to do is move the blobs from one container to the other if you want to copy over the repositories. If you do not care about the old container registry then you can just rename the blob container and delete the registry since deleting a registry does not delete the associate data in your storage account.")]),e._v(" "),r("p",[r("img",{attrs:{src:"move-repositories-to-new-registry-sourceregistry-copy.png",alt:"alt Copy blogs"}})]),e._v(" "),r("blockquote",[r("p",[e._v("Make sure you paste that into the target registry's blob container and you should be able to pull your images from the new registry.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);