
interface ParentComponentProps {
    readonly attrClass: string;
    readonly children: preact.ComponentChildren;
}
export default function WrapperPage({attrClass, children}: ParentComponentProps ) {
    const valueClass = attrClass ? `${attrClass} relative bg-white px-4 md:px-12 rounded-sm container max-w-[21cm] min-h-[29.7cm] mx-auto py-16 aspect-[210mm 297mm] select-none z-10 print:h-auto print:py-0 print:mt-0 mt-5 [&:has(.decorator-bl, .decorator-br)~div>.decorator-tl]:bg-red-100` : 'relative bg-white px-4 md:px-12 rounded-sm container max-w-[22cm] min-h-[29.7cm] mx-auto py-16 aspect-[210mm 297mm] select-none z-10 mt-5';
    return (
        <div class={valueClass}>
            {children}
        </div>
    );
}   