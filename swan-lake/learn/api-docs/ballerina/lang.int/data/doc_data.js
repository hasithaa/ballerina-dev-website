var docData = {"packages":[{"isSingleFile":false,"name":"lang.int","orgName":"ballerina","version":"1.1.0","description":"## Module Overview\n\nThis module provides lang library operations on `int` values defined by the language specification 2020R1.\n","summary":"This module provides lang library operations on \"int\" values defined by the language specification 2020R1.","modules":[{"id":"lang.int","summary":"This module provides lang library operations on \"int\" values defined by the language specification 2020R1.","description":"## Module Overview\n\nThis module provides lang library operations on `int` values defined by the language specification 2020R1.\n","orgName":"ballerina","version":"1.1.0","records":[],"classes":[],"abstractObjects":[],"clients":[],"listeners":[],"functions":[{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"n","description":"int value to be operated on\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"absolute value of `n`\n","isDeprecated":false}],"name":"abs","description":"Returns absolute value of an int.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"s","description":"hexadecimal string representation of int value\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"int value or error\n","isDeprecated":false}],"name":"fromHexString","description":"Returns the integer that `s` represents in hexadecimal.\nBoth uppercase A-F and lowercase a-f are allowed.\nIt may start with an optional `+` or `-` sign.\nNo `0x` or `0X` prefix is allowed.\nReturns an error if the `s` is not in an allowed format.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"s","description":"string representation of a integer value\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"int representation of the argument or error\n","isDeprecated":false}],"name":"fromString","description":"Returns the integer that `s` represents in decimal.\nReturns error if `s` is not the decimal representation of an integer.\nThe first character may be `+` or `-`.\nThis is the inverse of `value:toString` applied to an `int`.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"n","description":"first int value\n","isDeprecated":false},{"defaultValue":"","type":{"name":"ns","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":true,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0,"elementType":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"ns","description":"other int values\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"maximum value of value of `x` and all the `xs`\n","isDeprecated":false}],"name":"max","description":"Maximum of one or more int values.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"n","description":"first int value\n","isDeprecated":false},{"defaultValue":"","type":{"name":"ns","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":true,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0,"elementType":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"ns","description":"other int values\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"minimum value of `n` and all the `ns`\n","isDeprecated":false}],"name":"min","description":"Minimum of one or more int values\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"name":"ns","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":true,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0,"elementType":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"ns","description":"int values to sum\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"sum of all the `ns`; 0 is `ns` is empty\n","isDeprecated":false}],"name":"sum","description":"Returns sum of zero or more int values.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"n","description":"int value\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"hexadecimal string representation of int value\n","isDeprecated":false}],"name":"toHexString","description":"Returns representation of `n` as hexdecimal string.\nThere is no `0x` prefix. Lowercase letters a-f are used.\nNegative numbers will have a `-` prefix. No sign for\nnon-negative numbers.\n\n","isDeprecated":false}],"constants":[{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"value":"9223372036854775807","name":"MAX_VALUE","description":"Maximum value of type `int`.\n","isDeprecated":false},{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"value":"-9223372036854775807 - 1","name":"MIN_VALUE","description":"Minimum value of type `int`.\n","isDeprecated":false},{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"value":"32767","name":"SIGNED16_MAX_VALUE","description":"Maximum value of type `Signed16`.\n","isDeprecated":false},{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"value":"-32768","name":"SIGNED16_MIN_VALUE","description":"Minimum value of type `Signed16`.\n","isDeprecated":false},{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"value":"2147483647","name":"SIGNED32_MAX_VALUE","description":"Maximum value of type `Signed32`.\n","isDeprecated":false},{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"value":"-2147483648","name":"SIGNED32_MIN_VALUE","description":"Minimum value of type `Signed32`.\n","isDeprecated":false},{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"value":"127","name":"SIGNED8_MAX_VALUE","description":"Maximum value of type `Signed8`.\n","isDeprecated":false},{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"value":"-128","name":"SIGNED8_MIN_VALUE","description":"Minimum value of type `Signed8`.\n","isDeprecated":false},{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"value":"65535","name":"UNSIGNED16_MAX_VALUE","description":"Maximum value of type `Unsigned16`.\n","isDeprecated":false},{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"value":"4294967295","name":"UNSIGNED32_MAX_VALUE","description":"Maximum value of type `Unsigned32`.\n","isDeprecated":false},{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"value":"255","name":"UNSIGNED8_MAX_VALUE","description":"Maximum value of type `Unsigned8`.\n","isDeprecated":false}],"annotations":[],"errors":[],"types":[],"enums":[]}]}]};