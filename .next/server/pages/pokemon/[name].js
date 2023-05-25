(() => {
var exports = {};
exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 7111:
/***/ ((module) => {

// Exports
module.exports = {
	"pokemon_name": "Charectar_pokemon_name__Z24Nr",
	"pokemon_card": "Charectar_pokemon_card__sKOcL",
	"neature": "Charectar_neature__8gIHU",
	"back_btn": "Charectar_back_btn__X72ks",
	"mb_img": "Charectar_mb_img__2J1kx",
	"wb_img": "Charectar_wb_img__lgPMr"
};


/***/ }),

/***/ 3725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _name_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./public/assets/images/Logo.png
var Logo = __webpack_require__(9333);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(5805);
var external_graphql_request_default = /*#__PURE__*/__webpack_require__.n(external_graphql_request_);
// EXTERNAL MODULE: ./utils/base_url.js
var base_url = __webpack_require__(2496);
// EXTERNAL MODULE: ./graphql/query.js
var query = __webpack_require__(1717);
// EXTERNAL MODULE: ./styles/Charectar.module.css
var Charectar_module = __webpack_require__(7111);
var Charectar_module_default = /*#__PURE__*/__webpack_require__.n(Charectar_module);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
// EXTERNAL MODULE: ./Hooks/getPokemons.js
var getPokemons = __webpack_require__(8241);
;// CONCATENATED MODULE: ./pages/pokemon/[name].js












const Charectar = ({ pokemon  })=>{
    const route = (0,router_namespaceObject.useRouter)();
    const { pokemons  } = (0,getPokemons/* getPokemons */.L)();
    const dPokemon = pokemons.find((ele)=>ele.name === pokemon.name);
    const neature = (name)=>{
        switch(name){
            case "grass":
                return "#69ad69";
            case "poison":
            case "psychic":
                return "#cf70cf";
            case "fire":
                return "#ff9c10";
            case "bug":
                return "#69ad69";
            case "flying":
                return "linear-gradient(#24caff 50%, #b3abab 50%)";
            default:
                return "#3fafd3";
        }
    };
    const weakness = [
        "fire",
        "psychic",
        "flying",
        "ice"
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-5 text-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: Logo/* default */.Z,
                    width: 300,
                    alt: "pokemon logo"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                sm: 1,
                lg: 3,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        className: "d-block d-md-none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${(Charectar_module_default()).mb_img}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: dPokemon?.artwork,
                                height: 300,
                                width: 300,
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                className: (Charectar_module_default()).pokemon_name,
                                children: [
                                    pokemon.name,
                                    " #00",
                                    pokemon.id
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "fs-5",
                                children: "There is a plant seed on its black right from the day this pokemon is born. The seed slowly grows larger"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Charectar_module_default()).pokemon_card,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                    xs: 2,
                                    className: "g-5",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "fw-bold mb-2 fs-5",
                                                    children: "Height"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        pokemon.height,
                                                        "'"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "fw-bold mb-2 fs-5",
                                                    children: "Category"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Seed"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "fw-bold mb-2 fs-5",
                                                    children: "Weight"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        pokemon.weight,
                                                        " lbs"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "fw-bold mb-2 fs-5",
                                                    children: "Abilities"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    children: pokemon.abilities.map((ele, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "text-capitalize",
                                                            children: ele.ability.name
                                                        }, i))
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        className: "d-none d-md-block",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Charectar_module_default()).wb_img,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: dPokemon?.artwork,
                                height: 370,
                                width: 370,
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "mb-4",
                                        children: "Type"
                                    }),
                                    pokemon.types.map((ele, i)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (Charectar_module_default()).neature,
                                            style: {
                                                background: neature(ele.type.name)
                                            },
                                            children: ele.type.name.charAt(0).toUpperCase() + ele.type.name.slice(1)
                                        }, i))
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "my-4",
                                        children: "Weakness"
                                    }),
                                    weakness.map((ele, i)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (Charectar_module_default()).neature,
                                            style: {
                                                background: neature(ele)
                                            },
                                            children: ele.charAt(0).toUpperCase() + ele.slice(1)
                                        }, i))
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "my-4",
                                        children: "Stats"
                                    }),
                                    pokemon.stats.map((ele, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "fs-5 mb-1 text-capitalize",
                                                    children: ele.stat.name
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.ProgressBar, {
                                                    style: {
                                                        height: "10px"
                                                    },
                                                    variant: "info",
                                                    now: ele.base_stat,
                                                    className: "mb-2"
                                                })
                                            ]
                                        }, i))
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: (Charectar_module_default()).back_btn,
                    onClick: ()=>route.push("/"),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiTwotoneHome, {}),
                        "Back to Homepage"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const _name_ = (Charectar);
async function getServerSideProps(context) {
    const name = context.params.name;
    const res = await external_graphql_request_default()(base_url/* GRAPHQL_URL */.o, query/* single_pokemon */.V, {
        name
    });
    const pokemon = await res.pokemon;
    return {
        props: {
            pokemon
        }
    };
}


/***/ }),

/***/ 5805:
/***/ ((module) => {

"use strict";
module.exports = require("graphql-request");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,710], () => (__webpack_exec__(3725)));
module.exports = __webpack_exports__;

})();