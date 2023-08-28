// Generated by dts-bundle v0.7.3

declare module 'sweet-scroll' {
    import { RequestAnimationFrame, CancelAnimationFrame } from 'sweet-scroll/decls/animation/requestAnimationFrame';
    import { EasingFunction } from 'sweet-scroll/decls/animation/easings';
    import { Offset } from 'sweet-scroll/decls/dom/offsets';
    import { Options, PartialOptions } from 'sweet-scroll/decls/options';
    import { ScrollableElement } from 'sweet-scroll/decls/types';
    export { Options, PartialOptions, EasingFunction, Offset, RequestAnimationFrame, CancelAnimationFrame, };
    export default class SweetScroll {
            /**
                * You can set Polyfill (or Ponyfill) for browsers that do not support requestAnimationFrame.
                */
            static raf: RequestAnimationFrame;
            static caf: CancelAnimationFrame;
            /**
                * SweetScroll instance factory.
                */
            static create(options?: PartialOptions, container?: string | ScrollableElement): SweetScroll;
            /**
                * Constructor
                */
            constructor(options?: PartialOptions, container?: string | ScrollableElement);
            /**
                * Scroll animation to the specified position.
                */
            to(distance: any, options?: PartialOptions): void;
            /**
                * Scroll animation to specified left position.
                */
            toTop(distance: any, options?: PartialOptions): void;
            /**
                * Scroll animation to specified top position.
                */
            toLeft(distance: any, options?: PartialOptions): void;
            /**
                * Scroll animation to specified element.
                */
            toElement($element: Element, options?: PartialOptions): void;
            /**
                * Stop the current scroll animation.
                */
            stop(gotoEnd?: boolean): void;
            /**
                * Update options.
                */
            update(options: PartialOptions): void;
            /**
                * Destroy instance.
                */
            destroy(): void;
            /**
                * Callback methods.
                */
            protected onBefore(_: Offset, __: Element | null): boolean | void;
            protected onStep(_: number): void;
            protected onAfter(_: Offset, __: Element | null): void;
            protected onCancel(): void;
            protected onComplete(_: boolean): void;
            /**
                * Start scrolling animation.
                */
            protected start(opts: Options): void;
            /**
                * Handle each frame of the animation.
                */
            protected loop: (time: number) => void;
            /**
                * Handle the completion of scrolling animation.
                */
            protected complete(): void;
            /**
                * Callback function and method call.
                */
            protected hook(options: Options, type: 'before' | 'after' | 'step' | 'cancel' | 'complete', ...args: any[]): any;
            /**
                * Bind events of container element.
                */
            protected bind(click: boolean, stop: boolean): void;
            /**
                * Unbind events of container element.
                */
            protected unbind(click: boolean, stop: boolean): void;
            /**
                * Handling of container click event.
                */
            protected handleClick: (e: Event) => void;
            /**
                * Handling of container stop events.
                */
            protected handleStop: (e: Event) => void;
    }
}

declare module 'sweet-scroll/decls/animation/requestAnimationFrame' {
    export interface RequestAnimationFrame {
        (callback: (time: number) => void): number;
    }
    export interface CancelAnimationFrame {
        (handle: number): void;
    }
    export const raf: RequestAnimationFrame;
    export const caf: CancelAnimationFrame;
}

declare module 'sweet-scroll/decls/animation/easings' {
    export interface EasingFunction {
        (x: number, t: number, b: number, c: number, d: number, s?: number): number;
    }
    export interface Easings {
        [name: string]: EasingFunction;
    }
    export const easings: Easings;
}

declare module 'sweet-scroll/decls/dom/offsets' {
    import { ScrollableElement } from 'sweet-scroll/decls/types';
    export interface Offset {
        top: number;
        left: number;
    }
    export type Direction = 'x' | 'y';
    export const directionMethodMap: {
        [P in Direction]: 'scrollTop' | 'scrollLeft';
    };
    export const directionPropMap: {
        [P in Direction]: 'pageXOffset' | 'pageYOffset';
    };
    export const getScroll: ($el: ScrollableElement, direction: Direction) => number;
    export const setScroll: ($el: ScrollableElement, offset: number, direction: Direction) => void;
    export const getOffset: ($el: Element, $context: ScrollableElement) => Offset;
}

declare module 'sweet-scroll/decls/options' {
    import { EasingFunction } from 'sweet-scroll/decls/animation/easings';
    import { Offset } from 'sweet-scroll/decls/dom/offsets';
    import SweetScroll from 'sweet-scroll/decls/index';
    export interface BeforeHandler {
        (offset: Offset, $trigger: Element | null, scroller: SweetScroll): boolean | void;
    }
    export interface AfterHandler {
        (offset: Offset, $trigger: Element | null, scroller: SweetScroll): void;
    }
    export interface StepHandler {
        (time: number, scroller: SweetScroll): void;
    }
    export interface CancelHandler {
        (scroller: SweetScroll): void;
    }
    export interface CompleteHandler {
        (isCancel: boolean, scroller: SweetScroll): void;
    }
    export interface Options {
        trigger: string;
        header: string | Element;
        duration: number;
        easing: string | EasingFunction;
        offset: number;
        vertical: boolean;
        horizontal: boolean;
        cancellable: boolean;
        updateURL: boolean | string;
        preventDefault: boolean;
        stopPropagation: boolean;
        before: BeforeHandler | null;
        after: AfterHandler | null;
        step: StepHandler | null;
        cancel: CancelHandler | null;
        complete: CompleteHandler | null;
    }
    export interface PartialOptions extends Partial<Options> {
    }
    export const defaultOptions: Options;
}

declare module 'sweet-scroll/decls/types' {
    export type ScrollableElement = Element | Window;
}

