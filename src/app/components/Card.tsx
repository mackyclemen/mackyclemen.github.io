interface CardProps {
    className?: string,
    children?: React.ReactNode
}

export default function Card(props: CardProps) {
    return (
        <div className={`card ${props.className}`}>
            {props.children}
        </div>
    )
}