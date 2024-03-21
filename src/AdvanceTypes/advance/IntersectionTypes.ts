let weight: number & string;

type Draggable = {
    drap:()=> void
};

type Resizable = {
    resize: ()=> void
};
type UIWidget = Draggable & Resizable;
let textBox : UIWidget
