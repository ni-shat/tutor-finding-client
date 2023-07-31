import React from 'react';
import TuitionForm from './TuitionForm';

const TeacherProfile = () => {
    return (
        <div className='mt-20 px-10 z-10'>
            <div>
                {/* steps */}
                <div className='rounded-xl w-full border shadow-2xl shadow-gray-300 bg-white'>
                    <ul className="steps w-full py-2">
                        <li className="step step-neutral">Tuition</li>
                        <li className="step">Education</li>
                        <li className="step">Personal</li>
                        <li className="step">Credential</li>
                    </ul>
                </div>

                {/* form */}
                <div>
                    <TuitionForm></TuitionForm>
                </div>
            </div>
        </div>
    );
};

export default TeacherProfile;