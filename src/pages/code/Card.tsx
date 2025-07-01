import React, { useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import './Card.css';

export default function Card() {
    const [isDragging, setIsDragging] = useState(false);
    const x = useSpring(0, { stiffness: 500, damping: 30 });
    const y = useSpring(0, { stiffness: 500, damping: 30 });

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
                x.set(0);
                y.set(0);
            }}
        >
            <div className="card-content">
                <h1>Card</h1>
            </div>
        </motion.div>
    );
}