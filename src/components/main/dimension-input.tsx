import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";

interface Props {
    value: number;
    valueSetter: (value: number) => () => void;
}

export function DimensionInput({ value, valueSetter }: Props) {
    return (
        <div className="inline-flex gap-1">
            <Label htmlFor="dimensionInput">Dimension:</Label>
            <Input
                id="dimensionInput"
                type="number"
                min="3"
                max="10"
                defaultValue={value}
                className="w-14"
                onChange={valueSetter(value)}
            />
        </div>
    );
}
