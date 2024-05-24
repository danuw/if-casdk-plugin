

# Impact Framework Plugin for the Carbon Aware SDK

This repository contains the source code for a plugin designed to extend the functionality of the [Carbon Aware SDK](https://github.com/Green-Software-Foundation/carbon-aware-sdk). This plugin is specifically designed for use with the [Impact Framework](https://if.greensoftware.foundation/), to easily interface with carbon intensity data providers (in particular WattTime and electricity maps).

The plugin leverages the capabilities of the SDK to provide carbon-aware computations, enabling users to make more environmentally friendly choices in their computational workloads.

The plan is to have multiple plugins to cover more capabilities from the SDK, notably:
- best location: better fit for scheduling (currently covered by this repo)
- carbon intensity: to calculate the carbon intensity of your software (not started yet)

## Getting Started

To get started with this plugin, you'll need to install it and integrate it with your instance of the Impact Framework. Detailed instructions for installation and setup are provided in the [Installation](#installation) section.

Follow the steps below to install the plugin:

1. Clone this repository to your local machine.
2. Navigate to the cloned repository and run `npm i` to install the necessary dependencies.
3. Run `npx ts-node driver/driver.ts` to test the plugin.

> Note that this repo defaults to using the following test instance of the SDK at: https://carbon-aware-api.azurewebsites.net/swagger/index.html (at the time of writing this uses a test account for WattTime and should _**only be used for punctual testing**_).
Make sure to update it accordingly to your needs for regular use or other scenarios.

## Installation

For more detailed instructions for integrating the plugin with the Impact Framework please checkout the [official documentation](https://if.greensoftware.foundation/developers/how-to-build-plugins#step-4-load-your-plugin-into-if) as well as the provided [tests](./src/__tests__/unit/lib/casdk-plugin.ts) and [Github Action workflow](./.github/workflows/nodejs-ci.yml).


## Local version of the SDK

In order to run a local version of the SDK please follow instructions on the getting started documentation at https://carbon-aware-sdk.greensoftware.foundation/ and remember to update the `base url` of your newly hosted API when calling the plug in.

