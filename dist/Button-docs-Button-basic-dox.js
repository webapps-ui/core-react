(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Button-docs-Button-basic-dox"],{

/***/ "./src/components/Button/docs/Button-basic.dox":
/*!*****************************************************!*\
  !*** ./src/components/Button/docs/Button-basic.dox ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var earth_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! earth-ui */ \"./src/components/index.js\");\n/* harmony import */ var widgets_Demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/Demo */ \"./site/widgets/Demo/index.js\");\n/* harmony import */ var widgets_Doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/Doc */ \"./site/widgets/Doc/index.js\");\n/* harmony import */ var widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! widgets/Markdown */ \"./site/widgets/Markdown/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar codeButtonType = \"import { Button } from 'earth-ui'\\n\\nconst ButtonType = () => {\\n  return (\\n    <>\\n      <Button>DEFAULT</Button>\\n      <Button type=\\\"primary\\\">PRIMARY</Button>\\n      <Button type=\\\"accept\\\">ACCEPT</Button>\\n      <Button type=\\\"warning\\\">WARNING</Button>\\n      <Button type=\\\"danger\\\">DANGER</Button>\\n      <Button type=\\\"text\\\">TEXT</Button>\\n      <Button type=\\\"link\\\">LINK</Button>\\n    </>\\n  )\\n}\";\n\nvar ButtonType = function ButtonType() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], null, \"DEFAULT\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\"\n  }, \"PRIMARY\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"accept\"\n  }, \"ACCEPT\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"warning\"\n  }, \"WARNING\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"danger\"\n  }, \"DANGER\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"text\"\n  }, \"TEXT\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"link\"\n  }, \"LINK\"));\n};\n\nvar codeButtonGhost = \"import { Button } from 'earth-ui'\\n\\nconst ButtonGhost = () => {\\n  return (\\n    <>\\n      <Button ghost>DEFAULT</Button>\\n      <Button ghost type=\\\"primary\\\">PRIMARY</Button>\\n      <Button ghost type=\\\"accept\\\">ACCEPT</Button>\\n      <Button ghost type=\\\"warning\\\">WARNING</Button>\\n      <Button ghost type=\\\"danger\\\">DANGER</Button>\\n      <Button ghost type=\\\"text\\\">TEXT</Button>\\n      <Button ghost type=\\\"link\\\">LINK</Button>\\n    </>\\n  )\\n}\";\n\nvar ButtonGhost = function ButtonGhost() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    ghost: true\n  }, \"DEFAULT\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    ghost: true,\n    type: \"primary\"\n  }, \"PRIMARY\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    ghost: true,\n    type: \"accept\"\n  }, \"ACCEPT\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    ghost: true,\n    type: \"warning\"\n  }, \"WARNING\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    ghost: true,\n    type: \"danger\"\n  }, \"DANGER\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    ghost: true,\n    type: \"text\"\n  }, \"TEXT\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    ghost: true,\n    type: \"link\"\n  }, \"LINK\"));\n};\n\nvar codeLoadingButton = \"import { Button } from 'earth-ui'\\nimport { useState } from 'react'\\n\\nconst LoadingButton = () => {\\n  const [loading, setLoading] = useState(false)\\n  const handleClick = () => {\\n    console.log('clicked!')\\n    setLoading(true)\\n    setTimeout(() => setLoading(false), 2000)\\n  }\\n  return <Button type=\\\"primary\\\" loading={loading} onClick={handleClick}>SHOW LOADING</Button>\\n}\";\n\nvar LoadingButton = function LoadingButton() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var handleClick = function handleClick() {\n    console.log('clicked!');\n    setLoading(true);\n    setTimeout(function () {\n      return setLoading(false);\n    }, 2000);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    loading: loading,\n    onClick: handleClick\n  }, \"SHOW LOADING\");\n};\n\nvar codeButtonBlock = \"import { Button } from 'earth-ui'\\n\\nconst ButtonBlock = () => {\\n  return (\\n    <>\\n      <Button type=\\\"primary\\\" block>PRIMARY</Button>\\n      <Button block>DEFAULT</Button>\\n    </>\\n  )\\n}\";\n\nvar ButtonBlock = function ButtonBlock() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    block: true\n  }, \"PRIMARY\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    block: true\n  }, \"DEFAULT\"));\n};\n\nvar codeButtonMicro = \"import { Button } from 'earth-ui'\\n\\nconst ButtonMicro = () => {\\n  return (\\n    <>\\n      <Button type=\\\"primary\\\" size=\\\"sm\\\">PRIMARY</Button>\\n      <Button size=\\\"sm\\\">DEFAULT</Button>\\n      <br/><br/>\\n      <Button type=\\\"primary\\\" size=\\\"md\\\">PRIMARY</Button>\\n      <Button size=\\\"md\\\">DEFAULT</Button>\\n      <br/><br/>\\n      <Button type=\\\"primary\\\" size=\\\"lg\\\">PRIMARY</Button>\\n      <Button size=\\\"lg\\\">DEFAULT</Button>\\n    </>\\n  )\\n}\";\n\nvar ButtonMicro = function ButtonMicro() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    size: \"sm\"\n  }, \"PRIMARY\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    size: \"sm\"\n  }, \"DEFAULT\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    size: \"md\"\n  }, \"PRIMARY\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    size: \"md\"\n  }, \"DEFAULT\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    size: \"lg\"\n  }, \"PRIMARY\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    size: \"lg\"\n  }, \"DEFAULT\"));\n};\n\nvar codeButtonIcon = \"import { Button } from 'earth-ui'\\n\\nconst ButtonIcon = () => {\\n  return (\\n    <>\\n      <Button icon=\\\"statuschange\\\" type=\\\"primary\\\" />\\n      <Button icon=\\\"statuschange\\\" type=\\\"primary\\\" ghost />\\n      <Button icon=\\\"statuschange\\\" />\\n      <Button icon=\\\"add\\\" />\\n      <Button icon=\\\"statuschange\\\" size=\\\"sm\\\" />\\n      <Button icon=\\\"statuschange\\\" ghost />\\n      <Button icon=\\\"activity\\\">DATA ANALYSIS</Button>\\n      <Button icon=\\\"statuschange\\\" type=\\\"text\\\">Refresh</Button>\\n    </>\\n  )\\n}\";\n\nvar ButtonIcon = function ButtonIcon() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    icon: \"statuschange\",\n    type: \"primary\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    icon: \"statuschange\",\n    type: \"primary\",\n    ghost: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    icon: \"statuschange\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    icon: \"add\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    icon: \"statuschange\",\n    size: \"sm\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    icon: \"statuschange\",\n    ghost: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    icon: \"activity\"\n  }, \"DATA ANALYSIS\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    icon: \"statuschange\",\n    type: \"text\"\n  }, \"Refresh\"));\n};\n\nvar codeButtonDisabled = \"import { Button } from 'earth-ui'\\n\\nconst ButtonDisabled = () => {\\n  return (\\n    <>\\n      <Button disabled type=\\\"primary\\\">PRIMARY</Button>\\n      <Button disabled>DEFAULT</Button>\\n      <Button disabled type=\\\"accept\\\">ACCEPT</Button>\\n      <Button disabled type=\\\"text\\\">TEXT</Button>\\n      <Button disabled type=\\\"link\\\">LINK</Button>\\n      <br/><br/>\\n      <Button icon=\\\"statuschange\\\" disabled />\\n      <Button icon=\\\"activity\\\" type=\\\"primary\\\" ghost disabled>DATA ANALYSIS</Button>\\n    </>\\n  )\\n}\";\n\nvar ButtonDisabled = function ButtonDisabled() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    disabled: true,\n    type: \"primary\"\n  }, \"PRIMARY\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    disabled: true\n  }, \"DEFAULT\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    disabled: true,\n    type: \"accept\"\n  }, \"ACCEPT\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    disabled: true,\n    type: \"text\"\n  }, \"TEXT\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    disabled: true,\n    type: \"link\"\n  }, \"LINK\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    icon: \"statuschange\",\n    disabled: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    icon: \"activity\",\n    type: \"primary\",\n    ghost: true,\n    disabled: true\n  }, \"DATA ANALYSIS\"));\n};\n\nvar summary = \"\";\nvar docs = [{\n  \"name\": \"Button\",\n  \"defaultProps\": {},\n  \"props\": [{\n    \"name\": \"type\",\n    \"desc\": \"<p>button type</p>\\n\",\n    \"type\": \"primary | accept | warning | danger | link | text\",\n    \"required\": false\n  }, {\n    \"name\": \"size\",\n    \"desc\": \"<p>button size, default <code>md</code></p>\\n\",\n    \"type\": \"sm | md | lg\",\n    \"required\": false\n  }, {\n    \"name\": \"ghost\",\n    \"desc\": \"<p>determine whether it&#39;s a ghost button</p>\\n\",\n    \"type\": \"bool\",\n    \"required\": false\n  }, {\n    \"name\": \"block\",\n    \"desc\": \"<p>determine whether it&#39;s a block button</p>\\n\",\n    \"type\": \"bool\",\n    \"required\": false\n  }, {\n    \"name\": \"loading\",\n    \"desc\": \"<p>determine whether it&#39;s loading</p>\\n\",\n    \"type\": \"bool\",\n    \"required\": false\n  }, {\n    \"name\": \"disabled\",\n    \"desc\": \"<p>disable the button</p>\\n\",\n    \"type\": \"bool\",\n    \"required\": false\n  }, {\n    \"name\": \"icon\",\n    \"desc\": \"<p>icon type name</p>\\n\",\n    \"type\": \"string\",\n    \"required\": false\n  }],\n  \"apis\": []\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, !!summary && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    html: summary\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Type\",\n    code: codeButtonType,\n    desc: \"<p>The <code>default</code> and <code>primary</code> buttons are used in most cases, you can also use other types in specific scenarios.</p>\\n\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonType, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Ghost\",\n    code: codeButtonGhost,\n    desc: \"<p>The <code>ghost</code> style button is commonly used in the place where you don't want the button to stand out.</p>\\n\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonGhost, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Loading Button\",\n    code: codeLoadingButton,\n    desc: \"<p>Assign the <code>loading</code> property to Button to initialize a spinner. Click event will be disabled when button is loading state, open the browser console you will see more logs.</p>\\n\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingButton, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Block Button\",\n    code: codeButtonBlock,\n    desc: \"<p>The <code>block</code> property will make the button fit to its parent width.</p>\\n\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonBlock, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Size\",\n    code: codeButtonMicro,\n    desc: \"<p>Besides default <code>md</code> size, Button component provides three additional sizes for you to choose among different scenarios.</p>\\n\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonMicro, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Icon\",\n    code: codeButtonIcon,\n    desc: \"<p>Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.</p>\\n\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonIcon, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Disabled\",\n    code: codeButtonDisabled,\n    desc: \"<p>The <code>disabled</code> attribute determines if the button is disabled.</p>\\n\",\n    note: \"\",\n    renderModel: \"left\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonDisabled, null)), docs.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, docs.map(function (doc) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Doc__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n      key: doc.name\n    }, doc));\n  }))));\n});\n\n//# sourceURL=webpack:///./src/components/Button/docs/Button-basic.dox?");

/***/ })

}]);