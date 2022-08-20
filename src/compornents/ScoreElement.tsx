import { Field } from "../models/Field"

type Props = {
    field: Field
    cellSize: number
}
export default function ScoreElement(props: Props) {
    const cellSize = props.cellSize
    const size = props.field.size
    const FieldSize = cellSize * size
    return (<g width={FieldSize} height={FieldSize}>
        <rect x={0} y={0} width={FieldSize} height={FieldSize} fill="#202f55"></rect>
        <text x={(3 + 1.5) * cellSize} y={(0 + 1) * (cellSize / 2)}
            textAnchor="middle" dominantBaseline="central" stroke="#e6edff">{props.field.calc_left()}</text>
        <text x={(5 + 1.5) * cellSize} y={(0 + 1) * (cellSize / 2)}
            textAnchor="middle" dominantBaseline="central" stroke="#e6edff">{props.field.calc_right()}</text>
        <text x={(0 + 0.5) * (cellSize)} y={(3 - 0.5) * (cellSize)}
            textAnchor="middle" dominantBaseline="central" stroke="#e6edff">{props.field.calc_top()}</text>
        <text x={(0 + 0.5) * (cellSize)} y={(5 - 0.5) * (cellSize)}
            textAnchor="middle" dominantBaseline="central" stroke="#e6edff">{props.field.calc_bottom()}</text>
        {
            props.field.valid() ?
                <text x={(0 + 0.5) * (cellSize)} y={(0 + 0.5) * (cellSize)}>CLEAR</text> : <></>
        }
    </g>)
}