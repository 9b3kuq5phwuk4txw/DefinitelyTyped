// Type definitions for express-legacy-expires 1.0
// Project: https://github.com/dantman/express-legacy-expires
// Definitions by: yuta katayama <https://github.com/shift-yuta-katayama>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as express from 'express';

export = expressLegacyExpires;

declare function expressLegacyExpires(options?: expressLegacyExpires.Options): express.RequestHandler;

declare namespace expressLegacyExpires {
    interface Options {
        /**
         * This option allows the function that returns the time "now" to be overridden with a different function.
         * It is primarily for testing, where it's used to ensure that all tests work from a fixed time.
         *
         * return number is the time in milliseconds since the Unix epoch.
         */
        now?: () => number;
    }
}
