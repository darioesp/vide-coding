interface SectionWrapperContentProps {
    readonly title?: string;
    readonly attrClass?: string;
    readonly children: preact.ComponentChildren;
}
export default function SectionWrapperContent({title, attrClass, children}: SectionWrapperContentProps) {
    const classes = `flex flex-col gap-y-3 mt-10 font-roboto-mono ${attrClass}`;
    return (
        <section class={classes}>
            { title &&
                <h2 class="font-bold text-[17px]">
                    {title}
                </h2> }
            {children}
        </section>
    );
}
