"use strict";
exports.id = 710;
exports.ids = [710];
exports.modules = {

/***/ 9333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Logo.649d483c.png","height":96,"width":266,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AcKhblX8/gL0tNUh8ywb9UPx+gkeJhXvvpDNIdcvFv77Ab2ebsYMCfg58vgK/gwI+gLu9g4AFAzyAPf8BgALB/7dAWNgeTRBLfueCwgAvNvqDtzt9QTg9v8IIj4k7FARDPzQma4v5V5oyb0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 8241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getPokemons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1717);
/* harmony import */ var utils_base_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2496);




const getPokemons = ()=>{
    const [pokemons, setPokemons] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        graphql_request__WEBPACK_IMPORTED_MODULE_1___default()(utils_base_url__WEBPACK_IMPORTED_MODULE_3__/* .GRAPHQL_URL */ .o, graphql_query__WEBPACK_IMPORTED_MODULE_2__/* .pokemon_query */ .s).then((data)=>setPokemons(data.pokemons.results));
    }, []);
    return {
        pokemons
    };
};


/***/ }),

/***/ 1717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ single_pokemon),
/* harmony export */   "s": () => (/* binding */ pokemon_query)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

const pokemon_query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
 {
    pokemons(limit: 10, offset: 0){
      results{
        id
        name
        image
        artwork
      }
    }
  }
`;
const single_pokemon = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  query getPokemon($name: String!){
    pokemon(name: $name) {
      abilities {
        ability {
          name
        }
      }
      height
      weight
      name
      id
      types{
        slot
        type{
          name
        }
      }
      stats{
        base_stat
        effort
        stat{
          name
        }
      }
    }
  }
`;


/***/ }),

/***/ 2496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ GRAPHQL_URL)
/* harmony export */ });
const GRAPHQL_URL = "https://graphql-pokeapi.graphcdn.app/";


/***/ })

};
;