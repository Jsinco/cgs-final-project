import { useEffect, useRef } from "react";

const useGradientEffect = () => {
    const mousePositionRef = useRef({ x: 0, y: 0 });

    const updateGradientPosition = (offsetX: number, offsetY: number) => {
        const center = Math.round(offsetX + offsetY);
        const direction = `-${center}deg`;
        document.documentElement.style.setProperty("--gradient-direction", direction);
    };

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mousePositionRef.current = { x: event.clientX, y: event.clientY };

            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const offsetX = (mousePositionRef.current.x / screenWidth) * 100;
            const offsetY = (mousePositionRef.current.y / screenHeight) * 100;

            updateGradientPosition(offsetX, offsetY);
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);
};

export default useGradientEffect;