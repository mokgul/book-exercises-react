import * as React from "react";

type Status = 'info' | 'warning' | 'error';

type NotificationProps = {
    text: string;
    status: Status;
}

export default function TaskConditionalRenderingSwitch() {
    const notifications: NotificationProps[] = [
        {text: 'this is an info notification', status: 'info'},
        {text: 'this is a warning notification', status: 'warning'},
        {text: 'this is an error notification', status: 'error'},
    ]
    return (
        <div>
            <ul>
                {notifications.map( notification => (
                    <li key={notification.text}>
                        <Notification text={notification.text} status={notification.status} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Notification = ({text, status}: NotificationProps) => {
    switch (status) {
        case 'info':
            return <Info text={text}/>;
        case 'warning':
            return <Warning text={text}/>;
        case 'error':
            return <Error text={text}/>;
        default:
            return null;
    }
}

const Info = ({ text }: { text: string }) => (
    <div style={{ backgroundColor: '#e0f7fa', color: '#006064', padding: '8px', borderRadius: '4px' }}>
        ℹ️ {text}
    </div>
);

const Warning = ({ text }: { text: string }) => (
    <div style={{ backgroundColor: '#fff3e0', color: '#e65100', padding: '8px', borderRadius: '4px' }}>
        ⚠️ {text}
    </div>
);

const Error = ({ text }: { text: string }) => (
    <div style={{ backgroundColor: '#ffebee', color: '#b71c1c', padding: '8px', borderRadius: '4px' }}>
        ❌ {text}
    </div>
);