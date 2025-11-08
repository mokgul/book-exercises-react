import * as React from 'react';

export default function TaskButton() {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Open</Button>
            <Button onClick={handleClose}>Close</Button>

            {isOpen && <div>Content</div>}
        </div>
    );
};

const Button = ({ type = 'button', onClick, children, ...rest }) => {
    return (
        <button type={type} onClick={onClick} {...rest}>
            {children}
        </button>
    );
};