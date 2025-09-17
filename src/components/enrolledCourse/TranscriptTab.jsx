import { CustomDownload } from '@/utils/IconProvider';
import React from 'react';

const TranscriptTab = ({ transcript }) => {
    return (
        <div className=''>
            {
                transcript?.map((item, index) => <div className='my-5'>
                    <p className='text-lg font-semibold' key={index}>{item?.title}</p>
                    <p className="text-sm xlg:text-lg text-big-text">
                        {item?.content}
                    </p>
                </div>)
            }
            <div className="flex justify-end ">
                <button className='bg-theme-primary/10 text-theme-primary py-3 px-5 rounded flex items-center gap-1'><CustomDownload /> Download PDF</button>
            </div>
        </div>
    );
};

export default TranscriptTab;