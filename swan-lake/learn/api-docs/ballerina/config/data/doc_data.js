var docData = {"packages":[{"isSingleFile":false,"name":"config","orgName":"ballerina","version":"1.0.5","description":"## Module Overview\n\nThis module provides the Config API to read configurations from environment variables, TOML files, and command-line parameters and build a consolidated set of configurations.\n\nThe precedence order for configuration lookup is as follows: \n1. CLI arguments (used with the --)\n2. Environment variables \n3. Configuration files in the TOML format\n\nThis configuration resolution happens at the start of the program execution. Configurations can be set programmatically as well. \n\nThe Config API provides the capability to feed sensitive data (e.g., passwords) to Ballerina programs securely by encrypting them. \n\n### Setting configurations\n\nTo specify a configuration file explicitly, the `--b7a.config.file\u003d\u003cpath to configuration file\u003e` property can be used. If \nthis property is not set when \nrunning a project, Ballerina looks for a `ballerina.conf` file in the project root. When running a single file or a\n `.jar`, it\u0027s picked from the same directory in which the `.jar` or source resides. The path to the configuration\n  file can either be an absolute or a relative path. \n\n```sh\nballerina run my-program.bal --b7a.config.file\u003d/path/to/conf/file/custom-config-file-name.conf \n```\n\nA configuration file should conform to the TOML format. Ballerina only supports the following features of TOML: value types (string, int, float and boolean), tables, and nested tables. \nGiven below is a sample:\n\n```toml\n[b7a.http.tracelog]\nconsole\u003dtrue\npath\u003d\"./trace.log\"\n\n[b7a.http.accesslog]\nconsole\u003dtrue\npath\u003d\"./access.log\"\n```\nA key given inside a bracket forms a namespace. Any configuration that is specified between two such keys belongs to the namespace of the first of these keys. To access a configuration in a namespace, the fully qualified key should be given (e.g., `b7a.http.tracelog.path`).\n\nThe following types can be given through a configuration file: `string`, `int`, `float`, and `boolean`. If the configuration value is not an `int`, `float`, or a `boolean`, it is considered a `string` and should always be quoted.\n\nThe same configs can be set using CLI parameters as follows.\n\n```bash\nballerina run my-program.bal --b7a.http.tracelog.console\u003dtrue --b7a.http.tracelog.path\u003d./trace.log\n  --b7a.http.accesslog.console\u003dtrue --b7a.http.accesslog.path\u003d./access.log\n```\n\nConfigurations in a file can be overridden by environment variables. To override a particular configuration, an environment variable that matches the configuration key must be set. As periods are not allowed in environment variables, periods in a configuration key should be replaced by underscores.\n\n```bash\n// In Linux and Mac.\n$ export b7a_http_tracelog_path\u003d”./trace.log”\n$ export b7a_http_accesslog_path\u003d”./access.log”\n\n// In Windows.\n$ set(x) b7a_http_tracelog_path\u003d”./trace.log”\n$ set(x) b7a_http_accesslog_path\u003d”./access.log”\n```\n\nIf the configurations need to be shared during runtime, they can be set using the `setConfig()` function. \n\n```ballerina\nconfig:setConfig(\"john.country\", \"USA\");\n```\n \n### Reading configurations\n\nThe API provides functions to read configurations in their original type. Check function descriptors for example usages.\n\nA set of configurations belonging to a particular namespace can be retrieved as a `map` using the `getAsMap()` function. Here is an example:\n\n```toml\n[b7a.http.tracelog]\nconsole\u003dtrue\npath\u003d\"./trace.log\"\nhost\u003d\"localhost\"\nport\u003d5757\n\n[b7a.http.accesslog]\nconsole\u003dtrue\npath\u003d\"./access.log\"\n```\n\nThe configurations for HTTP trace logs can be retrieved as a `map` as follows:\n\n```ballerina\n// Reads a configuration section as a map.\n// Here, the map’s key-value pairs represent config key-value pairs.\nmap\u003canydata\u003e serverAlphaMap  \u003d config:getAsMap(\"b7a.http.tracelog\");\n```\n\n### Securing configuration values\n\nSensitive values can be encrypted using the `encrypt` command as follows:\n\n```sh\n$ ballerina encrypt\nEnter value: \n\nEnter secret: \n\nRe-enter secret to verify: \n\nAdd the following to the runtime config:\n@encrypted:{JqlfWNWKM6gYiaGnS0Hse1J9F/v48gUR0Kxfa5gwjcM\u003d}\n\nOr add the following to the runtime command-line:\n-e\u003cparam\u003e\u003d@encrypted:{JqlfWNWKM6gYiaGnS0Hse1J9F/v48gUR0Kxfa5gwjcM\u003d}\n```\nThis encrypted value can then be placed in a configuration file or provided as a CLI parameter.\n\n```bash\n[admin]\npassword\u003d”@encrypted:{JqlfWNWKM6gYiaGnS0Hse1J9F/v48gUR0Kxfa5gwjcM\u003d}”\n```\n### Reading config files with encrypted values\n\nWhen trying to run a Ballerina program with a configuration file or CLI parameters that contain encrypted values, Ballerina will first check to see if the `b7a.config.secret` configuration is set. This configuration is used to set the path to a file containing the secret required to decrypt the configurations. If it is set, the secret is read, and the secret file is deleted.\n\nIf a secret file is not provided, the user is prompted to enter the secret. Values are decrypted only on demand when an encrypted value is looked up using the `getAsString()` function.\n\n```bash\n$ ballerina run program.bal \nballerina: enter secret for config value decryption:\n```\n\n**Note**: *The same config file cannot contain values that are encrypted using different secrets.*\n","summary":"This module provides the Config API to read configurations from environment variables, TOML files, and command-line parameters and build a consolidated set of configurations.\n","modules":[{"id":"config","summary":"This module provides the Config API to read configurations from environment variables, TOML files, and command-line parameters and build a consolidated set of configurations.\n","description":"## Module Overview\n\nThis module provides the Config API to read configurations from environment variables, TOML files, and command-line parameters and build a consolidated set of configurations.\n\nThe precedence order for configuration lookup is as follows: \n1. CLI arguments (used with the --)\n2. Environment variables \n3. Configuration files in the TOML format\n\nThis configuration resolution happens at the start of the program execution. Configurations can be set programmatically as well. \n\nThe Config API provides the capability to feed sensitive data (e.g., passwords) to Ballerina programs securely by encrypting them. \n\n### Setting configurations\n\nTo specify a configuration file explicitly, the `--b7a.config.file\u003d\u003cpath to configuration file\u003e` property can be used. If \nthis property is not set when \nrunning a project, Ballerina looks for a `ballerina.conf` file in the project root. When running a single file or a\n `.jar`, it\u0027s picked from the same directory in which the `.jar` or source resides. The path to the configuration\n  file can either be an absolute or a relative path. \n\n```sh\nballerina run my-program.bal --b7a.config.file\u003d/path/to/conf/file/custom-config-file-name.conf \n```\n\nA configuration file should conform to the TOML format. Ballerina only supports the following features of TOML: value types (string, int, float and boolean), tables, and nested tables. \nGiven below is a sample:\n\n```toml\n[b7a.http.tracelog]\nconsole\u003dtrue\npath\u003d\"./trace.log\"\n\n[b7a.http.accesslog]\nconsole\u003dtrue\npath\u003d\"./access.log\"\n```\nA key given inside a bracket forms a namespace. Any configuration that is specified between two such keys belongs to the namespace of the first of these keys. To access a configuration in a namespace, the fully qualified key should be given (e.g., `b7a.http.tracelog.path`).\n\nThe following types can be given through a configuration file: `string`, `int`, `float`, and `boolean`. If the configuration value is not an `int`, `float`, or a `boolean`, it is considered a `string` and should always be quoted.\n\nThe same configs can be set using CLI parameters as follows.\n\n```bash\nballerina run my-program.bal --b7a.http.tracelog.console\u003dtrue --b7a.http.tracelog.path\u003d./trace.log\n  --b7a.http.accesslog.console\u003dtrue --b7a.http.accesslog.path\u003d./access.log\n```\n\nConfigurations in a file can be overridden by environment variables. To override a particular configuration, an environment variable that matches the configuration key must be set. As periods are not allowed in environment variables, periods in a configuration key should be replaced by underscores.\n\n```bash\n// In Linux and Mac.\n$ export b7a_http_tracelog_path\u003d”./trace.log”\n$ export b7a_http_accesslog_path\u003d”./access.log”\n\n// In Windows.\n$ set(x) b7a_http_tracelog_path\u003d”./trace.log”\n$ set(x) b7a_http_accesslog_path\u003d”./access.log”\n```\n\nIf the configurations need to be shared during runtime, they can be set using the `setConfig()` function. \n\n```ballerina\nconfig:setConfig(\"john.country\", \"USA\");\n```\n \n### Reading configurations\n\nThe API provides functions to read configurations in their original type. Check function descriptors for example usages.\n\nA set of configurations belonging to a particular namespace can be retrieved as a `map` using the `getAsMap()` function. Here is an example:\n\n```toml\n[b7a.http.tracelog]\nconsole\u003dtrue\npath\u003d\"./trace.log\"\nhost\u003d\"localhost\"\nport\u003d5757\n\n[b7a.http.accesslog]\nconsole\u003dtrue\npath\u003d\"./access.log\"\n```\n\nThe configurations for HTTP trace logs can be retrieved as a `map` as follows:\n\n```ballerina\n// Reads a configuration section as a map.\n// Here, the map’s key-value pairs represent config key-value pairs.\nmap\u003canydata\u003e serverAlphaMap  \u003d config:getAsMap(\"b7a.http.tracelog\");\n```\n\n### Securing configuration values\n\nSensitive values can be encrypted using the `encrypt` command as follows:\n\n```sh\n$ ballerina encrypt\nEnter value: \n\nEnter secret: \n\nRe-enter secret to verify: \n\nAdd the following to the runtime config:\n@encrypted:{JqlfWNWKM6gYiaGnS0Hse1J9F/v48gUR0Kxfa5gwjcM\u003d}\n\nOr add the following to the runtime command-line:\n-e\u003cparam\u003e\u003d@encrypted:{JqlfWNWKM6gYiaGnS0Hse1J9F/v48gUR0Kxfa5gwjcM\u003d}\n```\nThis encrypted value can then be placed in a configuration file or provided as a CLI parameter.\n\n```bash\n[admin]\npassword\u003d”@encrypted:{JqlfWNWKM6gYiaGnS0Hse1J9F/v48gUR0Kxfa5gwjcM\u003d}”\n```\n### Reading config files with encrypted values\n\nWhen trying to run a Ballerina program with a configuration file or CLI parameters that contain encrypted values, Ballerina will first check to see if the `b7a.config.secret` configuration is set. This configuration is used to set the path to a file containing the secret required to decrypt the configurations. If it is set, the secret is read, and the secret file is deleted.\n\nIf a secret file is not provided, the user is prompted to enter the secret. Values are decrypted only on demand when an encrypted value is looked up using the `getAsString()` function.\n\n```bash\n$ ballerina run program.bal \nballerina: enter secret for config value decryption:\n```\n\n**Note**: *The same config file cannot contain values that are encrypted using different secrets.*\n","orgName":"ballerina","version":"1.0.5","records":[],"classes":[],"abstractObjects":[],"clients":[],"listeners":[],"functions":[{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"key","description":"The configuration key to be looked-up\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Returns true if the key is present; if not returs false\n","isDeprecated":false}],"name":"contains","description":"Checks whether the given key is in the configuration registry.\n```ballerina\n# boolean configAvailable \u003d config:contains(\"host\");\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"key","description":"The key of the configuration to be retrieved\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":true,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"name":"anydata","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},{"name":"readonly","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Configuration value mapped with the given key. If there is no mapping, an empty array will be returned\n","isDeprecated":false}],"name":"getAsArray","description":"Retrieves the specified configuration value as an array.\n```ballerina\n# int[]|error ports \u003d config:getAsArray(\"ports\").cloneWithType(int[]);\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"key","description":"The key of the configuration to be retrieved\n","isDeprecated":false},{"defaultValue":"false","type":{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"defaultValue","description":"The default value to be used in case there is no mapping for the provided key\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Configuration value mapped with the given key\n","isDeprecated":false}],"name":"getAsBoolean","description":"Retrieves the specified configuration value as a boolean.\n```ballerina\n# boolean cachingEnabled \u003d config:getAsBoolean(\"http.caching_enabled\");\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"key","description":"The key of the configuration to be retrieved\n","isDeprecated":false},{"defaultValue":"0.0","type":{"name":"float","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"defaultVal","description":"The default value to be used in case there is no mapping for the provided key\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"float","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Configuration value mapped with the given key\n","isDeprecated":false}],"name":"getAsFloat","description":"Retrieves the specified configuration value as a float.\n```ballerina\n# float evictionFactor \u003d config:getAsFloat(\"http.eviction_factor\");\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"key","description":"The key of the configuration to be retrieved\n","isDeprecated":false},{"defaultValue":"0","type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"defaultValue","description":"The default value to be used in case there is no mapping for the provided key\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Configuration value mapped with the given key\n","isDeprecated":false}],"name":"getAsInt","description":"Retrieves the specified configuration value as an int.\n```ballerina\n# int port \u003d config:getAsInt(\"http.port\");\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"key","description":"The key of the configuration to be retrieved\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":true,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"map","category":"map","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0,"constraint":{"name":"anydata","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},{"name":"readonly","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Configuration value mapped with the given key. If there is no mapping, an empty map will be returned\n","isDeprecated":false}],"name":"getAsMap","description":"Retrieves the specified configuration value as a map.\n```ballerina\n# map\u003canydata\u003e configValue \u003d config:getAsMap(\"http.listenerConfig\");\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"key","description":"The key of the configuration to be retrieved\n","isDeprecated":false},{"defaultValue":"\"\"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"defaultValue","description":"The default value to be used in case there is no mapping for the provided key\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Configuration value mapped with the given key\n","isDeprecated":false}],"name":"getAsString","description":"Retrieves the specified configuration value as a string.\n```ballerina\n# string host \u003d config:getAsString(\"http.host\");\n# ```\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"key","description":"The key of the configuration value to be set\n","isDeprecated":false},{"defaultValue":"","type":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"float","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"value","description":"The configuration value to be set\n","isDeprecated":false}],"returnParameters":[],"name":"setConfig","description":"Sets the specified key/value pair as a configuration.\n```ballerina\n# config:setConfig(\"john.country\", \"USA\");\n# ```\n\n","isDeprecated":false}],"constants":[],"annotations":[],"errors":[],"types":[],"enums":[]}]}]};