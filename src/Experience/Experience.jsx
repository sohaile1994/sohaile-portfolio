// Experience.js
import React from 'react';
import Section from '../components/Section';
import './Experience.css';

const experienceList = [
    {
        title: "Web Development (Free Lance)",
        dateStarted: "2023",
        dateStopped: "Current",
        role: [
            "Define a problem or feature",
            "Make a Wireframe and plan how to build",
            "Write clean and maintainable code",
            "Build with responsive design in mind",
            "Conduct tests for all features",
            "Troubleshoot when something is not working properly ",
            "Optimize website performance",
            "Polish",
        ],
    },
    {
        title: "CTE Teacher (Computer Science)",
        dateStarted: "2023",
        dateStopped: "Current",
        role: [
            "Learn deeper understanding of programming concepts",
            "Define a project that will solve a problem",
            "Write clear, step-by-step instructions",
            "Manage classroom expectations and group work",
            "Maintain a schedule to ensure all tasks are completed on time",
            "Review students' work and provide feedback",
        ],
    },
    {
        title: "Game Development (Solo Developer)",
        dateStarted: "2019",
        dateStopped: "2023",
        role: [
            "Define game concept",
            "Prototype main concepts and features",
            "Narrow down the essence of the mechanics",
            "Define your audience",
            "Develop game mechanics using C# in Unity",
            "Manage events and gameplay flow",
            "Design animations and user interfaces",
            "Test, debug, and optimize",
            "Polish gameplay for better user experience",
        ],
    },
];

const Experience = () => {
    return (
        <Section id="experience">
            <h2 className="experience-title">Experience</h2>
            <ul className="experience-list">
                {
                    experienceList.map((experience, index) => {
                        return (
                            <li key={index} className="experience-item">
                                <div className="experience-header">
                                    <h3 className="experience-title">{experience.title}</h3>
                                    <span className="experience-dates">
                                        {experience.dateStarted} - {experience.dateStopped}
                                    </span>
                                </div>
                                <ul className="experience-roles">
                                    {
                                        experience.role.map((role, index) => {
                                            return <li key={index} className="experience-role">{role}</li>
                                        })
                                    }
                                </ul>
                            </li>
                        );
                    })
                }
            </ul>
        </Section>
    );
};

export default Experience;