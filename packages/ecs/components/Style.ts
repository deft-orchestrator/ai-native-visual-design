// Style Component
import { Component } from '../Component';

export interface StyleData {
  color?: string;
  border?: string;
  shadow?: string;
}

export function Style(data: StyleData): Component {
  return {
    type: 'Style',
    data,
  };
}
