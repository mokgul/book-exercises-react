import * as React from "react";

export default function TaskMultipleConditionalRenderings() {
    const notification = [
        { text: 'Did you know? ...', status: 'info' },
        { text: 'Be careful here ...', status: 'warning' },
        { text: 'Something went wrong ...', status: 'error' },
    ];

    const randomIndex = Math.floor(Math.random() * notification.length);
    const text = notification[randomIndex].text;


    return (
        <div>
            {
                {
                    info: <Info text={text} />,
                    warning: <Warning text={text} />,
                    error: <Error text={text} />,
                }[notification[randomIndex].status]
            }
        </div>
    );
}

const Info = ({ text }) => (
    <div style={{ backgroundColor: '#e0f7fa', color: '#006064', padding: '8px', borderRadius: '4px' }}>
        ℹ️ {text}
    </div>
);

const Warning = ({ text }) => (
    <div style={{ backgroundColor: '#fff3e0', color: '#e65100', padding: '8px', borderRadius: '4px' }}>
        ⚠️ {text}
    </div>
);

const Error = ({ text }) => (
    <div style={{ backgroundColor: '#ffebee', color: '#b71c1c', padding: '8px', borderRadius: '4px' }}>
        ❌ {text}
    </div>
);