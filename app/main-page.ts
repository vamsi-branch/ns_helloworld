import { EventData, Page } from '@nativescript/core'
import { HelloWorldModel } from './main-view-model'
import { Application } from '@nativescript/core';
import { NSBranchModule } from 'native-script-branch';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = new HelloWorldModel()
}