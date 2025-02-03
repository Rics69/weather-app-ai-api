import {useRef} from "react";
import * as React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
}

const HorizontallyScrollable = ({children, className = ""}: Props) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const oldX = e.pageX;
        const scrollLeft = scrollRef.current!.scrollLeft;

        const handleMouseMove = (e: MouseEvent) => {
            const newX = e.pageX;
            const offset = newX - oldX;

            scrollRef.current!.scrollLeft = scrollLeft - offset;
        }

        const handleMouseUp = ( ) => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    }

    return (
        <div className={className} ref={scrollRef} onMouseDown={handleMouseDown}>{children}</div>
    )
}

export default HorizontallyScrollable;