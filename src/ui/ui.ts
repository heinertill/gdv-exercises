export class Node {

    canvas: HTMLElement;
    x: number;
    y: number;
    r: number = 10;
    color: string = "#000000";

    public constructor(init?:Partial<Node>) {
        Object.assign(this, init);

        this.div = document.createElement("div");
        this.div.style.position = "absolute";
        this.div.style.left = (this.canvas.offsetLeft + this.x) + "px";

        this.div.style.top = (this.canvas.offsetTop + this.y) + "px";
        this.div.style.width = "10px";
        this.div.style.height = "10px";
        this.div.style.background = this.color;
        this.div.style.color = "blue";
        this.div.style.borderRadius = "5px";
        this.div.style.zIndex = "1000";

        this.canvas.parentElement.appendChild(this.div);

        this.div.addEventListener('mousedown', (e) => {

            this.isDown = true;
            this.offset = [ this.div.offsetLeft - e.clientX,
                            this.div.offsetTop - e.clientY ];
        }, true);

        document.addEventListener('mouseup', (e) => {

            if (this.isDown) {
                var bounds = this.canvas.getBoundingClientRect();
                this.isDown = false;
                this.canvas.dispatchEvent(new CustomEvent('moved', {
                    detail: { x: e.clientX - bounds.left,
                              y: e.clientY - bounds.top }}));
            }
        }, true);

        document.addEventListener('mousemove', (e) => {

            e.preventDefault();

            if (this.isDown) {
                this.div.style.left = (this.offset[0] + e.clientX) + 'px';
                this.div.style.top  = (this.offset[1] + e.clientY) + 'px';
            }
        }, true);
    }

    div: HTMLDivElement;
    offset: number[] = [0, 0];
    isDown: boolean = false;
}
