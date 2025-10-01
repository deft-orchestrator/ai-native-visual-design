import { Entity } from './ecs';

// Re-exporting Component from ecs.ts for convenience
export { Component } from './ecs';

/**
 * 1. Transform Component - Position, rotation, scale
 */
export interface TransformComponent {
  x: number;
  y: number;
  z?: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
  anchorX: number;
  anchorY: number;
}

/**
 * 2. Style Component - Visual styling
 */
export interface StyleComponent {
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  opacity: number;
  blendMode: 'normal' | 'multiply' | 'screen' | 'overlay';
  visible: boolean;
}

/**
 * 3. Bounds Component - Size constraints
 */
export interface BoundsComponent {
  width: number;
  height: number;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}

/**
 * 4. Text Component - Typography
 */
export interface TextComponent {
  content: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  fontStyle: 'normal' | 'italic';
  textAlign: 'left' | 'center' | 'right';
  lineHeight: number;
  letterSpacing: number;
}

/**
 * 5. Image Component - Image data
 */
export interface ImageComponent {
  source: string;
  naturalWidth: number;
  naturalHeight: number;
  crop?: { x: number; y: number; width: number; height: number };
  filters: any[]; // Define a proper filter type later
}

/**
 * 6. Animation Component - Keyframe animations
 */
export interface AnimationComponent {
  keyframes: any[]; // Define a proper keyframe type later
  duration: number;
  easing: string; // Could be an enum or function
  loop: boolean;
  autoplay: boolean;
  currentTime: number;
}

/**
 * 7. Hierarchy Component - Parent-child relationships
 */
export interface HierarchyComponent {
  parent?: Entity;
  children: Entity[];
  order: number; // Z-index
}

/**
 * 8. Effect Component - Visual effects
 */
export interface EffectComponent {
  blur?: number;
  shadow?: any; // Define proper effect types later
  glow?: any;
  dropShadow?: any;
}