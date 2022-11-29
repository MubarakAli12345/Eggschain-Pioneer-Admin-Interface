import React from 'react';
import {authRoles} from 'app/auth';
export const InitiativeConfig = {
    settings: {
        layout: {
            config: {
                footer: {
                    display:false
                }
            }
        }
    },
    routes  : [
        // {
        //     path     : '/apps/initiatives/details',
        //     component: React.lazy(() => import('./InitiativeDetails'))
        // },
        {
            path     : '/apps/logs',
            component: React.lazy(() => import ('./Initiatives'))
        }
        //,
        // {
        //     path     : '/apps/calendar',
        //     component: React.lazy(() => import('./CalendarApp'))
        // }

    ]
};
