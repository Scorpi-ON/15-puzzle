import { Button } from "@/components/ui/button.tsx";

interface TileProps {
    value: number | null;
    onClick: () => void;
    isMovable: boolean;
}

export function Tile({ value, onClick, isMovable }: TileProps) {
    return (
        <Button size="icon" className={"p-8 text-2xl font-bold"} onClick={onClick} disabled={!isMovable}>
            {value}
        </Button>
    );
}
