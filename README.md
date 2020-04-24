# Running Xvfb from Grunt

This Gist shows how to start and stop [Xvfb](http://en.wikipedia.org/wiki/Xvfb) from a Grunt script as part of your build. This is useful if you want to run unit tests in a browser in a headless setting.

## Prerequisites

 * Make sure that Xvfb is installed on your system, e.g. through your Linux distribution's package manager.
 * Make sure that the _Xvfb_ executable is on your **PATH**.
 * 
 
## Required Packages

Install the following packages:

 * [grunt-env](https://github.com/jsoverson/grunt-env)
 * [grunt-shell-spawn](https://github.com/cri5ti/grunt-shell-spawn)

```
npm install --save-dev grunt-env
npm install --save-dev grunt-shell-spawn
```

The first is required for setting the required **DISPLAY** environment variable, the second for starting/stopping Xvfb.

## Gruntfile

In your Gruntfile, set up the configurations for the two plugins and create a task for starting Xvfb before running your tests, and then stopping it when your tests have run.

The below example `Gruntfile.js` contains a standard configuration for running the tests using [Protractor](https://github.com/angular/protractor). Adjust as necessary.

Xvfb will be started in asynchronous mode in order to keep it running while the tests are executed.

## Running the tests

To run the tests without Xvfb, e.g. on your local machine, simply run

```
grunt protractor:run
```

To run the tests with Xvfb, e.g. on your headless build server, run the following instead:

```
grunt protractor-xvfb
```