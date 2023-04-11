import Image from "next/image";
import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    onClose: () => void;
    open: boolean;
}

function Popup({ children, className, onClose, open }: Props) {
    const [isClosing, setIsClosing] = React.useState(false);

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        }else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    }

    const onSwipeStart = React.useRef(0);
    const onSwipe = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches.length === 1) {
            onSwipeStart.current = e.touches[0].clientY;
        }else {
            onSwipeStart.current = 0;
        }
    }

    const onSwipeEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.changedTouches.length === 1) {
            const diff = e.changedTouches[0].clientY - onSwipeStart.current;
            if (diff > 50) {
                handleClose();
            }
        }
    }

    const checkOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    }

    return (
        <div className={`flex justify-center items-end fixed top-0 left-0 w-full h-full bg-opacity-50 z-50 ${open ? 'opacity-100 backdrop-brightness-50' : 'opacity-0 pointer-events-none'} ${isClosing ? 'pointer-events-none' : ''}`} onClick={checkOutsideClick}>

            <div className={`bg-popup border-t rounded-t-3xl p-4 ${className} min-w-0 w-full h-popup relative border-gray-200 dark:border-gray-800 ${open ? 'animate-fade-in-from-bottom' : ''} ${isClosing ? 'animate-fade-out-to-bottom' : ''}`} onTouchStart={onSwipe} onTouchEnd={onSwipeEnd}>
                <span className={`absolute -top-2.5 w-10 h-0.5 bg-gray-300 dark:bg-gray-500 rounded-full left-1/2 transform -translate-x-1/2`} />
                {children}
            </div>
        </div>
    );
}

export default Popup;
