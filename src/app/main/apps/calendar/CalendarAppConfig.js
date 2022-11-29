import React from 'react';

export const CalendarAppConfig = {
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
        {
            path     : '/apps/meetings/details',
            component: React.lazy(() => import('./MeetingsDetails'))
        },
        {
            path     : '/apps/meetings',
            component: React.lazy(() => import ('./Meetings'))
        }
        //,
        // {
        //     path     : '/apps/calendar',
        //     component: React.lazy(() => import('./CalendarApp'))
        // }

    ]
};
