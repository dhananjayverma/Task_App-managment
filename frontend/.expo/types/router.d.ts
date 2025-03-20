/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/pages/home`; params?: Router.UnknownInputParams; } | { pathname: `/pages/home/styles`; params?: Router.UnknownInputParams; } | { pathname: `/pages/login`; params?: Router.UnknownInputParams; } | { pathname: `/pages/login/styles`; params?: Router.UnknownInputParams; } | { pathname: `/pages/signup`; params?: Router.UnknownInputParams; } | { pathname: `/pages/signup/styles`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/home`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/home/styles`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/login`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/login/styles`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/signup`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/signup/styles`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/pages/home${`?${string}` | `#${string}` | ''}` | `/pages/home/styles${`?${string}` | `#${string}` | ''}` | `/pages/login${`?${string}` | `#${string}` | ''}` | `/pages/login/styles${`?${string}` | `#${string}` | ''}` | `/pages/signup${`?${string}` | `#${string}` | ''}` | `/pages/signup/styles${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/pages/home`; params?: Router.UnknownInputParams; } | { pathname: `/pages/home/styles`; params?: Router.UnknownInputParams; } | { pathname: `/pages/login`; params?: Router.UnknownInputParams; } | { pathname: `/pages/login/styles`; params?: Router.UnknownInputParams; } | { pathname: `/pages/signup`; params?: Router.UnknownInputParams; } | { pathname: `/pages/signup/styles`; params?: Router.UnknownInputParams; };
    }
  }
}
