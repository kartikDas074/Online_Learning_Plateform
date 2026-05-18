"use client"
import React from 'react';
import { toast } from 'react-toastify';

const EnroolButton = ({title,name}) => {
    return (
        <div>
            <button onClick={()=>{toast.success(`You enroll in '${title} ' by ${name} . Good Luck for your success`)}} className="btn btn-primary w-full rounded-xl text-white font-semibold shadow-sm normal-case">
                                Enroll in Course
                            </button>
        </div>
    );
};

export default EnroolButton;