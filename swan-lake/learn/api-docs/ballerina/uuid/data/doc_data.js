var docData = {"packages":[{"isSingleFile":false,"name":"uuid","orgName":"ballerina","version":"0.9.1","description":"## Module overview\n\nThis module provides functions related to `UUID`.\n","summary":"This module provides functions related to \"UUID\".","modules":[{"id":"uuid","summary":"This module provides functions related to \"UUID\".","description":"## Module overview\n\nThis module provides functions related to `UUID`.\n","orgName":"ballerina","version":"0.9.1","records":[],"classes":[],"abstractObjects":[],"clients":[],"listeners":[],"functions":[{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Uuid","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Error","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"UUID of type 1 as a UUID record or error\n","isDeprecated":false}],"name":"createType1AsRecord","description":"Returns a UUID of type 1 as a UUID record.\n```ballerina\n# uuid:Uuid|uuid:Error uuid1 \u003d uuid:createType1AsRecord();\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[],"returnParameters":[{"type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"UUID of type 1 as a string\n","isDeprecated":false}],"name":"createType1AsString","description":"Returns a UUID of type 1 as a string.\n```ballerina\n# string uuid1 \u003d uuid:createType1AsString();\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"NamespaceUUID","category":"types","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"namespace","description":"string representation for pre-defined namespace UUIDs\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"name","description":"a name within the namespace\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Uuid","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Error","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"UUID of type 3 as a UUID record or error\n","isDeprecated":false}],"name":"createType3AsRecord","description":"Returns a UUID of type 3 as a UUID record.\n```ballerina\n# uuid:Uuid|uuid:Error uuid3 \u003d uuid:createType3AsRecord(uuid:NAME_SPACE_DNS, “ballerina.io”);\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"NamespaceUUID","category":"types","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"namespace","description":"string representation for pre-defined namespace UUIDs\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"name","description":"a name within the namespace\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Error","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"UUID of type 3 as a string\n","isDeprecated":false}],"name":"createType3AsString","description":"Returns a UUID of type 3 as a string.\n```ballerina\n# string|uuid:Error uuid3 \u003d uuid:createType3AsString(uuid:NAME_SPACE_DNS, “ballerina.io”);\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Uuid","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Error","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"UUID of type 4 as a UUID record or error\n","isDeprecated":false}],"name":"createType4AsRecord","description":"Returns a UUID of type 4 as a UUID record.\n```ballerina\n# uuid:Uuid|uuid:Error uuid4 \u003d uuid:createType4AsRecord();\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"UUID of type 4 as a string\n","isDeprecated":false}],"name":"createType4AsString","description":"Returns a UUID of type 4 as a string.\n```ballerina\n# string uuid4 \u003d uuid:createType4AsString();\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"NamespaceUUID","category":"types","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"namespace","description":"string representation for pre-defined namespace UUIDs\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"name","description":"a name within the namespace\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Uuid","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Error","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"UUID of type 5 as a UUID record or error\n","isDeprecated":false}],"name":"createType5AsRecord","description":"Returns a UUID of type 5 as a UUID record.\n```ballerina\n# uuid:Uuid|uuid:Error uuid5 \u003d uuid:createType5AsRecord(uuid:NAME_SPACE_DNS, “ballerina.io”);\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"NamespaceUUID","category":"types","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"namespace","description":"string representation for pre-defined namespace UUIDs\n","isDeprecated":false},{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"name","description":"a name within the namespace\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Error","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"UUID of type 5 as a string\n","isDeprecated":false}],"name":"createType5AsString","description":"Returns a UUID of type 5 as a string.\n```ballerina\n# string|uuid:Error uuid5 \u003d uuid:createType5AsString(uuid:NAME_SPACE_DNS, “ballerina.io”);\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"uuid","description":"UUID\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Version","category":"types","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Error","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"UUID version, or error\n","isDeprecated":false}],"name":"getVersion","description":"Detect RFC version of a UUID. Returns an error if the UUID is invalid.\n```ballerina\n# uuid:Version|uuid:Error v \u003d uuid:getVersion(\"4397465e-35f9-11eb-adc1-0242ac120002\");\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Uuid","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"nil UUID\n","isDeprecated":false}],"name":"nilAsRecord","description":"Returns a nil UUID as a UUID record.\n```ballerina\n# uuid:Uuid nilUUID \u003d uuid:nilAsRecord();\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[],"returnParameters":[{"type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"nil UUID\n","isDeprecated":false}],"name":"nilAsString","description":"Returns a nil UUID as a string.\n```ballerina\n# string nilUUID \u003d uuid:nilAsString();\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Uuid","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"uuid","description":"UUID to be converted\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"name":"byte","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Error","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"UUID as bytes\n","isDeprecated":false}],"name":"toBytes","description":"Convert to an array of bytes. Returns an error if the UUID is invalid.\n```ballerina\n# byte[]|uuid:Error b \u003d uuid:toBytes(“6ec0bd7f-11c0-43da-975e-2aesass0b”);\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"name":"byte","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}}],"paramTypes":[],"arrayDimensions":0},"name":"uuid","description":"UUID to be converted\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Uuid","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Error","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"UUID as record\n","isDeprecated":false}],"name":"toRecord","description":"Convert to UUID record. Returns error if the array is invalid.\n```ballerina\n# uuid:Uuid|uuid:Error r1 \u003d uuid:toRecord(\"4397465e-35f9-11eb-adc1-0242ac120002\");\n# uuid:Uuid|uuid:Error r2 \u003d uuid:toRecord([10, 20, 30]);\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"name":"byte","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},{"orgName":"ballerina","moduleName":"uuid","version":"0.9.1","name":"Uuid","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"uuid","description":"UUID to be converted\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"UUID as string\n","isDeprecated":false}],"name":"toString","description":"Convert to UUID string. Returns error if the array is invalid.\n```ballerina\n# string|error s \u003d uuid:toString([5, 12, 16, 35]);\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"uuid","description":"UUID to be tested\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"true if a valied UUID, false if not\n","isDeprecated":false}],"name":"validate","description":"Test a string to see if it is a valid UUID.\n```ballerina\n# boolean valid \u003d uuid:validate(\"4397465e-35f9-11eb-adc1-0242ac120002\");\n# ```\n\n","isDeprecated":false}],"constants":[],"annotations":[],"errors":[{"name":"Error","description":"Represents UUID module related errors.\n","isDeprecated":false}],"types":[{"name":"Uuid","description":"Represents a UUID.\n\n","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":true,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"readonly","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"record {\n    ints:Unsigned32 timeLow;\n    ints:Unsigned16 timeMid;\n    ints:Unsigned16 timeHiAndVersion;\n    ints:Unsigned8 clockSeqHiAndReserved;\n    ints:Unsigned8 clockSeqLo;\n    int node;    // Should be Unsigned48, but not available in lang.int at the moment\n}","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":false,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0}],"enums":[{"members":[{"name":"NAME_SPACE_DNS","description":"Namespace is a fully-qualified domain name\n","isDeprecated":false},{"name":"NAME_SPACE_URL","description":"Namespace is a URL\n","isDeprecated":false},{"name":"NAME_SPACE_OID","description":"Namespace is an ISO OID\n","isDeprecated":false},{"name":"NAME_SPACE_X500","description":"Namespace is an X.500 DN (in DER or a text output format)\n","isDeprecated":false},{"name":"NAME_SPACE_NIL","description":"Empty UUID\n","isDeprecated":false}],"name":"NamespaceUUID","description":"Represents UUIDs strings of well known namespace IDs.\n\n","isDeprecated":false},{"members":[{"name":"V1","description":"UUID generated using the MAC address of the computer and the time of generation\n","isDeprecated":false},{"name":"V3","description":"UUID generated using MD5 hashing and application-provided text string\n","isDeprecated":false},{"name":"V4","description":"UUID generated using a pseudo-random number generator\n","isDeprecated":false},{"name":"V5","description":"UUID generated using SHA-1 hashing and application-provided text string\n","isDeprecated":false}],"name":"Version","description":"Represents the UUID versions.\n\n","isDeprecated":false}]}]}]};