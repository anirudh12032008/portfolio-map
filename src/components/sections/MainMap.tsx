"use client";

import { useState } from "react";
import { useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const Nodes = [
    { id: 1,
        href: "/workshop",
        title: "Workshop",
        sub: "Builds and experiments",
        angle: -135,
        distance: 150,
    },
    { id: 2,
        href: "/community",
        title: "Community",
        sub: "Mentoring and events",
        angle: -45,
        distance: 150,

        },
    { id: 3,
        href: "/library",
        title: "Library",
        sub: "Research and Curiosity",
        angle: 135,
        distance: 150,
    },
    { id: 4,
        href:"/studio",
        title: "Studio",
        sub: "Art and Creativity",
        angle: 45,
        distance: 150,
    },
];
