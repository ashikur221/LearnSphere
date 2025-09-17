import { CustomDownload, CustomDownloadWhite, CustomPDFIcon } from '@/utils/IconProvider';
import React from 'react';

const ResourceTab = ({ resources }) => {
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                resources?.map((item, index) =>
                    <div className='my-5 bg-theme-primary/10 p-5 rounded space-y-5' key={index}>
                        <p className='text-lg font-semibold text-theme-primary'>{item?.title}</p>
                        <p className="text-sm text-small-text">
                            {item?.content}
                        </p>
                        <p className="flex">
                            <CustomPDFIcon />
                            <span className='text-sm text-small-text'>{item?.pages} pages</span>
                        </p>
                        <button className='bg-theme-primary text-white py-3 px-5 rounded flex items-center gap-1'><CustomDownloadWhite /> Download PDF</button>
                    </div>)
            }
        </div>
    );
};

export default ResourceTab;