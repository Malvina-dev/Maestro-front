import { useEffect, useState } from "react";
import { findAll } from "../../api/apiMessageContact";
import "./ContactRequestList.scss";

function ContactRequestList() {
    const [requests, setRequests] = useState([]);

    async function getAllRequestList() {
        const allRequestList = await findAll();
        setRequests(allRequestList);
    }

    useEffect(() => {
        getAllRequestList();
    }, []);

    return (
        <div className="contact-requests">
            <h3 className="contact-title">Demandes de Contact</h3>
            {requests.length === 0 ? (
                <p className="no-requests">Aucun message pour le moment.</p>
            ) : (
                requests.map((request) => (
                    <div key={request.id} className="request">
                        <h4>{request.mail}</h4>
                        <p>{request.message}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default ContactRequestList;
