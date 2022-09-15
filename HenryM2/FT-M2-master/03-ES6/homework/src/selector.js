var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);
    for(let i=0;i<startEl.children.length;i++){
      let el = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
      resultSet = [...resultSet,...el];
    };
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]==="#") return "id";
  else if(selector[0]===".") return "class";
  else if(selector.split(".").length>1) return "tag.class"; // tag.class tag class
  else return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    var newSelector = selector.slice(1); // hola
    matchFunction = el => el.id && (el.id.toLowerCase() === newSelector.toLowerCase());
  } else if (selectorType === "class") {
    var newSelector = selector.slice(1);
    matchFunction = el => el.className && (el.classList.contains(newSelector));
  } else if (selectorType === "tag.class") {
    var tagTC = selector.split(".")[0]
    var classTC = selector.split(".")[1]
    matchFunction = el => el.tagName && el.className && (tagTC.toLowerCase() === el.tagName.toLowerCase()) && (el.classList.contains(classTC))
  } else if (selectorType === "tag") {
    matchFunction = el => el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
