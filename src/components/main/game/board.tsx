import * as React from "react";

import { Tile } from "./tile.tsx";

interface Props {
    dimension: number;
}

export function Board({ dimension }: Props) {
    const hui: React.ReactNode[] = [];
    huihuihui;

    for (let i = 0; i < dimension ** 2; ++i) {
        hui.push(<Tile value={i} isMovable={!!i} onClick={() => {}} />);
    }

    return <div className={`grid grid-cols-${dimension} grid-rows-${dimension} gap-1`}>{hui}</div>;
}
