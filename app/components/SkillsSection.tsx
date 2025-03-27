'use client';
import {useState } from 'react';

export default function SkillsSection() {
    const [hoveredSkill, setHoveredSkill] = useState(null)

    const skills = [
        { name: 'Python', img: '/images/SkillsSectionIMG' },
        { name: 'Java', img: '/images/SkillsSectionIMG' },
        { name: 'C#', img: '/images/SkillsSectionIMG' },
        { name: 'SQL', img: '/images/SkillsSectionIMG' },
        { name: 'Typescript', img: '/images/SkillsSectionIMG' },
    ]
}