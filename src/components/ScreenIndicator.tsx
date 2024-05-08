import React from 'react'

export default function ScreenIndicator() {
    if (process.env.NODE_ENV !== 'development') return null;

    return (
        <div className="screen_indicator" />
    )
}
