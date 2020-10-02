import { NbMenuItem } from '@nebular/theme';
import {NbTokenStorage} from "@nebular/auth";


export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/employee/dashboard',
    home: true,
  },
  {
    title: '장비',
    icon: 'hard-drive-outline',
    link: '/employee/device',
  },
  {
    title: '결재',
    icon: 'edit-2-outline',
    children: [
      {
        title: '신청/확인',
        link: '/employee/approval/status',
      },
      {
        title: '결재',
        link: '/employee/approval/approval',
        hidden: true,
      },
    ],
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/employee/layout/stepper',
      },
      {
        title: 'List',
        link: '/employee/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/employee/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/employee/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/employee/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/employee/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/employee/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/employee/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/employee/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/employee/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/employee/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/employee/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/employee/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/employee/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/employee/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/employee/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/employee/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/employee/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/employee/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/employee/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/employee/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/employee/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/employee/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/employee/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/employee/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/employee/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/employee/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/employee/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/employee/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/employee/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/employee/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/employee/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/employee/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/employee/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/employee/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/employee/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/employee/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
