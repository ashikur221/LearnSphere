import QuestionSection from '@/components/about/QuestionSection';
import ContactBanner from '@/components/contact/ContactBanner';
import ContactForm from '@/components/contact/ContactForm';
import NewsLetter from '@/components/home/NewsLetter';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <ContactBanner />
            <ContactForm />
            <QuestionSection />
            <NewsLetter />
        </div>
    );
};

export default ContactPage;