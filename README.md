# Multiple app.listen() calls in Express.js

This repository demonstrates a common error in Express.js applications where `app.listen()` is called multiple times.  This can lead to unpredictable behavior and hinder the proper functioning of your server.

The `bug.js` file shows the problematic code.  The `bugSolution.js` file provides the corrected version.

## Problem
Calling `app.listen()` multiple times in an Express.js application can result in unexpected behavior and potentially prevent your server from starting correctly.  The exact outcome will depend on the specific code and environment.

## Solution
Ensure that `app.listen()` is called only once within your application's lifecycle.  Proper structuring of your code and avoiding repeated calls are crucial for preventing this issue.
