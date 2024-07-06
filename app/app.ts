/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { Utils,Application, AndroidApplication, AndroidActivityBundleEventData, AndroidActivityEventData } from '@nativescript/core';

import { NSBranch } from 'native-script-branch';

Application.on(Application.launchEvent, (args) => {
  if (args.android) {
    NSBranch.getAutoInstance(Utils.android.getApplicationContext());
    NSBranch.enableLogging();
  }
});

Application.android.on(AndroidApplication.activityStartedEvent, (args: AndroidActivityEventData) => {
  const activity = args.activity as android.app.Activity;
  const intent = activity.getIntent(); // Accessing the Intent
  const uri = intent.getData(); // Assuming you want to get data URI from Intent

  NSBranch.initSession(uri, activity);
});

Application.run({ moduleName: 'app-root' })
