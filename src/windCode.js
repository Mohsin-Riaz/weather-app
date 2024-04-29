import {
    WiDirectionDown,
    WiDirectionDownLeft,
    WiDirectionDownRight,
    WiDirectionLeft,
    WiDirectionRight,
    WiDirectionUp,
    WiDirectionUpLeft,
    WiDirectionUpRight,
} from 'react-icons/wi';

const weatherCode = {
    N: <WiDirectionUp />,
    S: <WiDirectionDown />,
    W: <WiDirectionLeft />,
    E: <WiDirectionRight />,
    NE: <WiDirectionUpRight />,
    NW: <WiDirectionUpLeft />,
    SE: <WiDirectionDownRight />,
    SW: <WiDirectionDownLeft />,
};

export default weatherCode;
