(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_App_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),_App_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__),_Buttons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);function App(){var initialState={prevNumber:"",currNumber:"0",operations:"",isComplete:!1,expression:""},_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState),_useState2=Object(E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),state=_useState2[0],setstate=_useState2[1],numbers=[{id:"seven",value:7},{id:"eight",value:8},{id:"nine",value:9},{id:"delete",value:"DEL"},{id:"four",value:4},{id:"five",value:5},{id:"six",value:6},{id:"add",value:"+"},{id:"one",value:1},{id:"two",value:2},{id:"three",value:3},{id:"subtract",value:"-"},{id:"zero",value:0},{id:"decimal",value:"."},{id:"divide",value:"/"},{id:"multiply",value:"*"},{id:"equals",value:"="},{id:"clear",value:"AC"}],handleClick=function handleClick(e){var btnValue=e.target.dataset.value,newNumber="";if(state.isComplete&&setstate((function(e){return Object(E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},e),{},{currNumber:""})})),isNaN(Number(btnValue))||setstate((function(e){var _="";return _=lastOperandEquals(e)?"":e.expression,newNumber=1===e.currNumber.length&&"0"===e.currNumber[0]?btnValue:e.currNumber+btnValue,Object(E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},e),{},{currNumber:newNumber,prevNumber:btnValue,isComplete:!1,expression:_})})),"."!==btnValue||state.currNumber.split("").includes(btnValue)||setstate((function(e){return Object(E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},e),{},{currNumber:e.currNumber+btnValue})})),"AC"===btnValue&&setstate((function(e){return Object(E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},e),{},{currNumber:"0",prevNumber:"",isComplete:!0,expression:""})})),["+","-","*","/"].includes(btnValue)&&setstate((function(e){var _="",t="";if(_=lastOperandEquals(e)?e.currNumber:e.expression,["+","-","*","/"].includes(e.prevNumber)){var r=e.expression.replace(/\s/g,"").slice(-2).split("");if(r.every((function(e){return["+","-","*","/"].includes(e)}))){console.log("operandsAlone is True",r);var a=e.expression.trim().split("").filter((function(e){return!["+","-","*","/"].includes(e)&&/\S/.test(e)}));console.log("newOperans",a),_=a.join(""),console.log("newOperans",_)}t+=e.prevNumber,console.log("operands",t)}else t=btnValue;var s;return s=0===e.expression.length?"".concat(state.currNumber," ").concat(btnValue):"".concat(_," ").concat(state.currNumber," ").concat(btnValue),Object(E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},e),{},{currNumber:"",expression:s,prevNumber:t})})),"="===btnValue){var newExp="".concat(state.expression," ").concat(state.currNumber),calc=eval(newExp).toFixed(4);setstate((function(e){return Object(E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_GIT_Projects_Calculator_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},e),{},{expression:newExp+btnValue,currNumber:+calc,isComplete:!0})}))}console.log("state",state)},lastOperandEquals=function(e){return e.isComplete&&"="===e.expression.slice(-1)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"section-center",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"expression",children:state.expression}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"displayCalc",id:"display",children:state.currNumber}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"container",children:numbers.map((function(e,_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Buttons__WEBPACK_IMPORTED_MODULE_4__.a,{item:e,handleClick:handleClick},_)}))})]})}__webpack_exports__.a=App},function(e,_,t){"use strict";t(2),t(14);var r=t(0);_.a=function(e){var _=e.item,t=_.id,a=_.value,s="btns";return["clear","delete"].includes(t)&&(s+=" grey-btn"),"equals"===t&&(s+=" red-btn"),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("button",{type:"button",className:s,id:t,"data-value":a,onClick:e.handleClick,children:a})})}},,,,,,function(e,_,t){},function(e,_,t){},function(e,_,t){},,function(e,_,t){"use strict";t.r(_);var r=t(2),a=t.n(r),s=t(4),u=t.n(s),n=(t(12),t(5)),c=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(_){var t=_.getCLS,r=_.getFID,a=_.getFCP,s=_.getLCP,u=_.getTTFB;t(e),r(e),a(e),s(e),u(e)}))},l=t(0);u.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(n.a,{})}),document.getElementById("root")),c()}],[[16,1,2]]]);
//# sourceMappingURL=main.54a56093.chunk.js.map