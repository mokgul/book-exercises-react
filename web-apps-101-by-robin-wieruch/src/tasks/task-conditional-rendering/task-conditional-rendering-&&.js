import * as React from "react";

export default function TaskConditionalRenderingAND() {
    const isLoading = true;
    return (
        <div>
            { isLoading && <p>Loading...</p> }
        </div>
    )
}