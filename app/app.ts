/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { Application, AndroidApplication, Utils } from '@nativescript/core';
import { NSBranchModule } from 'native-script-branch'

// Ensure your app is set up correctly
Application.on(Application.launchEvent, () => {
    const context = Utils.android.getApplicationContext(); // Get Android application context

    NSBranchModule.getAutoInstance(context)
        .then(() => {
            console.log('Branch autoInstance successfully initialized');
        })
        .catch((error) => {
            console.error('Branch autoInstance initialization failed:', error);
        });
});
// Application.android.on(Application.android.activityStartedEvent, (args: any) => {
//     const activity = args.activity;
//     console.log("Activity started, initializing Branch session");
//     NSBranchModule.sessionBuilder(activity)
//         .then(() => {
//             console.log("Branch session initialized successfully");
//         })
//         .catch((error) => {
//             console.error("Branch session initialization failed:", error);
//         });
// });
Application.run({ moduleName: 'app-root' })

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
