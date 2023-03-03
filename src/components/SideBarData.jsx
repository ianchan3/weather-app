import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SideBarData = [
  {
    'title': 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    'title': "Today's Forecast",
    path: '/',
    icon: <FaIcons.FaCalendarDay/>,
    cName: 'nav-text'
  },
  {
    'title': 'Weekly Forecast',
    path: '/weekly',
    icon: <FaIcons.FaCalendarWeek />,
    cName: 'nav-text'
  },
]