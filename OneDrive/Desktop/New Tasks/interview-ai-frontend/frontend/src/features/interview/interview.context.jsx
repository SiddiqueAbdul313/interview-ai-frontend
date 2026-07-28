import { createContext, useState } from "react";

export const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
    // Original states
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState(null);
    const [reports, setReports] = useState([]);

    // ✅ Step 1 additions: FormDraft States
    const [jobDescription, setJobDescription] = useState("");
    const [selfDescription, setSelfDescription] = useState("");
    const [resumeFile, setResumeFile] = useState(null);
    const [resumeFileName, setResumeFileName] = useState("");

    // ✅ Step 2 additions: Helper functions
    const updateDraft = (field, value) => {
        switch(field) {
            case "jobDescription":
                setJobDescription(value);
                break;
            case "selfDescription":
                setSelfDescription(value);
                break;
            case "resumeFile":
                setResumeFile(value);
                break;
            case "resumeFileName":
                setResumeFileName(value);
                break;
        }
    };

    const clearDraft = () => {
        setJobDescription("");
        setSelfDescription("");
        setResumeFile(null);
        setResumeFileName("");
    };

    return (
        <InterviewContext.Provider value={{ 
            // Originals
            loading, setLoading,
            report, setReport,
            reports, setReports,
            
            // ✅ Step 3: New stuff exposed
            jobDescription,
            selfDescription,
            resumeFile,
            resumeFileName,
            updateDraft,
            clearDraft
        }}>
            {children}
        </InterviewContext.Provider>
    );
};