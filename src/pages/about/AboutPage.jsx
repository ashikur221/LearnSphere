import AboutBanner from '@/components/about/AboutBanner';
import CareerSection from '@/components/about/CareerSection';
import CommitmentSection from '@/components/about/CommitmentSection';
import ProgramSection from '@/components/about/ProgramSection';
import QuestionSection from '@/components/about/QuestionSection';
import TrainingSection from '@/components/about/TrainingSection';
import NewsLetter from '@/components/home/NewsLetter';
import React from 'react';
import { ScrollRestoration } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <ScrollRestoration />
            <AboutBanner />
            <ProgramSection />
            <TrainingSection />
            <CareerSection />
            <CommitmentSection />
            <QuestionSection />
            <NewsLetter />
        </div>
    );
};

export default AboutPage;