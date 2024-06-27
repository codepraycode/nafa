'use client';
import {DndContext, useDraggable} from '@dnd-kit/core';
import { FC, PropsWithChildren } from 'react';


export default function ScreenIndicator() {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    if (process.env.NODE_ENV !== 'development') return null;

    return (
        <ScreenIndicatorWrapper>
            <div
                id='draggable'
                className="screen_indicator"
                ref={setNodeRef}
                style={style}
                {...listeners}
                {...attributes}
            />
        </ScreenIndicatorWrapper>

    )
}


const ScreenIndicatorWrapper:FC<PropsWithChildren> = ({children}) => {
    
    return (
        <DndContext>
            {children}
        </DndContext>

    )
}
