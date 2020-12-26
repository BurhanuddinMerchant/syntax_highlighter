const input = document.getElementById("input");
const output = document.getElementById("output");
const updateOutput = () => {
  const rawInput = input.value + " ";
  let processedOutput = "";
  let word = "";
  for (i in rawInput) {
    if (word === "" && rawInput[i] === " ") {
      continue;
    } else {
      if (word && rawInput[i] === " ") {
        if (isCppKeyword(word)) {
          console.log(word);
          word = "<keyword>" + word + "</keyword>";
        }
        processedOutput = processedOutput + " " + word;
        word = "";
      } else {
        word = word + rawInput[i];
      }
    }
  }
  output.innerHTML = processedOutput;
};
const isCppKeyword = (word) => {
  for (key in cppkeywords) {
    if (cppkeywords[key] === word) {
      return true;
    }
  }
  return false;
};
const cppkeywords = [
  "asm",
  "else",
  "new",
  "this",
  "auto",
  "enum",
  "operator",
  "throw",
  "bool",
  "explicit",
  "private",
  "true",
  "break",
  "export",
  "protected",
  "try",
  "case",
  "extern",
  "public",
  "typedef",
  "catch",
  "false",
  "register",
  "typeid",
  "char",
  "float",
  "reinterpret_cast",
  "typename",
  "class",
  "for",
  "return",
  "union",
  "const",
  "friend",
  "short",
  "unsigned",
  "const_cast",
  "goto",
  "signed",
  "using",
  "continue",
  "if",
  "sizeof",
  "virtual",
  "default",
  "inline",
  "static",
  "void",
  "delete",
  "int",
  "static_cast",
  "volatile",
  "do",
  "long",
  "struct",
  "wchar_t",
  "double",
  "mutable",
  "switch",
  "while",
  "dynamic_cast",
  "namespace",
  "template",
];
