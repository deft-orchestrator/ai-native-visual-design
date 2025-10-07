// Text Component
import { Component } from '../Component';

export interface TextData {
  value: string;
  font?: string;
  size?: number;
}

export function Text(data: TextData): Component {
  return {
    type: 'Text',
    data,
  };
}
