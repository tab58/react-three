import React from 'react';

// These correspond to Bootstrap's alert types.
export enum AlertType {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark'
}

interface StatusBarProps {
  type?: AlertType;
  children?: any;
}

// These are the closest background color matches to Bootstrap alerts.
const alertBackgroundColors = {
  [AlertType.Primary]: 'bg-blue-200',
  [AlertType.Secondary]: 'bg-zinc-300',
  [AlertType.Success]: 'bg-green-300',
  [AlertType.Danger]: 'bg-red-300',
  [AlertType.Warning]: 'bg-yellow-200',
  [AlertType.Info]: 'bg-sky-200',
  [AlertType.Light]: 'bg-zinc-100',
  [AlertType.Dark]: 'bg-zinc-400'
};

// These are the closest text color matches to Bootstrap alerts.
const alertTextColors = {
  [AlertType.Primary]: 'text-sky-800',
  [AlertType.Secondary]: 'text-neutral-700',
  [AlertType.Success]: 'text-green-900',
  [AlertType.Danger]: 'text-red-900',
  [AlertType.Warning]: 'text-yellow-900',
  [AlertType.Info]: 'text-sky-900',
  [AlertType.Light]: 'text-neutral-500',
  [AlertType.Dark]: 'text-neutral-900'
}

interface StatusBarColorSet {
  text: string;
  background: string;
}

const getColors = (type?: AlertType): StatusBarColorSet => {
  const defaultColorSet = {
    text: alertBackgroundColors[AlertType.Primary],
    background: alertBackgroundColors[AlertType.Primary]
  }
  if (type === undefined) {
    return defaultColorSet;
  }

  const textColor = alertTextColors[type];
  const bgColor = alertBackgroundColors[type];
  if (textColor === undefined || bgColor === undefined) {
    return defaultColorSet;
  }
  return {
    text: textColor,
    background: bgColor
  }
}

export const StatusBar = (props: StatusBarProps) => {
  const { text: textColor, background: bgColor } = getColors(props.type);
  const pClasses = `absolute bottom-0 left-0 w-screen align-middle font-sans rounded-md text-lg indent-2 ${textColor} ${bgColor}`;
  return (
    <p className={pClasses}>{props.children}</p>
  );
};