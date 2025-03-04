import { useState } from "react";

import { DimensionInput } from "@/components/main/dimension-input.tsx";
import { Board } from "@/components/main/game/board.tsx";

export function Main() {
    const [dimension, setDimension] = useState(5);

    return (
        <div className="flex flex-col mt-32 ml-128 mr-128 gap-3">
            <DimensionInput
                value={dimension}
                valueSetter={(value: number) => {
                    setDimension(value);
                }}
            />
            <Board dimension={5} />
        </div>
    );
}
