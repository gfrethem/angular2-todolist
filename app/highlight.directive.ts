import {Directive, ElementRef} from 'angular2/core';
@Directive({
    selector: '[myHighLight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {
    private _el:HTMLElement;
    constructor(el: ElementRef) { this._el = el.nativeElement; }
    onMouseEnter() { this._highlight("yellow"); }
    onMouseLeave() { this._highlight(null); }
    private _highlight(color: string) {
        this._el.style.backgroundColor = color;
    }
}