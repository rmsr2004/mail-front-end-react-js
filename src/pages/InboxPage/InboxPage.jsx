import "./InboxPage.css";
import { getEmails } from "../../services/emailServices";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";

const InboxPage = () => {
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const emailData = await getEmails();
                setEmails(emailData.results);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmails();
    }, []);

    return (
        <div className="inbox-page">
            <Header />

            <div className="emails-card">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    emails.length > 0 ? (
                        <div className="email-list">
                            {emails.map((email, index) => (
                                <div key={index} className="email-card">
                                    <h2 className="email-subject">{email.subject}</h2>
                                    <p className="email-sender">From: {email.sender}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No emails found</p>
                    )
                )}
            </div>
        </div>
    );
}

export default InboxPage;
