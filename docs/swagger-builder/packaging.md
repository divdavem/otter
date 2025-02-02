# Packaging

A Swagger specification package is composed of two files:

1. **package.json** containing information related to the Swagger specification artifact
2. A `yaml` file containing the Swagger 2.0 specification

## Package.json

The **package.json** file is a mandatory file to define the content of an `NPM package`.
The file should contain at least the following fields:

- **name**: Name of Swagger specification artifact (*example: @dxapi/public-core-spec*)
- **version**: Version of the package. Even if it's not mandatory, it would be good practice to align the package version of the Swagger specification version.
- **main**: Path to the Swagger specification (*example: ./dist/swagger-spec.yaml*)

## Swagger Specification (yaml)

The Swagger 2.0 specification generated by the **Swagger Builder**.
Even if the tool supports a generation to a [split spec](./split-swagger-spec.md), we strongly recommend using a `yaml` format to expose the specification in a package.

## Generation

The `package.json` file can be automatically generated by the **Swagger Builder** by using the `--artifact` option (or via the *artifact* field of the configuration file).

When requested, the `package.json` file will be generated in the same folder of the resultant Swagger specifications. The Swagger specification version number will be applied to the `version` field.
> **Information**: The version can be manually specified via the `--set-version` command

By default, a field `license` will be added to the `package.json` with the value **BSD-3-Clause**.
