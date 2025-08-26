const HEAD = (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        border: '5px solid rgba(255,255,255,0.8)',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(4px)',
        position: 'absolute',
        top: '50px',
        right: '-30px',
    }} 
    />
)

const BODY = (
    <div style={{
        width: '10px',
        height: '100px',
        background: 'rgba(255,255,255,0.8)',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(255,255,255,0.5)',
        position: 'absolute',
        top: '120px',
        right: '0px',
    }} 
    />
)

const RIGHT_ARM = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'rgba(255,255,255,0.8)',
        borderRadius: '5px',
        boxShadow: '0 0 8px rgba(255,255,255,0.5)',
        position: 'absolute',
        top: '150px',
        right: '-100px',
        transform: 'rotate(-30deg)',
        transformOrigin: 'left bottom',
    }} 
    />
)

const LEFT_ARM = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'rgba(255,255,255,0.8)',
        borderRadius: '5px',
        boxShadow: '0 0 8px rgba(255,255,255,0.5)',
        position: 'absolute',
        top: '150px',
        right: '10px',
        transform: 'rotate(30deg)',
        transformOrigin: 'right bottom',
    }} 
    />
)

const RIGHT_LEG = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'rgba(255,255,255,0.8)',
        borderRadius: '5px',
        boxShadow: '0 0 8px rgba(255,255,255,0.5)',
        position: 'absolute',
        top: '210px',
        right: '-90px',
        transform: 'rotate(60deg)',
        transformOrigin: 'left bottom',
    }} 
    />
)

const LEFT_LEG = (
    <div style={{
        width: '100px',
        height: '10px',
        background: 'rgba(255,255,255,0.8)',
        borderRadius: '5px',
        boxShadow: '0 0 8px rgba(255,255,255,0.5)',
        position: 'absolute',
        top: '210px',
        right: 0,
        transform: 'rotate(-60deg)',
        transformOrigin: 'right bottom',
    }} 
    />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number 
}

export function HangmanDrawing({ numberOfGuesses } : HangmanDrawingProps) {
    return (
        <div style={{ 
            position: 'relative', 
            width: '300px',
            height: '500px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 30px rgba(0,0,0,0.1)',
            padding: '20px',
        }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            
            <div style={{ 
                height: '50px', 
                width: '10px', 
                background: 'rgba(255,255,255,0.8)', 
                position: 'absolute',
                top: 0,
                right: 0,
                borderRadius: '5px',
            }} 
            />
            <div style={{ 
                height: '10px', 
                width: '200px', 
                background: 'rgba(255,255,255,0.8)', 
                marginLeft: '120px',
                borderRadius: '5px',
            }} 
            />
            <div style={{ 
                height: '400px', 
                width: '10px', 
                marginLeft: '120px',
                background: 'rgba(255,255,255,0.8)',
                borderRadius: '5px',
            }} 
            />
            <div style={{ 
                height: '10px', 
                width: '250px', 
                background: 'rgba(255,255,255,0.8)',
                borderRadius: '5px',
            }} 
            />
        </div>
    )
}
