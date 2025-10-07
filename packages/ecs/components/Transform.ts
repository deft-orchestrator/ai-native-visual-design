// Transform Component
import { Component } from '../Component';

export interface TransformData {
  x: number;
  y: number;
  rotation?: number;
  scale?: number;
}

export function Transform(data: TransformData): Component {
  return {
    type: 'Transform',
    data,
  };
}
