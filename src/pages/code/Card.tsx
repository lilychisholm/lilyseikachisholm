import React, { useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import './Card.css';

interface CardProps {
    children?: React.ReactNode;
}

export default function Card({ children }: CardProps) {
    const [isDragging, setIsDragging] = useState(false);
    const x = useSpring(10, { stiffness: 500, damping: 30 });
    const y = useSpring(10, { stiffness: 500, damping: 30 });

    return (
        <motion.div
            className="card"
            drag
            dragMomentum={false}
            style={{
                x,
                y,
                cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => {
                setIsDragging(false);
                x.set(10);
                y.set(10);
            }}
        >
            {children}
        </motion.div>
    );
}